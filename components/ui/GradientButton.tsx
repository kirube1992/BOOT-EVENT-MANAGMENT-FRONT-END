import { gradients } from "@/lib/theme";
interface GradientButtonProps {
  type?: "button" | "submit";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function GradientButton({
  type = "button",
  disabled,
  children,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full py-3 rounded-lg text-white font-medium shadow-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
      style={{
        background: gradients.eventCard,
      }}
    >
      {children}
    </button>
  );
}
