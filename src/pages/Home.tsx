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
      <div className="py-8 text-center bg-background/50 backdrop-blur-sm shadow-sm border-b border-white/20 transition-all duration-300">
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

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Pre-title */}
          <p
            className="text-sm sm:text-base text-white/90 tracking-[0.4em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 font-medium drop-shadow-md"
            style={{ animationDelay: '0.2s' }}
          >
            VAMOS NOS CASAR
          </p>

          {/* Names */}
          <h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 animate-in fade-in zoom-in-95 duration-1000 drop-shadow-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default">Gabriel</span>
            <span className="text-white/80 mx-4 sm:mx-6 font-light animate-pulse inline-block">&</span>
            <span className="inline-block hover:scale-105 transition-transform duration-500 cursor-default">Jessica</span>
          </h1>

          {/* Ornament */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 text-white/80">
            <Ornament />
          </div>

          {/* Date and Location */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-white"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              <Calendar className="w-5 h-5" />
              <span className="text-base sm:text-lg tracking-widest uppercase">16.05.2026</span>
            </div>

            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              <MapPin className="w-5 h-5" />
              <span className="text-base sm:text-lg tracking-widest uppercase">Campinas, SP</span>
            </div>
          </div>

          {/* Romantic quote */}
          <p
            className="font-serif text-xl sm:text-2xl text-white/90 italic max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-relaxed drop-shadow-lg"
            style={{ animationDelay: '0.8s' }}
          >
            "O amor não é olhar um para o outro, é olhar juntos na mesma direção."
          </p>

          {/* Countdown section */}
          <div
            className="mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000"
            style={{ animationDelay: '1s' }}
          >
            <Countdown />
          </div>

          {/* CTA Button */}
          <div
            className="animate-in fade-in zoom-in-90 duration-1000"
            style={{ animationDelay: '1.2s' }}
          >
            <Button
              asChild
              size="lg"
              className="group relative text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 hover:text-primary shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] hover:-translate-y-1 transition-all duration-500 rounded-full border-2 border-white/50"
            >
              <Link to="/confirmar-presenca" className="flex items-center gap-2">
                <span className="tracking-wide font-medium">Confirmar Presença</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms] z-10">
          <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white">Descubra</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>

  );
};

export default Home;
