import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

const highlights = [
  "Собственное производство — без посредников",
  "Гарантия на все изделия",
  "Выезд для замера бесплатно",
  "Работаем с физлицами и организациями",
  "Сроки от 3 дней",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Background arch image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/arch.png"
          alt="Металлическая арка"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 via-[var(--color-primary)]/60 to-[var(--color-primary)]/80" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + features */}
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold mb-4">
              Металлоконструкции на заказ
            </span>

            <h1 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl xl:text-6xl font-bold text-white uppercase leading-tight mb-6">
              Лестницы,{" "}
              <span className="text-[var(--color-accent)]">фермы,</span>
              <br />
              навесы, каркасы,
              <br />
              декор
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Проектируем, изготавливаем и монтируем металлоконструкции любой
              сложности. Собственное производство — честные цены.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--color-accent)] shrink-0"
                  />
                  <span className="text-gray-200 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: order form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-8 max-w-md ml-auto">
              <h2 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-white uppercase mb-2">
                Оставить заявку
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Перезвоним в течение 15 минут и ответим на все вопросы
              </p>
              <ContactForm variant="hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave / divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10" />
    </section>
  );
}
