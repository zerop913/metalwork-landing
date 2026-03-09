"use client";

import React from "react";
import Image from "next/image";
import { Phone, TelegramLogo } from "@phosphor-icons/react";
import { siteConfig } from "@/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 lg:px-12 xl:px-16 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6 lg:gap-12 pb-6 lg:pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
              <Image
                src="/images/logo/logo-white.png"
                alt="КОВКА 53"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display text-white uppercase tracking-wider text-lg lg:text-2xl font-black">
                {siteConfig.companyName}
              </span>
              <span className="font-mono text-[9px] lg:text-xs text-white/50 uppercase tracking-widest mt-0.5 lg:mt-1">
                {siteConfig.companyTagline}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-auto gap-3 lg:flex-row lg:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-center lg:justify-start gap-3 px-5 py-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <Phone
                size={20}
                weight="bold"
                className="lg:w-6 lg:h-6 text-accent group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="font-semibold text-white text-sm lg:text-base">
                {siteConfig.phone}
              </span>
            </a>

            <a
              href={`https://t.me/${siteConfig.telegram.replace("@", "")}`}
              className="group flex items-center justify-center lg:justify-start gap-3 px-5 py-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <TelegramLogo
                size={20}
                weight="bold"
                className="lg:w-6 lg:h-6 text-accent group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-white text-sm lg:text-base">
                {siteConfig.telegram}
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-6 lg:flex-row lg:justify-between lg:pt-8">
          <span className="font-mono text-xs lg:text-sm text-white/40 text-center lg:text-left">
            © {currentYear}. Все права защищены
          </span>
          <a
            href="#"
            className="text-xs lg:text-sm text-white/40 hover:text-accent transition-colors duration-300"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
