import { ReactNode } from "react";

interface AuthVisualProps {
  title: ReactNode;
  description: string;
  cardTitle: string;
  barColors?: string[];
}

export function AuthVisual({
  title,
  description,
  cardTitle,
  barColors = ["#2EE6A6", "#FFA726", "#FF5E7E"],
}: AuthVisualProps) {
  return (
    <div className="hidden md:flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6 leading-tight">{title}</h1>

      <p className="text-text-secondary mb-8">{description}</p>

      <div className="relative w-[300px] h-[300px] rounded-full bg-surface flex items-center justify-center shadow-2xl">
        <div className="absolute w-[220px] h-[220px] rounded-full bg-primary/20 blur-2xl"></div>

        <div className="relative z-10 bg-background border border-border rounded-xl p-5 w-[220px]">
          <p className="text-sm text-text-secondary mb-2">{cardTitle}</p>
          <div className="space-y-2">
            {barColors.map((color, i) => (
              <div
                key={i}
                className="h-2 rounded"
                style={{ background: color, width: ["75%", "50%", "66%"][i] }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
