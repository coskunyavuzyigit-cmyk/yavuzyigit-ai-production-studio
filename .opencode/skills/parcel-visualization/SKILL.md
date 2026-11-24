---
name: Parsel Görselleştirme
description: Emlak tanıtım videosunda doğrulanmış parsel sınırını uydu/harita ve 3B arazi üzerinde doğru, net ve sinematik biçimde işaretlemek için kullan.
---

# Parsel Görselleştirme Uzmanlığı

## Hedef
İzleyici ilk 3–5 saniyede hangi taşınmazın satıldığını tereddütsüz anlamalı. Parsel sınırı süs değil, videonun ana kanıt katmanıdır.

## Kaynak ve doğruluk
1. Önce ilan kaydındaki GeoJSON/KML/SHP veya TKGM gibi yetkili kaynaktan alınmış geometriyi bul.
2. Kaynağı, edinim tarihini, koordinat referans sistemini (CRS), alanı ve doğrulama durumunu kaydet.
3. GeoJSON koordinat sırası [longitude, latitude] şeklindedir; CRS dönüşümü açıkça yapılır.
4. Poligon geçerli mi, kapanıyor mu, kendini kesiyor mu, beklenen alanla uyumlu mu kontrol et. Alan uyuşmazlığında sessizce düzeltme yapma; QA hatası üret.
5. Üretken yapay zekâya sınır çizdirme. Görsel üretim modeli parsel geometrisi için hiçbir zaman doğruluk kaynağı değildir.
6. Geometri doğrulanmamışsa kırmızı sınır gösterme; sahneyi beklemeye al.

## Görsel kurgu
1. Açılış: geniş çevre/uydu planı.
2. Kamera yumuşakça parsele yaklaşırken çevre sabit kalır.
3. Parsel sınırı tek, kesintisiz, yüksek kontrastlı kırmızı çizgiyle çizilir; köşeler ve sınır hattı gerçek geometriye birebir oturur.
4. Sınır kısa süre parlak çizgi/çizim animasyonuyla belirir; parsel içi hafif saydam dolgu olabilir.
5. Kamera sınırın tamamını gösterecek açı ve ölçekte durur. Sonra gerçek mülk fotoğraflarına geçer.
6. Harita yönü, kuzey, yol ve çevre ilişkisi değiştirilmez. Perspektif/3B kamera varsa aynı coğrafi koordinat dönüşümü kullanılır.

## Araç tercihleri
- QGIS: geometriyi incele, doğrula ve dışa aktar.
- MapLibre GL JS: web sahnesinde GeoJSON fill/line katmanı ve kontrollü kamera.
- Blender: 3B arazi ve kamera hareketi; geometriyi koordinatlı vektör olarak içe aktar.
- BlenderGIS yalnızca lisansı, sürümü ve veri kaynağı uygunluğu doğrulandıktan sonra opsiyonel adaptör olarak kullan.

## Görsel kalite
- Parsel çizgisi ince uydu görüntüsünde kaybolmamalı; ama çevreyi kapatacak kadar kalın olmamalı.
- Kırmızı çizgi taşınmazın gerçek köşelerini takip etmeli, yolun/komşu parselin üzerine taşmamalı.
- En az bir karede sınırın tamamı ve çevre ilişkisi aynı anda görünmeli.
- Zoom hareketi yumuşak, sabit hızlanma/yavaşlama eğrili olmalı; titreme, ani sıçrama ve dijital zoom bulanıklığı olmamalı.
- Parsel alanı yalnızca doğrulanmış kaynakla uyumluysa ekrana alınır.

## Harita ve görüntü lisansı
Google Earth/Maps görüntülerini izinsiz indirme, kırpıp yeniden dağıtma veya ticari video arka planı olarak kullanma. Kaynak sağlayıcının güncel şartlarını ve atıf/çıktı kısıtlarını doğrula. OSM kullanılırsa ODbL atfını koru; OSM verisini uydu fotoğrafı gibi sunma.

## Çıktı
- Kaynak geometri dosyası ve metadata
- Parsel sınırı animasyonu
- Kaynak/CRS/alan doğrulama raporu
- Geometri ve görsel üst üste kontrol ekran görüntüsü
