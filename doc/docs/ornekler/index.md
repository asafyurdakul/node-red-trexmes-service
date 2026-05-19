# Örnekler

Bu bölüm, `node-red-trexmes-service` paketi ile gerçek dünya senaryolarını nasıl çözeceğinizi gösteren **adım adım akış örnekleri** içerir.

## Mevcut Örnekler

<div class="tx-card-grid">
  <a class="tx-card" href="../ornekler/temel-akis/">
    <h3>🟢 Temel Akış</h3>
    <p>Bir Business Event yakalayıp debug'a basan en basit kullanım.</p>
  </a>
  <a class="tx-card" href="../ornekler/custom-form-akisi/">
    <h3>🧩 Custom Form Akışı</h3>
    <p>Olay verisinden form aç, alanları bağla, kaydet butonuyla bitir.</p>
  </a>
  <a class="tx-card" href="../ornekler/buton-konfigurasyonu/">
    <h3>🎛️ Buton Konfigürasyonu</h3>
    <p>Main Form butonlarını yapılandır, tıklamayı yakala ve method çağır.</p>
  </a>
</div>

## Her Örneğin Yapısı

Her örnek sayfası şu kalıbı izler:

1. **Hedef** — Ne yapacağız?
2. **Önkoşullar** — Hangi panel/Node-RED ayarları gerekli?
3. **Akış Şeması** — Mermaid diyagramı
4. **Adım Adım Yapılandırma** — Her node için neler girilecek
5. **Flow JSON** — Kopyala-yapıştır ile import edilebilir kod
6. **Beklenen Çıktı** — Çalıştığında ne göreceksiniz?
7. **Yaygın Sorunlar** — Karşılaşabileceğiniz hatalar

## Akışları Import Etmek

Örnek sayfalarında verilen Flow JSON kodunu Node-RED'e şu şekilde aktarın:

1. Node-RED arayüzünde sağ üstteki menüden **Import** seçin.
2. **Clipboard** sekmesine geçin.
3. JSON kodunu yapıştırın.
4. **New flow** veya **Current flow** seçeneğini belirleyin.
5. **Import** butonuna tıklayın.
6. Sağ üstteki kırmızı **Deploy** butonu ile aktif edin.

!!! tip "İçerikleri kendi projenize uyarlayın"
    Örneklerdeki event isimleri, form adları ve method isimleri **kendi trexMes ortamınızla** eşleşmelidir. Birebir kopyalamak yerine kendi event/form/method isimlerinize göre değiştirin.

## Sıralama

Henüz başlamadıysanız aşağıdaki sıra önerilir:

1. **[Temel Akış](temel-akis.md)** — Çalışan bağlantıyı doğrulayın.
2. **[Custom Form Akışı](custom-form-akisi.md)** — Görsel arayüz üretimini öğrenin.
3. **[Buton Konfigürasyonu](buton-konfigurasyonu.md)** — Etkileşim ekleyin.
