import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  inverted?: boolean;
}

export function SectionHeading({
  label,
  title,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="relative inline-block">
      <div
        className={`absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 ${
          inverted ? "border-accent/40" : "border-accent"
        }`}
      />

      <div className="flex items-center gap-4 mb-3">
        <div
          className={`relative px-4 py-1.5 font-mono text-sm font-bold ${
            inverted ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent"
          } backdrop-blur-sm`}
          style={{
            clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
          }}
        >
          {label}
        </div>
        <div
          className={`h-[2px] w-16 ${
            inverted ? "bg-accent/30" : "bg-accent/40"
          }`}
        />
      </div>

      <h2
        className={`font-display text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight ${
          inverted ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>

      <div
        className={`absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 ${
          inverted ? "border-accent/30" : "border-accent/50"
        }`}
      />
    </div>
  );
}
