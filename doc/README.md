# node-red-trexmes-service — Dokümantasyon

Bu klasör `node-red-trexmes-service` Node-RED paketinin [MkDocs](https://www.mkdocs.org/) tabanlı dokümantasyon kaynaklarını içerir.

## Hızlı Başlangıç

```bash
# 1) Bağımlılıkları kur (yalnızca ilk seferde)
pip install -r requirements.txt

# 2) Yerel önizleme
mkdocs serve
# → http://127.0.0.1:8000

# 3) Statik HTML üretimi
mkdocs build
# Çıktılar: site/ klasörü
```

Windows kullanıcıları `build.bat` kısayolunu kullanabilir:

```bat
build.bat install
build.bat serve
build.bat build
build.bat deploy
```

## Klasör Yapısı

```
doc/
├── mkdocs.yml          # Ana yapılandırma
├── requirements.txt    # Python bağımlılıkları
├── build.bat           # Windows yardımcısı
├── docs/               # Markdown kaynakları
│   ├── index.md
│   ├── baslangic/
│   ├── nodlar/         # Her node için ayrı sayfa
│   ├── ornekler/
│   ├── stylesheets/
│   └── assets/img/
└── site/               # `mkdocs build` çıktısı (otomatik)
```

## Yayınlama

GitHub Pages'e tek komutla:

```bash
mkdocs gh-deploy --force
```

## Lisans

GPL-3.0-or-later (kaynak paketle aynı)
