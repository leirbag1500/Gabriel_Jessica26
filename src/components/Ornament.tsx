import { cn } from "@/lib/utils";

interface OrnamentProps {
  className?: string;
}

export const Ornament = ({ className }: OrnamentProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
    </div>
  );
};

export const FloralDivider = ({ className }: OrnamentProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-primary/40" />
      <svg
        className="w-8 h-8 text-primary/60"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="16" cy="16" r="3" />
        <path d="M16 8 C16 12, 20 16, 16 16 C12 16, 16 12, 16 8" />
        <path d="M16 24 C16 20, 20 16, 16 16 C12 16, 16 20, 16 24" />
        <path d="M8 16 C12 16, 16 20, 16 16 C16 12, 12 16, 8 16" />
        <path d="M24 16 C20 16, 16 20, 16 16 C16 12, 20 16, 24 16" />
      </svg>
      <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
};
