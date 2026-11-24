---
name: Blender Karakter Üretim Hattı
description: Hazır ve lisansı doğrulanmış gerçekçi karakterleri stüdyo varlık kütüphanesine al, Blender worker üzerinden sahne ve animasyon üret.
---

# Blender Karakter Üretim Hattı

## Amaç
Kullanıcı Blender arayüzüne geçmeden, karakter ve sahne işlemlerini stüdyo panelinden yönetebilsin. Blender arka planda çalışan bir üretim motorudur.

## Hazır karakter önceliği
1. Önce hazır fotogerçekçi karakter adaylarını değerlendir.
2. Model dosyası, rig, yüz animasyonu, viseme, texture ve lisanslarını ayrı ayrı kontrol et.
3. Lisans ticari kullanıma ve istenen dağıtım biçimine izin vermiyorsa kullanma.
4. Hazır karakter yeterli değilse MPFB2 gibi araçlarla özelleştir; sıfırdan modelleme son seçenek.
5. Her içe aktarılan karaktere kaynak URL, sürüm, lisans, atıf ve dosya hash'i kaydet.

## Araçlar
- Blender: ana sahne, materyal, rig, animasyon, kamera, ışık ve render motoru.
- MPFB2: https://github.com/makehumancommunity/mpfb2
- CloudRig: https://projects.blender.org/Mets/CloudRig
  - Resmî kaynak ve uyumlu Blender sürümünü doğrula.
  - Kaynaktan kurulum gerekiyorsa submodule talimatlarını izle.
- Blender Studio Rain v3: https://studio.blender.org/characters/rain/v3/
  - CC-BY atıf koşullarını koru; lisans ve kullanım kapsamını yeniden kontrol et.
- Hazır karakter adayları: docs/OPEN_SOURCE_TOOLCHAIN.md içindeki envanter. Hiçbir adayı lisans kontrolü yapılmadan varsayılan karakter olarak seçme.

## Worker sözleşmesi
- Blender headless/background modunda ayrı worker container veya makinede çalışır.
- Panel yalnızca render job oluşturur, durumunu izler ve sonucu alır.
- Her job input asset ID, scene version, Blender version, addon version, render profile ve output manifest taşır.
- Worker iş bitiminde log, preview, render çıktısı, süre ve hata kodu döndürür.
- Worker'ın Vercel serverless fonksiyonunda çalıştırılması yasaktır.
- İşler tekrar denenebilir ve idempotent olmalıdır; canonical karakter kaynak dosyaları ezilmez.

## Karakter devamlılığı
1. Her karakterin tek bir canonical sürümü ve değişmez kimlik tanımı bulunur.
2. Yüz, saç, kıyafet, beden, rig, ses ve viseme sürümleri ayrı metadata olarak kaydedilir.
3. Her yeni sahne aynı karakter referanslarını kullanır.
4. Değişiklikler varyant olarak kaydedilir; canonical sürüm kullanıcı onayı olmadan değiştirilmez.
5. Test pozları: neutral, walk, turn, point, listen, explain, sit/stand, wave ve close-up speech.

## Kalite kontrolleri
- Mesh ve rig deformasyonları
- Göz kırpma, ağız şekilleri ve Türkçe fonem/viseme senkronu
- El/parmak, omuz, dirsek ve diz hareketleri
- Karakter görünümünün sahneler arasında korunması
- Işık, gölge, materyal, kamera ve render süresi
- Lisans ve atıf kayıtlarının varlığı

## Lisans
Eklenti lisansı karakter/texture/voice/model lisansının yerine geçmez. Kod, model ağırlığı, karakter dosyası, texture, kıyafet ve ses varlıkları ayrı ayrı kaydedilmelidir.