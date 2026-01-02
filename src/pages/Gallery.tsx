import { useState } from "react";
import { FloralDivider } from "@/components/Ornament";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

// Church and ceremony photos
const galleryImages = [
  { id: 1, src: gallery1, alt: "Paróquia Santo Cura D'Ars - Fachada", category: "Cerimônia" },
  { id: 2, src: gallery2, alt: "Interior da Igreja", category: "Cerimônia" },
  { id: 3, src: gallery3, alt: "Paróquia Santo Cura D'Ars - Entrada", category: "Cerimônia" },
  { id: 4, src: gallery4, alt: "Teto da Igreja", category: "Cerimônia" },
  { id: 5, src: gallery5, alt: "Altar da Igreja", category: "Cerimônia" },
  { id: 6, src: gallery6, alt: "Rancho Coração Caipira - Piscina", category: "Local" },
  { id: 7, src: gallery7, alt: "Rancho Coração Caipira - Vista Aérea", category: "Local" },
  { id: 8, src: gallery8, alt: "Decoração da Recepção", category: "Local" },
  { id: 9, src: gallery9, alt: "Salão de Festas", category: "Local" },
  { id: 10, src: gallery10, alt: "Entrada da Recepção", category: "Local" },
];

const categories = ["Todas", "Casal", "Local", "Cerimônia", "Decoração"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <>
      <main className="min-h-screen bg-floral-pattern pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Camera className="w-8 h-8 text-primary mx-auto mb-4" />
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
              Nossa Galeria
            </h1>
            <FloralDivider className="mb-6" />
            <p className="text-muted-foreground">
              Momentos especiais da nossa história de amor
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer hover-lift bg-secondary/50"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs text-foreground">
                  {image.category}
                </span>
              </div>
            ))}
          </div>

          {/* Empty state message */}
          <div className="text-center mt-12 p-8 bg-secondary/30 rounded-2xl border border-border/50">
            <p className="text-muted-foreground">
              🎉 Em breve adicionaremos mais fotos!
            </p>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-background hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 p-2 text-background hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 p-2 text-background hover:text-primary transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <img
            src={filteredImages[currentImageIndex]?.src}
            alt={filteredImages[currentImageIndex]?.alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background text-sm">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
