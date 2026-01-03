import { FloralDivider } from "@/components/Ornament";
import { MapPin, Clock, Church, PartyPopper, Navigation, Car, Utensils, Wine, Beer, Baby, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchImg from "@/assets/church.jpg";
import receptionImg from "@/assets/reception.jpg";

const Location = () => {
  // Placeholder addresses - user will replace
  const ceremonyAddress = "Paróquia Santo Cura D'Ars - Campinas";
  const receptionAddress = "Rancho Coração Caipira Festas e Eventos";

  const ceremonyMapsUrl = "https://maps.app.goo.gl/yQLmXXtzTocTfVbi6";
  const receptionMapsUrl = "https://maps.app.goo.gl/r19NFdvZhS8rZ2oG9";

  return (
    <main className="min-h-screen bg-floral-pattern pt-24 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-4 animate-bounce" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Local & Cerimônia
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Informações sobre o local da cerimônia e recepção
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Ceremony Card */}
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl group hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <div className="h-64 overflow-hidden relative">
              <img
                src={churchImg}
                alt="Paróquia Santo Cura D'Ars"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white transform transition-transform duration-500 group-hover:translate-x-2">
                  <h2 className="font-serif text-3xl font-bold mb-1">Cerimônia</h2>
                  <p className="text-white/90 font-medium">Casamento Religioso</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Church className="w-6 h-6" />
                </div>
                <div className="h-px bg-border/50 flex-1" />
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 group/item">
                  <Clock className="w-5 h-5 text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Horário</p>
                    <p className="text-foreground font-medium text-lg">16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Endereço</p>
                    <p className="text-foreground font-medium leading-tight text-lg">{ceremonyAddress}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={ceremonyMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Traçar Rota
                </a>
              </Button>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl group hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="h-64 overflow-hidden relative">
              <img
                src={receptionImg}
                alt="Rancho Coração Caipira"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white transform transition-transform duration-500 group-hover:translate-x-2">
                  <h2 className="font-serif text-3xl font-bold mb-1">Recepção</h2>
                  <p className="text-white/90 font-medium">Festa de Celebração</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <div className="h-px bg-border/50 flex-1" />
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 group/item">
                  <Clock className="w-5 h-5 text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Horário</p>
                    <p className="text-foreground font-medium text-lg">18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Endereço</p>
                    <p className="text-foreground font-medium leading-tight text-lg">{receptionAddress}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={receptionMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Traçar Rota
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="max-w-5xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <h3 className="font-serif text-3xl text-foreground text-center mb-10">
            O que te espera na festa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Car, label: "Estacionamento", sub: "Gratuito" },
              { icon: Utensils, label: "Buffet", sub: "Mineiro" },
              { icon: Wine, label: "Drinks", sub: "Variados" },
              { icon: Beer, label: "Cerveja", sub: "Gelada" },
              { icon: Baby, label: "Espaço Kids", sub: "Diversão" },
              { icon: Music, label: "Pista", sub: "Animada" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Map */}
        <div className="max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-2">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29395.36327494421!2d-47.042017173659154!3d-22.93473922103823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94c8ceec3f5a4837%3A0xc65fa5c28306715b!2sPar%C3%B3quia%20Santo%20Cura%20D'Ars%20-%20Campinas%2C%20R.%20Waldemar%20C%C3%A9sar%20da%20Silveira%2C%20105%20-%20Jardim%20Cura%20D'ars%2C%20Campinas%20-%20SP%2C%2013045-270!3m2!1d-22.9344865!2d-47.035230999999996!4m5!1s0x94c8ce68ff31b72f%3A0x4dc57dbc38fe098b!2sRancho%20Cora%C3%A7%C3%A3o%20Caipira%20Festas%20e%20Eventos%2C%20R.%20Carmelinda%20Marqu%C3%AAs%20Pereira%2C%20220%20-%20Jardim%20Alian%C3%A7a%2C%20Campinas%20-%20SP%2C%2013046-555!3m2!1d-22.9325036!2d-47.007447899999995!5e0!3m2!1spt-BR!2sbr!4v1767375153169!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Location;
