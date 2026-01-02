import { Countdown } from "@/components/Countdown";
import { Ornament } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";
import homeBg from "@/assets/home-bg.jpg";

const Home = () => {
  return (

    <main className="min-h-screen bg-floral-pattern pt-20">
      {/* Logo Section - Outside the background image */}
      <div className="py-8 text-center bg-background/50 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-white/20 transition-all duration-300">
        <div className="">
          <img
            src={logo}
            alt="Gabriel & Jessica"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto opacity-90"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image scoped to this section */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-secondary/30 pointer-events-none z-0" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Pre-title */}
          <p
            className="text-sm sm:text-base text-primary/80 tracking-[0.3em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Vamos nos casar
          </p>

          {/* Names */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-zoom-in"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-gradient-gold inline-block hover:scale-105 transition-transform duration-300">Gabriel</span>
            <span className="text-primary mx-4 animate-pulse-gentle inline-block">&</span>
            <span className="text-gradient-gold inline-block hover:scale-105 transition-transform duration-300">Jessica</span>
          </h1>

          {/* Ornament */}
          <Ornament className="mb-8 animate-fade-in" />

          {/* Date and Location */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base tracking-wider">16 de Maio de 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base tracking-wider">Campinas, SP</span>
            </div>
          </div>

          {/* Romantic quote */}
          <p
            className="font-serif text-lg sm:text-xl text-muted-foreground italic max-w-lg mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            "O amor é paciente, o amor é bondoso..."
          </p>

          {/* Countdown section */}
          <div
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-6">
              Contagem Regressiva
            </h2>
            <Countdown />
          </div>

          {/* CTA Button */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift btn-shimmer transition-all duration-300 rounded-full"
            >
              <Link to="/confirmar-presenca">
                Confirmar Presença
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator - Removed or moved? Kept inside section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-gentle z-10">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>
    </main>

  );
};

export default Home;
