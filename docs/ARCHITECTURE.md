# Teknik Mimari

## 1. Kapsam

Stüdyo; ilan/proje kaydı, medya yönetimi, senaryo ve storyboard, sahne üretimi, render kuyruğu ve çıktı teslimini yönetir. İlk sürümde sosyal medyaya otomatik yayın ve dış ilan portallarından otomatik veri çekme kapsam dışıdır.

## 2. Sistem sınırları

- GitHub deposu: yalnızca bu stüdyo.
- Vercel: web uygulaması ve hafif API uçları.
- Supabase: kimlik doğrulama, ilişkisel kayıtlar ve erişim politikaları.
- Render worker: FFmpeg/Blender gibi uzun ve kaynak yoğun işler.
- n8n: ileride yalnızca bu projeye özel ayrı workflow'lar. Mevcut kullanıcının 21 workflow'una webhook, credential veya API bağlantısı kurulmayacak.

Vercel Serverless Functions ağır video render motoru olarak kullanılmayacaktır.

## 3. Önerilen modüller

1. Studio UI: projeler, medya, storyboard, onay ve render geçmişi.
2. Listing Core: konum, parsel, m², fiyat, imar ve açıklama gibi alanlar.
3. Asset Manager: yükleme, önizleme, metadata, saklama politikası.
4. Script & Storyboard: doğrulanmış ilan gerçeklerinden senaryo ve sahne planı.
5. Geospatial Guard: koordinat/geometri kaynaklarını koruma, dönüşüm ve doğrulama.
6. Scene Pipeline: Blender ve/veya görsel üretim araçları için adaptörler.
7. Render Worker: FFmpeg tabanlı birleştirme, ses, altyazı ve çıktı profilleri.
8. QA Gate: süre, çözünürlük, ses, metin, gerçek/temsili içerik kontrolleri.
9. Delivery: onaylı çıktıların indirilmesi ve arşivlenmesi.

## 4. İlk veri modeli taslağı

- projects: ilan/proje ana kaydı ve durum
- listing_facts: kullanıcı tarafından doğrulanmış ilan gerçekleri
- assets: kaynak dosya ve üretilmiş medya metadata kayıtları
- scenes: storyboard sahneleri, sıra ve süre
- approvals: sahne ve final video onayları
- render_jobs: kuyruk, durum, hata ve çıktı bilgileri
- audit_events: önemli kullanıcı ve sistem işlemleri

Şema, erişim politikaları ve saklama süreleri Supabase kurulmadan önce ayrıca gözden geçirilmelidir.

## 5. Coğrafi doğruluk

- Parsel geometrisi yalnızca güvenilir kaynak/kullanıcı girdisinden alınır.
- Kaynak koordinat sistemi, dönüşüm yöntemi ve doğruluk bilgisi saklanır.
- Üretken görsel modeller parsel çizgisini, sınırını veya koordinatını üretmez.
- Drone benzeri kamera hareketi gerçek geometriye bağlı harita/3D sahne üzerinden yapılır.
- Eksik/şüpheli konum verisi varsa sahne otomatik üretilmek yerine incelemeye alınır.

## 6. Medya ve depolama

Orijinal fotoğrafların saklanması varsayılan olarak zorunlu değildir. Kullanıcı seçimine göre geçici işleme, saklama süresi ve silme politikası belirlenir. Üretilen nihai videolar ve proje metadata'sı saklanabilir. Depolama sağlayıcısı maliyet, veri konumu, erişim kontrolü ve silme desteği karşılaştırıldıktan sonra seçilir.

## 7. Entegrasyon yaklaşımı

Her açık kaynak/ücretli motor için ayrı adapter arayüzü tasarlanır. Tek bir sağlayıcıya kilitlenilmez. Aday araçların sürümü, lisansı, ticari kullanım koşulları ve gerçek çıktı kalitesi test edilmeden üretim hattına alınmaz.

## 8. Güvenlik

- Secrets yalnızca platform secret manager veya sunucu ortam değişkenlerinde.
- Tarayıcıya service-role key gönderilmez.
- Dosya yüklemelerinde MIME/uzantı/boyut kontrolü ve güvenli dosya adlandırma.
- Kullanıcılar arası erişim RLS ile sınırlandırılır.
- Render worker yalnızca gerekli dosya ve iş kayıtlarına erişir.
- Harici API çağrıları ve yayınlama kullanıcı onayı gerektirir.
