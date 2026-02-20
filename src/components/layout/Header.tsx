"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, contactInfo } from "@/data/contacts";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-primary)] shadow-[var(--shadow-md)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-oswald)] text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              Металл<span className="text-[var(--color-accent)]">Строй</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wide font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phone[0].replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-white hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-semibold">{contactInfo.phone[0]}</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick("#contacts")}
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-white p-2"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10">
          <nav className="container-main py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wide font-medium py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${contactInfo.phone[0].replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-white pt-2 border-t border-white/10"
            >
              <Phone size={16} />
              <span className="font-semibold">{contactInfo.phone[0]}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
