# Kurulum

`node-red-trexmes-service` paketinin Node-RED ortamına kurulması ve trexMes Edge ile entegrasyonu adım adım anlatılmıştır.

## Gereksinimler

| Bileşen | Minimum Sürüm | Açıklama |
|---|---|---|
| **Node.js** | 18.16 veya üzeri | LTS sürümü önerilir |
| **Node-RED** | 3.0 veya üzeri | npm üzerinden veya OS paketinden |
| **trexMes Edge** | Güncel sürüm | Node-RED konnektör eklentisi etkin olmalıdır |
| **İşletim Sistemi** | Windows / Linux | Custom Form Designer için Windows önerilir |

## Adım 1 — Node.js Doğrulaması

Komut satırında Node.js sürümünüzü kontrol edin:

```bash
node --version
# v18.16.0 veya üzeri olmalı
```

!!! warning "Eski Node.js sürümü"
    Paket içindeki bazı bağımlılıklar (`raw-body@3`, `multer`, `cookie@0.7`) eski Node.js sürümlerinde çalışmaz. Mutlaka **18.16+** kullanın.

## Adım 2 — Node-RED Kurulumu

Eğer henüz Node-RED kurulu değilse:

=== "Windows / Linux / macOS"

    ```bash
    npm install -g --unsafe-perm node-red
    ```

=== "Windows (yönetici)"

    ```bash
    npm install -g node-red
    ```

Kurulumdan sonra başlatın:

```bash
node-red
```

Tarayıcıdan `http://localhost:1880` adresine giderek arayüzü kontrol edin.

## Adım 3 — Paketi Kurma

### Yöntem A: Palette Manager üzerinden (önerilen)

1. Node-RED arayüzünde sağ üstteki menüden **Manage palette**'i açın.
2. **Install** sekmesine geçin.
3. Arama kutusuna `node-red-trexmes-service` yazın.
4. **Install** butonuna tıklayın.

### Yöntem B: Komut satırından

Node-RED kullanıcı klasörünüze gidin (genelde `~/.node-red` veya `C:\Users\<kullanici>\.node-red`):

```bash
cd ~/.node-red
npm install node-red-trexmes-service
```

Sonra Node-RED'i yeniden başlatın.

### Yöntem C: Yerel kaynak klasörden

Geliştirme/test amaçlı yerel klasörden kurmak için:

```bash
cd ~/.node-red
npm install C:\node-red-nodes\node-red-trexmes-service\nodes
```

## Adım 4 — Kurulumu Doğrulama

Node-RED arayüzünde sol paletin altına bakın. **`trexMes service`** kategorisi altında aşağıdaki node'ları görmelisiniz:

- `trex Subscriber`
- `Business Events`, `System Events`, `Communication Events`, `Display Events`, `Form Events`
- `Display Methods`, `Method Returns`, `Responser`
- `Custom Form`, `Form Bind Controls`, `Control Properties`
- `Button Configurator`, `Main Form Action`
- `Method Invoker`, `Execute Process`, `Execute Script`
- `Handle Setter`, `LLM Flow Builder`

!!! success "Paket başarıyla kuruldu"
    Yukarıdaki node'lar paletinizde görünüyorsa kurulum tamamlanmış demektir. [Hızlı Başlangıç](hizli-baslangic.md) ile devam edebilirsiniz.

## Adım 5 — trexMes Edge Tarafı

Node-RED tarafındaki paket tek başına yetmez. **trexMes Edge** panel yazılımında **Node-RED konnektör eklentisinin** etkin olduğundan emin olun:

1. trexMes Edge yapılandırma ekranını açın.
2. **Plugins** sekmesinden **Node-RED Connector**'ı aktif edin.
3. Node-RED sunucusunun IP ve port bilgisini panele tanıtın (varsayılan: `http://<node-red-host>:1880`).
4. Paneli yeniden başlatın.

!!! info "Bağlantı kontrolü"
    Akışı deploy edip `trex Subscriber` node'unun durum çubuğunu (status) kontrol edin. Yeşil "Triggered" etiketi görüyorsanız panel ile bağlantı sağlanmış demektir.

## Custom Form Designer (İsteğe Bağlı)

`Custom Form` node'unda XML-tabanlı form tasarımcısını çalıştırabilmek için Windows üzerinde bir `customFormDesigner.exe` yardımcısı gerekir. Bu yolu Node-RED `settings.js` dosyasında **global context** olarak tanıtın:

```javascript
// ~/.node-red/settings.js
functionGlobalContext: {
    customFormDesignerPath: "C:\\trex\\tools\\customFormDesigner.exe"
},
```

Designer çalıştığında çıktı şu konuma yazılır:

```
C:\temp\<filename>_form_design.xml
```

## Güncelleme

Paketi güncellemek için:

```bash
cd ~/.node-red
npm update node-red-trexmes-service
```

Veya **Palette Manager → Nodes** sekmesinden güncel sürümü kontrol edin.

## Kaldırma

```bash
cd ~/.node-red
npm uninstall node-red-trexmes-service
```

!!! danger "Akışlarda kullanılan node'lar"
    Paketi kaldırmadan önce, kullanan **tüm akışları** durdurun veya silin. Aksi takdirde Node-RED yeniden başlatıldığında "Missing types" hatası alırsınız.

## Sorun Giderme

| Sorun | Çözüm |
|---|---|
| Paket palette'te görünmüyor | Node-RED'i yeniden başlatın (`Ctrl+C` ve `node-red`) |
| "Missing type: trex Subscriber" | Paket yüklenmemiş olabilir; `npm list` ile kontrol edin |
| `cookie@0.7.2 not found` | Node.js sürümünüzü 18.16+'a yükseltin |
| Olay node'ları trigger almıyor | trexMes Edge'de Node-RED Connector eklentisini kontrol edin |
| Custom Form designer çalışmıyor | `settings.js` içinde `customFormDesignerPath` tanımını kontrol edin |
