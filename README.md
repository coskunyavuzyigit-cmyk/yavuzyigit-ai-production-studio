# YAVUZYİĞİT AI Emlak Prodüksiyon Stüdyosu

Bağımsız, modüler ve açık kaynak ağırlıklı emlak video prodüksiyon platformu.

## Amaç

Arsa, villa, konut ve inşaat projeleri için ilan verilerinden ve kullanıcı tarafından sağlanan görsellerden profesyonel tanıtım içerikleri üretmek. Sistem; senaryo, storyboard, görsel hazırlık, 3D sahne, video montajı, seslendirme ve kalite kontrol adımlarını tek bir kontrol panelinde birleştirmeyi hedefler.

## Proje ilkeleri

- Bu depo sıfırdan ve bağımsız geliştirilir.
- Önceki GitHub projeleri ve mevcut n8n iş akışları değiştirilmez veya çağrılmaz.
- Kullanıcı onayı olmadan harici hesaplara, ilan portallarına veya sosyal ağlara yayın yapılmaz.
- Gerçek parsel geometrisi, koordinat, imar ve ölçü bilgileri üretken yapay zekâ tarafından değiştirilmez.
- Temsili mimari/görseller, gerçek mevcut durumdan açıkça ayrılır.
- API anahtarları ve sırlar Git'e kesinlikle eklenmez.
- Önce çalışan küçük bir MVP, ardından modüller.

## İlk MVP

1. Proje/ilan oluşturma ve medya yükleme
2. İlan bilgi kartı ve doğrulanmış gerçekler
3. Senaryo ve storyboard taslağı
4. Sahne bazında kullanıcı onayı
5. FFmpeg ile temel dikey video montajı
6. Render işi durumu ve çıktı indirme
7. Üretim kayıtları ve kalite kontrol listesi

İlk çıktı hedefi: 1080×1920, 9:16, yaklaşık 30 saniyelik emlak tanıtım videosu.

## Mimari yaklaşım

- Web kontrol paneli: Next.js (Vercel üzerinde)
- Veritabanı ve kullanıcı erişimi: Supabase
- Medya saklama: S3 uyumlu nesne depolama / Supabase Storage (maliyet ve gizlilik değerlendirmesinden sonra)
- Ağır işler: ayrı bir worker ortamında FFmpeg ve gerektiğinde Blender
- İş kuyruğu: MVP'de basit ve izlenebilir; ileride Redis tabanlı kuyruk değerlendirilebilir
- Otomasyon: yalnızca bu projeye özel, izole n8n iş akışları; mevcut 21 akışa bağlantı yok
- Geliştirme ajanı: OpenCode; repo talimatları için `AGENTS.md`

Ayrıntı: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

## Yol haritası

Ayrıntı: [docs/ROADMAP.md](docs/ROADMAP.md)

## Açık kaynak değerlendirmesi

Aday araçlar, lisanslar, bakım durumu, donanım gereksinimleri ve entegrasyon testleri doğrulanmadan üretim bağımlılığı yapılmaz. Ayrıntı: [docs/OPEN_SOURCE_AUDIT.md](docs/OPEN_SOURCE_AUDIT.md)

## Güvenlik

- `.env*`, token, API key, service-role key ve özel medya dosyaları commit edilmez.
- Supabase service-role anahtarı yalnızca sunucu tarafında tutulur.
- Kullanıcı yüklemeleri tür, boyut ve erişim kontrollerinden geçirilir.
- Güvenlik bildirimi için [SECURITY.md](SECURITY.md) dosyasına bakın.

## Prodüksiyon kuralları

Bağlayıcı doğruluk, video türleri, kurgu, ses ve kalite kontrol kuralları: [docs/PRODUCTION_RULES.md](docs/PRODUCTION_RULES.md).

## İlk demo render

FFmpeg ile 30 saniyelik, 1080×1920 dikey tipografik demo MP4 üretildi ve yerel olarak doğrulandı. Bu, gerçek ilan videosu değil; ilk render hattının teknik prototipidir. Ayrıntı: [docs/DEMO_RENDER.md](docs/DEMO_RENDER.md).

## Durum

Proje brief/storyboard ekranı, ilk FFmpeg render betiği ve GitHub Actions doğrulama akışı eklendi. Next.js CI build sonucu henüz doğrulanmadı; gerçek ilan görselleri, Blender sahneleri, ses ve tam prodüksiyon hattı sıradaki işlerdir.

## Kısa animasyon ve karakter stüdyosu

Stüdyo ayrıca iki özgün, devamlı karakterle kısa animasyon filmleri üretecek:
- **Mert:** saha ve emlak uzmanı
- **Duru:** mimar ve tasarım anlatıcısı

Karakter kimliği, senaryo, Blender rig, AI animasyon ve kalite kontrol süreçleri:
- [Kısa Film Stüdyosu](docs/SHORT_FILM_STUDIO.md)
- [Açık Kaynak Araç Zinciri ve Depolar](docs/OPEN_SOURCE_TOOLCHAIN.md)
- [OpenCode Skills](.opencode/skills/)

İlk karakter üretim adayı MPFB2 + Blender + CloudRig; AI destekli hareket için resmi ComfyUI Wan Animate workflow'u yalnızca deneysel adaptördür. Model/asset lisansları ve donanım gereksinimleri doğrulanmadan üretim bağımlılığı yapılmaz.
