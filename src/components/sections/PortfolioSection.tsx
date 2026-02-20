"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { portfolioItems } from "@/data/portfolio";
import { portfolioCategories } from "@/data/contacts";
import type { ServiceCategory } from "@/types";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | ServiceCategory>(
    "all"
  );

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-[var(--color-bg)]">
      <div className="container-main">
        <SectionTitle
          title="Наши работы"
          subtitle="Реализованные проекты — смотрите сами"
          centered
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(cat.id as "all" | ServiceCategory)
              }
              className={`px-4 py-2 text-sm font-medium rounded-sm border transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-primary)]"
                  : "bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-sm bg-gray-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
