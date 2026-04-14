import { useEffect } from "react";
import { Zap, Dumbbell, Clock, ShieldCheck, Flame, Star, ChevronDown, Leaf, Heart } from "lucide-react";
import ebookCover from "@/assets/ebook-cover-01.png";
import fotoVitor from "@/assets/foto-vitor.jpeg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/X4cLXf5";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CHECKOUT_URL}
    className={`inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-slow shadow-lg glow-primary ${className}`}
  >
    QUERO MEU E-RECEITAS
  </a>
);

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

    <div className="container mx-auto px-4 relative z-10 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-secondary font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up">
            Nutricionista Esportivo e Especialista em Fisiologia • Vitor Almendro
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up">
            RECEITAS QUE{" "}
            <span className="text-gradient">NUTREM,</span>
            <br />
            SABOR E{" "}
            <span className="text-gradient">RESULTADO.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up-delay">
            Receitas saudáveis e saborosas criadas para turbinar sua performance,
            facilitar sua rotina e transformar sua relação com a comida.
          </p>
          <div className="animate-fade-up-delay-2">
            <CTAButton />
          </div>
          <p className="text-muted-foreground text-sm mt-4 animate-fade-up-delay-2">
            📲 Acesso imediato • Formato digital
          </p>
        </div>

        {/* Ebook mockup */}
        <div className="flex-1 flex justify-center animate-fade-up-delay">
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl" />
            <img
              src={ebookCover}
              alt="E-Receitas — Nutrição Esportiva por Vitor Almendro"
              className="relative w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown size={32} />
      </div>
    </div>
  </section>
);

/* ─── BENEFÍCIOS ─── */
const benefits = [
  { icon: Leaf, title: "Ingredientes Naturais", desc: "Alimentos reais que seu corpo reconhece e aproveita" },
  { icon: Dumbbell, title: "Performance", desc: "Macros calculados para quem treina sério" },
  { icon: Flame, title: "Sabor de Verdade", desc: "Receitas que provam que saudável pode ser delicioso" },
  { icon: Clock, title: "Rápidas e Práticas", desc: "Preparo simples para encaixar na sua rotina" },
];

const Benefits = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl mb-6">
          CHEGA DE COMIDA <span className="text-gradient">SEM GRAÇA.</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Imagine ter um guia completo de receitas que são{" "}
          <strong className="text-foreground">saborosas, nutritivas e fáceis de preparar</strong> —
          criadas especialmente para quem leva a sério a{" "}
          <strong className="text-secondary">performance e a saúde</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:glow-primary transition-all duration-300 group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <b.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── O QUE VOCÊ VAI ENCONTRAR ─── */
const highlights = [
  {
    icon: Leaf,
    title: "Refeições Completas",
    desc: "Café da manhã, almoço, jantar e lanches — tudo pensado para o dia a dia de quem treina.",
  },
  {
    icon: Heart,
    title: "Nutrição Funcional",
    desc: "Ingredientes com propriedades anti-inflamatórias e que favorecem a recuperação muscular.",
  },
  {
    icon: Zap,
    title: "Pré e Pós-Treino",
    desc: "Receitas estratégicas para maximizar energia antes do treino e acelerar a recuperação depois.",
  },
  {
    icon: Star,
    title: "Informações Nutricionais",
    desc: "Cada receita acompanha macro e micronutrientes detalhados para você manter o controle.",
  },
];

const Highlights = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
          O que você recebe
        </p>
        <h2 className="text-4xl md:text-6xl mb-4">
          UM GUIA COMPLETO <span className="text-gradient">DE RECEITAS</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Mais do que um e-book de receitas — uma estratégia nutricional em forma de culinária.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group flex gap-4"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <h.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl mb-1">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SOBRE O VITOR ─── */
const About = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
            <img
              src={fotoVitor}
              alt="Vitor Almendro — Nutricionista Esportivo e Especialista em Fisiologia"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-primary/30"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Quem criou essas receitas
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            VITOR <span className="text-gradient">ALMENDRO</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Nutricionista esportivo com <strong className="text-foreground">mais de 15 anos de experiência</strong> e
            mais de <strong className="text-foreground">30 mil pacientes atendidos</strong>.
            Especialista em transformar a alimentação de quem treina pesado em algo
            <strong className="text-secondary"> prático, saboroso e com resultado real</strong>.
          </p>
          <p className="text-muted-foreground text-lg">
            "Cada receita desse e-book foi desenvolvida com base em ciência e na rotina real de quem
            treina. <strong className="text-foreground">Comer bem é a base de tudo.</strong>"
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── CTA FINAL ─── */
const FinalCTA = () => (
  <section id="checkout" className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl mb-4">
        INVISTA NA SUA <span className="text-gradient">ALIMENTAÇÃO</span>
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Você já investe em treino, suplementos e academia.
        Agora invista nas <strong className="text-foreground">receitas certas</strong> que vão
        fazer toda essa dedicação ter mais resultado.
      </p>

      <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 max-w-lg mx-auto mb-8 glow-primary">
        <CTAButton className="w-full text-center" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
        <span className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-secondary" /> Compra segura
        </span>
        <span className="flex items-center gap-2">
          <Zap size={16} className="text-secondary" /> Acesso imediato
        </span>
        <span className="flex items-center gap-2">
          <Star size={16} className="text-secondary" /> Garantia de 7 dias
        </span>
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Vitor Almendro — Nutrição Esportiva
      </p>
      <p className="text-xs">
        Este produto não substitui acompanhamento nutricional individualizado.
        Consulte um profissional de saúde.
      </p>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const EbookReceitasSaudaveis = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const prevDesc = descTag?.getAttribute("content") ?? "";
    const prevCanonical = canonicalTag?.getAttribute("href") ?? "";

    document.title = "E-Receitas | Receitas Saudáveis para Performance - Vitor Almendro";
    descTag?.setAttribute("content", "E-book de receitas saudáveis criado pelo nutricionista esportivo Vitor Almendro. Receitas nutritivas, saborosas e pensadas para quem treina. Acesso imediato.");
    canonicalTag?.setAttribute("href", "https://vitoralmendro.com.br/ebook-receitas-saudaveis");

    return () => {
      document.title = prevTitle;
      descTag?.setAttribute("content", prevDesc);
      canonicalTag?.setAttribute("href", prevCanonical);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Benefits />
      <Highlights />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default EbookReceitasSaudaveis;
