# Açık Kaynak Teknoloji Seçimi — Stüdyo İçin Onaylı Aday Mimari

Bu dosya genel bir link listesi değildir. Her bileşen için rol, seçilme gerekçesi, lisans riski, entegrasyon kararı ve kabul testi belirler. “Seçildi” mimari aday demektir; kurulum ve test tamamlanmadan “çalışıyor” anlamına gelmez.

## 1. Nihai kısa liste

| İhtiyaç | Birincil seçim | Yedek/alternatif | Karar |
|---|---|---|---|
| Gerçekçi hazır 3B karakter | Ara 3D Gen (olatunde85/3d-gen) | MPFB2 + Blender | İlk entegrasyon pilotu; GLB/FBX export ve CC0 MakeHuman taban assetleri cazip. Küçük topluluk/erken olgunluk riski nedeniyle kalite testinden geçmeden Mert-Duru canonical varlığı olmayacak. |
| Karakter sahnesi, yüzey, ışık, kamera ve final 3B | Blender | — | Ana 3B üretim motoru; headless worker olarak çalışır. |
| Rig/karakter kontrolü | Blender Rigify (yerleşik) | CloudRig | Önce yerleşik Rigify ile daha az bağımlılıklı temel test. CloudRig gelişmiş rig ihtiyacı çıkarsa eklenir. |
| İnsan hareket yakalama | FreeMoCap | Manuel/retarget edilmiş animasyon | Opsiyonel mocap worker; tek kamera ile kusursuz doğruluk beklenmez. Çoklu kamera, kalibrasyon ve AGPL-3.0 koşulları değerlendirilir. |
| Konuşma ağız zamanlaması | Rhubarb Lip Sync | Blender shape keys/manuel düzeltme | Ses dosyasından ağız cue zamanları çıkarır. Türkçe viseme eşlemesi ve manuel QA gerekir. |
| Yerel Türkçe ses | Piper TTS | Kayıtlı insan sesi / ileride başka yerel TTS | Çevrimdışı prototip adayı. Türkçe model var; doğallık ve her modelin ticari lisansı ayrı kontrol edilecek. |
| Video üretim modeli | ComfyUI + Wan 2.2 TI2V-5B | 14B I2V/T2V yalnız güçlü GPU'da | AI hareket/atmosfer için opsiyonel. Resmî rehber 5B için 8 GB VRAM offload seçeneği belirtiyor; hız/kalite garantisi değil. |
| Video/ses montajı | FFmpeg | — | Birincil render/mux/encode aracı. |
| Kurgu zaman çizelgesi | OpenTimelineIO | Stüdyo içi JSON shot planı | Klip sırası, track ve zaman bilgisini taşır; medya dosyası veya render motoru değildir. |
| Coğrafi veri doğrulama | QGIS + GDAL/OGR | — | KML/GeoJSON/SHP, CRS, geometri geçerliliği ve koordinat dönüşümü. |
| Web harita önizleme | MapLibre GL JS | — | Panelde doğrulanmış GeoJSON parsel katmanı. Uydu altlığı lisansı ayrıca seçilir. |
| Prodüksiyon/shot takip | Kendi Studio DB'miz | Kitsu ayrı servis olarak ileride | Kitsu AGPL-3.0 ve ek servis yükü getirir; MVP'ye gömülmez. |

## 2. Depolar ve resmi kaynaklar

### Karakter / 3B / hareket
- Ara 3D Gen: https://github.com/olatunde85/3d-gen
  - MIT kod; proje dokümanı CC0 MakeHuman temel assetleri, GLB/FBX/OBJ export, otomatik rig, yüz ifadeleri/lip-sync shape key'leri ve 259 animasyon bildiriyor.
  - Kendi Studio arayüzünde 5 sahne/5 karakter kısa film akışı var. Biz ayrı ürün olarak değil, karakter oluşturma/export motoru olarak inceleyeceğiz.
  - Küçük topluluk ve erken olgunluk riski var. Blender import, skeleton, materyal, viseme, export ve lisans kaynakları test edilir.
