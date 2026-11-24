const stages = [
  { number: "01", title: "Proje ve ilan", detail: "Arsa, villa veya konut projesini tanımla", status: "Hazırlanıyor" },
  { number: "02", title: "Senaryo ve storyboard", detail: "Sahne akışını ve anlatımı planla", status: "Planlandı" },
  { number: "03", title: "Görsel prodüksiyon", detail: "Gerçek fotoğraflar, harita ve 3D sahneler", status: "Planlandı" },
  { number: "04", title: "Kurgu ve ses", detail: "Dikey video, müzik, seslendirme ve altyazı", status: "Planlandı" },
  { number: "05", title: "Kalite kontrol", detail: "Konum, parsel ve ilan bilgilerinin doğrulanması", status: "Planlandı" },
];

const departments = [
  ["Yönetmen", "Reklam filminin yaratıcı akışı"],
  ["Senarist", "İlan gerçeklerine dayalı metin"],
  ["Harita ve parsel", "Konum ve geometri doğruluğu"],
  ["Mimari ve 3D", "Blender sahneleri ve konsept tasarım"],
  ["Video editörü", "FFmpeg kurgu ve çıktı"],
  ["Ses tasarımı", "Türkçe seslendirme ve müzik"],
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand-mark">Y</div>
        <div className="brand-name">YAVUZYİĞİT<span>AI STUDIO</span></div>
        <div className="side-label">STÜDYO</div>
        <a className="nav-item active" href="#overview">◫ <span>Genel görünüm</span></a>
        <a className="nav-item" href="#workflow">▤ <span>Üretim akışı</span></a>
        <a className="nav-item" href="#departments">✳ <span>Uzman departmanlar</span></a>
        <div className="sidebar-bottom">
          <div className="status-dot" /> Bağımsız proje alanı
          <small>v0.1 · Kurulum aşaması</small>
        </div>
      </aside>

      <section className="workspace" id="overview">
        <header className="topbar">
          <div><span className="eyebrow">YAVUZYİĞİT GAYRİMENKUL</span><h1>Prodüksiyon kontrol merkezi</h1></div>
          <div className="top-status"><span className="status-dot" /> Sistem tasarım aşamasında</div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="pill">AI REAL ESTATE PRODUCTION</span>
            <h2>Gayrimenkul hikâyelerini<br /><em>sinematik</em> anlat.</h2>
            <p>Arsa, villa ve konut projeleri için senaryodan son videoya kadar kontrollü bir prodüksiyon hattı.</p>
            <a className="primary-link" href="/projects/new">Yeni prodüksiyon projesi oluştur <span>→</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-card"><span>STUDIO / 001</span><strong>FRAME<br />THE FUTURE</strong><small>LAND · ARCHITECTURE · FILM</small></div>
            <div className="art-cross">＋</div>
          </div>
        </section>

        <section className="stats">
          <article><span>ÜRETİM AŞAMASI</span><strong>01 <small>/ 05</small></strong><p>Proje temeli hazırlanıyor</p></article>
          <article><span>HEDEF FORMAT</span><strong>9:16</strong><p>1080 × 1920 · Reels / TikTok</p></article>
          <article><span>İLK FİLM SÜRESİ</span><strong>30 sn</strong><p>Kontrollü sahne onayı</p></article>
          <article><span>ÖNCELİK</span><strong>Gerçeklik</strong><p>Parsel ve ilan verisi korunur</p></article>
        </section>

        <section className="content-grid" id="workflow">
          <div className="panel">
            <div className="section-heading"><div><span className="eyebrow">PIPELINE</span><h3>Prodüksiyon akışı</h3></div><span className="subtle-tag">MVP PLANI</span></div>
            <div className="stage-list">
              {stages.map((stage) => <div className="stage" key={stage.number}>
                <span className="stage-number">{stage.number}</span>
                <div className="stage-copy"><strong>{stage.title}</strong><small>{stage.detail}</small></div>
                <span className="stage-status">{stage.status}</span>
              </div>)}
            </div>
          </div>
          <div className="panel" id="departments">
            <div className="section-heading"><div><span className="eyebrow">CREATIVE TEAM</span><h3>Uzman departmanlar</h3></div></div>
            <div className="department-list">
              {departments.map(([name, detail], i) => <div className="department" key={name}>
                <span className="department-icon">{["✦", "✎", "⌖", "◇", "▣", "♫"][i]}</span>
                <div><strong>{name}</strong><small>{detail}</small></div>
              </div>)}
            </div>
          </div>
        </section>

        <footer><span>YAVUZYİĞİT AI PRODÜKSİYON STÜDYOSU</span><span>Önce doğruluk. Sonra sinema.</span></footer>
      </section>
    </main>
  );
}
