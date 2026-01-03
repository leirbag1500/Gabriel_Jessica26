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
import casal1 from "@/assets/casal-1.jpg";
import casal2 from "@/assets/casal-2.jpg";

import casal3 from "@/assets/casal-3.jpg";
import casal4 from "@/assets/casal-4.jpg";
import casal5 from "@/assets/casal-5.jpg";
import casal6 from "@/assets/casal-6.png";

// Church and ceremony photos
const galleryImages = [
  { id: 1, src: gallery1, alt: "Paróquia Santo Cura D'Ars - Fachada", category: "Cerimônia" },
  { id: 2, src: gallery2, alt: "Interior da Igreja", category: "Cerimônia" },
  { id: 3, src: gallery3, alt: "Paróquia Santo Cura D'Ars - Entrada", category: "Cerimônia" },
  { id: 4, src: gallery4, alt: "Teto da Igreja", category: "Cerimônia" },
  { id: 5, src: gallery5, alt: "Altar da Igreja", category: "Cerimônia" },
  { id: 6, src: gallery6, alt: "Rancho Coração Caipira - Piscina", category: "Local" },
  { id: 7, src: gallery7, alt: "Rancho Coração Caipira - Salão", category: "Local" },
  { id: 8, src: gallery8, alt: "Decoração da Recepção", category: "Local" },
  { id: 9, src: gallery9, alt: "Salão de Festas", category: "Local" },
  { id: 10, src: gallery10, alt: "Entrada da Recepção", category: "Local" },
  { id: 11, src: casal1, alt: "O Casal", category: "Casal" },
  { id: 12, src: casal2, alt: "O Casal", category: "Casal" },
  { id: 13, src: casal3, alt: "O Casal", category: "Casal" },
  { id: 14, src: casal4, alt: "O Casal", category: "Casal" },
  { id: 15, src: casal5, alt: "O Casal", category: "Casal" },
  { id: 16, src: casal6, alt: "O Casal", category: "Casal" },
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
          <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Camera className="w-8 h-8 text-primary mx-auto mb-4 animate-bounce" />
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
              Nossa Galeria
            </h1>
            <FloralDivider className="mb-6" />
            <p className="text-muted-foreground">
              Momentos especiais da nossa história de amor
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-white/80 backdrop-blur-sm text-muted-foreground hover:bg-white hover:text-foreground hover:shadow-md border border-transparent hover:border-border/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-white/50 animate-in fade-in zoom-in-95 duration-500 fill-mode-both shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-75">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-colors">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 delay-100">
                  <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state message using filteredImages length check if needed, 
              but keeping static as requested by original code structure if logic allows,
              or improving if dynamic. The original code had it static at the bottom.
              Let's make it conditional or just stylized. keeping it static for now but styled. */}
          {filteredImages.length > 0 && (
            <div className="text-center mt-16 animate-in fade-in duration-700 delay-500">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
                <p className="text-sm text-muted-foreground">
                  🎉 Em breve adicionaremos mais fotos!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 backdrop-blur-md"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 backdrop-blur-md hover:-translate-x-1"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 backdrop-blur-md hover:translate-x-1"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/10">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
