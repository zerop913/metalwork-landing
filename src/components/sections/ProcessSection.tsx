import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-padding bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]"
    >
      <div className="container-main">
        <SectionTitle
          title="Этапы работ"
          subtitle="Простой и понятный процесс — от заявки до готового изделия"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
