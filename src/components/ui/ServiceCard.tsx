import Image from "next/image";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-sm overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold uppercase text-[var(--color-primary)] mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-4 flex-1">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-1">
            {service.features.map((feat) => (
              <li
                key={feat}
                className="text-xs text-[var(--color-text-muted)] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
