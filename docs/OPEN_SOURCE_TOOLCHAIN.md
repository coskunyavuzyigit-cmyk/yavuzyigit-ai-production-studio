# Açık Kaynak Prodüksiyon Araç Zinciri

Bu belge YAVUZYİĞİT AI Emlak Prodüksiyon Stüdyosu için seçilen, değerlendirilen ve henüz doğrulanmamış araçları ayırır. Bir yazılımın açık kaynak olması; veri, harita karoları, yapay zekâ modeli, font, ses veya eklenti lisanslarının da serbest olduğu anlamına gelmez.

## Karar özeti

| Katman | Araç | Lisans / durum | Stüdyodaki görevi |
|---|---|---|---|
| Coğrafi veri ve doğrulama | QGIS | GPL-2.0-or-later | Parsel GeoJSON/SHP/KML kontrolü, koordinat sistemi ve geometri incelemesi |
| Web harita ve sınır katmanı | MapLibre GL JS | BSD-3-Clause | Harita üzerinde gerçek GeoJSON poligonunu çizmek, kamera rotası ve etiket katmanı |
| 3B arazi ve kamera | Blender | GPL-3.0-or-later | Arazi, kamera animasyonu, ışık, gerçek parsel çizgisini 3B sahneye aktarma |
| GIS–Blender köprüsü | BlenderGIS | Lisans ve bakım kontrolü gerekli | DEM, raster, vektör ve coğrafi referanslı veriyi Blender'a aktarma; lisans doğrulanana kadar zorunlu bağımlılık değil |
| Video birleştirme | FFmpeg | LGPL-2.1-or-later; bazı opsiyonel bileşenler GPL | Video, ses, altyazı, format, bitrate ve teslim çıktısı |
| Yerel Türkçe TTS adayı | Piper + tr_TR ses modeli | Motor ve model lisansları ayrı doğrulanmalı | Çevrimdışı Türkçe anlatım prototipi; ses kalitesi ve ticari kullanım testi bekliyor |
| Görsel üretim adayı | ComfyUI | GPL-3.0; model/eklenti lisansları ayrı | Yalnızca açıkça temsili mimari/atmosfer görselleri; parsel sınırı üretmek için kullanılamaz |

## Kaynak depolar ve resmi belgeler

- QGIS: https://github.com/qgis/QGIS — https://qgis.org/license/
- MapLibre GL JS: https://github.com/maplibre/maplibre-gl-js — BSD-3-Clause
- Blender: https://github.com/blender/blender — https://www.blender.org/about/license/
- BlenderGIS: https://github.com/domlysz/BlenderGIS — lisans dosyası, sürüm uyumu ve bakım durumu entegrasyon öncesi ayrıca doğrulanacak
- FFmpeg: https://github.com/FFmpeg/FFmpeg — https://ffmpeg.org/legal.html
- ComfyUI: https://github.com/Comfy-Org/ComfyUI — GPL-3.0
- Piper: https://github.com/rhasspy/piper — proje/model lisansları ayrı kontrol edilmeli

## Uygulama kararı

1. Parsel geometrisinin tek doğruluk kaynağı GeoJSON'dur. QGIS doğrulama aracı, MapLibre görsel katman, Blender ise aynı geometrinin 3B sahne karşılığıdır.
2. İlk sürümde tarayıcıdaki MapLibre ile 2B sınır animasyonu üretilebilir. 3B arazi/oblik kamera için Blender render worker kullanılır.
3. Harita karo sağlayıcısı ayrıca seçilir. Google Earth/Maps ekran görüntüsü, tile veya imagery izinsiz indirilmez/saklanmaz. Kaynağın kullanım şartları, atıf zorunluluğu, ticari kullanım ve video çıktısı izni onaylanmadan üretime alınmaz.
4. OpenStreetMap verisi kullanılırsa ODbL atfı ve veri kullanım şartları teslimde korunur. OSM taban haritası tek başına yüksek çözünürlüklü uydu görüntüsü değildir.
5. TTS motoru ve ses modeli ayrı lisanslanır. Her ses modelinin MODEL_CARD/lisansı ve ticari kullanım izni kayıt altına alınır. Türkçe telaffuz, sayı/ölçü okuma ve doğal ton test edilmeden varsayılan ses seçilmez.
6. ComfyUI modelleri ve custom node'lar için ayrı lisans envanteri tutulur. Modelin lisansı bilinmiyorsa ticari işte kullanılmaz.
7. Render worker Vercel serverless fonksiyonlarında çalıştırılmaz; ayrı worker/container olarak tasarlanır.

## Kabul edilmeden önce

