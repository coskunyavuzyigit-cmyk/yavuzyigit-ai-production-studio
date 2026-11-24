# Açık Kaynak Araç Denetimi

Bu dosya aday listesi ve değerlendirme şablonudur; burada adı geçen hiçbir proje henüz onaylanmış üretim bağımlılığı değildir.

## Değerlendirme ölçütleri

- Kaynak depo ve resmi dokümantasyon doğrulaması
- Lisans metni ve ticari kullanım/dağıtım yükümlülükleri
- Son sürüm, son commit, açık hata ve bakım etkinliği
- İşletim sistemi, GPU/VRAM, RAM ve disk gereksinimi
- API/CLI/SDK ve otomasyon desteği
- Blender, ComfyUI, FFmpeg, n8n ve OpenCode ile gerçek uyumluluk
- Çıktı kalitesi, kararlılık ve üretim lisansı
- Veri gizliliği, model ağırlıklarının lisansı ve dış servis bağımlılığı

## Aday kategorileri

| İhtiyaç | İncelenecek adaylar | Karar |
|---|---|---|
| Video montajı | FFmpeg, Remotion, Kdenlive/MLT | FFmpeg ilk MVP adayı; lisans ve kullanım modeli teyit edilecek |
| 3D/mimari | Blender | Güçlü temel aday; Python otomasyonu prototiplenecek |
| Görsel/video pipeline | ComfyUI ve eklentileri | Eklenti ve model lisansları ayrı denetlenecek |
| Coğrafi veri | QGIS, GDAL, GeoPandas | Parsel doğruluğu için değerlendirilecek |
| Seslendirme | Piper ve alternatif TTS motorları | Ses/model lisansları ve Türkçe kalite test edilecek |
| İş akışı | Bu projeye özel n8n | Mevcut 21 workflow'dan tamamen ayrı tutulacak |
| Ajan orkestrasyonu | OpenCode ve yerel/uzak LLM seçenekleri | Araç/komut izinleri sınırlandırılacak |

## Önceki öneriler hakkında doğrulama notu

OpenMontage, OpenHouse 3D, OpenField, OpenFilm Agent ve CineStudio isimleri önceki keşif aşamasında aday olarak anılmıştır. Resmî GitHub deposu, güncel kod, lisans ve sürdürülebilirlik bilgileri tek tek doğrulanmadan bu isimler mimaride zorunlu bileşen sayılmayacaktır.

## Karar kaydı şablonu

Her aday için şu bilgiler doldurulmalı:
- Proje adı ve resmî depo URL'si
- İnceleme tarihi ve incelenen commit/tag
- Lisans ve model ağırlığı lisansı
- Son anlamlı bakım tarihi
- Kurulum ve donanım ihtiyacı
- Test edilen kullanım senaryosu
- Test sonucu ve bilinen sınırlamalar
- Kabul / koşullu kabul / ret gerekçesi
