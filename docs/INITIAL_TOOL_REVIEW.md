# İlk Açık Kaynak Teknik İncelemesi

İnceleme tarihi: 2026-11-24

Bu not, GitHub'daki proje README ve lisans dosyalarının ilk kontrolüdür. Henüz kurulum, performans, model ağırlığı veya uçtan uca video üretim testi yapılmadı. Bu nedenle araçlar üretim ortamına alınmış sayılmaz.

## İlk değerlendirme

| Bileşen | Resmî depo | Kaynakta doğrulanan bilgi | İlk karar |
|---|---|---|---|
| 3D ve animasyon | https://github.com/blender/blender | README, Blender'ı modelleme, animasyon, render, compositing ve video düzenleme dahil 3D üretim paketi olarak tanımlıyor; bütün ürün için GPL-3.0 açıklaması veriyor. | **MVP adayı.** Ayrı worker üzerinde Python ile sahne üretimi prototiplenecek. |
| Video işleme | https://github.com/FFmpeg/FFmpeg | README ses, video, altyazı ve medya metadata işleme araçlarını doğruluyor. Kod tabanı ağırlıklı LGPL; isteğe bağlı bileşenlerde GPL lisansları bulunabiliyor. | **MVP adayı.** Dağıtım/derleme seçenekleri ve codec lisansları ayrıca kontrol edilecek. |
| Görsel üretim orkestrasyonu | https://github.com/Comfy-Org/ComfyUI | README modüler node tabanlı görsel üretim motoru olduğunu belirtiyor; depo GPL-3.0 lisans metni içeriyor. Model ve özel node lisansları ayrıca değerlendirilmelidir. | **Koşullu aday.** Model lisansı, GPU ihtiyacı ve uzak servis bağımlılığı netleşmeden zorunlu bağımlılık yapılmayacak. |
| Coğrafi veri ve harita | https://github.com/qgis/QGIS | README QGIS'i açık kaynak CBS olarak tanımlıyor; depo GPL-2.0 lisans metni içeriyor. | **Teknik yardımcı araç.** Parsel geometrisi ve harita hazırlama işlerinde değerlendirilecek; web uygulamasına kod gömme kararı verilmedi. |
| Coğrafi veri altyapısı | https://github.com/OSGeo/gdal | Resmî depo ve GDAL projesi doğrulandı; bu ilk turda kök lisans dosyası doğrulanamadı. | **Beklemede.** Lisans ve gereken alt bileşenler doğrulanmadan entegrasyon yok. |
| Türkçe seslendirme | https://github.com/OHF-Voice/piper1-gpl | README yerel TTS motoru, Python/C++ API ve HTTP arayüzü bulunduğunu söylüyor; ayrıca proje yeni maintainer aradığını belirtiyor. | **Koşullu aday.** Proje bakım riski ve her ses modelinin ayrı lisansı incelenecek; Türkçe ses örneği test edilmeden seçilmeyecek. |

## Lisans ve mimari uyarıları

- Blender, ComfyUI ve QGIS gibi copyleft lisanslı projeleri ayrı süreç/servis olarak çalıştırmak ile kodlarını ürünün içine bağlamak aynı hukuki sonuçları doğurmayabilir. Entegrasyon biçimi dağıtım öncesi ayrıca incelenecek.
- FFmpeg derlemesinde etkinleştirilen codec ve kütüphaneler lisans yükümlülüklerini değiştirebilir. Sadece gerekli bileşenler seçilecek.
- ComfyUI'nin kod lisansı, kullanılan model ağırlıklarının veya özel node'ların lisansını otomatik olarak kapsamaz.
- Piper kodu ile indirilen ses modellerinin kullanım koşulları ayrı ayrı kontrol edilecek. Ticari kullanım izni varsayılmayacak.
- Parsel sınırı, ölçü, koordinat ve imar bilgileri AI tarafından üretilmeyecek veya değiştirilmiş gibi gösterilmeyecek. Görsel konseptler açıkça temsili olarak etiketlenecek.

## Önceki aday adları

OpenMontage, OpenHouse 3D, OpenField, OpenFilm Agent ve CineStudio adları tek başına güvenilir proje kimliği değildir. İlk GitHub aramasında OpenMontage adıyla birden fazla, farklı sahibin deposu çıktı. Resmî ürün, lisans, bakım ve kod kalitesi doğrulanmadan bu isimlerden hiçbiri kullanılmayacak.

## Sıradaki doğrulama adımları

1. Blender ve FFmpeg için ayrı worker prototipi ve minimal 9:16 render.
2. ComfyUI için model/eklenti lisans envanteri ve donanım profili.
3. Piper Türkçe ses kalitesi, model lisansı ve bakım riski testi.
4. Parsel verisi için GeoJSON/KML doğrulama ve sabit koordinatlı overlay.
5. Her bileşenin lisans ve dağıtım biçimi için son karar kaydı.

**Durum:** Araştırma ön elemesi. Henüz video motoru çalıştırılmadı ve build/test sonucu yok.
