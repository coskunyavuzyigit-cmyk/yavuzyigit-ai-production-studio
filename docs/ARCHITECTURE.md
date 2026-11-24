# Teknik Mimari

## Ürün kararı: tek stüdyo, çoklu arka plan motoru
Kullanıcı tüm işleri YAVUZYİĞİT AI Prodüksiyon Stüdyosu panelinde yapar. Blender, FFmpeg, ComfyUI, QGIS/GDAL ve ses motorları ayrı kullanıcı ürünleri değil, stüdyo tarafından yönetilen arka plan servisleri/adaptörlerdir. Her işin durumu, girdileri, çıktıları, logları, lisansı ve maliyeti panelde görünür.

## 1. Kapsam
Stüdyo iki prodüksiyon türünü aynı proje çatısı altında destekler:
- Emlak prodüksiyonu: doğrulanmış ilan bilgisi, gerçek fotoğraf/video, parsel geometrisi ve tanıtım videosu.
- Kısa film/animasyon: özgün karakterler, karakter devamlılığı, senaryo, storyboard, sahne animasyonu, diyalog ve film çıktısı.
Kurmaca animasyon sahnesi gerçek bir taşınmazın mevcut durumu gibi sunulamaz.

## 2. Kullanıcı deneyimi ve modüller
1. Studio Home: projeler, son işler, görev kuyruğu, depolama ve render durumu.
2. Project Workspace: her emlak ilanı veya kısa film için tek çalışma alanı.
3. Character Library: karakter kartları, model dosyaları, yüz/saç/kıyafet varyantları, ses profili, rig sürümü, lisans ve devamlılık referansları.
4. Asset Library: görseller, videolar, sesler, 3D modeller, fontlar ve lisans metadata'sı.
5. Script Room: senaryo, diyalog, anlatıcı metni ve doğrulanmış ilan gerçekleri.
6. Storyboard & Shot Planner: sahne/plan sırası, süre, kamera, lens, kadraj, karakter, lokasyon, ses ve metin.
7. Scene Builder: şablon sahneler, 3D yerleşim, ışık, materyal, kamera yolu ve coğrafi katmanlar.
8. Voice & Sound Room: Türkçe ses profilleri, TTS/kayıt, telaffuz sözlüğü, müzik/efekt, miks ve hak bilgisi.
9. Render Queue: kuyruk, öncelik, worker, ilerleme, log, tekrar deneme, iptal ve çıktı.
10. Review & QA: sahne önizleme, yorum, onay/red, teknik ve içerik kalite kapıları.
11. Delivery & Archive: sürümlü MP4, altyazı, kapak, proje paketi ve indirme.
12. Admin & Settings: kullanıcılar, motor adaptörleri, depolama, kota, lisans envanteri, gizlilik ve maliyet.

## 3. Sistem sınırları
- GitHub: yalnızca bu stüdyo deposu.
- Vercel: web paneli, kimlik doğrulamalı hafif API ve iş yönetimi. Ağır render burada çalıştırılmaz.
- Supabase: Auth, PostgreSQL, RLS, proje/iş metadata'sı ve gerektiğinde Storage.
- Object storage: büyük kaynak/çıktı dosyaları; imzalı URL, erişim kontrolü ve saklama politikası.
- Render worker: Blender, FFmpeg, QGIS/GDAL ve ağır komutları çalıştıran ayrı servis/container.
- Job queue: render ve medya görevleri için kalıcı kuyruk; MVP'de Postgres tabanlı kuyruk veya Redis/BullMQ seçimi yük testinden sonra.
- n8n: yalnızca bu depoya ait ayrı instance/workspace/credentials ve ayrı workflow'lar. Mevcut 21 workflow'a webhook, credential veya API bağlantısı kurulmaz.
Vercel Serverless Functions uzun süreli Blender/FFmpeg render motoru değildir. Render worker Vercel'den bağımsız ölçeklenir.

## 4. Adaptör mimarisi
Uygulama doğrudan tek bir motorun API'sine bağlanmaz. Her motor ortak arayüz arkasında çalışır:
- CharacterProvider: hazır karakter içe aktarma, lisans, rig ve varyant.
- SceneProvider: sahne/asset hazırlama ve kamera.
- ImageVideoProvider: ComfyUI veya uygun açık kaynak üretim motoru.
- VoiceProvider: yerel TTS, kayıtlı ses veya izinli servis.
- RenderProvider: Blender/FFmpeg.
- GeoProvider: GeoJSON/KML/CRS doğrulama ve harita katmanları.
Her adaptör için capability, sürüm, lisans, donanım ihtiyacı, maliyet ve test sonucu tutulur. Çalışmayan veya lisansı belirsiz motor aktif gösterilmez.

