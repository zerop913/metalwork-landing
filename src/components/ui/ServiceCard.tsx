import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { ImageWithFallback } from "./ImageWithFallback";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  image,
  index = 0,
}: ServiceCardProps) {
  const rotations = [6, -4, 8, -6, 5, -7];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className="reveal relative group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative bg-white p-6 pt-32 transition-all duration-500 hover:shadow-xl">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors duration-300" />

        <div className="relative z-10">
          <div
            className="inline-block bg-accent text-white font-mono text-xs font-bold px-3 py-1.5 mb-4"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="font-display text-xl font-black uppercase tracking-wide text-text group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <p className="font-body text-sm text-muted mt-3 leading-relaxed">
            {description}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-4 transition-all duration-300">
            <span>Подробнее</span>
            <ArrowRight
              size={16}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 -translate-y-8 -translate-x-4">
        <div className="relative w-full h-full overflow-hidden shadow-xl border-4 border-white group-hover:border-accent transition-all duration-500 group-hover:scale-110">
          <ImageWithFallback
            src={image}
            alt={title}
            fill
            className="object-contain"
          />

          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
        </div>

        <div className="absolute inset-0 bg-dark/20 blur-2xl -z-10 translate-x-2 translate-y-2" />
      </div>
    </div>
  );
}
