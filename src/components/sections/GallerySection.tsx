"use client";

import React from "react";
import { galleryImages } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function GallerySection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="gallery"
      className="bg-dark text-white py-24 lg:py-32 relative"
    >
      <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading label="04" title="Наши работы" inverted />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {galleryImages.map((item, index) => {
            const total = galleryImages.length;
            const isLastRow = index >= total - (total % 4 || 4);
            const remainingInRow = total % 4 || 4;

            let spanClass = "";
            if (isLastRow && remainingInRow < 4 && remainingInRow > 0) {
              if (remainingInRow === 1) spanClass = "lg:col-span-4";
              else if (remainingInRow === 2) spanClass = "lg:col-span-2";
              else if (remainingInRow === 3) spanClass = "lg:col-span-1";
            }

            return (
              <div
                key={index}
                className={`reveal relative overflow-hidden group cursor-pointer rounded-sm bg-dark/50 aspect-square ${spanClass}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={`Наши работы ${index + 1}`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/40 group-hover:to-dark/60 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
