"use client";

import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

interface ProcessStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  index?: number;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  icon,
  title,
  description,
  index = 0,
  isLast = false,
}: ProcessStepProps) {
  const Icon = PhosphorIcons[icon as keyof typeof PhosphorIcons] as
    | React.ElementType
    | undefined;

  return (
    <div
      className="reveal relative flex flex-col items-center text-center group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {!isLast && (
        <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-accent/50 to-transparent" />
      )}

      <div className="relative mb-4 z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        />

        <div
          className="relative px-4 py-2 bg-gradient-to-br from-accent to-accent-h text-white font-mono text-lg font-black transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        >
          {String(number).padStart(2, "0")}
        </div>
      </div>

      <div className="relative w-20 h-20 mb-6 z-10">
        <div className="absolute inset-0 bg-white border-2 border-accent/20 group-hover:border-accent transition-all duration-300 rotate-45 rounded-lg" />
        <div className="absolute inset-2 bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent group-hover:to-accent-h rotate-45 rounded-lg transition-all duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          {Icon && (
            <Icon
              size={32}
              weight="duotone"
              className="text-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10"
            />
          )}
        </div>

        <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent rounded-full" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full" />
      </div>

      <h3 className="font-display text-base font-bold uppercase tracking-wide text-text mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      <p className="font-body text-sm text-muted leading-relaxed group-hover:text-text/70 transition-colors duration-300 px-2">
        {description}
      </p>
    </div>
  );
}
