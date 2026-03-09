"use client";

import React from "react";
import { servicesData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ServicesSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-bg-alt py-24 lg:py-32 relative bg-pattern">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionHeading label="02" title="Что мы можем" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-28">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