- MPFB2: https://github.com/makehumancommunity/mpfb2
  - Yedek/özelleştirme hattı. Kod GPL-3.0; paketlenmiş temel assetler CC0 1.0 olarak belirtiliyor. Harici asset pack'ler ayrı lisanslı olabilir.
- Blender: https://github.com/blender/blender
  - Ana sahne/animasyon/render. Blender'ın sanat eseri/video çıktısının kullanıcıya ait olabileceği lisans açıklamasında belirtilir.
- Blender Rigify: Blender ile dağıtılan rig üretim aracı; sürüm dokümanı ve uyumluluğu doğrula.
- CloudRig: https://projects.blender.org/Mets/CloudRig
  - Gelişmiş rig ihtiyacı oluştuğunda ekle; ilk MVP'de zorunlu değil.
- FreeMoCap: https://github.com/freemocap/freemocap
  - Markerless mocap; Blender'a 3B iskelet hareketi aktarımı. Proje alpha olabilir ve AGPL-3.0 koşulları var; pilot/ayrı servis.
- Rhubarb Lip Sync: https://github.com/DanielSWolf/rhubarb-lip-sync
  - MIT. Ses dosyasından ağız şekli zamanlaması üretir. Cue -> karakter viseme/shape-key eşleme adaptörü stüdyoda yazılır.

### Ses
- Piper: https://github.com/OHF-Voice/piper1-gpl
  - Yerel TTS motoru. Türkçe sesler mevcut; model kartı/lisansı her ses için ayrı okunmalı.
  - Türkçe aday ses kataloğu: https://piperhub.org/voices/language/tr/
  - Beş örnek metinle (arsa, m², ada/parsel, Türkçe özel isimler, fiyat) telaffuz ve doğallık puanlaması yapılmadan Mert/Duru sesi sabitlenmez.
- Ses post-prodüksiyon: FFmpeg filtreleri ilk MVP için yeterli. İleri miks arayüzü ihtiyacı doğarsa Audacity/Ardour ayrıca değerlendirilir.

### Görüntü / video
- ComfyUI: https://github.com/Comfy-Org/ComfyUI
- ComfyUI resmi Wan 2.2 rehberi: https://docs.comfy.org/tutorials/video/wan/wan2_2
- Wan 2.2 upstream: https://github.com/Wan-Video/Wan2.2
  - TI2V-5B için 8 GB VRAM'de offloading seçeneği açıklanıyor. 14B modeller daha ağırdır.
  - Model lisansı Apache-2.0 olarak belirtilir; indirilen ağırlık/LoRA/encoder dosyalarının kaynak ve lisansı ayrıca kaydedilir.
- FFmpeg: https://github.com/FFmpeg/FFmpeg — https://ffmpeg.org/legal.html
- OpenTimelineIO: https://github.com/AcademySoftwareFoundation/OpenTimelineIO
  - Edit kararlarını, track ve klip zamanlamasını saklar; medyayı içine gömmez ve render yapmaz.

### Harita / emlak
- QGIS: https://github.com/qgis/QGIS
- GDAL: https://github.com/OSGeo/gdal
- MapLibre GL JS: https://github.com/maplibre/maplibre-gl-js
- MapLibre GL JS lisansı BSD-3-Clause; raster/uydu tile sağlayıcısının lisansı ayrıdır.
- OSM verisi kullanılırsa ODbL atıf ve veri koşulları uygulanır. Google Earth/Maps tile veya görüntüleri izinsiz çekilmez/saklanmaz.

