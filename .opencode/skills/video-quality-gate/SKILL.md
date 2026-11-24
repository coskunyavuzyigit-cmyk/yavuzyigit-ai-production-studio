---
name: Video Kalite Kapısı
description: Emlak tanıtım videosunu render öncesi ve sonrası teknik, görsel, ses, metin, lisans ve parsel doğruluğu açısından denetle.
---

# Video QA Gate

## Render öncesi bloklayıcı kontroller
- [ ] İlan gerçekleri kaynaklarıyla kaydedildi.
- [ ] Parsel GeoJSON/KML kaynağı, CRS ve geometri doğrulandı.
- [ ] Tapu/imar/ruhsat gibi kritik çelişkiler çözüldü veya videodan çıkarıldı.
- [ ] Fotoğraf ve video kullanım hakları doğrulandı.
- [ ] Harita/uydu imagery lisansı ve atıf şartları doğrulandı.
- [ ] Ses, müzik, font, model ve eklenti lisansları kaydedildi.
- [ ] Senaryo, seslendirme ve storyboard birbiriyle uyumlu.

## Render sonrası teknik kontroller
- [ ] ffprobe ile çözünürlük, oran, fps, süre, codec ve ses akışı kontrol edildi.
- [ ] 9:16 ve 1080x1920 varsayılan profile uyuyor.
- [ ] Siyah/bozuk kare, titreme, takılma, frame drop ve senkron hatası yok.
- [ ] Ses clipping, sessizlik, kopma ve dengesiz miks açısından dinlendi.
- [ ] Türkçe karakter, yazım, altyazı-ses eşleşmesi kontrol edildi.
- [ ] Telefon, fiyat ve marka bilgisi doğru.
- [ ] Parsel çizgisi tüm kritik karelerde kaynak geometriyle aynı.
- [ ] Görseldeki yer ile anlatımdaki yer/özellik aynı.
- [ ] AI temsili sahneler açıkça etiketlendi.
- [ ] Final video gerçek oynatıcıda baştan sona izlendi.

## Yayın kararı
- Kritik geometri, mülkiyet, imar, fiyat, lisans veya iletişim hatası varsa FAIL.
- Video baştan sona izlenmediyse PASS verilemez.
- Sadece dosyanın oluşması, renderın başarılı olması veya ffprobe çıktısı görsel kalite onayı değildir.
- PASS raporu; test edilen dosyanın hash'i, teknik özellikleri, test tarihi ve QA notlarıyla saklanır.

## Geri bildirim
Her hata için zaman kodu, beklenen sonuç, gerçek sonuç ve düzeltme adımı yaz. Düzeltmeden sonra ilgili test ve tam izleme tekrarlanır.
