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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Nossa História
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Uma jornada de amor, cumplicidade e sonhos compartilhados
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            {/* Timeline items */}
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative mb-12 last:mb-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Mobile & Desktop layout */}
                  <div
                    className={`flex items-start gap-6 sm:gap-0 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-12 sm:pl-0 ${isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                        }`}
                    >
                      <div
                        className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover-lift animate-fade-in ${isEven ? "sm:mr-6" : "sm:ml-6"
                          }`}
                      >
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon - center point */}
                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <Icon className="w-4 h-4 text-primary-foreground" />
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
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
            <p className="font-serif text-xl text-foreground italic mb-4">
              "O amor não é olhar um para o outro, é olhar juntos na mesma
              direção."
            </p>
            <p className="text-sm text-muted-foreground">
              — Antoine de Saint-Exupéry
            </p>
          </div>
        </div>
      </div>
    </main>

  );
};

export default OurStory;
