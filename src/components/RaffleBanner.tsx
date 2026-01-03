import { useNavigate } from "react-router-dom";
import { Ticket } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const RaffleBanner = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Slight delay to appear gracefully
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isDismissed) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 z-50 max-w-[90vw] md:max-w-md transition-all duration-500 transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
        >
            <div className="bg-white/95 backdrop-blur-md border border-primary/20 shadow-xl rounded-xl p-4 flex items-start gap-4 ring-1 ring-black/5">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                    <Ticket className="w-6 h-6 text-primary animate-pulse-gentle" />
                </div>

                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-foreground">Sorteio na Festa!</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        O sorteio acontecerá ao vivo durante a celebração. Garanta seus números da sorte na lista de presentes! 🍀
                    </p>
                    <Button
                        size="sm"
                        className="w-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm"
                        onClick={() => {
                            setIsDismissed(true);
                            navigate("/presentes");
                        }}
                    >
                        Ver Lista de Presentes
                    </Button>
                </div>
            </div>
        </div>
    );
};
