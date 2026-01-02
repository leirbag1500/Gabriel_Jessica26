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
  Plus
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
    }, 300);
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast({
        title: "Chave PIX copiada! 💕",
        description: "Confira os dados para transferência.",
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Lista de Presentes
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Escolha um mimo divertido para nos presentear e concorra a prêmios no sorteio!
            <br />
            <span className="text-primary font-medium mt-2 block">
              Cada contribuição gera números da sorte! 🍀
            </span>
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {tickets.map((ticket) => {
            const Icon = ticket.icon;
            const quantity = selectedTickets[ticket.id] || 0;
            const isSelected = quantity > 0;

            return (
              <div
                key={ticket.id}
                className={`relative bg-card/80 backdrop-blur-sm border transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center group
                  ${isSelected ? "border-primary shadow-lg scale-[1.02]" : "border-border/50 hover:border-primary/50 hover:shadow-md"}
                `}
              >
                {/* Raffle Badge */}
                {ticket.raffleNumbers > 0 && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    {ticket.raffleNumbers} {ticket.raffleNumbers === 1 ? "cupom" : "cupons"}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300
                  ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"}
                `}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-lg font-semibold mb-2">{ticket.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{ticket.description}</p>
                <div className="font-bold text-xl text-primary mb-6">R$ {ticket.price},00</div>

                {/* Controls */}
                <div className="flex items-center gap-4 mt-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleUpdateTicket(ticket.id, -1)}
                    disabled={quantity === 0}
                    className="rounded-full w-8 h-8 opacity-70 hover:opacity-100 disabled:opacity-30"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className={`font-mono text-lg w-6 ${isSelected ? "text-foreground font-bold" : "text-muted-foreground"}`}>
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleUpdateTicket(ticket.id, 1)}
                    className="rounded-full w-8 h-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout Bar - Sticky Bottom */}
        <div className={`fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border shadow-2xl p-4 transition-transform duration-300 transform z-50
          ${hasSelection ? "translate-y-0" : "translate-y-full"}
        `}>
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-sm text-muted-foreground">Total selecionado</p>
                <p className="text-2xl font-bold text-gradient-gold">R$ {totalValue},00</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Seus números da sorte</p>
                  <p className="text-lg font-bold text-primary">{totalRaffleNumbers} {totalRaffleNumbers === 1 ? "número" : "números"}</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto px-8 rounded-full btn-shimmer"
              onClick={() => {
                setShowPixDialog(true);
                handleCopyPix(); // Auto-copy on open
              }}
            >
              Finalizar Contribuição
            </Button>
          </div>
        </div>

        {/* Pix Dialog */}
        <Dialog open={showPixDialog} onOpenChange={(open) => !open && resetDialog()}>
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            {!showSuccess ? (
              <>
                <DialogHeader>
                  <DialogTitle>Finalizar Contribuição</DialogTitle>
                  <DialogDescription>
                    A chave Pix foi copiada! Confira o resumo e envie o comprovante.
                  </DialogDescription>
                </DialogHeader>

                {/* Order Summary */}
                <div className="my-4 space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Resumo do Pedido</h4>
                  <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                    {Object.entries(selectedTickets).map(([id, qty]) => {
                      const t = tickets.find(t => t.id === id);
                      if (!t) return null;
                      return (
                        <div key={id} className="flex justify-between text-sm">
                          <span>{qty}x {t.name}</span>
                          <span className="font-mono">R$ {t.price * qty},00</span>
                        </div>
                      );
                    })}
                    <div className="border-t border-border/50 my-2 pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span>R$ {totalValue},00</span>
                    </div>
                  </div>

                  {totalRaffleNumbers > 0 && (
                    <div className="bg-primary/10 rounded-lg p-3 flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="text-sm text-primary font-medium">
                        Você garantiu <span className="font-bold text-lg">{totalRaffleNumbers}</span> números para o sorteio!
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid gap-4 py-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Seu Nome</Label>
                    <Input
                      id="name"
                      placeholder="Ex: João Silva"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Seu Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ex: joao@email.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={pixQrCode}
                      alt="QR Code Pix"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <div className="p-4 bg-secondary/50 rounded-lg space-y-3 border border-border/50">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Chave Pix</p>
                        <div className="flex items-center gap-2">
                          <p className="text-base text-foreground font-mono break-all flex-1">{pixKey}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10"
                            onClick={handleCopyPix}
                            title="Copiar chave"
                          >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Beneficiário</p>
                          <p className="text-base text-foreground font-semibold">Gabriel Francisco</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Banco</p>
                          <p className="text-base text-foreground font-semibold">Nubank</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                  <Label htmlFor="receipt">Enviar Comprovante (Obrigatório)</Label>
                  <div className="flex gap-2">
                    <Input
                      id="receipt"
                      type="file"
                      className="cursor-pointer"
                      onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                    />
                    <Button
                      type="submit"
                      disabled={!receiptFile || !guestName || !guestEmail}
                      className="gap-2"
                      onClick={() => {
                        setShowSuccess(true);
                        toast({ title: "Comprovante enviado!", description: "Boa sorte no sorteio! 🍀" });
                      }}
                    >
                      <Upload className="h-4 w-4" />
                      Enviar
                    </Button>
                  </div>
                  {(!receiptFile || !guestName || !guestEmail) && (
                    <p className="text-[0.8rem] text-muted-foreground">
                      Preencha nome, email e anexe o comprovante para enviar.
                    </p>
                  )}
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
