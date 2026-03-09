"use client";

import React from "react";
import {
  Phone,
  TelegramLogo,
  Envelope,
  MapPin,
  ArrowRight,
} from "@phosphor-icons/react";
import { siteConfig } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ContactsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  const contacts = [
    {
      icon: Phone,
      label: "Телефон",
      value: siteConfig.phone,
      href: `tel:+79524849804`,
    },
    {
      icon: TelegramLogo,
      label: "Telegram",
      value: siteConfig.telegram,
      href: "#",
    },
    {
      icon: Envelope,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: siteConfig.address,
      href: "#",
    },
  ];

  return (
    <section ref={ref} className="bg-bg-alt py-24 lg:py-32 relative">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionHeading label="05" title="Контакты" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="reveal group relative bg-white p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 flex items-center justify-center shrink-0 lg:mb-6 group-hover:bg-accent transition-colors duration-300">
                    <Icon
                      size={24}
                      className="lg:w-8 lg:h-8 text-accent group-hover:text-white transition-colors duration-300"
                      weight="duotone"
                    />
                  </div>

                  <div className="flex-1 lg:flex-none lg:w-full min-w-0">
                    <p className="font-mono text-[9px] lg:text-[10px] text-muted uppercase tracking-widest mb-1 lg:mb-2 relative z-10">
                      {contact.label}
                    </p>

                    <p className="font-display text-base lg:text-xl font-bold text-text break-words relative z-10 group-hover:text-accent transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>

                  <div className="hidden lg:block mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 relative z-10">
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="text-accent"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="relative overflow-hidden shadow-xl border-8 border-white lg:sticky lg:top-24 lg:self-start h-[400px] lg:h-[550px]">
            <iframe
              src={`https://yandex.ru/map-widget/v1/?ll=${siteConfig.mapCoords.lng},${siteConfig.mapCoords.lat}&z=16&pt=${siteConfig.mapCoords.lng},${siteConfig.mapCoords.lat},pm2rdm`}
              className="w-full h-full"
              style={{ filter: "saturate(0.8) brightness(0.95)" }}
              loading="lazy"
              frameBorder="0"
              allowFullScreen={true}
            />

            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent pointer-events-none" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
