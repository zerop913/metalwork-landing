import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo, navLinks } from "@/data/contacts";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-wider">
              Металл<span className="text-[var(--color-accent)]">Строй</span>
            </span>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Изготовление металлоконструкций на заказ. Лестницы, навесы, каркасы, декор.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              {contactInfo.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="text-[var(--color-accent)]" />
                    {p}
                  </a>
                </li>
              ))}
              {contactInfo.email && (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="text-[var(--color-accent)]" />
                    {contactInfo.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock size={14} className="text-[var(--color-accent)]" />
                {contactInfo.workingHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {year} МеталлСтрой. Все права защищены.</span>
          <a href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
