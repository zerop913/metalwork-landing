import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[var(--color-bg)]">
      <div className="container-main">
        <SectionTitle
          title="Что мы можем?"
          subtitle="Полный цикл работ с металлом — от проектирования до монтажа на объекте"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
