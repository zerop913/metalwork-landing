"use client";

import React from "react";
import { processSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProcessSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="bg-bg py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e0_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading label="03" title="Этапы работ" />

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                number={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
