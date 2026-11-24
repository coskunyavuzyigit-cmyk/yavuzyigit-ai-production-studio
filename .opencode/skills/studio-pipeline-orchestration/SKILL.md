---
name: Stüdyo Açık Kaynak Pipeline Orkestrasyonu
description: Emlak videosu ve kısa animasyon üretimini stüdyo içinden açık kaynak motor adaptörleriyle yönet; lisans, kalite ve iş kuyruğu kontrollerini uygula.
---

# Stüdyo Pipeline Orkestrasyonu

## Ana kural
Kullanıcı tek stüdyo panelinde kalır. Harici motor GUI'si kullanıcı iş akışının parçası değildir. Motorlar ayrı worker/adaptör olarak çağrılır; her çağrı job ID, giriş manifest'i, sürüm, lisans kaydı, log ve çıktı manifest'i taşır.

## Seçilen ilk teknoloji sırası
1. Ara 3D Gen: hazır gerçekçi karakter üretimi ve GLB/FBX export pilotu. Küçük proje/olgunluk riski nedeniyle kalite kapısı zorunlu.
2. Blender: ana 3B sahne, karakter animasyonu, ışık, kamera ve render.
3. FFmpeg + OpenTimelineIO: montaj zaman çizelgesi, ses ve nihai encode.
4. Piper: yerel Türkçe TTS adayı; her ses modeli lisans ve kalite testinden geçer.
5. Rhubarb Lip Sync: ses -> ağız cue -> karakter viseme/shape key mapping.
6. QGIS/GDAL + MapLibre: gerçek parsel geometri kontrolü ve panel harita katmanı.
7. ComfyUI + Wan 2.2 TI2V-5B: deneysel AI video adaptörü; geometri/karakter doğruluğunun tek kaynağı değildir.
8. FreeMoCap: isteğe bağlı mocap; alpha/AGPL ve kalibrasyon koşulları değerlendirilir.

## Job yaşam döngüsü
- queued -> validating -> running -> reviewing -> succeeded/failed/cancelled.
- Girdi dosyaları hash ile sabitlenir; job yeniden çalıştırıldığında aynı sürüm/seed/parametreler kullanılır.
- Worker heartbeat ve ilerleme bildirir; hata durumunda log ve makinece okunur hata kodu döndürür.
- Retry yalnız idempotent işlerde yapılır.
- Render ve model indirme Vercel serverless fonksiyonunda çalıştırılmaz.

## Kalite kapıları
- Lisans/asset provenance eksikse job bloklanır.
- Emlak parsel geometrisi kaynak dosya/CRS doğrulanmadan render'a girmez.
- Karakter rig, mesh, yüz, materyal ve animasyon testinden geçmeden canonical karakter olamaz.
- Türkçe ses doğal değilse otomatik final onayı verilmez.
- Lip-sync cue üretimi tek başına PASS sayılmaz; yakın yüz planı izlenir.
- AI video çıktısı kare tutarlılığı ve karakter kimliği açısından kontrol edilir.
- FFmpeg çıktısı çözünürlük, oran, fps, codec, ses seviyesi, clipping, siyah kare ve süre testlerinden geçer.

## Güvenlik ve lisans
- Model/voice/asset dosyaları dış kaynak kodundan ayrı lisans metadata'sına sahiptir.
- Harici workflow veya node otomatik yüklenmez; pinned commit, lisans ve güvenlik incelemesi yapılır.
- Kullanıcı onayı olmadan ücretli GPU, API veya yayın işlemi başlatılmaz.
- Mevcut kullanıcının 21 n8n workflow'una hiçbir bağlantı kurulmaz.