## 3. Bilerek ana bağımlılık yapmadıklarımız
- Kdenlive: güçlü masaüstü editör; ancak ayrı masaüstü arayüzü gerektirir. Stüdyo içi otomatik montaj için FFmpeg + OTIO daha uygun.
- Kitsu: AGPL-3.0 ve ayrı servis işletme yükü. İlk aşamada kendi proje/shot/review tablolarımız yeterli.
- Wan 2.2 14B: güçlü GPU olmadan ana varsayılan olamaz; 5B ile prototip.
- Piper Türkçe sesleri: lisansı belirsiz model otomatik kullanılmaz. Motor lisansı model lisansını kapsamaz.
- Kaynağı belirsiz karakter paketleri, kullanım şartları belirsiz dış içerikler ve lisanssız mocap kullanılmaz.

## 4. Stüdyo içi servis sözleşmeleri
- character-service: Ara3D/MPFB çıktısını normalize et; GLB/FBX metadata, skeleton, morph target, texture ve lisansı kontrol et.
- blender-worker: .blend scene, camera, lighting, animation ve render; job manifest ile çalışır.
- mocap-service: FreeMoCap çıktısını retarget/temizleme; insan onayı ve kaynak lisansı.
- voice-service: Piper TTS veya kayıtlı ses, telaffuz sözlüğü, WAV normalize.
- lipsync-service: Rhubarb cue üretir; cue -> karakter viseme mapping.
- comfyui-worker: Wan workflow; model/version/seed/GPU kaydı.
- edit-service: OTIO shot list üretir; FFmpeg final encode ve audio mix.
- geo-service: GDAL/QGIS doğrulama; geometri hash'i ve CRS bilgisi saklanır.
Tüm servisler stüdyo API'sine job alır ve sonuç manifest'i döndürür. UI doğrudan motor yönetim arayüzlerini açmaz.

## 5. Kabul testleri
1. Ara3D'den erkek ve kadın GLB export et; Blender'a aktar; rig, göz, diş, el, materyal ve yüz shape key'lerini kontrol et.
2. Aynı karakterleri FBX export et; rig/animasyon farkını kaydet. Canonical format test sonucu ile seçilir.
3. Idle, walk, turn, explain ve talk hareketlerini test et; karakter kimliği bozulmasın.
4. Türkçe 5 test cümlesiyle Piper seslerini puanla; lisans kartı yoksa ticari kullanım bloke.
5. Rhubarb çıktısını Blender viseme isimlerine eşle; yakın yüz planında manuel QA.
6. Wan 2.2 TI2V-5B ile 3-5 saniyelik test klibi; VRAM, süre, frame tutarlılığı ve lisans kaydı.
7. FFmpeg ile 1080x1920, 25/30fps, H.264/AAC MP4; clipping, siyah kare, oran ve süre kontrolü.
8. QGIS/GDAL ile test GeoJSON'unu doğrula; MapLibre ve Blender'da aynı polygon koordinatları/hash'i korunsun.
9. Tüm job'lar panelde log, durum, hata, maliyet ve çıktı manifest'i ile görünsün.

## 6. Lisans ve güvenlik kapısı
- Repo kod lisansı, model ağırlığı, karakter dosyası, mocap, ses modeli, müzik, font ve texture ayrı kaydedilir.
- AGPL/GPL bileşenlerinin dağıtım ve servis yükümlülükleri değerlendirilir.
- GitHub'da public olmak tek başına ticari kullanım hakkı kanıtı değildir.
- Otomatik kurulumdan önce sabit commit/tag, checksum, lisans ve bağımlılık güvenlik taraması gerekir.
- Ücretli GPU/servis varsayılan kapalıdır; ücretsiz/yerel worker kapasitesi ölçülür.

## 7. Entegrasyon sırası
1. Ara 3D Gen karakter export pilotu + Blender import QA
2. FFmpeg/OTIO edit pipeline
3. Piper Turkish voice audition + Rhubarb viseme adapter
4. QGIS/GDAL/MapLibre geo pipeline
5. ComfyUI Wan 2.2 TI2V-5B deneysel video worker
6. FreeMoCap opsiyonel motion capture worker

Önce tekrarlanabilir ve kontrol edilebilir üretim hattı kurulur; ağır üretken video ve ileri mocap sonra eklenir.
