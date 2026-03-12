"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/content";
import { Phone, TelegramLogo } from "@phosphor-icons/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-4" : "py-6 lg:py-8"
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-3 sm:gap-4 group relative z-10"
          >
            <div
              className={`relative transition-all duration-500 group-hover:scale-105 ${
                scrolled
                  ? "w-12 h-12"
                  : "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              }`}
            >
              <Image
                src="/images/logo/logo-white.png"
                alt="КОВКА 53"
                fill
                className={`object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/images/logo/logo-black.png"
                alt="КОВКА 53"
                fill
                className={`object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span
                className={`font-display font-black uppercase tracking-wider leading-none transition-all duration-500 ${
                  scrolled
                    ? "text-2xl lg:text-3xl"
                    : "text-[1.9rem] sm:text-3xl lg:text-4xl xl:text-5xl"
                } ${scrolled ? "text-dark" : "text-white"} group-hover:text-accent`}
                style={{ whiteSpace: "nowrap" }}
              >
                {siteConfig.companyName}
              </span>
              <span
                className={`font-mono uppercase tracking-widest leading-none mt-1 transition-all duration-500 ${
                  scrolled
                    ? "text-[9px] lg:text-[10px]"
                    : "text-[10px] lg:text-xs"
                } ${scrolled ? "text-muted" : "text-white/60"}`}
                style={{ whiteSpace: "nowrap" }}
              >
                {siteConfig.companyTagline}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://t.me/${siteConfig.telegram.replace("@", "")}`}
              aria-label="Telegram"
              className={`group flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-xl transition-all duration-500 ${
                scrolled
                  ? "bg-accent text-white hover:bg-accent-h shadow-lg shadow-accent/20"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-accent border border-white/20"
              }`}
            >
              <TelegramLogo
                size={20}
                weight="bold"
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              aria-label="Позвонить"
              className={`group flex items-center justify-center px-3 py-3 sm:px-4 lg:px-5 lg:py-3.5 rounded-xl font-semibold transition-all duration-500 ${
                scrolled
                  ? "bg-accent text-white hover:bg-accent-h shadow-lg shadow-accent/20"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-accent border border-white/20"
              }`}
            >
              <Phone
                size={20}
                weight="bold"
                className="sm:hidden group-hover:rotate-12 transition-transform duration-300"
              />
              <Phone
                size={20}
                weight="bold"
                className="hidden sm:block lg:w-5 lg:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="hidden sm:inline text-sm lg:text-base whitespace-nowrap">
                {siteConfig.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
