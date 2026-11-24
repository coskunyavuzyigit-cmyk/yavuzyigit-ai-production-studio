# Ürün Yol Haritası

## Aşama 0 — Temel ve güvenlik
- [x] Yeni ve bağımsız GitHub deposu
- [x] Ürün ilkeleri, doğruluk kuralları ve başlangıç mimarisi
- [x] Açık kaynak araç ve skill envanteri
- [ ] Lisans/asset envanterini dosya bazında doğrulama
- [ ] Uygulama build, lint ve CI sonuçlarını doğrulama

## Aşama 1 — Tek stüdyo paneli
- [ ] Mobil uyumlu Studio Home
- [ ] Emlak ve kısa film proje türü seçimi
- [ ] Project Workspace ve proje durumları
- [ ] Asset Library: yükle, önizle, etiketle, lisans ve kaynak kaydet
- [ ] Character Library: karakter kartı, sürüm, varyant, ses ve lisans
- [ ] Script Room ve Storyboard/Shot Planner
- [ ] Review/QA ve render geçmişi ekranları
- [ ] Yerel örnek veriyle uçtan uca UI testi

## Aşama 2 — Veri ve dosya altyapısı
- [ ] Supabase Auth ve kullanıcı/rol modeli
- [ ] PostgreSQL şema ve RLS politikaları
- [ ] Object storage ve imzalı yükleme/indirme
- [ ] Proje, asset, karakter, sahne ve iş tabloları
- [ ] Audit log, saklama/silme ve yedekleme
- [ ] Büyük dosya ve erişim güvenliği testleri

## Aşama 3 — Worker ve render kuyruğu
- [ ] Vercel panelinden bağımsız worker tasarımı
- [ ] Kalıcı job queue, durum makinesi ve idempotency
- [ ] Worker kayıt/heartbeat, log, retry ve cancel
- [ ] FFmpeg adapter: dikey video, ses, altyazı, kapak
- [ ] İlk gerçek dosyayla uçtan uca MP4 üretimi
- [ ] Kaynak/çıktı saklama ve hata kurtarma testi

## Aşama 4 — Emlak prodüksiyon hattı
- [ ] İlan bilgisi ve doğrulanmış gerçekler formu
- [ ] Kaynak fotoğraf/video içe aktarma
- [ ] GeoJSON/KML yükleme, CRS ve geometri doğrulama
- [ ] Parsel sınırı ve uydu/harita katmanı
- [ ] Blender sahne şablonları ve kamera yolu
- [ ] Türkçe seslendirme, telaffuz sözlüğü ve miks
- [ ] 15/30/45 saniye çıktı profilleri
- [ ] Emlak gerçeklik ve yanlış iddia QA kapısı

## Aşama 5 — Karakter ve kısa film hattı
- [ ] Hazır fotogerçekçi karakter adaylarının lisans ve teknik testleri
- [ ] Mert/Duru canonical karakter seçimi ve character bible
- [ ] Karakter model/rig/texture/voice varlıklarını panelden yönetme
- [ ] Blender scene adapter ve headless render worker
- [ ] Yürüme, konuşma, dinleme, işaret etme ve bekleme hareket kütüphanesi
- [ ] Türkçe voice/lip-sync pipeline
- [ ] Shot continuity ve karakter kimliği QA
- [ ] 10 saniyelik animasyon proof-of-pipeline
- [ ] 45–60 saniyelik Bir Yerin Hikâyesi pilot kısa film

## Aşama 6 — AI destekli üretim adaptörleri
- [ ] ComfyUI adapter ve iş kuyruğu entegrasyonu
- [ ] Wan Animate ve alternatif modeller için deneysel workflow
- [ ] Model ağırlıkları, VRAM ve lisans doğrulaması
- [ ] Prompt/seed/model sürümü kayıtları
- [ ] Aynı sahne için motor karşılaştırma ve kalite testi
- [ ] AI çıktılarının Blender/FFmpeg hattına kontrollü alınması

## Aşama 7 — Prodüksiyon yönetimi
- [ ] Sahne bazlı yorum, onay ve revizyon
- [ ] Şablonlar, marka kitleri, intro/outro ve altyazı stilleri
- [ ] Müzik/efekt ve font lisans kütüphanesi
- [ ] Render maliyet/performans paneli
- [ ] Proje klonlama ve sürüm karşılaştırma
- [ ] Final teslim paketi ve arşiv

## Aşama 8 — İzole otomasyon
- [ ] Yalnızca bu projeye ait n8n kurulumu/credentials
- [ ] Yeni proje/iş tetikleme ve durum webhook'ları
- [ ] İzole otomatik dosya işleme ve bildirim
- [ ] Kullanıcı onaylı dış teslim/yayın
- [ ] Mevcut 21 n8n workflow'una sıfır bağlantı garantisi

## Kabul kuralı
Bir aşama yalnızca ekranı veya dokümanı eklendi diye tamamlanmış sayılmaz. Test girdisi, gerçek worker çalışması, beklenen çıktı, hata senaryosu ve QA sonucu belgelenmelidir. Ücretli servis, GPU veya dış hesap işlemi kullanıcı onayı olmadan etkinleştirilmez.