import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Dumbbell,
  Activity,
  ClipboardList,
  Users,
  Pill,
  TrendingUp,
  Phone,
  Instagram,
  Star,
  Award,
} from "lucide-react";
import logoSvg from "../../resources/logo-2026.svg";
import fotoVitor from "../../resources/foto-2.jpeg";
import ebookCover from "../../resources/capa-ebook-doces.png";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=554396748070&text=Ol%C3%A1%2C%20estou%20no%20site%20do%20Vitor%20Almendro%20e%20estou%20interessado(a)%20no%20atendimento%20*Presencial%20ou%20Online*";

/* ─── NAVBAR ─── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo placeholder — logo moved to hero */}
          <a href="#inicio" className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm font-bold text-foreground tracking-widest uppercase">Vitor Almendro</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/ebook-doces-saudaveis"
              className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-200"
            >
              Produtos
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <MessageCircle size={16} />
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/ebook-doces-saudaveis"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-secondary"
            >
              Produtos
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-3 rounded-lg cursor-pointer"
            >
              <MessageCircle size={16} />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ─── HERO ─── */
const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center overflow-hidden pt-16"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

    <div className="container mx-auto px-4 relative z-10 py-20">
      <div className="flex flex-col items-center text-center">
        {/* Copy */}
        <div className="max-w-4xl">
          <div className="flex justify-center mb-6 animate-fade-up">
            <img src={logoSvg} alt="Vitor Almendro" className="h-20 md:h-24 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up">
            NUTRICIONISTA ESPORTIVO{" "}
            <span className="text-gradient">E ESPECIALISTA EM FISIOLOGIA</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-slow shadow-lg glow-primary cursor-pointer"
            >
              <MessageCircle size={20} />
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── SERVIÇOS ─── */
const services = [
  {
    icon: ClipboardList,
    title: "Avaliação Nutricional",
    desc: "Análise completa do seu perfil alimentar, composição corporal e demandas energéticas para uma estratégia personalizada.",
  },
  {
    icon: Dumbbell,
    title: "Nutrição para Performance",
    desc: "Planejamento alimentar focado em potencializar treinos, acelerar a recuperação e maximizar resultados atléticos.",
  },
  {
    icon: Activity,
    title: "Acompanhamento Online",
    desc: "Atendimento remoto com ajustes contínuos do plano alimentar, suporte via app e retornos periódicos.",
  },
  {
    icon: Users,
    title: "Consulta Presencial",
    desc: "Atendimento individualizado no consultório, com avaliação completa e orientações detalhadas face a face.",
  },
  {
    icon: Pill,
    title: "Suplementação Esportiva",
    desc: "Orientação sobre uso racional de suplementos com base em evidências científicas e nas suas metas.",
  },
  {
    icon: TrendingUp,
    title: "Periodização Nutricional",
    desc: "Ajuste da nutrição conforme os ciclos de treino — pré, durante e pós-competição — para atletas de todos os níveis.",
  },
];

const Services = () => (
  <section id="servicos" className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
          O que ofereço
        </p>
        <h2 className="text-4xl md:text-6xl mb-6">
          SERVIÇOS <span className="text-gradient">ESPECIALIZADOS</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Cada atendimento é pensado de forma única para o seu perfil, seus objetivos e a sua
          rotina de treinos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:glow-primary transition-all duration-300 group cursor-default"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg glow-primary cursor-pointer"
        >
          <MessageCircle size={20} />
          Agendar Minha Consulta
        </a>
      </div>
    </div>
  </section>
);

/* ─── SOBRE ─── */
const About = () => (
  <section id="sobre" className="py-20 md:py-28">
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
            Sobre mim
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            VITOR <span className="text-gradient">ALMENDRO</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Nutricionista esportivo com{" "}
            <strong className="text-foreground">mais de 15 anos de experiência</strong>, associando
            a nutrição esportiva e a fisiologia para transformar a vida de atletas amadores e
            profissionais.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Mais de{" "}
            <strong className="text-foreground">30 mil pacientes atendidos</strong> e
            especialista em criar estratégias nutricionais que entregam{" "}
            <strong className="text-secondary">resultados reais e duradouros</strong>.
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {[
              { icon: Award, label: "CRN Registrado" },
              { icon: Star, label: "Especialista Esportivo" },
              { icon: TrendingUp, label: "Fisiologia do Exercício" },
            ].map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 bg-card border border-border px-3 py-2 rounded-lg text-sm text-muted-foreground"
              >
                <c.icon size={14} className="text-primary" />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── EBOOK CTA ─── */
const EbookCTA = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto glow-primary">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Ebook cover */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-2xl" />
              <img
                src={ebookCover}
                alt="E-book Doces Fitness — Receitas Saudáveis"
                className="relative w-48 md:w-56 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="text-center md:text-left">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
              Novo e-book
            </p>
            <h2 className="text-3xl md:text-5xl mb-4">
              DOCES <span className="text-gradient">SAUDÁVEIS</span>
              <br />
              QUE TURBINM SEU TREINO
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              Receitas fitness deliciosas criadas por Vitor Almendro para dar energia,
              saciar a vontade de doce e manter seu corpo em alta performance.
            </p>
            <Link
              to="/ebook-doces-saudaveis"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
            >
              Conhecer o E-book
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── CONTATO ─── */
const Contact = () => (
  <section id="contato" className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
        Fale comigo
      </p>
      <h2 className="text-4xl md:text-6xl mb-4">
        PRONTO PARA{" "}
        <span className="text-gradient">TRANSFORMAR</span>
        <br />
        SEU DESEMPENHO?
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Entre em contato e dê o primeiro passo para uma nutrição que realmente funciona
        para o seu corpo e seus objetivos.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-slow shadow-lg glow-primary cursor-pointer"
        >
          <MessageCircle size={22} />
          Agendar pelo WhatsApp
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer"
        >
          <Phone size={16} className="text-secondary" />
          (43) 9674-8070
        </a>
        <a
          href="https://www.instagram.com/vitoralmendro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer"
        >
          <Instagram size={16} className="text-secondary" />
          @vitoralmendro
        </a>
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Vitor Almendro" className="h-7 w-auto opacity-70" />
          <span>© {new Date().getFullYear()} Vitor Almendro — Nutrição Esportiva</span>
        </div>
        <div className="flex gap-6 text-xs">
          <Link to="/ebook-doces-saudaveis" className="hover:text-foreground transition-colors">
            Ebook Doces Saudáveis
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const Home = () => (
  <>
    <Navbar />
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <EbookCTA />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
