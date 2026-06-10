/**
 * LLM Node Builder - Node-RED Node
 * 
 * Connects to various AI services (ChatGPT, Gemini, DeepSeek, etc.)
 * Generates Node-RED flows from prompts and auto-imports/deploys them.
 */

module.exports = function (RED) {

  // ─── Credential Node ──────────────────────────────────────────────────────
  function LLMFlowBuilderCredentials(config) {
    RED.nodes.createNode(this, config);
    this.provider   = config.provider;
    this.apiUrl     = config.apiUrl;
    this.modelName  = config.modelName;
    // apiKey stored in credentials (encrypted by Node-RED)
  }
  RED.nodes.registerType('llm-flow-builder-config', LLMFlowBuilderCredentials, {
    credentials: {
      apiKey: { type: 'password' }
    }
  });

  // ─── Group Wrapping Helper ────────────────────────────────────────────────
  function wrapInGroup(flowArray) {
    const tabNode = flowArray.find(n => n.type === 'tab');
    const members = flowArray.filter(n => n.type !== 'tab' && n.type !== 'group');
    if (members.length === 0) return flowArray;

    const gid = require('crypto').randomBytes(8).toString('hex');
    const pad = 40;
    const xs = members.map(n => n.x || 100);
    const ys = members.map(n => n.y || 100);
    const gx = Math.min(...xs) - pad;
    const gy = Math.min(...ys) - pad;
    const gw = Math.max(...xs) - gx + 160 + pad;
    const gh = Math.max(...ys) - gy + 60 + pad;

    const group = {
      id: gid, type: 'group',
      z: tabNode ? tabNode.id : '',
      name: 'Created By LLM Flow Builder',
      style: {
        stroke: '#3b82f6', 'stroke-opacity': '1',
        fill: '#eff6ff', 'fill-opacity': '0.5',
        label: true, 'label-position': 'nw', color: '#1e40af'
      },
      nodes: members.map(n => n.id),
      x: gx, y: gy, w: gw, h: gh
    };
    members.forEach(n => { n.g = gid; });
    return tabNode ? [tabNode, group, ...members] : [group, ...members];
  }

  // ─── HTTP Endpoint: Generate from editor ─────────────────────────────────
  const bodyParser = require('body-parser');
  RED.httpAdmin.post(
    '/llm-flow-builder/generate',
    RED.auth.needsPermission('llm-flow-builder.write'),
    bodyParser.json(),
    async function (req, res) {
      const node = RED.nodes.getNode(req.body && req.body.nodeId);
      if (!node || typeof node._llmGenerate !== 'function') {
        return res.status(404).json({ success: false, error: 'Node bulunamadı — önce Deploy edin.' });
      }
      try {
        const result = await node._llmGenerate(req.body.prompt || '');
        res.json(result);
      } catch (err) {
        res.status(500).json({ success: false, error: err.message });
      }
    }
  );

  // ─── Main Node ────────────────────────────────────────────────────────────
  function LLMFlowBuilder(config) {
    RED.nodes.createNode(this, config);

    const node        = this;
    const configNode  = RED.nodes.getNode(config.llmConfig);

    node.autoImport  = config.autoImport !== false;
    node.autoDeploy  = config.autoDeploy  !== false;
    node.flowTab     = config.flowTab     || '';
    node.nrAdminUser = (node.credentials && node.credentials.nrAdminUser) || '';
    node.nrAdminPass = (node.credentials && node.credentials.nrAdminPass) || '';

    const fs   = require('fs');
    const path = require('path');

    // ── Read system prompt from systemprompt.txt (node klasöründen) ─────────
    function getEffectiveSystemPrompt() {
      const defaultFile = path.join(__dirname, 'systemprompt.txt');
      try {
        if (!fs.existsSync(defaultFile)) return '';
        const content = fs.readFileSync(defaultFile, 'utf8').trim();
        node.log(`[LLM Node Builder] Sistem prompt yüklendi: ${defaultFile} (${content.length} karakter)`);
        return content;
      } catch (err) {
        node.warn(`[LLM Node Builder] systemprompt.txt okuma hatası: ${err.message}`);
        return '';
      }
    }

    // ── Build the universal base system prompt ────────────────────────────
    function buildSystemPrompt() {
      const fromFile = getEffectiveSystemPrompt();
      if (fromFile) return fromFile;

      // Fallback — only used if systemprompt.txt is missing
      return `You are an expert Node-RED flow architect.
Your ONLY job is to return a valid Node-RED flow as a JSON array.
Respond with ONLY a raw JSON array — no markdown, no explanation, no code fences.
Every node must have: id, type, x, y, wires, z (tab id).
Use a tab node (type:"tab") as the first element; assign its id to every node's "z" field.`;
    }

    // Status helpers
    const status = {
      idle    : () => node.status({ fill:'grey',  shape:'dot', text:'Bekliyor' }),
      working : (t) => node.status({ fill:'blue',  shape:'ring', text: t || 'Çalışıyor...' }),
      ok      : (t) => node.status({ fill:'green', shape:'dot', text: t || 'Hazır' }),
      error   : (t) => node.status({ fill:'red',   shape:'dot', text: t || 'Hata' }),
    };

    status.idle();

    // ── Retrieve Node-RED admin token ─────────────────────────────────────
    async function getNRAdminToken() {
      const settings  = RED.settings;
      const adminAuth = settings.adminAuth;

      // No auth configured on Node-RED → proceed without token
      if (!adminAuth) return null;

      const username = node.nrAdminUser;
      const password = node.nrAdminPass;

      if (!username || !password) {
        throw new Error(
          'Node-RED admin kimlik bilgileri tanımlı değil. ' +
          'LLM Flow Builder node ayarlarında "NR Admin Kullanıcı" ve "NR Admin Şifre" alanlarını doldurun.'
        );
      }

      try {
        const http = require('http');
        const qs   = require('querystring');

        const body = qs.stringify({
          client_id  : 'node-red-admin',
          grant_type : 'password',
          scope      : '*',
          username,
          password
        });

        return new Promise((resolve, reject) => {
          const req = http.request({
            host   : '127.0.0.1',
            port   : settings.uiPort || 1880,
            path   : '/auth/token',
            method : 'POST',
            headers: {
              'Content-Type'  : 'application/x-www-form-urlencoded',
              'Content-Length': Buffer.byteLength(body)
            }
          }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
              try {
                const parsed = JSON.parse(data);
                if (parsed.access_token) {
                  resolve(parsed.access_token);
                } else {
                  reject(new Error(
                    'Admin token alınamadı — kullanıcı adı veya şifre hatalı. ' +
                    '(' + (parsed.error_description || parsed.error || 'bilinmeyen hata') + ')'
                  ));
                }
              } catch (e) {
                reject(new Error('Token yanıtı parse edilemedi: ' + e.message));
              }
            });
          });
          req.on('error', reject);
          req.write(body);
          req.end();
        });
      } catch (e) {
        throw e;
      }
    }

    // ── Import flow into Node-RED via Admin API ────────────────────────────
    async function importFlow(flowArray) {
        const tabNode = flowArray.find(n => n.type === 'tab');
        if (!tabNode) throw new Error('AI akışı bir "tab" node içermiyor.');

        const port = RED.settings.uiPort || 1880;
        const token = await getNRAdminToken();

        // Diğer node'lar (tab hariç)
        const nodes = flowArray.filter(n => n.type !== 'tab');

        const flowPayload = {
            label: tabNode.label || 'AI Generated Flow',
            nodes: nodes,
            configs: []   // config node'lar varsa buraya konmalı
        };

        // Aynı label'a sahip flow varsa sil (önceki versiyon)
        const existing = await apiCall('GET', '/flows', null, port, token)
            .then(data => JSON.parse(data))
            .then(parsed => parsed.flows || parsed || []);

        const existingTab = existing.find(n => n.type === 'tab' && n.label === flowPayload.label);
        if (existingTab) {
            try {
                await apiCall('DELETE', `/flow/${existingTab.id}`, null, port, token);
            } catch (e) {
                node.warn('Mevcut flow silinirken hata: ' + e.message);
            }
        }

        // DOĞRU FORMAT: POST /flow
        await apiCall('POST', '/flow', JSON.stringify(flowPayload), port, token);
        
        node.log(`Flow import edildi: ${flowPayload.label}`);
        return flowPayload.label;
    }

    // ── Deploy Node-RED ────────────────────────────────────────────────────
    async function deployFlows() {
        const port = RED.settings.uiPort || 1880;
        const token = await getNRAdminToken();

        // Mevcut flow'ları al (v2 formatı için rev bilgisi de önemli)
        let current = await apiCall('GET', '/flows', null, port, token);
        let parsed = JSON.parse(current);

        // v2 API kullanıyorsak {rev, flows} formatı bekler
        const body = {
            rev: parsed.rev || undefined,   // force deploy için undefined bırak
            flows: parsed.flows || parsed
        };

        await apiCall('POST', '/flows', 
            JSON.stringify(body), 
            port, 
            token, 
            'application/json', 
            { 'Node-RED-Deployment-Type': 'full' }
        );

        node.log('Full deploy tamamlandı.');
    }

    // ── Generic HTTP helper (uses core http module — no extra deps) ────────
    function apiCall(method, path, body, port, token, contentType, extraHeaders) {
      return new Promise((resolve, reject) => {
        const http    = require('http');
        const ct      = contentType || (body ? 'application/json' : undefined);
        const headers = { 'Node-RED-API-Version': 'v2', ...(extraHeaders || {}) };
        if (ct)    headers['Content-Type']   = ct;
        if (token) headers['Authorization']  = 'Bearer ' + token;
        if (body)  headers['Content-Length'] = Buffer.byteLength(body);

        const req = http.request({
          host: '127.0.0.1',
          port,
          path: path,
          method,
          headers
        }, res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => {
            if (res.statusCode >= 400) {
              reject(new Error(`API ${method} ${path} → ${res.statusCode}: ${data}`));
            } else {
              resolve(data);
            }
          });
        });
        req.on('error', reject);
        if (body) req.write(body);
        req.end();
      });
    }

    // ── Call LLM provider ──────────────────────────────────────────────────
    async function callLLM(prompt) {
      if (!configNode) throw new Error('Lütfen bir LLM Config node seçin.');

      const apiKey   = configNode.credentials && configNode.credentials.apiKey;
      const provider = configNode.provider;
      const apiUrl   = configNode.apiUrl;
      const model    = configNode.modelName;

      if (!apiKey)  throw new Error('API anahtarı tanımlı değil.');
      if (!apiUrl)  throw new Error('API URL tanımlı değil.');
      if (!provider) throw new Error('Sağlayıcı seçilmemiş.');

      node.log(`[LLM] provider=${provider} model=${model} keyLen=${apiKey.length} keyStart=${apiKey.slice(0,4)}`);

      // Her çağrıda güncel sistem promptunu oluştur (dosya değişmiş olabilir)
      const SYSTEM_PROMPT = buildSystemPrompt();

      const http     = require('https');
      let   finalUrl = new URL(apiUrl);

      let requestBody;
      let authHeader;
      let extraHeaders = {};

      // ── Build provider-specific request ────────────────────────────────
      if (provider === 'openai' || provider === 'deepseek' || provider === 'groq' || provider === 'mistral' || provider === 'custom') {
        // OpenAI-compatible format
        requestBody = JSON.stringify({
          model   : model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user',   content: prompt }
          ],
          temperature: 0.2,
          max_tokens : 8000
        });
        authHeader = 'Bearer ' + apiKey;
      } else if (provider === 'gemini') {
        // Google Gemini — stable v1 endpoint, x-goog-api-key header
        finalUrl = new URL(`https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`);
        extraHeaders['x-goog-api-key'] = apiKey;
        requestBody = JSON.stringify({
          contents: [
            {
              parts: [
                { text: SYSTEM_PROMPT + '\n\nUser request: ' + prompt }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 8000
          }
        });
        authHeader = null;
      } else if (provider === 'anthropic') {
        // Anthropic Claude
        requestBody = JSON.stringify({
          model      : model,
          max_tokens : 8000,
          system     : SYSTEM_PROMPT,
          messages   : [{ role: 'user', content: prompt }]
        });
        extraHeaders['x-api-key'] = apiKey;
        extraHeaders['anthropic-version'] = '2023-06-01';
        authHeader = null;
      } else {
        throw new Error(`Bilinmeyen sağlayıcı: ${provider}`);
      }

      const headers = {
        'Content-Type'  : 'application/json',
        'Content-Length': Buffer.byteLength(requestBody),
        ...extraHeaders
      };
      if (authHeader) headers['Authorization'] = authHeader;

      return new Promise((resolve, reject) => {
        const req = http.request({
          hostname: finalUrl.hostname,
          port    : finalUrl.port || 443,
          path    : finalUrl.pathname + finalUrl.search,
          method  : 'POST',
          headers
        }, res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => {
            try {
              const json = JSON.parse(data);
              let content;

              if (provider === 'gemini') {
                content = json?.candidates?.[0]?.content?.parts?.[0]?.text;
              } else if (provider === 'anthropic') {
                content = json?.content?.[0]?.text;
              } else {
                // OpenAI-compatible
                content = json?.choices?.[0]?.message?.content;
              }

              if (!content) {
                const errMsg = json?.error?.message || JSON.stringify(json);
                reject(new Error('LLM yanıt vermedi: ' + errMsg));
              } else {
                resolve(content);
              }
            } catch (e) {
              reject(new Error('LLM yanıtı parse hatası: ' + e.message + '\nRaw: ' + data.slice(0, 500)));
            }
          });
        });
        req.on('error', reject);
        req.write(requestBody);
        req.end();
      });
    }

    // ── Extract JSON array from LLM response ──────────────────────────────
    function extractFlowJSON(rawText) {
      // Strip markdown code fences if present
      let text = rawText.trim();
      text = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();

      // Find first [ and last ]
      const start = text.indexOf('[');
      const end   = text.lastIndexOf(']');
      if (start === -1 || end === -1) throw new Error('LLM yanıtında JSON array bulunamadı.');

      const jsonStr = text.slice(start, end + 1);
      const parsed  = JSON.parse(jsonStr);
      if (!Array.isArray(parsed)) throw new Error('LLM yanıtı bir dizi değil.');
      return parsed;
    }

    // ── Main message handler ───────────────────────────────────────────────
    node.on('input', async function (msg, send, done) {
      const prompt = msg.payload || msg.prompt || '';

      if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
        node.error('msg.payload boş — bir prompt gönderin.', msg);
        status.error('Prompt boş');
        done();
        return;
      }

      try {
        // 1. Call LLM
        status.working('AI ile iletişim kuruluyor...');
        const rawResponse = await callLLM(prompt.trim());
        msg.llmRawResponse = rawResponse;

        // 2. Parse flow JSON
        status.working('Flow JSON ayrıştırılıyor...');
        const flowArray = extractFlowJSON(rawResponse);
        const grouped   = wrapInGroup(flowArray);
        msg.generatedFlow = grouped;

        // 3. Import into Node-RED (optional)
        if (node.autoImport) {
          try {
            status.working('Flow import ediliyor...');
            const tabLabel = await importFlow(grouped);
            msg.importedTab = tabLabel;

            // 4. Deploy (optional)
            if (node.autoDeploy) {
              status.working('Deploy ediliyor...');
              await deployFlows();
              msg.deployed = true;
            }
            msg.importError = null;
          } catch (importErr) {
            msg.importError = importErr.message;
            node.warn('Import hatası (flow JSON çıkışa gönderildi): ' + importErr.message);
          }
        }

        status.ok(msg.importError ? 'Import hatası - JSON çıkışta ✓' : (node.autoImport ? (node.autoDeploy ? 'Deploy tamam ✓' : 'Import tamam ✓') : 'Flow üretildi ✓'));
        msg.payload = {
          success   : !msg.importError,
          flow      : grouped,
          nodeCount : grouped.length,
          imported  : !msg.importError && node.autoImport,
          deployed  : !msg.importError && node.autoDeploy && node.autoImport,
          importError: msg.importError || null
        };
        send(msg);
        done();

      } catch (err) {
        status.error(err.message.slice(0, 50));
        node.error('LLM Node Builder hatası: ' + err.message, msg);
        msg.payload = { success: false, error: err.message };
        send(msg);
        done(err);
      }
    });

    // ── Generate from editor (called by HTTP endpoint) ────────────────────
    node._llmGenerate = async function (prompt) {
      if (!prompt || !prompt.trim()) throw new Error('Prompt boş olamaz.');
      status.working('AI ile iletişim kuruluyor...');
      const rawResponse = await callLLM(prompt.trim());
      status.working('Flow JSON ayrıştırılıyor...');
      const flowArray = extractFlowJSON(rawResponse);
      const grouped   = wrapInGroup(flowArray);
      let imported = false, deployed = false, importError = null;
      if (node.autoImport) {
        try {
          status.working('Import ediliyor...');
          await importFlow(grouped);
          imported = true;
          if (node.autoDeploy) {
            status.working('Deploy ediliyor...');
            await deployFlows();
            deployed = true;
          }
        } catch (e) { importError = e.message; }
      }
      status.ok(importError ? 'Import hatası' : imported ? (deployed ? 'Deploy tamam ✓' : 'Import tamam ✓') : 'Flow üretildi ✓');
      return { success: !importError, flow: grouped, nodeCount: grouped.length, imported, deployed, importError };
    };

    node.on('close', function () {
      status.idle();
    });
  }

  RED.nodes.registerType('llm-flow-builder', LLMFlowBuilder, {
    credentials: {
      nrAdminUser: { type: 'text'     },
      nrAdminPass: { type: 'password' }
    }
  });
};