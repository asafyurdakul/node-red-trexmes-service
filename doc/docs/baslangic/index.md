# Başlangıç

Bu bölüm, `node-red-trexmes-service` paketini ilk kez kullanacak geliştiriciler için **adım adım rehber** niteliğindedir.

## Bu Bölümde Neler Var?

<div class="tx-card-grid">
  <a class="tx-card" href="../baslangic/kurulum/">
    <h3>📦 Kurulum</h3>
    <p>Node-RED, trexMes Edge konnektörü ve paketin nasıl kurulacağı.</p>
  </a>
  <a class="tx-card" href="../baslangic/hizli-baslangic/">
    <h3>🚀 Hızlı Başlangıç</h3>
    <p>5 dakikada ilk akışı ayağa kaldırma.</p>
  </a>
  <a class="tx-card" href="../baslangic/mimari/">
    <h3>🏗️ Mimari Genel Bakış</h3>
    <p>Paket nasıl çalışır? trexMes Edge ile haberleşme nasıl olur?</p>
  </a>
  <a class="tx-card" href="../baslangic/mesaj-yapisi/">
    <h3>📨 Mesaj (msg) Yapısı</h3>
    <p>Node'lar arasında dolaşan `msg.payload` formatı ve `operationtype` kavramı.</p>
  </a>
</div>

## Önerilen Okuma Sırası

1. **[Kurulum](kurulum.md)** — Önce çalışan bir kurulum elde edin.
2. **[Mimari](mimari.md)** — Sistemin nasıl çalıştığını anlayın (5 dk okuma).
3. **[Hızlı Başlangıç](hizli-baslangic.md)** — İlk akışınızı oluşturun.
4. **[Mesaj Yapısı](mesaj-yapisi.md)** — Node'lar arası veri akışını öğrenin.

## Önemli Ön Bilgi

!!! warning "trexMes Edge gereklidir"
    Bu paket **bağımsız çalışmaz**. trexMes Edge panel yazılımının üzerinde **Node-RED konnektör eklentisi** etkin olmak zorundadır. Aksi takdirde node'lar trigger almaz, custom form'lar panele basılmaz ve method invoker hata döner.

!!! info "Tek `trex Subscriber` kuralı"
    Her trexMes projesi/flow'unda **yalnızca bir adet** `trex Subscriber` node'u bulunmalıdır. Bu node, projedeki tüm olay (event) node'larını trexMes paneline kayıt eder.
