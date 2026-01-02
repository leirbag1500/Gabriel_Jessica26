import { FloralDivider } from "@/components/Ornament";
import { MapPin, Clock, Church, PartyPopper, Navigation, Car, Utensils, Wine, Beer, Baby } from "lucide-react";
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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Local & Cerimônia
          </h1>
          <FloralDivider className="mb-6" />
          <p className="text-muted-foreground">
            Informações sobre o local da cerimônia e recepção
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Ceremony Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                src={churchImg}
                alt="Paróquia Santo Cura D'Ars"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h2 className="font-serif text-2xl font-bold">Cerimônia</h2>
                  <p className="text-sm text-white/90">Casamento Religioso</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Church className="w-5 h-5 text-primary" />
                </div>
                <div className="h-px bg-border/50 flex-1" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Horário</p>
                    <p className="text-foreground font-medium">16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Endereço</p>
                    <p className="text-foreground font-medium leading-tight">{ceremonyAddress}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary/50"
              >
                <a href={ceremonyMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver no Mapa
                </a>
              </Button>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                src={receptionImg}
                alt="Rancho Coração Caipira"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h2 className="font-serif text-2xl font-bold">Recepção</h2>
                  <p className="text-sm text-white/90">Festa de Celebração</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <PartyPopper className="w-5 h-5 text-primary" />
                </div>
                <div className="h-px bg-border/50 flex-1" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Horário</p>
                    <p className="text-foreground font-medium">18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Endereço</p>
                    <p className="text-foreground font-medium leading-tight">{receptionAddress}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary/50"
              >
                <a href={receptionMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver no Mapa
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-border/50">
              <h3 className="font-serif text-lg text-foreground text-center">
                Mapa do Local
              </h3>
            </div>
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              {/* Placeholder for Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29395.36327494421!2d-47.042017173659154!3d-22.93473922103823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x94c8ceec3f5a4837%3A0xc65fa5c28306715b!2sPar%C3%B3quia%20Santo%20Cura%20D&#39;Ars%20-%20Campinas%2C%20R.%20Waldemar%20C%C3%A9sar%20da%20Silveira%2C%20105%20-%20Jardim%20Cura%20D&#39;ars%2C%20Campinas%20-%20SP%2C%2013045-270!3m2!1d-22.9344865!2d-47.035230999999996!4m5!1s0x94c8ce68ff31b72f%3A0x4dc57dbc38fe098b!2sRancho%20Cora%C3%A7%C3%A3o%20Caipira%20Festas%20e%20Eventos%2C%20R.%20Carmelinda%20Marqu%C3%AAs%20Pereira%2C%20220%20-%20Jardim%20Alian%C3%A7a%2C%20Campinas%20-%20SP%2C%2013046-555!3m2!1d-22.9325036!2d-47.007447899999995!5e0!3m2!1spt-BR!2sbr!4v1767375153169!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">
            O que te espera na festa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {/* Parking */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">Estacionamento</p>
              <p className="text-xs text-muted-foreground">Gratuito no local</p>
            </div>

            {/* Food */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">Buffet</p>
              <p className="text-xs text-muted-foreground">Comida Mineira</p>
            </div>

            {/* Drinks */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Wine className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">Drinks</p>
              <p className="text-xs text-muted-foreground">Alcoólicos e Não-alcoólicos</p>
            </div>

            {/* Beer */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Beer className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">Cerveja</p>
              <p className="text-xs text-muted-foreground">Gelada à vontade</p>
            </div>

            {/* Kids */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all col-span-2 md:col-span-1">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Baby className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">Espaço Kids</p>
              <p className="text-xs text-muted-foreground">Diversão para os pequenos</p>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Location;
