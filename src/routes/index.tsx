import { createFileRoute } from "@tanstack/react-router";
import bgHero from "@/assets/bg-hero.webp";
import bgFinal from "@/assets/bg-final.webp";
import emojiBalao from "@/assets/emoji-balao.png";
import emojiChapeu from "@/assets/emoji-chapeu.png";
import cookiesCapa from "@/assets/cookies-capa.webp";
import cookiePamonha from "@/assets/cookie-pamonha.webp";
import cookieMaca from "@/assets/cookie-maca.webp";
import cookiesDestaque from "@/assets/cookies-destaque.webp";
import logoMaskavo from "@/assets/logo-maskavo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookies Juninos — Flávia Maskavo | Aprenda e venda no São João" },
      {
        name: "description",
        content:
          "Evento ao vivo com Flávia Maskavo: aprenda cookies juninos criativos para vender no São João. 2 dias de aulas, apostila e gravação por 15 dias.",
      },
      { property: "og:title", content: "Cookies Juninos — Flávia Maskavo" },
      {
        property: "og:description",
        content:
          "Receitas temáticas para transformar o São João em oportunidade de venda. 3x de R$9,64 ou R$27,00 à vista.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const CTA = ({ children = "Garantir meu acesso ao evento", large = false }: { children?: React.ReactNode; large?: boolean }) => (
  <a
    href="#oferta"
    className="btn-cta"
    style={large ? { fontSize: "1.25rem", padding: "1.375rem 2.5rem" } : undefined}
  >
    <span>👉</span>
    <span>{children}</span>
  </a>
);

