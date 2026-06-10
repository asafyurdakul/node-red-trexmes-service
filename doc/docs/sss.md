# Sıkça Sorulan Sorular (SSS)

## Kurulum & Bağlantı

### S: Paketi kurdum ama palette'te görünmüyor?

Node-RED'i yeniden başlatın. Eğer hâlâ görünmüyorsa:

```bash
cd ~/.node-red
npm list node-red-trexmes-service
```

ile paketin gerçekten yüklü olduğundan emin olun. Yoksa:

```bash
npm install node-red-trexmes-service
```

### S: `cookie@0.7.2 not found` hatası alıyorum

Node.js sürümünüz çok eski. **Node.js 18.16 veya üzeri** kullanın:

```bash
node --version  # v18.16.0+ olmalı
```

### S: `trex Subscriber` "Triggered" çıkmıyor

- trexMes Edge'de **Node-RED Connector** eklentisi etkin mi?
- Panel'in Node-RED IP/port ayarı doğru mu?
- Node-RED `httpNodeRoot` ayarı varsayılan (`/`) mu?
- Tarayıcıdan `http://<node-red-host>:1880/GetSubscribed` denenince cevap geliyor mu?

### S: Birden fazla `trex Subscriber` koyabilir miyim?

**Hayır.** Aynı Node-RED kurulumunda **yalnızca bir tane** olmalıdır. Birden fazla varsa HTTP path çakışması olur ve panel kayıt listesi karışır.

---

## Olay (Event) Sorunları

### S: Olay node'um trigger almıyor

Kontrol edin:

1. `trex Subscriber` deploy edildi mi? Triggered çıktı mı?
2. Event ismi panel tarafıyla **birebir** mi eşleşiyor (büyük/küçük harf!)?
3. Panel tarafında olay gerçekten tetikleniyor mu? (Panel log'una bakın)
4. Akışı deploy ettiniz mi?

### S: Aynı olayı birden fazla akışta yakalayabilir miyim?

**Yalnızca `Business Events` node'u ile mümkündür.** Diğer Event node türleri (`System Events`, `Form Events` vb.) aynı olay adıyla birden fazla kullanılamaz.

`Business Events`'te bu, `suffix` alanı aracılığıyla sağlanır. Aynı olayı yakalayacak her ek node'a benzersiz bir suffix değeri (`_2`, `_3` gibi) verilmesi yeterlidir:

| Node | `event` | `suffix` |
|---|---|---|
| 1. node | `OnPlanLoaded` | _(boş)_ |
| 2. node | `OnPlanLoaded` | `_2` |

Panel `OnPlanLoaded`'ı tetiklediğinde her iki node da devreye girer ve kendi akışını bağımsız olarak çalıştırır. Her akışın sonunda bir `Responser` bulunmalıdır; birden fazla dal tek bir `Responser`'a bağlanabilir.

### S: `ishandled` ne zaman `true`, ne zaman `false`?

- `true` → "Bu olayı **biz** işledik, panel kendi default handler'ını ÇALIŞTIRMASIN."
- `false` → "Panel kendi default handler'ını da çalıştırsın."

Akış ortasında **dinamik** karar verecekseniz [Handle Setter](nodlar/handle-setter.md) kullanın.

---

## Custom Form & Designer

### S: Custom Form Designer çalışmıyor

1. `settings.js` içinde `customFormDesignerPath` tanımlı mı?
2. Bu yoldaki .exe gerçekten var mı?
3. Node-RED'in bu dosyayı çalıştırma izni var mı?
4. Designer çıktısının yazılacağı `C:\temp\` klasörü erişilebilir mi?

```javascript
// settings.js içinde olmalı
functionGlobalContext: {
    customFormDesignerPath: "C:\\trex\\tools\\customFormDesigner.exe"
}
```

### S: Form panelde açılıyor ama alanlar boş

Yaygın nedenler:

1. `Form Bind Controls`'taki `props` listesindeki kontrol isimleri XML'deki ile **eşleşmiyor** (büyük/küçük harf!)
2. `data` ve `dataType` doğru veri kaynağını göstermiyor
3. `Form Bind Controls` akışta `Custom Form`'dan **sonra** geliyor mu? (Önce form, sonra bağlama!)

### S: Custom Form XML'imi nasıl versiyonlamalıyım?

`customformxml` alanını boş bırakıp `Form Design` config node kullanın. Tasarımlarınız flow JSON'una dahil olur ve Git'te değişiklikleri takip edebilirsiniz.

### S: `formainform: true` ne zaman kullanılır?

Modal dialog (ayrı pencere) yerine **panelin ana ekranı üzerinde** form basmak istiyorsanız. `formname` otomatik olarak `"AppForm"` olur.

---

## Property & Buton

### S: `Control Properties`'le butonu disable ettim ama hala basılabiliyor

- Property adını **PascalCase** ile yazdığınızdan emin olun: `Enabled` ≠ `enabled`
- `dataType: bool` seçtiniz mi?
- `d` alanına gerçekten `"true"`/`"false"` (string) yazdınız mı?

### S: Buton tıklamasını yakalayamıyorum

`Button Configurator`'da o buton için **`e` (IsToOverrideDefaultHandler) `true`** olmalı. Aksi takdirde panel default handler çalışır, sizin akışınız tetiklenmez.

### S: Buton indeks numaraları nereden bakacağım?

[Button Configurator sayfasındaki](nodlar/button-configurator.md) görselde tüm buton indeksleri görünmektedir. Görsel paket içinde `assets/button-configurator.png` olarak da bulunur.

---

## Method Invoker & Returns

### S: Method'u çağırdım ama cevap gelmiyor

1. `Method Returns` node'u eklediniz mi?
2. `methodname` (Returns'te) ile `method` (Invoker'da) **aynı** mı?
3. Panel tarafı gerçekten cevap dönüyor mu? (panel log'larına bakın)

### S: JSONata ifademde hata var

Önce başka bir akışta `change` node ile JSONata ifadenizi test edin. Doğru sonucu verdiğinden emin olduktan sonra `Method Invoker` veya `Control Properties` içine yapıştırın.

### S: Parametre olarak null göndermem gerek

`dataType: json` seçip `d` alanına `null` yazabilirsiniz. Veya akışta `flow` context'e `null` koyup `dataType: flow` ile okutabilirsiniz.

---

## Responser

### S: Akışım timeout veriyor

Çoğunlukla **`Responser` eksik** demektir. Tüm olay akışlarının sonunda bir `Responser` olmalı. `trex Subscriber` istisnadır (kendi cevabını yönetir).

### S: Birden fazla `Responser` mı koymalıyım?

Gerekli değildir. Birden fazla dal tek bir `Responser`'a bağlanabilir. Kesinlikle kaçınılması gereken durum, **aynı dalda peş peşe** birden fazla `Responser` kullanmaktır; HTTP cevabı yalnızca bir kez gönderilebilir.

---

## LLM Flow Builder

### S: API anahtarımı nereye girdim?

Config node (`llm-flow-builder-config`) içinde **API Key** alanına. Bu alan `password` tipinde olduğu için flow JSON export'unda görünmez.

### S: Üretilen akış JSON parse hatası veriyor

LLM bazen markdown code-fence (` ``` `) ile cevap döndürür. Node'un kendi temizleyicisi var ama bazen yetmez. Çözüm: `systemPrompt` alanına ekleyin: **"Cevabını sadece valid JSON olarak ver, markdown formatlamadan."**

