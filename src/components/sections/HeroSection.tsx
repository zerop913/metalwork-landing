"use client";

import React from "react";
import { heroData } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/ui/LeadForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection() {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={revealRef}
      className="bg-dark text-white py-20 relative overflow-x-hidden"
    >
      <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10 pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="min-h-screen">
            <h1 className="font-display font-black uppercase leading-[0.95] tracking-tight text-[clamp(3rem,7.5vw,7rem)]">
              {heroData.title.map((word, i) => (
                <span
                  key={i}
                  className={`block reveal ${
                    i === heroData.title.length - 1 ? "text-accent" : ""
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <div className="mt-12 border-l-2 border-accent pl-5">
              <p className="text-white/90 text-xl font-semibold leading-relaxed">
                {heroData.tagline}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroData.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="font-mono text-[11px] text-white/60 uppercase tracking-wider px-4 py-2 border border-white/20 hover:border-accent hover:text-white transition-all duration-300"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-4 border-l-2 border-white/20 pl-5">
              <p className="text-white/70 text-base leading-relaxed font-medium">
                {heroData.claim}
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                {heroData.promise}
              </p>
            </div>

            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 mt-12 bg-white/5 hover:bg-accent/20 border-2 border-white/20 hover:border-accent transition-all duration-300 group min-w-[280px]"
            >
              <span className="font-bold text-white text-lg uppercase tracking-wide">
                {heroData.cta}
              </span>
            </a>
          </div>

          <div className="lg:self-start">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
