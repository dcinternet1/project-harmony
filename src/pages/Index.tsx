const categories = [
  {
    title: "Pneus",
    icon: "fa-solid fa-car",
    products: [
      { name: "Pneu Aro", highlight: "13", sub: "Pirelli", href: "/aro13/", img: "/images/pneu.png" },
      { name: "Pneu Aro", highlight: "14", sub: "Pirelli", href: "/aro14/", img: "/images/pneu.png" },
      { name: "Pneu Aro", highlight: "15", sub: "Pirelli", href: "/aro15/", img: "/images/pneu.png" },
      { name: "Pneu Aro", highlight: "16", sub: "Pirelli", href: "/aro16/", img: "/images/pneu.png" },
      { name: "Pneu Aro", highlight: "17", sub: "Pirelli", href: "/aro17/", img: "/images/pneu.png" },
      { name: "Pneu Aro", highlight: "18", sub: "Pirelli", href: "/aro18/", img: "/images/pneu.png" },
    ],
  },
  {
    title: "Cozinha",
    icon: "fa-solid fa-utensils",
    products: [
      { name: "Jogo De Panelas", highlight: "Paris 10 Peças", sub: "Tramontina", href: "/panelas-tramontina/", img: "/panelas-tramontina/images/panelas-1.webp" },
    ],
  },
  {
    title: "Câmeras de Segurança",
    icon: "fa-solid fa-video",
    products: [
      { name: "Câmera", highlight: "PTZ WIFI Lente Dupla", sub: "2MP+2MP", href: "/camera-ptz/", img: "/camera-ptz/images/camera-ptz-2.png" },
    ],
  },
  {
    title: "Lavadoras e Aspiradores WAP",
    icon: "fa-solid fa-shower",
    products: [
      { name: "Lavadora", highlight: "WAP Líder 2200", sub: "1750W", href: "/wap-lider-2200/", img: "/images/wap-lider-2200.png" },
      { name: "Aspirador", highlight: "WAP WL 4000", sub: "1900W", href: "/wap-wl-4000/", img: "/wap-wl-4000/images/wap-wl-4000.png" },
      { name: "Lavadora", highlight: "WAP GTW Inox 15", sub: "1700W", href: "/wap-gtw-inox-15/", img: "/wap-gtw-inox-15/images/gtw-inox-1.webp" },
      { name: "Aspirador", highlight: "WAP High Speed Plus", sub: "2000W", href: "/wap-high-speed-plus/", img: "/wap-high-speed-plus/images/high-speed-1.webp" },
    ],
  },
];

const Index = () => {
  return (
    <div style={{ backgroundColor: "#ebebeb", minHeight: "100vh", fontFamily: "'Roboto', sans-serif" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffe600",
          padding: "0 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 54,
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <i className="fa-solid fa-bars" style={{ color: "#333", fontSize: 19, width: 30, textAlign: "center" }} />
        <span
          style={{
            color: "#2d3277",
            fontSize: 16,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "-0.3px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          Mercado Livre Ofertas
        </span>
        <i className="fa-solid fa-cart-shopping" style={{ color: "#333", fontSize: 19, width: 30, textAlign: "center" }} />
      </header>

      {/* Content */}
      <div style={{ width: "100%", maxWidth: 600, margin: "0 auto", padding: "0 12px" }}>
        <div style={{ margin: "12px 0", borderRadius: 8, overflow: "hidden" }}>
          <img src="/images/bannermion.webp" alt="Promoção" style={{ width: "100%", display: "block" }} />
        </div>

        <h1 style={{ color: "#333", fontSize: 18, fontWeight: 600, marginBottom: 12, paddingLeft: 4 }}>
          Todos os Produtos
        </h1>

        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 style={{ color: "#333", fontSize: 15, fontWeight: 600, margin: "18px 0 10px 4px", display: "flex", alignItems: "center", gap: 8 }}>
              <i className={cat.icon} style={{ fontSize: 14, color: "#3483fa" }} /> {cat.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              {cat.products.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    padding: "18px 16px",
                    textDecoration: "none",
                    color: "#333",
                    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.15)",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 68, height: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={p.img} alt={p.highlight} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.25, color: "rgba(0,0,0,0.9)" }}>
                        {p.name} <strong style={{ fontWeight: 700, fontSize: 15 }}>{p.highlight}</strong> {p.sub}
                      </span>
                      <span style={{ fontSize: 12, color: "#00a650", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                        Frete grátis
                        <span style={{ fontWeight: 900, fontStyle: "italic", color: "#00a650" }}>
                          FULL<i className="fa-solid fa-bolt" style={{ fontSize: 10, marginLeft: 1 }} />
                        </span>
                      </span>
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right" style={{ color: "#3483fa", fontSize: 16, fontWeight: 900 }} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#fff", padding: "24px 20px 40px", borderTop: "1px solid #e0e0e0", marginTop: 20 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px 20px", marginBottom: 25, justifyContent: "center" }}>
          {["Minha conta", "Compras", "Histórico", "Favoritos", "Categorias", "Ofertas do dia", "Vender", "Contato"].map((t) => (
            <a key={t} href="#" style={{ color: "#333", textDecoration: "none", fontSize: 12 }}>{t}</a>
          ))}
        </div>
        <div style={{ color: "#999", fontSize: 11, textAlign: "center", lineHeight: 1.4 }}>
          <p style={{ marginBottom: 8 }}>
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>Termos e condições</a> &nbsp;•&nbsp;
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>Como cuidamos da sua privacidade</a> &nbsp;•&nbsp;
            <a href="#" style={{ color: "#333", textDecoration: "none" }}>Acessibilidade</a>
          </p>
          <p style={{ marginTop: 15 }}>Copyright © 1999-2024 Ebazar.com.br LTDA.</p>
          <p>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
