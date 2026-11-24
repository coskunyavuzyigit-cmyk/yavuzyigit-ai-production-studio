# İlk FFmpeg Demo Render

Tarih: 2026-11-24

## Çıktı

- Dosya: `yavuzyigit-studio-demo.mp4`
- Video: H.264 / MP4
- Çözünürlük: 1080 × 1920 (9:16)
- Kare hızı: 25 fps
- Süre: 30 saniye
- Ses: Yok (ilk görsel pipeline testi sessizdir)
- Üretim aracı: FFmpeg
- Render betiği: `scripts/render-demo.sh`

## Sahne sırası

1. Arsa hikâyesi
2. Konumu keşfet
3. Temsili mimari konsept
4. Tapu, ölçü ve imar doğruluğu
5. YAVUZYİĞİT marka kapanışı

## Dürüst durum notu

Bu çıktı gerçek bir arsa ilanı veya sinematik drone videosu değildir. İlk uçtan uca video kodu denemesi için oluşturulmuş tipografik/motion-graphics prototipidir. Üzerinde açıkça "temsili demo - gerçek ilan değil" ibaresi bulunur. Gerçek parsel fotoğrafı, doğrulanmış sınır, çevre görüntüsü, seslendirme ve müzik henüz eklenmemiştir.

Yerel FFmpeg render testi başarıyla tamamlandı; ffprobe ile H.264, 1080×1920 ve 30 saniye değerleri doğrulandı. GitHub Actions workflow'u ayrıca Next.js lint/build ve otomatik demo render işlerini çalıştıracak şekilde eklendi. Actions çalışma sonucu, bu oturumdaki GitHub bağlantısında henüz okunabilir bir run kaydı olarak doğrulanamadı.

## Sonraki üretim adımları

- Gerçek ilan görsellerini geçici çalışma alanına almak ve otomatik silme politikasını uygulamak
- GeoJSON/KML parsel geometrisini doğrulayıp ayrı katmanda göstermek
- Blender sahne şablonunu ve kamera hareketini eklemek
- Türkçe seslendirme motoru ve ses modeli lisansını seçmek
- FFmpeg ile müzik, ses, altyazı ve geçişleri birleştirmek
- Son MP4'ü çözünürlük, süre, ses ve metin kontrollerinden geçirmek
