import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Decorative element */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Names */}
          <h3 className="font-serif text-2xl text-foreground">
            Gabriel & Jessica
          </h3>

          {/* Date */}
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            16 de Maio de 2026
          </p>

          {/* Footer text */}
          <p className="text-xs text-muted-foreground mt-4">
            Feito com amor para celebrar nosso grande dia
          </p>
        </div>
      </div>
    </footer>
  );
};
