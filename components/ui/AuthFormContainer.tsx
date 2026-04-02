import { ReactNode } from "react";

interface AuthFormContainerProps {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
  error?: string | null;
}

export function AuthFormContainer({
  title,
  subtitle,
  children,
  error,
}: AuthFormContainerProps) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-text-secondary mb-6">{subtitle}</p>

      {error && (
        <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      {children}
    </div>
  );
}
