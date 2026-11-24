---
name: Karakter İncil'i ve Süreklilik
description: Kısa filmlerde Mert ve Duru karakterlerinin tasarımını, kimliğini, oyunculuğunu ve sahneler arası devamlılığını koru.
---

# Karakter İncil'i

Önce `docs/SHORT_FILM_STUDIO.md` dosyasındaki Mert ve Duru profillerini oku.

## Değişmez kimlik
- Mert: 35 yaş görünümü, erkek, saha/emlak uzmanı; lacivert saha ceketi ve sade iş kıyafeti.
- Duru: 30 yaş görünümü, kadın, mimar/tasarım anlatıcısı; toprak tonlarında modern iş kıyafeti.
- İkisi de özgün kurgusal karakterdir; gerçek kişi veya ünlü benzerliği hedeflenmez.
- Yüz, saç, göz, ten, oran, kıyafet, renk paleti ve ses kimliği model sheet onayından sonra kilitlenir.

## Üretilecek referans paketi
- Front / side / 3-4 / back turnarounds
- Full-body neutral pose
- 8 temel yüz ifadesi
- Ağız fonem seti (Türkçe konuşma)
- El pozları ve temel jestler
- Renk paleti ve materyal örnekleri
- Karakter ölçek karşılaştırması
- Model dosyası, sürüm, hash, lisans ve kaynak asset kaydı

## Süreklilik kontrolü
Her sahne için character_id, model_version, outfit_id, voice_id ve continuity_notes kaydet. Referans dışı yüz/saç/kıyafet/beden değişikliği varsa sahneyi yeniden üret veya düzelt. AI video çıktısında kimlik drift'i ve anatomi hatalarını otomatik ve insan kontrolüyle ara.

## Diyalog ve oyunculuk
Mert kısa, sıcak, sahaya dönük cümleler kurar. Duru teknik ama anlaşılır konuşur; gerektiğinde yanlış varsayımı düzeltir. İkisi de reklam klişesi veya abartılı satış baskısı kullanmaz.