## 5. Veri modeli taslağı
- workspaces, users, memberships
- projects: tür, durum, başlık, sahip
- listing_facts: kullanıcı tarafından doğrulanmış emlak gerçekleri
- characters: karakter kimliği, sürüm, profil, ses, lisans
- character_assets: model, rig, texture, turntable, expression sheet
- assets: dosya metadata, tür, hash, lisans, kaynak, saklama
- scripts, scenes, shots: senaryo ve planlar
- scene_assets: sahneye bağlı varlıklar
- voice_tracks, audio_assets: diyalog, TTS ve miks
- geodata: geometri, CRS, kaynak, doğruluk, doğrulama durumu
- render_jobs: kuyruk, motor, parametre, durum, log, hata ve çıktı
- approvals: sahne/final onayları
- qa_results: teknik ve editoryal kontroller
- audit_events: kritik kullanıcı ve sistem işlemleri
Şema, RLS ve retention süreleri Supabase kurulmadan önce ayrıca gözden geçirilmelidir.

## 6. Emlak ve coğrafi doğruluk
- Parsel geometrisi yalnızca güvenilir kaynak veya kullanıcı girdisinden alınır.
- Kaynak CRS, dönüşüm, kaynak dosya hash'i ve doğrulama durumu saklanır.
- Üretken modeller parsel sınırını/koordinatını uyduramaz veya değiştiremez.
- Drone benzeri kamera hareketi doğrulanmış geometriye bağlı harita/3D sahne üzerinden yapılır.
- İmar, ruhsat, tapu, mesafe ve fiyat kaynak ve doğrulama tarihiyle tutulur.
- Eksik/şüpheli bilgi varsa otomatik sahne veya iddia incelemeye alınır.

## 7. Karakter ve kısa film devamlılığı
- Mert ve Duru'nun canonical karakter sürümü tek kaynak kabul edilir.
- Model, rig, yüz, saç, kıyafet, ses, viseme ve hareket sürümü kayıtlıdır.
- Sahne üretimi karakter kimliği için referans varlıklarını kullanır.
- Yüz/beden/giysi değişikliği yeni varyant olarak kaydedilir; canonical karakter sessizce değiştirilmez.
- Önce hazır ve lisansı doğrulanmış karakter; gerekirse Blender içinde özelleştirme. Sıfırdan modelleme son seçenek.
- AI video üretimi yardımcı adaptördür; finalde sahne ve karakter devamlılığı QA'dan geçer.

## 8. Medya, güvenlik ve gizlilik
- Orijinal ilan fotoğrafları varsayılan olarak kalıcı saklanmaz; kullanıcı seçimi ve açık saklama politikası gerekir.
- Kaynak ve üretilmiş dosyalar ayrı etiketlenir.
- Upload MIME/uzantı/boyut kontrolü ve güvenli dosya adıyla alınır.
- Secrets yalnızca sunucu secret manager/ortam değişkenlerinde tutulur.
- Service-role key tarayıcıya gönderilmez; RLS kullanıcılar arası erişimi sınırlar.
- Worker yalnızca kendi işine ait imzalı dosya erişimini alır.
- Harici hesaplara yayın, ücretli servis kullanımı ve geri döndürülemez dış işlemler açık kullanıcı onayı gerektirir.

## 9. Lisans ve maliyet defteri
Her kod, model ağırlığı, karakter, texture, font, ses, müzik ve hazır asset için ayrı lisans kaydı gerekir. Kod lisansı model/asset lisansının yerine geçmez. Ticari kullanım, türev eser, atıf, dağıtım ve model ağırlığı koşulları doğrulanmadan prodüksiyona alınmaz. GPU/servis maliyeti iş bazında ölçülür; ücretli kullanım varsayılan olarak kapalıdır.

## 10. Kabul ilkesi
Bir özellik yalnızca UI'si yazıldığı için tamamlanmış sayılmaz. Gerçek dosya girdisi, worker çalıştırması, hata yönetimi, çıktı doğrulaması ve QA kanıtı gerekir.