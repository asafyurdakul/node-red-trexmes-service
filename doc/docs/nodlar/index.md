# Node Referansı

`node-red-trexmes-service` paketi toplam **23 Node-RED node tipi** kaydeder. Bu sayfa hepsini kategorilere ayırıp aradığınızı hızlıca bulmanızı sağlar.

## Çekirdek Nodlar

Her trexMes projesinde mutlaka bulunması gereken altyapı node'ları.

| Node | I/O | Açıklama |
|---|---|---|
| [trex Subscriber](trex-subscriber.md) | 0 → 1 | Projedeki tüm event'leri panele kaydeder. **Her projede 1 adet zorunlu.** |
| [Responser](responser.md) | 1 → 0 | HTTP cevabını panele döner. Olay akışlarının sonunda olmalıdır. |

## Olay (Event) Nodları

Panel tarafından tetiklenen olayları yakalayan, **inputs=0, outputs=1** olan node'lar. Hepsi `trex Subscriber` ile aynı altyapıyı paylaşır.

`Handle Setter`, `IsHandled` özelliği bulunan Event node'larını içeren akışlarda zincirin **son trexMes node'u** olarak eklenir; `IsHandled=true` ayarlandığında ilgili olaya ait tüm işlemler kesilir.

| Node | I/O | Açıklama |
|---|---|---|
| [Business Events](business-events.md) | 0 → 1 | İş akışı olayları |
| [System Events](system-events.md) | 0 → 1 | Sistem seviyesi olaylar |
| [Communication Events](communication-events.md) | 0 → 1 | İletişim katmanı olayları |
| [Display Events](display-events.md) | 0 → 1 | UI gösterim olayları |
| [Form Events](form-events.md) | 0 → 1 | Form üzerindeki etkileşimler |
| [Display Methods](display-methods.md) | 0 → 1 | Ana form method tetikleyicileri |
| [Method Returns](method-returns.md) | 0 → 1 | Method invocation cevapları |
| [Handle Setter](handle-setter.md) | 1 → 1 | Olay akışının sonunda `IsHandled` değerini dinamik olarak set eder; `true` olduğunda panel olayı kesintiye uğratır |

[Tüm olay tiplerinin genel bakışı →](event-subscribers.md)

## Form Nodları

Custom form tasarımı, kontrol bağlama ve özellik yönetimi.

| Node | I/O | Açıklama |
|---|---|---|
| [Custom Form](custom-form.md) | 1 → 1 | XML tabanlı form tasarımı oluşturur |
| [Form Bind Controls](form-bind-controls.md) | 1 → 1 | Form alanlarına veri bağlar |
| [Control Properties](control-properties.md) | 1 → 1 | Kontrol özelliklerini ayarlar |
| [Button Configurator](button-configurator.md) | 1 → 1 | Form üzerindeki butonları yapılandırır |
| [Main Form Action](main-form-action.md) | 1 → 1 | Ana formdaki butonları tetikler |

## İşlem (Action) Nodları

Method çağırma, process tetikleme ve script çalıştırma.

| Node | I/O | Açıklama |
|---|---|---|
| [Method Invoker](method-invoker.md) | 1 → 1 | Panel method'unu çağırır, parametre geçer |
| [Context Getter](context-getter.md) | 1 → 1 | İstasyona ait StateContext verisini sorgular |
| [Execute Process](execute-process.md) | 1 → 1 | Panel'de tanımlı process'i tetikler |
| [Execute Script](execute-script.md) | 1 → 1 | Form üzerinde script çalıştırır |

## Yapay Zekâ

LLM ile otomatik akış üretimi.

| Node | I/O | Açıklama |
|---|---|---|
| [LLM Flow Builder](llm-flow-builder.md) | 1 → 1 | Doğal dil komutuyla Node-RED akışı üretir |

## Ortak Özellikler

### Renk Kodlaması

Node'lar paletteki yerlerini kolayca tanımak için 3 renk grubuna ayrılmıştır:

<span class="node-preview green-dark">trex Subscriber</span>
**Koyu yeşil (`#58D68D`)** — Çekirdek/ana node'lar

<span class="node-preview green-light">Business Events</span>
**Açık yeşil (`#CCFFCC`)** — Servis/işlem node'ları (çoğunluk)

<span class="node-preview green-bright">LLM Flow Builder</span>
**Parlak yeşil (`#99FF33`)** — AI/yardımcı araçlar

### Kategori

Paletteki kategori adı: **`trexMes service`**

### İkon

Çoğu node trexMes logosu olan `trex.png` ikonunu kullanır. `LLM Flow Builder` istisnadır (`font-awesome/fa-magic`).

## Hangi Node'u Ne Zaman Kullanmalıyım?

Senaryo bazlı hızlı seçim rehberi:

| İhtiyaç | Önerilen Node |
|---|---|
| Projede ilk node'u koymak istiyorum | `trex Subscriber` |
| Panel'den bir olay yakalamak istiyorum | İlgili `* Events` node |
| Panelde yeni bir form açmak istiyorum | `Custom Form` |
| Form alanına veri yüklemek istiyorum | `Form Bind Controls` |
| Bir butonu gizlemek/yazısını değiştirmek istiyorum | `Control Properties` veya `Button Configurator` |
| Panel'deki bir method'u çağırmak istiyorum | `Method Invoker` |
| İstasyona ait durum verisini okumak istiyorum | `Context Getter` |
| Panel'de bir process tetiklemek istiyorum | `Execute Process` |
| Olayın handled durumunu dinamik değiştirmek istiyorum | `Handle Setter` |
| Doğal dilden akış üretmek istiyorum | `LLM Flow Builder` |

## Sonraki Adım

Bir node'a tıklayarak detay sayfasına gidin. Her node sayfası şunları içerir:

- **Özet** (ne işe yarar, hangi I/O)
- **Property tablosu** (tüm yapılandırma alanları)
- **Çıkış payload örneği**
- **Tipik kullanım akış şeması**
- **Sık karşılaşılan hatalar**
