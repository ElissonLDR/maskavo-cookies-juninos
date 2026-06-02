import { createFileRoute } from "@tanstack/react-router";
import bgHero from "@/assets/bg-hero.webp";
import bgHeroMobile from "@/assets/bg-hero-mobile.webp";
import emojiBalao from "@/assets/emoji-balao.png";
import emojiChapeu from "@/assets/emoji-chapeu.png";
import cookiesCapa from "@/assets/cookies-capa.webp";
import logoMaskavo from "@/assets/logo-maskavo.svg";

export const Route = createFileRoute("/acesse-nosso-grupo")({
  head: () => ({
    meta: [
      { title: "Acesse o Grupo — Cookies Juninos | Flávia Maskavo" },
      {
        name: "description",
        content:
          "Entre no grupo exclusivo de alunos do evento Cookies Juninos com Flávia Maskavo.",
      },
      { property: "og:title", content: "Acesse o Grupo — Cookies Juninos" },
      {
        property: "og:description",
        content: "Link de acesso ao grupo exclusivo de alunos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhatsappPage,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/LXAidZ6uU4q3w438I3Elht";

function WhatsappPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--brown-deep)] overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 flex items-center justify-center">
        <div className="md:bg-transparent md:px-0 md:py-0 md:rounded-none md:backdrop-blur-none bg-white/70 px-5 py-2.5 rounded-full backdrop-blur-sm inline-flex items-center">
          <img src={logoMaskavo} alt="Comunidade Maskavo" className="h-12 md:h-14" />
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center">
        {/* background desktop */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${bgHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* background mobile */}
        <div
          className="absolute inset-0 block md:hidden"
          style={{
            backgroundImage: `url(${bgHeroMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Texto */}
          <div className="text-[var(--brown-deep)] text-center md:text-left">
            <span className="tag-chip">📅 EVENTO AO VIVO • SÃO JOÃO</span>

            <h1
              className="mt-6 font-extrabold leading-[0.95] whitespace-nowrap"
              style={{ fontSize: "clamp(2.5rem, 12vw, 4.5rem)" }}
            >
              Cookies <span style={{ color: "var(--orange-deep)" }}>Juninos</span>
            </h1>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full max-w-sm text-center whitespace-nowrap"
                style={{ padding: "1.125rem 1rem" }}
              >
                <span>Acesse nosso grupo</span>
              </a>
            </div>
          </div>

          {/* Imagem — no mobile aparece após o texto, no desktop volta à posição original */}
          <div className="relative flex items-center justify-center order-2 md:order-none">
            <img
              src={emojiBalao}
              alt=""
              className="absolute -top-6 -left-2 w-16 md:w-24 float-anim z-10"
              style={{ animationDelay: "0.5s" }}
            />
            <img
              src={emojiChapeu}
              alt=""
              className="absolute -bottom-4 -right-2 w-20 md:w-28 float-anim z-10"
            />
            <img
              src={cookiesCapa}
              alt="Cookies Juninos"
              className="w-full max-w-xs md:max-w-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