- Sürüm sabitleme ve kaynak URL
- Lisans metni ve varsa model/eklenti lisansı
- Ticari kullanım ve atıf gereksinimi
- Güvenlik/bakım/son commit incelemesi
- Sakarya-Kocaali gerçek parselinde geometri ve görsel doğruluk testi
- 1080x1920 MP4, süre, ses ve render performans testi

## Lisans ilkesi

Stüdyo uygulamasının kendi lisansı ile kullandığı araçların lisansları birbirinden ayrıdır. GPL/AGPL bileşenlerini uygulama içine bağlamadan önce dağıtım biçimi ve türev eser etkisi hukukî/teknik olarak incelenir. Bağımsız CLI/worker süreçleri kullanmak lisans yükümlülüklerini otomatik olarak ortadan kaldırmaz.


## Kısa animasyon ve karakter stüdyosu

| Katman | Depo / kaynak | Lisans bilgisi | Karar |
|---|---|---|---|
| İnsan karakter üretimi | https://github.com/makehumancommunity/mpfb2 | Kod GPL-3.0; MPFB'nin paketlenmiş temel varlıkları CC0 1.0; harici asset pack'ler ayrı kontrol | Mert ve Duru'nun özgün 3B taban modellerini üretmek için ana aday |
| Karakter rig | https://projects.blender.org/Mets/CloudRig | GPL-3.0-or-later (Blender Extensions kaydı) | Blender Studio'nun rig üretim eklentisi; Blender sürümü uyumluluğu test edilmeli |
| Eğitim/test karakteri | https://studio.blender.org/characters/rain/v3/ | CC-BY | Rig/animasyon hattını sınamak için; atıf zorunlu, final ana karakteri olmak zorunda değil |
| 2B geleneksel animasyon | https://github.com/opentoonz/opentoonz | BSD-3-Clause | El çizimi/cut-out 2B kısa film alternatifi |
| Vektör/bone 2B | https://github.com/synfig/synfig | GPL-3.0 | İki boyutlu rig ve tween animasyon alternatifi |
| Dijital çizim ve frame-by-frame | https://github.com/KDE/krita | GPL-3.0 | Karakter konsepti, storyboard çizimleri ve 2B kare animasyon |
| Animasyon prodüksiyon takibi | https://github.com/cgwire/kitsu | AGPL-3.0 | İleride görev, shot, review ve teslim takibi; ilk MVP'de kurulum zorunlu değil |
| AI karakter hareketi | https://github.com/Comfy-Org/workflow_templates | Workflow dosyaları; kullanılan model/düğüm lisansları ayrıca | Resmî Wan Animate iş akışları için başlangıç |
| Video birleştirme düğümleri | https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite | GPL-3.0 (depo lisansını kurulumda yeniden doğrula) | ComfyUI video frame/clip işlemleri |
| Poz/yüz ön işleme | https://github.com/Fannovel16/comfyui_controlnet_aux | Lisans ve alt model dosyaları ayrıca denetlenmeli | Wan Animate v1 gibi akışlarda pose/face preprocessing |
| Kimlik/referans koşullama | https://github.com/cubiq/ComfyUI_IPAdapter_plus | GPL-3.0 (depo lisansını kurulumda yeniden doğrula); IP-Adapter ağırlıkları ayrı | Alternatif karakter tutarlılığı testleri; Wan Animate için her zaman gerekli değil |
| Yardımcı ComfyUI düğümleri | https://github.com/kijai/ComfyUI-KJNodes | Lisans/bağımlılık kontrolü gerekli | Yalnızca seçilen workflow açıkça gerektirirse |

### Karakter üretim kararı
- Mert ve Duru, MPFB ile başlangıç mesh'i oluşturulup Blender'da özgün yüz, saç, kıyafet ve materyal tasarımıyla ayrıştırılacak.
- MPFB kod lisansı ile temel asset lisansı birbirinden farklıdır: kod GPL-3.0, MPFB paketlenmiş temel grafik asset'leri CC0 1.0 olarak tanımlanmıştır. Harici asset pack'ler otomatik CC0 varsayılmaz.
- CloudRig GPL-3.0-or-later eklentidir. Proje dağıtım biçimi ve bağımlılık kullanımı lisans kontrolüne tabidir.
- Rain v3 CC-BY eğitim rig'i için atıf korunur.
- AI video tarafında Wan Animate resmi ComfyUI workflow'u ilk araştırma/test adayıdır. Model ağırlıklarının lisansı, VRAM ihtiyacı ve ticari kullanım şartları ayrıca kontrol edilmeden müşteri videosunda kullanılmaz.
- Kitsu AGPL-3.0 olduğu için stüdyonun kendi kapalı/özel uygulamasına kod gömülmez; ayrı servis olarak kurulması ve AGPL yükümlülükleri hukukî/teknik incelemeye tabidir.


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
