---
hide:
  - navigation
---

# node-red-trexmes-service

<div class="node-header">
  <img src="assets/img/trex.png" alt="trex icon" style="width: 48px; height: 48px; margin-right: 1rem;">
  <div style="flex: 1;">
    <h2 style="margin: 0;">trexMes Edge için Node-RED Servis Paketi</h2>
    <p style="margin: 0.25rem 0 0; opacity: 0.85;">
      Versiyon <strong>1.6.2</strong> · GPL-3.0-or-later · Asaf Yurdakul
    </p>
  </div>
</div>

`node-red-trexmes-service`, **trexMes Edge** panel yazılımında çalışan Node-RED konnektör eklentisi ile haberleşen, gerçek zamanlı **olay (event)** yakalama, **form tasarımı** ve **kontrol yönetimi** sağlayan bir Node-RED paketidir.

!!! info "Bu paket ne işe yarar?"
    Üretim sahasındaki **150-200 trexMes panelinden** gelen olay tetikleyicilerini tek bir Node-RED sunucusunda toplar, gerçek zamanlı **WinForm tasarımları** yapabilmenizi sağlar ve panel üzerindeki kontrolleri Node-RED akışlarınızdan yönetmenize olanak tanır.

## Hızlı Bakış

<div class="tx-card-grid">
  <a class="tx-card" href="baslangic/kurulum/">
    <h3>📦 Kurulum</h3>
    <p>Paketi Node-RED'e nasıl kuracağınızı ve ön gereklilikleri öğrenin.</p>
  </a>
  <a class="tx-card" href="baslangic/hizli-baslangic/">
    <h3>🚀 Hızlı Başlangıç</h3>
    <p>İlk akışınızı 5 dakikada ayağa kaldırın.</p>
  </a>
  <a class="tx-card" href="baslangic/mimari/">
    <h3>🏗️ Mimari</h3>
    <p>Paket nasıl çalışır, hangi node hangi rolü üstlenir?</p>
  </a>
  <a class="tx-card" href="nodlar/">
    <h3>📚 Node Referansı</h3>
    <p>22 node için detaylı özellik ve kullanım dokümanları.</p>
  </a>
  <a class="tx-card" href="ornekler/">
    <h3>💡 Örnekler</h3>
    <p>Hazır akış örnekleri ve kullanım senaryoları.</p>
  </a>
  <a class="tx-card" href="sss/">
    <h3>❓ SSS</h3>
    <p>Sıkça sorulan sorular ve sorun giderme.</p>
  </a>
</div>

## Nodlara Genel Bakış

Paket toplam **22 Node-RED node tipi** kaydeder ve bunları **5 mantıksal gruba** ayırır:

### 🟢 Çekirdek Nodlar (2)
Her trexMes projesinde mutlaka bulunması gereken altyapı node'ları.

<span class="node-preview green-dark">trex Subscriber</span>
<span class="node-preview green-light">Responser</span>

### 🔔 Olay (Event) Nodları (8)
trexMes panelinden gönderilen olay tipine göre **trigger** sağlayan node'lar. `Handle Setter`, `IsHandled` özelliği olan Event node'larını içeren akışlarda zincirin **son trexMes node'u** olarak kullanılır.

<span class="node-preview green-light">Business Events</span>
<span class="node-preview green-light">System Events</span>
<span class="node-preview green-light">Communication Events</span>
<span class="node-preview green-light">Display Events</span>
<span class="node-preview green-light">Form Events</span>
<span class="node-preview green-light">Display Methods</span>
<span class="node-preview green-light">Method Returns</span>
<span class="node-preview green-light">Handle Setter</span>

### 🧩 Form Nodları (5)
Custom form tasarımı, kontrol bağlama ve özellik yönetimi.

<span class="node-preview green-light">Custom Form</span>
<span class="node-preview green-light">Form Bind Controls</span>
<span class="node-preview green-light">Control Properties</span>
<span class="node-preview green-light">Button Configurator</span>
<span class="node-preview green-light">Main Form Action</span>

### ⚙️ İşlem Nodları (3)
Method çağırma, process tetikleme ve script çalıştırma.

<span class="node-preview green-light">Method Invoker</span>
<span class="node-preview green-light">Execute Process</span>
<span class="node-preview green-light">Execute Script</span>

### 🤖 Yapay Zekâ (1)
LLM tabanlı otomatik akış üretici.

<span class="node-preview green-bright">LLM Flow Builder</span>

## Tipik Bir Akışın Görünümü

`trex Subscriber` akıştan **bağımsız** durur; diğer node'ları tetiklemez. Olay akışları doğrudan Event node'larından başlar.

```mermaid
flowchart LR
    subgraph Kayıt["Kayıt (bağımsız)"]
        A[trex Subscriber]
        DBG[debug\nopsiyonel]
        A --> DBG
    end

    subgraph Akis["Olay Akışı"]
        B[Business Events] --> C[Custom Form]
        C --> D[Form Bind Controls]
        D --> E[Responser]
    end

    style A fill:#58d68d,color:#000
    style DBG fill:#87ceeb,color:#000
    style B fill:#ccffcc,color:#000
    style C fill:#ccffcc,color:#000
    style D fill:#ccffcc,color:#000
    style E fill:#ccffcc,color:#000
```

!!! tip "Akış kuralı"
    Her trexMes projesinde **bir adet `trex Subscriber`** bulunmak zorundadır. Bu node bağımsız çalışır; çıkışına `debug` bağlanırsa bağlı trexEdge PC'lerin IP'lerini ve panele bildirilen event listesini görüntüleyebilirsiniz. Olay akışları **Event node'larından** başlar; `Responser` ile biter.

## Gereksinimler

| Bileşen | Minimum Sürüm |
|---|---|
| Node.js | 18.16+ |
| Node-RED | 3.0+ |
| trexMes Edge | Node-RED konnektör eklentisi etkin |

## Lisans & Yazar

Bu paket [**GPL-3.0-or-later**](https://www.gnu.org/licenses/gpl-3.0.html) lisansı altında dağıtılmaktadır.

Geliştirici: [Asaf Yurdakul](https://github.com/asafyurdakul) · [trex Digital Manufacturing](https://trex.com.tr)
