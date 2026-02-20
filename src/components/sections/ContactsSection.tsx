import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/contacts";

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="section-padding bg-[var(--color-primary)]"
    >
      <div className="container-main">
        <SectionTitle title="Контакты" centered light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
          {/* Left: map + info */}
          <div className="flex flex-col gap-6">
            {/* Map */}
            <div className="w-full h-64 md:h-80 rounded-sm overflow-hidden border border-white/10">
              {contactInfo.mapUrl ? (
                <iframe
                  src={contactInfo.mapUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Наш адрес на карте"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Карта загружается...</p>
                </div>
              )}
            </div>

            {/* Contact details */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.phone.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                      Телефон
                    </p>
                    <a
                      href={`tel:${p.replace(/\D/g, "")}`}
                      className="text-white font-semibold hover:text-[var(--color-accent)] transition-colors"
                    >
                      {p}
                    </a>
                  </div>
                </li>
              ))}

              {contactInfo.email && (
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white font-semibold hover:text-[var(--color-accent)] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
              )}

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Адрес
                  </p>
                  <p className="text-white font-semibold">
                    {contactInfo.address}
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Режим работы
                  </p>
                  <p className="text-white font-semibold">
                    {contactInfo.workingHours}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-white uppercase mb-2">
              Оставьте заявку
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Опишите вашу задачу — мы подготовим предложение и свяжемся с вами
            </p>
            <ContactForm variant="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
