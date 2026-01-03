import { useState } from "react";
import { FloralDivider } from "@/components/Ornament";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import pixQrCode from "@/assets/pix-qr-code.png";
import {
  Gift,
  Copy,
  Check,
  Heart,
  Upload,
  Coffee,
  Pizza,
  Martini,
  ShoppingBag,
  Plane,
  Sparkles,
  Crown,
  Minus,
  Plus,
  Ticket
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Ticket = {
  id: string;
  name: string;
  description: string;
  price: number;
  raffleNumbers: number;
  icon: React.ElementType;
};

const tickets: Ticket[] = [
  {
    id: "survival",
    name: "Sobrevivência Matinal",
    description: "Ajuda oficial para o café que mantém o amor vivo ☕",
    price: 35,
    raffleNumbers: 0,
    icon: Coffee,
  },
  {
    id: "pizza",
    name: "Pizza da Paz",
    description: "Evita discussões desnecessárias 🍕",
    price: 45,
    raffleNumbers: 1,
    icon: Pizza,
  },
  {
    id: "drink",
    name: "Drink da Coragem",
    description: "Para decidir quem lava a louça 🍸",
    price: 60,
    raffleNumbers: 2,
    icon: Martini,
  },
  {
    id: "supplies",
    name: "Reposição Pós-Casamento",
    description: "Papel higiênico, sabão e paciência 😆",
    price: 85,
    raffleNumbers: 3,
    icon: ShoppingBag, // Using ShoppingBag as closest to supplies
  },
  {
    id: "honeymoon",
    name: "Fundo Lua de Mel",
    description: "Sempre falta alguma coisa ✈️",
    price: 110,
    raffleNumbers: 4,
    icon: Plane,
  },
  {
    id: "experience",
    name: "Experiência Aleatória",
    description: "Pode virar história ou meme 😂",
    price: 150,
    raffleNumbers: 5,
    icon: Sparkles,
  },
  {
    id: "sponsor",
    name: "Patrocinador Oficial",
    description: "Status máximo desbloqueado 😎",
    price: 190,
    raffleNumbers: 6,
    icon: Crown,
  },
  {
    id: "romantic_dinner",
    name: "Jantar Romântico",
    description: "Uma noite inesquecível para o casal 🍷",
    price: 220,
    raffleNumbers: 7,
    icon: Heart,
  },
];

const Gifts = () => {
  const { toast } = useToast();
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [showPixDialog, setShowPixDialog] = useState(false);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Static Pix key for now, as requested.
  // In a real scenario, we might generate a specific string or just use the static key.
  const pixKey = "0eca02a0-0811-48ac-a4f2-34f15eb79344";

  const handleUpdateTicket = (id: string, delta: number) => {
    setSelectedTickets((prev) => {
      const current = prev[id] || 0;
      const newQuantity = Math.max(0, current + delta);
      if (newQuantity === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQuantity };
    });
  };

  const resetDialog = () => {
    setShowPixDialog(false);
    setTimeout(() => {
      setReceiptFile(null);
      setGuestName("");
      setGuestEmail("");
      setShowSuccess(false);
      setIsSubmitting(false);
    }, 300);
  };

  const handleSubmit = async () => {
    if (!receiptFile || !guestName || !guestEmail) return;

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("guestName", guestName);
    formData.append("guestEmail", guestEmail);
    formData.append("receipt", receiptFile);
    formData.append("totalValue", totalValue.toString());
    formData.append("totalRaffleNumbers", totalRaffleNumbers.toString());
    formData.append("selectedTickets", JSON.stringify(selectedTickets));

    try {
      const response = await fetch("https://n8n.leirbag1500.lat/webhook/ListaPresentes", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Falha no envio");

      setShowSuccess(true);
      toast({ title: "Comprovante enviado!", description: "Boa sorte no sorteio! 🍀" });
    } catch (error) {
      console.error("Erro no envio:", error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um erro ao enviar seu comprovante. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast({
        title: "Chave PIX copiada! 💕",
        description: "Confira os dados e lembre-se de preencher suas informações e anexar o comprovante!",
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast({
        title: "Erro ao copiar",
        description: "Por favor, copie manualmente a chave.",
        variant: "destructive",
      });
    }
  };

  const totalValue = Object.entries(selectedTickets).reduce((acc, [id, qty]) => {
    const ticket = tickets.find((t) => t.id === id);
    return acc + (ticket ? ticket.price * qty : 0);
  }, 0);

  const totalRaffleNumbers = Object.entries(selectedTickets).reduce((acc, [id, qty]) => {
    const ticket = tickets.find((t) => t.id === id);
    return acc + (ticket ? ticket.raffleNumbers * qty : 0);
  }, 0);

  const hasSelection = totalValue > 0;

  return (
    <main className="min-h-screen bg-floral-pattern pt-24 pb-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-gentle" />
            <Gift className="w-12 h-12 text-primary relative z-10" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Lista de Presentes
          </h1>
          <FloralDivider className="mb-8 opacity-80" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Sua presença é nosso maior presente! Mas se quiser nos mimar,
            escolha uma das opções abaixo e ainda <span className="font-semibold text-primary">concorra a prêmios incríveis</span> no dia da festa!
          </p>
        </div>

        {/* Tickets Grid */}
        {/* Tickets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 px-2">
          {tickets.map((ticket, index) => {
            const Icon = ticket.icon;
            const quantity = selectedTickets[ticket.id] || 0;
            const isSelected = quantity > 0;

            return (
              <div
                key={ticket.id}
                className={`relative group transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-backwards
                  ${isSelected ? "z-10" : "z-0"}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`
                  relative h-full bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex flex-col items-center text-center transition-all duration-300 border
                  ${isSelected
                    ? "border-primary shadow-[0_8px_30px_rgb(0,0,0,0.12)] -translate-y-2 ring-1 ring-primary/20 bg-white/95"
                    : "border-border/40 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 hover:bg-white/90"
                  }
                `}>
                  {/* Raffle Badge */}
                  {ticket.raffleNumbers > 0 && (
                    <div className={`
                      absolute -top-3 -right-3 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform transition-transform duration-300
                      ${isSelected ? "scale-110 bg-primary text-primary-foreground ring-2 ring-white" : "bg-secondary text-secondary-foreground group-hover:scale-105"}
                    `}>
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {ticket.raffleNumbers} {ticket.raffleNumbers === 1 ? "cupom" : "cupons"}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`
                    w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                    ${isSelected
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg scale-110 rotate-3"
                      : "bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-105"
                    }
                  `}>
                    <Icon className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{ticket.name}</h3>
                  <p className="text-sm text-muted-foreground/80 mb-6 min-h-[40px] leading-relaxed">
                    {ticket.description}
                  </p>

                  <div className="mt-auto w-full space-y-4">
                    <div className={`text-2xl font-bold transition-colors duration-300 ${isSelected ? "text-primary" : "text-foreground/80"}`}>
                      R$ {ticket.price},00
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-3 bg-secondary/30 rounded-full p-1.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleUpdateTicket(ticket.id, -1)}
                        disabled={quantity === 0}
                        className="rounded-full w-8 h-8 hover:bg-white hover:text-destructive hover:shadow-sm transition-all disabled:opacity-20"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className={`font-mono text-lg w-8 font-bold transition-all duration-300 ${quantity > 0 ? "text-primary scale-110" : "text-muted-foreground"}`}>
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleUpdateTicket(ticket.id, 1)}
                        className="rounded-full w-8 h-8 hover:bg-primary hover:text-primary-foreground hover:shadow-sm transition-all text-primary"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout Bar - Sticky Bottom */}
        <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 transform
          ${hasSelection ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}>
          <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-primary/10 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]" />

          <div className="container mx-auto relative px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
              <div className="flex items-center gap-6 sm:gap-12 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Total Selecionado</span>
                  <span className="text-3xl font-serif font-bold text-primary">
                    R$ {totalValue},00
                  </span>
                </div>

                <div className="w-px h-12 bg-border hidden sm:block" />

                <div className="flex items-center gap-3 bg-secondary/50 px-4 py-2 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-gentle">
                    <Ticket className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Seus Cupons</span>
                    <span className="text-lg font-bold text-foreground">{totalRaffleNumbers} números</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground"
                onClick={() => {
                  setShowPixDialog(true);
                  handleCopyPix();
                }}
              >
                Finalizar Contribuição
              </Button>
            </div>
          </div>
        </div>

        {/* Pix Dialog */}
        <Dialog open={showPixDialog} onOpenChange={(open) => !open && resetDialog()}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            {!showSuccess ? (
              <>
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-serif text-center sm:text-left">Finalizar Contribuição</DialogTitle>
                  <DialogDescription className="text-center sm:text-left">
                    Seus presentes ajudam a construir nosso sonho!
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: Summary & Personal Data */}
                  <div className="space-y-6">
                    {/* Order Summary */}
                    <div className="bg-secondary/30 rounded-xl p-4 space-y-3 border border-border/50">
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Resumo do Pedido
                      </h4>
                      <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                        {Object.entries(selectedTickets).map(([id, qty]) => {
                          const t = tickets.find(t => t.id === id);
                          if (!t) return null;
                          return (
                            <div key={id} className="flex justify-between text-sm py-1 border-b border-border/30 last:border-0">
                              <span className="text-foreground/90">{qty}x {t.name}</span>
                              <span className="font-mono text-foreground">R$ {t.price * qty},00</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between items-center">
                        <span className="font-medium text-foreground">Total</span>
                        <span className="text-xl font-bold text-primary">R$ {totalValue},00</span>
                      </div>
                    </div>

                    {totalRaffleNumbers > 0 && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3 animate-pulse-gentle">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-foreground/80 font-medium">
                          Você garantiu <span className="font-bold text-primary text-lg mx-1">{totalRaffleNumbers}</span> {totalRaffleNumbers === 1 ? "número" : "números"} da sorte!
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Seus Dados</h4>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            placeholder="Ex: Gabriel Silva"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email">Email para contato</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Ex: gabriel@email.com"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            className="bg-background/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Payment & Confirmation */}
                  <div className="space-y-6 lg:border-l lg:pl-8 border-border/50">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center">
                      <p className="text-sm font-medium text-muted-foreground mb-4">Escaneie o QR Code</p>
                      <img
                        src={pixQrCode}
                        alt="QR Code Pix"
                        className="w-48 h-48 object-contain mx-auto mb-4"
                      />
                      <div className="bg-secondary/50 rounded-lg p-3 flex flex-col gap-2">
                        <p className="text-xs text-muted-foreground font-mono break-all">{pixKey}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 border-primary/20 text-primary hover:bg-primary/5"
                          onClick={handleCopyPix}
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copied ? "Copiado!" : "Copiar Chave Pix"}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="receipt" className="text-foreground font-medium">Comprovante de Transferência</Label>
                        <p className="text-xs text-muted-foreground mb-2">Necessário para validar seus números da sorte</p>
                        <div className="relative">
                          <Input
                            id="receipt"
                            type="file"
                            className="hidden"
                            onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                          />
                          <Label
                            htmlFor="receipt"
                            className={`flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-xl cursor-pointer transition-colors
                              ${receiptFile ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50 text-muted-foreground"}
                            `}
                          >
                            <Upload className="w-5 h-5" />
                            {receiptFile ? receiptFile.name : "Clique para anexar comprovante"}
                          </Label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={!receiptFile || !guestName || !guestEmail || isSubmitting}
                        className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all h-12 text-base font-semibold"
                        onClick={handleSubmit}
                      >
                        {isSubmitting ? "Enviando..." : "Confirmar Envio"}
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-8 text-center animate-fade-in relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />

                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Check className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-serif text-3xl text-foreground mb-3 relative z-10">Sucesso!</h3>
                <p className="text-muted-foreground max-w-[280px] mx-auto mb-8 relative z-10">
                  Sua contribuição foi registrada com sucesso. Estamos torcendo por você!
                </p>

                {totalRaffleNumbers > 0 && (
                  <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 p-6 rounded-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-primary/80 uppercase tracking-widest font-bold mb-2">Seus Números</p>
                    <p className="text-5xl font-mono font-bold text-primary tracking-tight">
                      {totalRaffleNumbers}
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(Math.min(5, totalRaffleNumbers))].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
                      ))}
                      {totalRaffleNumbers > 5 && <span className="text-primary/40 text-xs">+</span>}
                    </div>
                    <p className="text-xs text-primary/70 mt-3 font-medium">Os números serão escolhidos na festa</p>
                  </div>
                )}

                <Button onClick={resetDialog} className="w-full relative z-10" variant="outline">
                  Voltar para lista
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Gifts;
