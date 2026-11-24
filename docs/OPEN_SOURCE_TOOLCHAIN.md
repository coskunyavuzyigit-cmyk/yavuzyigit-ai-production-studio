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
