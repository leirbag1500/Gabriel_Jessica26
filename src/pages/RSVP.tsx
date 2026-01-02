import { useState } from "react";
import { FloralDivider } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import homeBg from "@/assets/home-bg.jpg";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send, Users, MessageSquare, User } from "lucide-react";

const RSVP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Presença Confirmada! 💕",
      description: `Obrigado ${formData.name}! Estamos ansiosos para celebrar com você.`,
    });

    setFormData({ name: "", guests: "1", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-14 pb-16 relative">
      {/* Background Image scoped to this section */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Confirmar Presença
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Ficaremos muito felizes com sua presença neste dia tão especial.
            Por favor, confirme até 30 de abril de 2026.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Number of guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Quantas pessoas (incluindo você)
                </Label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full h-10 px-3 py-2 bg-background/50 border border-border/50 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "pessoa" : "pessoas"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Mensagem para os noivos (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Deixe uma mensagem carinhosa..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Confirmar Presença
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Additional info */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Dúvidas? Entre em contato conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </main>

  );
};

export default RSVP;
