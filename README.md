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

## Durum

Şu an temel proje belgeleri ve mimari kararlar hazırlanıyor. Henüz çalışan uygulama veya render altyapısı kurulduğu iddia edilmemektedir.
