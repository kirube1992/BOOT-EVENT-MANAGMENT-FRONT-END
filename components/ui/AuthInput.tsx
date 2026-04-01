import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function AuthInput(props: AuthInputProps) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary"
    />
  );
}