function Index() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--brown-deep)] overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 flex items-center justify-between">
        <img src={logoMaskavo} alt="Comunidade Maskavo" className="h-8 md:h-10 brightness-0 invert opacity-90" />
        <a href="#oferta" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition">
          Garantir vaga →
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative w-full min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white">
            <span className="tag-chip">📅 EVENTO AO VIVO • SÃO JOÃO</span>

            <h1 className="mt-6 font-extrabold leading-[0.95] text-white text-5xl sm:text-6xl md:text-7xl">
              Cookies
              <br />
              <span style={{ color: "var(--yellow-junina)" }}>Juninos</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-semibold text-white max-w-xl">
              Aprenda receitas <span style={{ color: "var(--yellow-junina)" }}>criativas e perfeitas</span> para vender no São João
            </p>

            <p className="mt-4 text-base md:text-lg text-white/85 font-light max-w-xl leading-relaxed">
              Em apenas 2 dias de aulas ao vivo, você vai aprender cookies temáticos que chamam
              atenção, despertam desejo e têm <strong className="font-semibold text-white">alto potencial de venda</strong> nessa época do ano.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
              {[
                ["📅", "Dias 01 e 02 de junho"],
                ["🎥", "Conteúdo ao vivo"],
                ["📄", "Apostila completa inclusa"],
                ["⏳", "Gravação por 15 dias"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-3 text-white/95 text-base font-medium">
                  <span className="text-xl">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Price box */}
            <div
              className="mt-8 bg-white text-[var(--brown-deep)] p-6 md:p-7 max-w-md"
              style={{ borderRadius: 32, boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-[var(--brown)]">
                💰 GARANTA SUA VAGA
              </div>
              <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-extrabold" style={{ color: "var(--orange-deep)" }}>
                  3x de R$9,64
                </span>
              </div>
              <p className="text-base text-[var(--muted-foreground)] mt-1">
                ou <strong className="text-[var(--brown-deep)] font-semibold">R$27,00</strong> à vista
              </p>
              <div className="mt-5">
                <CTA>Garantir meu acesso ao evento</CTA>
              </div>
              <p className="mt-3 text-xs text-[var(--muted-foreground)] text-center">
                🔒 Pagamento seguro • Acesso imediato
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative hidden md:flex items-center justify-center">
            <img
              src={emojiBalao}
              alt=""
              className="absolute -top-8 -left-4 w-24 float-anim z-10"
              style={{ animationDelay: "0.5s" }}
            />
            <img
              src={emojiChapeu}
              alt=""
              className="absolute -bottom-6 -right-2 w-28 float-anim z-10"
            />
            <img
              src={cookiesCapa}
              alt="Cookies Juninos"
              className="w-full max-w-lg"
              style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))" }}
            />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="tag-chip">🎉 APRENDIZADO</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
              O QUE VOCÊ VAI <span style={{ color: "var(--orange-deep)" }}>APRENDER</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] font-light">
              Receitas temáticas para transformar o São João em oportunidade de venda:
            </p>
          </div>

          {/* Cards das receitas */}
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              { img: cookieMaca, emoji: "🍎", title: "Cookie Maçã do Amor", desc: "Recheio cremoso, casquinha vermelha brilhante — a cara do arraial em formato de cookie." },
              { img: cookiePamonha, emoji: "🌽", title: "Cookie Pamonha", desc: "O sabor mais querido do São João numa massa macia, cheia de pedacinhos generosos." },
            ].map((c) => (
              <article
                key={c.title}
                className="premium-card overflow-hidden group transition-all duration-500 hover:-translate-y-2"
                style={{ borderRadius: 40 }}
              >
                <div className="relative p-6 pb-0">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-72 md:h-80 object-cover blob-shape-2 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{c.emoji}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-[var(--muted-foreground)] text-base leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bloco complementar */}
          <div
            className="mt-12 p-8 md:p-10"
            style={{
              borderRadius: 32,
              background: "linear-gradient(135deg, #975023, #6b3a1a)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <p className="text-white text-lg md:text-xl font-medium">
              Além disso, durante as aulas você vai aprender:
            </p>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                "Técnicas de produção",
                "Estrutura de massa",
                "Finalização e apresentação",
                "Estratégias para vender mais em datas sazonais",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3 text-white/95 text-base md:text-lg">
                  <span
                    className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold flex-shrink-0"
                    style={{ background: "var(--yellow-junina)", color: "var(--brown-deep)" }}
                  >
                    ✓
                  </span>
                  <span className="font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="premium-card p-8 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center"
            style={{ borderRadius: 48 }}
          >
            <div>
              <span className="tag-chip">👩‍🍳 PÚBLICO</span>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
                PARA QUEM É <span style={{ color: "var(--orange-deep)" }}>ESSE EVENTO</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] font-light">
                Esse evento é para quem:
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Quer aproveitar o potencial de vendas do São João",
                  "Quer criar produtos temáticos e diferenciados",
                  "Quer aprender receitas criativas e lucrativas",
                  "Quer vender cookies com mais valor percebido",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold flex-shrink-0"
                      style={{ background: "#22c55e", color: "white" }}
                    >
                      ✓
                    </span>
                    <span className="text-base text-[var(--brown-deep)] font-medium">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative justify-self-center">
              <img
                src={cookiesCapa}
                alt="Flávia segurando cookies juninos"
                className="w-64 md:w-72 blob-shape shadow-xl"
                style={{ boxShadow: "var(--shadow-card)" }}
              />
              <img src={emojiChapeu} alt="" className="absolute -top-8 -right-6 w-20 float-anim" />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="tag-chip">📦 INCLUSO</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
              O QUE VOCÊ <span style={{ color: "var(--orange-deep)" }}>RECEBE</span>
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🎥", title: "2 dias de aulas ao vivo", desc: "Junto com a Flávia, em tempo real." },
              { icon: "📄", title: "Apostila completa", desc: "Material organizado para consulta." },
              { icon: "🌽", title: "Receitas exclusivas", desc: "Criadas para o São João." },
              { icon: "⏳", title: "Gravação por 15 dias", desc: "Assista quando quiser, no seu ritmo." },
            ].map((c) => (
              <div
                key={c.title}
                className="premium-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ borderRadius: 32 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ background: "var(--cream)", border: "2px solid var(--yellow-junina)" }}
                >
                  {c.icon}
                </div>
                <h3 className="font-bold text-lg leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] font-light">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER BUMP */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-12 relative overflow-hidden"
            style={{
              borderRadius: 40,
              background: "linear-gradient(135deg, #24100a 0%, #3a1d10 100%)",
              border: "3px solid var(--yellow-junina)",
              boxShadow: "0 30px 60px -20px rgba(36,16,10,0.4)",
            }}
          >
            <img
              src={emojiBalao}
              alt=""
              className="absolute -top-6 -right-6 w-32 opacity-90 float-anim"
            />
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center relative">
              <div>
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "var(--yellow-junina)", color: "var(--brown-deep)" }}
                >
                  🔓 ACESSO ESTENDIDO
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Quer assistir com calma e <span style={{ color: "var(--yellow-junina)" }}>rever as aulas</span> quando quiser?
                </h2>
                <p className="mt-4 text-white/80 text-lg font-light">
                  Por apenas{" "}
                  <span className="font-bold text-2xl" style={{ color: "var(--yellow-junina)" }}>
                    + R$19,90
                  </span>
                  , você garante:
                </p>
                <ul className="mt-5">
                  <li className="flex items-center gap-3 text-white text-lg font-medium">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
                      style={{ background: "var(--yellow-junina)", color: "var(--brown-deep)" }}
                    >
                      ✓
                    </span>
                    Acesso vitalício às gravações
                  </li>
                </ul>
                <p className="mt-5 text-xs text-white/60 italic">(Oferta apresentada no checkout)</p>
              </div>
              <div
                className="hidden md:flex w-32 h-32 rounded-full items-center justify-center flex-shrink-0"
                style={{ background: "var(--yellow-junina)" }}
              >
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: "32px solid var(--brown-deep)",
                    borderTop: "22px solid transparent",
                    borderBottom: "22px solid transparent",
                    marginLeft: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section
        id="oferta"
        className="relative py-24 md:py-32 px-6 mt-8"
        style={{
          backgroundImage: `linear-gradient(rgba(36,16,10,0.55), rgba(36,16,10,0.55)), url(${bgFinal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="tag-chip">🌽 OFERTA FINAL</span>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Acesso completo ao
            <br />
            <span style={{ color: "var(--yellow-junina)" }}>Cookies Juninos</span>
          </h2>

          <div
            className="mt-10 mx-auto p-8 md:p-10 max-w-xl bg-white"
            style={{ borderRadius: 40, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4)" }}
          >
            <p className="text-sm font-semibold tracking-widest text-[var(--brown)]">
              💰 INVESTIMENTO
            </p>
            <div className="mt-3">
              <p className="text-5xl md:text-6xl font-extrabold" style={{ color: "var(--orange-deep)" }}>
                3x de R$9,64
              </p>
              <p className="mt-2 text-lg text-[var(--muted-foreground)]">
                ou <strong className="text-[var(--brown-deep)] font-semibold">R$27,00</strong> à vista
              </p>
            </div>
            <div className="mt-7">
              <CTA large>Garantir meu acesso ao evento</CTA>
            </div>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              🔒 Pagamento seguro • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center bg-[var(--cream)]">
        <img src={logoMaskavo} alt="Comunidade Maskavo" className="h-8 mx-auto opacity-70" />
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Flávia Maskavo • Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
