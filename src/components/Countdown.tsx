import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date("2026-05-16T16:00:00");

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = WEDDING_DATE.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />

            {/* Main block */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] shadow-2xl hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1">
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tabular-nums drop-shadow-md">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
          </div>

          <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};
