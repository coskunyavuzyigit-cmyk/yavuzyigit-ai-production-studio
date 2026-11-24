# Güvenlik Politikası

Güvenlik açığı bildirimlerini herkese açık issue olarak paylaşmak yerine depo sahibine özel kanaldan iletin.

## Gizli bilgi kuralları
- API anahtarı, erişim tokenı, parola veya kişisel veri içeren örnekleri commit etmeyin.
- Gerçek bir secret yanlışlıkla commit edilirse yalnızca dosyayı silmek yeterli değildir; ilgili anahtarı sağlayıcıdan derhal iptal edip yenileyin.
- Supabase service-role anahtarı yalnızca güvenilir sunucu ortamında kullanılmalıdır.
- Üretim ve geliştirme secret'ları birbirinden ayrılmalıdır.

## Rapor
Raporunuza etkilenen bileşen/sürüm, yeniden üretim adımları, olası etki ve önerilen düzeltmeyi ekleyin. Hassas verileri rapora koymayın.
