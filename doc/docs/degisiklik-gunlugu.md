# Sürüm Notları

`node-red-trexmes-service` paketinin sürüm bilgileri.

## Geçerli Sürüm

### v1.6.2

Paketin bu dokümantasyonda kapsamlı olarak ele alınan **güncel sürümüdür**.

#### Temel Özellikler

- **22 Node-RED node tipi** (7 event, 5 form, 3 işlem, 3 çekirdek, 1 AI, ve config node'ları)
- **Custom Form Designer** entegrasyonu (`customFormDesigner.exe`)
- **Method Invoker** asenkron Promise.all işleme
- **LLM Flow Builder** ile 6 LLM sağlayıcı preset'i (OpenAI, Anthropic, Gemini, DeepSeek, Mistral, Groq)
- **Multi-panel destek** (150-200 panel aynı anda)
- **Türkçe/İngilizce yerelleştirme** (en-US locale)
- Statik **assets** servisi (`assets/button-configurator.png`)

#### Teknik Stack

| Bileşen | Sürüm |
|---|---|
| Node.js | 18.16+ |
| Node-RED | 3.0+ |
| Lisans | GPL-3.0-or-later |
| Yazar | Asaf Yurdakul |
| Repo | [GitHub](https://github.com/asafyurdakul/node-red-trexmes-service) |

#### Bilinen Durumlar

- Custom Form Designer **yalnızca Windows**'ta çalışır (.exe).
- LLM API kullanımı **ücretlidir**, harici sağlayıcıların maliyetine tabidir.

---

## Sürüm Geçmişi

!!! note "Geçmiş sürüm detayları"
    1.6.2 öncesi sürümlere ait detaylı changelog için [GitHub Releases](https://github.com/asafyurdakul/node-red-trexmes-service/releases) sayfasını ziyaret edin.

### Genel Versiyon Şeması

`MAJOR.MINOR.PATCH` semantik versiyonlama kullanılır:

- **MAJOR**: API'de geriye dönük uyumsuz değişiklik
- **MINOR**: Yeni node tipi veya özellik eklemesi (geriye uyumlu)
- **PATCH**: Bug fix, performans iyileştirme

## Güncelleme Notları

### Genel Güncelleme

```bash
cd ~/.node-red
npm update node-red-trexmes-service
```

### Major Sürüm Güncellemesi

Major sürüm geçişlerinde **mutlaka**:

1. **Geliştirme ortamında** önce test edin
2. Mevcut akışlarınızı **yedekleyin** (`~/.node-red/flows*.json` dosyaları)
3. Sürüm notlarındaki **breaking changes** bölümünü dikkatle okuyun
4. trexMes Edge tarafının uyumlu sürüm olduğunu doğrulayın

### Geri Dönüş (Downgrade)

Sorun yaşarsanız belirli bir sürüme dönmek için:

```bash
npm install node-red-trexmes-service@1.6.1
```

---

## Yol Haritası (Roadmap)

Aşağıdaki özellikler topluluk geri bildirimine bağlı olarak değerlendirilmektedir:

- [ ] Linux'ta çalışan Form Designer alternatifi
- [ ] Yerleşik akış şablonu (template) galerisi
- [ ] OpenTelemetry tabanlı performans metrikleri
- [ ] Daha fazla LLM sağlayıcı preset'i

!!! tip "Özellik önerisi"
    Eklenmesini istediğiniz bir özellik var mı? [GitHub Issues](https://github.com/asafyurdakul/node-red-trexmes-service/issues) üzerinden bizimle paylaşın.

---

## Bağımlılıklar

`v1.6.2` itibarıyla paketin bağlı olduğu npm paketleri:

| Paket | Amaç |
|---|---|
| `express` | HTTP routing |
| `multer` | Multipart form data |
| `raw-body@3` | Request body parsing |
| `cookie@0.7` | Cookie işleme |
| _diğer_ | Detay için `package.json`'a bakın |

## Geliştirici

**Asaf Yurdakul** — [trex Digital Manufacturing](https://trex.com.tr)

- GitHub: [@asafyurdakul](https://github.com/asafyurdakul)
- LinkedIn: trex üzerinden ulaşılabilir
- Paket: [npm](https://www.npmjs.com/package/node-red-trexmes-service)
- Flow Library: [Node-RED Flows](https://flows.nodered.org/node/node-red-trexmes-service)

## Lisans

[GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html)
