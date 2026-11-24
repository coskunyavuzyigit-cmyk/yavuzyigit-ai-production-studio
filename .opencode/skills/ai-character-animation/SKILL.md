---
name: AI Karakter Animasyonu
description: ComfyUI ve açık model iş akışlarıyla sabit karakter referansını kısa animasyon kliplerine dönüştür; lisans, donanım ve tutarlılık sınırlarını uygula.
---

# AI Karakter Animasyonu

## Öncelikli workflow
ComfyUI resmi Wan Animate workflow dokümanı:
https://github.com/Comfy-Org/docs/blob/main/tutorials/video/wan/wan2-2-animate.mdx

Workflow, referans karakter görüntüsünü bir hareket videosuyla eşleyerek karakteri hareket ettirme veya videodaki karakteri değiştirme modlarını sunar. Workflow'un kullandığı model ağırlıkları, VRAM ihtiyacı, ticari kullanım koşulları ve çıktı lisansı ayrıca doğrulanır.

## Yardımcı depolar
- ComfyUI: https://github.com/Comfy-Org/ComfyUI
- Resmi workflow templates: https://github.com/Comfy-Org/workflow_templates
- VideoHelperSuite: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite
- ControlNet Aux: https://github.com/Fannovel16/comfyui_controlnet_aux
- IPAdapter Plus: https://github.com/cubiq/ComfyUI_IPAdapter_plus
- KJNodes: https://github.com/kijai/ComfyUI-KJNodes

Bu düğümlerin ve modellerin sürüm/lisans/uyumluluğunu her kurulumda doğrula. Her düğüm zorunlu değil; resmi Wan Animate workflow için yalnızca belirtilen bağımlılıkları kur.

## Karakter tutarlılığı
- Mert veya Duru için tek referans görsel/model sheet kullan.
- Referans karakter ile hareket sürücüsü ayrı kaynak olarak tanımlanır.
- Aynı sahne içindeki kıyafet, saç, yüz, ışık ve kamera sürekliliği kontrol edilir.
- Tek seferde uzun film üretmek yerine 3–5 saniyelik shot üret, seç, sonra birleştir.
- Başlangıç/bitiş kareleri ve sahne kimlikleri kaydedilir.
- Bozuk el, yüz, ağız, parmak, göz, kıyafet veya arka plan flicker'ı varsa reddet.
- Üretim logunda model hash'i, workflow JSON hash'i, seed, prompt, input referansları ve parametreler saklanır.

## Donanım ve maliyet
Wan 14B sınıfı modeller yüksek GPU belleği ve depolama ister. Kullanıcının cihazı mobil olduğundan yerel telefonda bu hattın çalışacağı varsayılmaz. Önce küçük çözünürlükte test ve GPU erişimli izole worker planı hazırla. Ücretli GPU veya cloud compute başlatmadan önce maliyet ve süreyi kullanıcıya bildir ve onay al.

## Sınırlar
AI video ham üretim aracıdır; rigged Blender karakterinin yerini otomatik olarak almaz. Tekrarlanabilir, karakterin birebir aynı kaldığı diyalog ve seri sahnelerinde Blender rig'i tercih edilir. Model lisansı belirsizse ticari işte kullanma.
