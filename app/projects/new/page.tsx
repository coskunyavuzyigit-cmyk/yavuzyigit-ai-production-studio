"use client";

import { FormEvent, useState } from "react";

type Brief = {
  title: string;
  kind: string;
  district: string;
  area: string;
  price: string;
  parcel: string;
  facts: string;
  notes: string;
};

const emptyBrief: Brief = {
  title: "", kind: "Arsa", district: "", area: "", price: "", parcel: "", facts: "", notes: "",
};

export default function NewProjectPage() {
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [created, setCreated] = useState(false);

  function update(field: keyof Brief, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
    setCreated(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCreated(true);
  }

  const scenes = [
    { time: "00–04 sn", name: "Açılış ve parsel", detail: brief.parcel ? `Kullanıcının sağladığı ${brief.parcel} parsel bilgisi ve doğrulanmış sınır verisi` : "Parsel sınırı ve konumu doğrulanmış veri geldikten sonra eklenecek." },
    { time: "04–10 sn", name: "Konum ve çevre", detail: brief.district ? `${brief.district} konumu; çevre görüntüleri yalnızca doğrulanmış kaynaklarla` : "İlçe/mahalle bilgisi bekleniyor." },
    { time: "10–18 sn", name: "Gayrimenkul", detail: brief.kind === "Arsa" ? "Arsanın gerçek fotoğrafları ve ölçüleri; yapı görseli varsa temsili olarak etiketlenecek." : "Mevcut yapının gerçek fotoğrafları; konsept tasarım varsa temsili olarak etiketlenecek." },
    { time: "18–25 sn", name: "Öne çıkan özellikler", detail: brief.facts || "Yalnızca kullanıcı tarafından doğrulanmış özellikler kullanılacak." },
    { time: "25–30 sn", name: "Fiyat ve iletişim", detail: [brief.area && `${brief.area} m²`, brief.price && brief.price].filter(Boolean).join(" · ") || "Alan ve fiyat bilgisi girilmedi." },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#0b0d10", color: "#f3f0e9", padding: "32px 18px 64px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <a href="/" style={{ color: "#c9a66b", textDecoration: "none", fontSize: 13 }}>← Stüdyo ana sayfası</a>
        <p style={{ color: "#c9a66b", letterSpacing: 3, fontSize: 11, marginTop: 32 }}>YAVUZYİĞİT AI STUDIO / BRIEF 001</p>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", margin: "10px 0" }}>Yeni prodüksiyon projesi</h1>
        <p style={{ color: "#a8a8a8", maxWidth: 650, lineHeight: 1.7 }}>Önce ilan gerçeklerini kayda alıyoruz. Bu ilk sürüm storyboard taslağını tarayıcıda oluşturur; henüz veritabanına kaydetmez ve video render etmez.</p>

        <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, marginTop: 30 }}>
          <label style={labelStyle}>Proje / ilan başlığı
            <input required value={brief.title} onChange={(e) => update("title", e.target.value)} placeholder="Örn. Kocaali denize yakın villa arsası" style={inputStyle} />
          </label>
          <label style={labelStyle}>Gayrimenkul türü
            <select value={brief.kind} onChange={(e) => update("kind", e.target.value)} style={inputStyle}>
              <option>Arsa</option><option>Villa</option><option>Konut</option><option>Ticari</option><option>Proje</option>
            </select>
          </label>
          <label style={labelStyle}>İlçe / mahalle
            <input value={brief.district} onChange={(e) => update("district", e.target.value)} placeholder="Örn. Sakarya / Kocaali / ..." style={inputStyle} />
          </label>
          <label style={labelStyle}>Alan (m²)
            <input value={brief.area} onChange={(e) => update("area", e.target.value)} inputMode="decimal" placeholder="Örn. 320" style={inputStyle} />
          </label>
          <label style={labelStyle}>Satış fiyatı
            <input value={brief.price} onChange={(e) => update("price", e.target.value)} placeholder="Örn. 1.300.000 TL" style={inputStyle} />
          </label>
          <label style={labelStyle}>Ada / parsel (varsa)
            <input value={brief.parcel} onChange={(e) => update("parcel", e.target.value)} placeholder="Örn. 123 ada 4 parsel" style={inputStyle} />
          </label>
          <label style={{ ...labelStyle, gridColumn: "1 / -1" }}>Doğrulanmış özellikler
            <textarea value={brief.facts} onChange={(e) => update("facts", e.target.value)} rows={4} placeholder="Yalnızca belgeyle veya güvenilir kaynakla doğruladığın bilgileri yaz: imar, tapu niteliği, ruhsat, sahile mesafe vb." style={{ ...inputStyle, resize: "vertical" }} />
          </label>
          <label style={{ ...labelStyle, gridColumn: "1 / -1" }}>Prodüksiyon notları
            <textarea value={brief.notes} onChange={(e) => update("notes", e.target.value)} rows={3} placeholder="Kullanılacak fotoğraflar, hedef kitle, özellikle vurgulanacak detaylar..." style={{ ...inputStyle, resize: "vertical" }} />
          </label>
          <button type="submit" style={{ background: "#c9a66b", color: "#171717", border: 0, borderRadius: 8, padding: "15px 22px", fontWeight: 700, cursor: "pointer", gridColumn: "1 / -1" }}>Storyboard taslağını oluştur</button>
        </form>

        {created && <section style={{ marginTop: 36, borderTop: "1px solid #333", paddingTop: 26 }}>
          <p style={{ color: "#c9a66b", fontSize: 11, letterSpacing: 2 }}>İLK TASLAK / 30 SANİYE / 9:16</p>
          <h2 style={{ fontSize: 28, margin: "8px 0" }}>{brief.title}</h2>
          <p style={{ color: "#a8a8a8" }}>{[brief.kind, brief.district, brief.area && `${brief.area} m²`, brief.price].filter(Boolean).join(" · ")}</p>
          <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
            {scenes.map((scene, index) => <article key={scene.time} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 14, padding: 18, background: "#15191e", border: "1px solid #292f35", borderRadius: 10 }}>
              <strong style={{ color: "#c9a66b" }}>{scene.time}</strong>
              <div><h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{String(index + 1).padStart(2, "0")} · {scene.name}</h3><p style={{ margin: 0, color: "#b7b7b7", lineHeight: 1.6 }}>{scene.detail}</p></div>
            </article>)}
          </div>
          {brief.notes && <p style={{ color: "#aaa", marginTop: 18 }}>Prodüksiyon notu: {brief.notes}</p>}
          <p style={{ color: "#d6b77f", fontSize: 13, marginTop: 20 }}>Kontrol: Bu taslak otomatik bir prodüksiyon planıdır. Parsel sınırı, imar, mesafe ve ruhsat bilgileri kaynak belgeyle doğrulanmadan videoya eklenmemelidir.</p>
        </section>}
      </div>
    </main>
  );
}

const labelStyle = { display: "grid", gap: 8, color: "#d8d4cc", fontSize: 13, fontWeight: 600 } as const;
const inputStyle = { width: "100%", boxSizing: "border-box" as const, background: "#15191e", border: "1px solid #353b42", borderRadius: 8, padding: "13px 14px", color: "#f3f0e9", font: "inherit", outline: "none" };