### S: Maliyet kontrolü nasıl yaparım?

- Geliştirme yaparken **`autoDeploy: false`** tutun
- Sistem prompt'unuzu kısaltın (her çağrıda gönderilir)
- Daha ucuz modeller deneyin (örn. `gpt-4o-mini`, `claude-3-5-haiku`)
- Test akışlarını sürekli çalıştırmaktan kaçının

---

## Performans

### S: 200 panel aynı anda çalışıyor, Node-RED yavaşladı

- Akış başına 1-2 `debug` node'u bırakın, fazlasını **devre dışı** bırakın
- `Communication Events` gibi yüksek frekanslı node'larda `function` ile filtreleme yapın
- Node-RED projeyi mümkünse **flow başına ayırın**, her panel grubu için ayrı flow tab
- Async işlemleri `Method Invoker` ile yapın, **fire-and-forget** ile bloklamayın

### S: Tek bir akış 5 saniye sürüyor

Akış sonu `Responser` panele cevap dönmedikçe **panel beklemede** kalır. Bu süre büyük olasılıkla:

- Bir `function` node'unda async I/O
- Veritabanı sorgusu
- HTTP request

Çözüm:

- Eğer cevabı **gerçekten beklemek** gerekiyorsa: optimizasyon yapın (cache, paralel)
- Beklemek gerekmiyorsa: işlemi `Method Invoker` ile fire-and-forget yapın, hemen `Responser` döndürün

---

## Geliştirme & Test

### S: Akışı panelsiz test edebilir miyim?

Evet, ancak **tarayıcı adres satırından değil**. Tüm event node'ları `POST` metodunu kullanır ve veriyi request body'den bekler; adres satırına parametre geçilemez.

**Postman** veya benzeri bir HTTP istemcisi ile test edebilirsiniz:

- Method: `POST`
- URL: `http://<node-red-host>:1880/<EventAdı>`
- Body: `raw / JSON`

```json
{
  "param1": "value1",
  "param2": "value2"
}
```

### S: `msg.payload` array'inin içeriğini nasıl debug ederim?

Her form/aksiyon node'undan sonra bir `debug` node ekleyip **`complete msg`** seçin. Sağ paneldeki çıktıda `payload` array'inin her elemanını görürsünüz.

### S: Akışımı GitHub'a koyabilir miyim?

Evet. Sadece `credentials` alanları (LLM API key gibi) **flow JSON'una dahil edilmez**, bunları ayrıca yönetmeniz gerekir.

---

## Genel

### S: Bu paket trexMes Edge olmadan çalışır mı?

**Hayır.** trexMes Edge'in Node-RED Connector eklentisi bağlantı kurmazsa hiçbir event tetiklenmez, form basılmaz. Paket trexMes ekosistemine özgüdür.

### S: Lisans nedir, ticari kullanabilir miyim?

[GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html). Ticari kullanım serbesttir ancak değişiklik yapıp dağıtıyorsanız aynı lisansla dağıtmalısınız.

### S: Katkıda bulunabilir miyim?

Evet, [GitHub repository](https://github.com/asafyurdakul/node-red-trexmes-service)'sinde issue açabilir veya pull request gönderebilirsiniz.

---

Sorununuz burada yoksa [GitHub Issues](https://github.com/asafyurdakul/node-red-trexmes-service/issues) üzerinden iletişime geçin.
