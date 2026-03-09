import React from "react";

interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "ghost" | "ghost-dark";
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-display font-semibold uppercase tracking-wider rounded-none transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-h hover:shadow-accent",
    ghost:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-accent",
    "ghost-dark":
      "border-2 border-white/30 text-white hover:border-white hover:bg-white/10 hover:shadow-lg",
  };

  const sizes = {
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-h to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
