import { Zap, Dumbbell, Clock, ShieldCheck, BookOpen, Flame, Star, ChevronDown } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import fotoVitor from "@/assets/foto-vitor.jpeg";
import ebookPage2 from "@/assets/ebook-page-2.png";
import ebookPage3 from "@/assets/ebook-page-3.png";
import ebookPage4 from "@/assets/ebook-page-4.png";

const CHECKOUT_URL = "#checkout";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-slow shadow-lg glow-primary ${className}`}
  >
    QUERO MEU EBOOK — R$ 29,90
  </a>
);

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

    <div className="container mx-auto px-4 relative z-10 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-secondary font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up">
            Nutricionista Esportivo • Vitor Almendro
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up">
            DOCES QUE DÃO{" "}
            <span className="text-gradient">ENERGIA,</span>
            <br />
            SABOR E{" "}
            <span className="text-gradient">RESULTADO.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up-delay">
            Receitas fitness deliciosas que turbiam sua disposição, 
            saciam a vontade de doce e mantêm seu corpo em alta performance.
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
              alt="E-book Doces Fitness — Receitas que dão energia"
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

/* ─── PROBLEMA & SOLUÇÃO ─── */
const benefits = [
  { icon: Zap, title: "Mais Energia", desc: "Ingredientes que potencializam seu treino e seu dia" },
  { icon: Dumbbell, title: "Performance", desc: "Macros calculados para quem treina sério" },
  { icon: Flame, title: "Sabor Sem Culpa", desc: "Doces que trabalham a favor do seu corpo" },
  { icon: Clock, title: "Prontas em Minutos", desc: "Receitas práticas para rotinas intensas" },
];

const ProblemSolution = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl mb-6">
          CANSADO DE DIETAS <span className="text-gradient">SEM GRAÇA?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Imagine comer <strong className="text-foreground">brigadeiro, arroz doce e brownie</strong> — 
          e ainda assim acordar no dia seguinte com <strong className="text-secondary">mais disposição</strong> e 
          um corpo cada vez mais leve.
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
              alt="Vitor Almendro — Nutricionista Esportivo"
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
            Nutricionista esportivo com <strong className="text-foreground">mais de 12 anos de experiência</strong> e 
            mais de <strong className="text-foreground">10 mil pacientes atendidos</strong>. 
            Especialista em transformar a alimentação de quem treina pesado em algo 
            <strong className="text-secondary"> prático, saboroso e com resultado real</strong>.
          </p>
          <p className="text-muted-foreground text-lg">
            "Meu objetivo é provar que comer bem não precisa ser sacrifício. 
            <strong className="text-foreground"> Cada receita desse e-book foi pensada pra dar energia, prazer e resultado.</strong>"
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── PREVIEW DE RECEITAS ─── */
const recipes = [
  { img: ebookPage3, title: "Receitas exclusivas com informações nutricionais detalhadas" },
  { img: ebookPage4, title: "Preparo simples e ingredientes acessíveis" },
  { img: ebookPage2, title: "Visual profissional e fácil de seguir" },
];

const RecipePreview = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl mb-4">
          ESPIE ALGUMAS <span className="text-gradient">RECEITAS</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Doces que parecem "proibidos" mas são seus maiores aliados na busca por um corpo com mais energia e disposição.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {recipes.map((r, i) => (
          <div
            key={i}
            className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
          >
            <img
              src={r.img}
              alt={r.title}
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-foreground text-sm font-medium">{r.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── O QUE VOCÊ RECEBE ─── */
const whatYouGet = [
  { icon: BookOpen, text: "Receitas exclusivas de doces fitness" },
  { icon: Flame, text: "Informações nutricionais completas por receita" },
  { icon: Clock, text: "Modo de preparo rápido e prático" },
  { icon: Zap, text: "Acesso digital imediato — leia no celular ou tablet" },
  { icon: ShieldCheck, text: "Desenvolvido por nutricionista esportivo certificado" },
  { icon: Star, text: "Receitas testadas por milhares de pacientes" },
];

const WhatYouGet = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl mb-4">
          O QUE VOCÊ <span className="text-gradient">RECEBE</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {whatYouGet.map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <item.icon className="text-primary" size={20} />
            </div>
            <p className="text-foreground font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── DEPOIMENTOS ─── */
const testimonials = [
  {
    name: "Camila R.",
    text: "Nunca imaginei que ia comer brigadeiro e ainda emagrecer. Minha energia no treino aumentou demais!",
    role: "Atleta de CrossFit",
  },
  {
    name: "Lucas M.",
    text: "Receitas práticas e muito gostosas. Parei de sofrer com dieta e meu shape só melhorou.",
    role: "Personal Trainer",
  },
  {
    name: "Ana Paula S.",
    text: "Melhor investimento que fiz. As receitas são fáceis e meus filhos amam também!",
    role: "Mãe e praticante de musculação",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl mb-4">
          QUEM JÁ <span className="text-gradient">EXPERIMENTOU</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="text-foreground font-bold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA FINAL ─── */
const FinalCTA = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl mb-4">
        POR MENOS QUE UM <span className="text-gradient">LANCHE</span>
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Você investe em suplementos, treino e academia. Agora invista nos 
        <strong className="text-foreground"> doces certos </strong>
        que vão dar aquela energia extra sem sabotar seus resultados.
      </p>

      <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 max-w-lg mx-auto mb-8 glow-primary">
        <p className="text-muted-foreground line-through text-lg mb-2">De R$ 67,00</p>
        <p className="text-5xl md:text-7xl text-foreground mb-2">
          R$ <span className="text-gradient">29,90</span>
        </p>
        <p className="text-muted-foreground text-sm mb-8">Pagamento único • Acesso vitalício</p>
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
const Index = () => (
  <main className="overflow-hidden">
    <Hero />
    <ProblemSolution />
    <About />
    <RecipePreview />
    <WhatYouGet />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
