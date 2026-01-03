import { FloralDivider } from "@/components/Ornament";
import { Heart, Sparkles, Gem, Calendar } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Nos conhecemos",
    description:
      "O destino começou a escrever nossa história quando nossos olhares se cruzaram pela primeira vez. Naquele momento, mal sabíamos que nossas vidas estavam prestes a mudar para sempre.",
    icon: Sparkles,
  },
  {
    year: "2019",
    title: "O primeiro beijo",
    description:
      "A química era inegável e, entre conversas e sorrisos, aconteceu nosso primeiro momento especial. Foi quando sentimos que havia algo único e intenso nascendo entre nós.",
    icon: Gem,
  },
  {
    year: "2020",
    title: "Iniciamos namoro",
    description:
      "Decidimos que não fazia mais sentido caminhar separados. Oficializamos nossa união e começamos a construir, dia após dia, a base sólida do nosso amor e cumplicidade.",
    icon: Heart,
  },
  {
    year: "2025",
    title: "Noivamos",
    description:
      "Depois de tantos capítulos lindos, demos um passo ainda maior. Com o coração transbordando de certeza, dissemos 'sim' para a promessa de uma vida inteira juntos. Um compromisso selado com amor eterno.",
    icon: Gem,
  },
  {
    year: "2026",
    title: "O grande dia",
    description:
      "O dia em que celebraremos cada segundo da nossa jornada e o início da nossa família. 16 de maio de 2026 ficará marcado como o momento em que nossos sonhos se uniram em um só propósito.",
    icon: Calendar,
  },
];

const OurStory = () => {
  return (
    <main className="min-h-screen bg-floral-pattern pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Nossa História
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Uma jornada de amor, cumplicidade e sonhos compartilhados
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            {/* Timeline items */}
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative mb-16 last:mb-0 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Mobile & Desktop layout */}
                  <div
                    className={`flex items-start gap-8 sm:gap-0 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-12 sm:pl-0 ${isEven ? "sm:pr-16 sm:text-right" : "sm:pl-16 sm:text-left"
                        }`}
                    >
                      <div
                        className={`group relative bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 ${isEven ? "sm:mr-0" : "sm:ml-0"
                          }`}
                      >
                        {/* Year Badge */}
                        <div className={`inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 ${isEven ? "sm:ml-auto" : ""}`}>
                          {item.year}
                        </div>

                        <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Decorative corner */}
                        <div className={`absolute top-0 w-16 h-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isEven ? "right-0 bg-gradient-to-bl" : "left-0 bg-gradient-to-br"} from-primary/5 to-transparent rounded-tr-2xl`} />
                      </div>
                    </div>

                    {/* Icon - center point */}
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border-4 border-primary/20 rounded-full flex items-center justify-center shadow-xl z-10 transform transition-transform duration-500 hover:scale-110 hover:border-primary">
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                    </div>

                    {/* Empty space for desktop layout */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-24 text-center animate-in fade-in zoom-in-95 duration-700 delay-1000">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 p-10 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <Sparkles className="w-8 h-8 text-primary/40 mx-auto mb-6" />
            <p className="font-serif text-2xl sm:text-3xl text-foreground italic mb-6 leading-relaxed">
              "O amor não é olhar um para o outro, é olhar juntos na mesma
              direção."
            </p>
            <p className="text-base text-muted-foreground font-medium tracking-wide">
              — ANTOINE DE SAINT-EXUPÉRY
            </p>
          </div>
        </div>
      </div>
    </main>

  );
};

export default OurStory;
