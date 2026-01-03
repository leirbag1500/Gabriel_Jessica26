import { useState } from "react";
import { FloralDivider } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import homeBg from "@/assets/home-bg.jpg";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send, Users, MessageSquare, User, Mail } from "lucide-react";

const RSVP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.leirbag1500.lat/webhook/confirmacaoPresenca", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar confirmação");
      }

      toast({
        title: "Presença Confirmada! 💕",
        description: `Obrigado ${formData.name}! Estamos ansiosos para celebrar com você.`,
      });

      setFormData({ name: "", email: "", guests: "1", message: "" });
    } catch (error) {
      console.error("Erro ao enviar RSVP:", error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao confirmar sua presença. Tente novamente ou nos avise pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16 relative">
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
        <div className="text-center max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Heart className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-2">
            RSVP - Confirmar Presença
          </h1>
          <FloralDivider className="mb-4" />
          <p className="text-muted-foreground">
            Ficaremos muito felizes com sua presença neste dia tão especial.
            Por favor, confirme até 30 de abril de 2026.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-700 delay-200">
          <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2 group">
                <Label htmlFor="name" className="flex items-center gap-2 group-focus-within:text-primary transition-colors">
                  <User className="w-4 h-4 text-primary group-focus-within:scale-110 transition-transform" />
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
                  className="bg-white/50 border-input transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white h-11"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 group">
                <Label htmlFor="email" className="flex items-center gap-2 group-focus-within:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary group-focus-within:scale-110 transition-transform" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white/50 border-input transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white h-11"
                />
              </div>

              {/* Number of guests */}
              <div className="space-y-2 group">
                <Label htmlFor="guests" className="flex items-center gap-2 group-focus-within:text-primary transition-colors">
                  <Users className="w-4 h-4 text-primary group-focus-within:scale-110 transition-transform" />
                  Quantas pessoas (incluindo você)
                </Label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full h-11 px-3 py-2 bg-white/50 border border-input rounded-md text-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "pessoa" : "pessoas"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 group">
                <Label htmlFor="message" className="flex items-center gap-2 group-focus-within:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4 text-primary group-focus-within:scale-110 transition-transform" />
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
                  className="bg-white/50 border-input transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
          <p className="text-center text-sm text-muted-foreground mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Dúvidas? Entre em contato conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </main>

  );
};

export default RSVP;
