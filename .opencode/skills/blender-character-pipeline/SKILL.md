---
name: Blender Karakter Üretim Hattı
description: MPFB, Blender, CloudRig ve tekrar kullanılabilir sahne varlıklarıyla özgün iki 3B karakteri modelle, rigle ve animasyona hazırla.
---

# Blender Karakter Üretim Hattı

## Araçlar
- Blender: ana modelleme, materyal, rig, animasyon, kamera, ışık, render.
- MPFB: MakeHuman tabanlı Blender karakter oluşturma eklentisi. Repo: https://github.com/makehumancommunity/mpfb2
- CloudRig: Blender Studio rigging sistemi. Repo: https://github.com/blender/blender-addons/tree/main/rigify (CloudRig eklentisi ve sürüm kaynağı ayrıca doğrulanmalı).
- Rain rig: Blender Studio eğitim/test karakteri, CC-BY; atıf metnini koru: https://studio.blender.org/characters/rain/v3/

## Üretim adımları
1. Blender sürümü ve eklenti uyumluluğunu sabitle.
2. MPFB ile Mert ve Duru için ayrı mesh üret; aynı temel şablonu kopyalayıp sadece yüz rengini değiştirerek geçiştirme.
3. Stilize-gerçekçi görünüm için yüz oranı, göz, saç, kıyafet ve materyal tasarımını ayrı ayrı kontrol et.
4. Mesh topolojisi, ağız çevresi, göz kapakları, omuz/dirsek/diz deformasyonlarını test et.
5. CloudRig/Rigify veya uygun rig ile gövde, yüz, parmak ve ağız kontrolü kur.
6. Temel animasyon kütüphanesi: idle, walk, turn, point, listen, explain, sit/stand, handoff, wave.
7. Türkçe lip-sync için fonem/viseme seti ve zamanlama üret; diyalog sonrası düzeltme yap.
8. Her karakter için canonical .blend ve export kopyası tut; kaynakları ezme.
9. Test: nötr poz, yürüyüş, oturma, el hareketi, konuşma ve yakın yüz planı.

## Asset lisansı
MPFB eklentisi ile indirilen her model/texture/asset pack'in lisansını ayrı kaydet. Eklenti GPL olması tüm üretilen assetlerin otomatik GPL olacağı anlamına gelmez; MPFB belgelerindeki asset şartlarını doğrula. Rain rig CC-BY atıf ister. Kaynağı belirsiz karakter modeli kullanma.
