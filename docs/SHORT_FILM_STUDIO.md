# Kısa Animasyon Film Stüdyosu

## Amaç
YAVUZYİĞİT AI Prodüksiyon Stüdyosu yalnızca ilan videosu değil, tekrar eden iki özgün karakterle kısa animasyon filmleri ve emlak hikâyeleri de üretecek. Karakterler stüdyoya ait özgün tasarımlar olacak; tanınmış film/oyun karakterlerinin kopyası olmayacak.

## Ana yaratıcı karar
**Görsel tarz:** sinematik, stilize-gerçekçi 3B animasyon. Gerçekçi malzeme/ışık, hafif stilize karakter oranları ve okunaklı yüz ifadeleri. Çocuk işi/oyuncak estetiği değil; aile dostu, kaliteli kısa film estetiği.

### İki ana karakter — ilk karakter İncil'i
1. **Mert — saha ve emlak uzmanı**
   - Erkek, yaklaşık 35 yaş görünümü; sakin, güven veren, pratik ve esprili.
   - Rolü: yeri keşfeder, parseli ve çevreyi anlatır, soruları sorar.
   - Görsel imza: koyu lacivert saha ceketi, açık renk gömlek, sade bot; küçük YAVUZYİĞİT amblemi yalnızca marka sahnelerinde.
   - Oyunculuk: kontrollü el hareketleri, doğal yürüyüş, kameraya güvenli bakış; abartılı reklam jesti yok.

2. **Duru — mimar ve tasarım anlatıcısı**
   - Kadın, yaklaşık 30 yaş görünümü; analitik, meraklı, yaratıcı ve açık sözlü.
   - Rolü: mekânı/ışığı/yerleşimi açıklar, tasarım ve yapı sorularını yanıtlar; Mert'in iddialarını gerektiğinde sorgular.
   - Görsel imza: toprak tonlarında modern ceket, sade pantolon, tablet/plan dosyası; zarif, işlevsel stil.
   - Oyunculuk: net el-kol dili, ölçülü mimik, teknik anlatımda sakin ve anlaşılır.

Bu profil ilk tasarım brief'idir. Karakterlerin yüzü, saç modeli, ten tonu, vücut oranı, kıyafeti, renk paleti ve ses kimliği üretilecek model sayfalarında sabitlenir. Her sahnede yeniden tasarlanmaz. Kullanıcının veya gerçek bir kişinin fotoğrafı, ayrıca izin verilmeden karakter kimliği olarak kullanılmaz.

## Formatlar
- Sosyal kısa film: 9:16, 1080×1920, 30–60 sn.
- Mini hikâye: 16:9 veya 9:16, 45–120 sn.
- Seri bölümü: 30–90 sn, aynı karakter modeli, aynı ses kimliği ve süreklilik.
- Master proje korunur; platforma özel kopyalar dışa aktarılır.

## Film üretim hattı
1. Fikir ve hedef: izleyici, duygu, tek cümlelik tema, çağrı.
2. Senaryo: giriş–çatışma/merak–çözüm–kapanış; diyaloglar kısa ve doğal.
3. Storyboard ve animatic: sahne planı, kamera, süre, diyalog ve ses taslağı.
4. Karakter hazırlığı: sabit model sheet, önden/yan/3-4 açı, yüz ifadeleri, kıyafet, renk kodları.
5. Rig: yüz, ağız şekilleri, göz, el ve vücut kontrolü; tekrar kullanılabilir hareket kütüphanesi.
6. Sahne: çevre, ışık, kamera ve kompozisyon.
7. Animasyon: bloklama, zamanlama, polish, lip-sync.
8. Ses: Türkçe diyalog, ortam, foley, müzik, miks.
9. Kurgu ve render: Blender/FFmpeg.
10. QA: karakter sürekliliği, anatomi, el/yüz deformasyonu, dudak senkronu, ses, yazım, lisans ve çıktı.
11. Teslim: MP4, senaryo, storyboard, varlık/lisans listesi, render/QA raporu.

## Açık kaynak tercih edilen hat
- Karakter üretimi: Blender + MPFB (MakeHuman Plugin For Blender); karakter modeli ve kullanılan asset paketlerinin lisansları ayrı kayıt edilir.
- Rig ve animasyon: Blender + CloudRig; öğrenme/test için Blender Studio Rain rig (CC-BY, atıf zorunlu).
- 2B/çizim alternatifi: OpenToonz veya Krita; vektör cut-out için Synfig.
- AI destekli referans animasyon: ComfyUI + resmi Wan Animate workflow; deneysel üretim olarak kalır, karakter yüzü/elleri ve sahne tutarlılığı QA olmadan kabul edilmez.
- Kurgu/ses: FFmpeg; isteğe bağlı Kdenlive/Shotcut.
- Prodüksiyon takibi: GitHub issue/PR ve proje manifestleri; daha sonra ayrı Kitsu değerlendirmesi.

## Karakter sürekliliği kuralları
- Her karakterin tek bir canonical model dosyası, model hash'i ve sürümü olur.
- Referans paketi: önden, yan, 3/4, tam boy, yüz ifadeleri, el/ayakkabı ve renk paleti.
- Aynı karakter farklı sahnelerde farklı yaş, saç, yüz, boy, vücut veya kıyafetle görünemez; hikâye gereği değişiklik varsa continuity notu eklenir.
- AI görsel/video modellerine karakter referansları ve sahne referansları ayrı verilir.
- Kimlik drift'i, yüz deformasyonu, ekstra parmak/uzuv, kıyafet değişimi veya başka karaktere dönüşme QA hatasıdır.
- Karakterlerin konuşma biçimi ve sesleri sabitlenir; karakter sesi gerçek bir kişiyi taklit etmez.
- AI video çıktısı final değil, kontrol edilmesi gereken ham çekimdir. Gerekirse Blender'da yeniden kurulur.

## Emlak ve gerçeklik sınırı
Mert ve Duru'nun kurgusal hikâye sahneleri ile gerçek ilan tanıtımları ayrı içerik türleridir. Kurgusal sahneler gerçek taşınmazın mevcut durumu gibi sunulmaz. Gerçek parsel sınırı, tapu, imar, fiyat ve mesafe bilgileri yalnızca doğrulanmış kaynaktan alınır. Temsili mimari sahneler görünür şekilde etiketlenir.

## İlk pilot kısa film
**Başlık:** Bir Yerin Hikâyesi
**Süre:** 45–60 saniye
**Sahne özeti:** Mert bir araziye gelir ve “Bir yeri değerli yapan sadece metrekaresi mi?” diye sorar. Duru plan/tablet ile konum, çevre ve kullanım sorularını açar. İkili, parsel sınırını gerçek geometriyle harita üzerinde gösterir. Finalde mesaj: “Önce doğru tanı, sonra doğru karar.”
Pilotun ilk versiyonu gerçek ilan iddiası taşımaz; karakter, animasyon, ses ve kamera hattını sınar.

## Başarı ölçütleri
- İki karakter 5 farklı sahnede tanınabilir biçimde aynı kalır.
- 10–15 saniyelik testte ağız senkronu ve el/yüz deformasyonu kabul edilebilir.
- 45–60 saniyelik pilotta sahne devamlılığı ve ses miksajı temizdir.
- Lisans ve kaynak varlık envanteri eksiksizdir.
- Render çıktısı baştan sona izlenir; QA PASS olmadan teslim edilmez.
