import {
  Phone,
  Ruler,
  Settings,
  Truck,
  Shield,
  LucideIcon,
} from "lucide-react";
import type { ProcessStep as ProcessStepType } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  ruler: Ruler,
  settings: Settings,
  truck: Truck,
  shield: Shield,
};

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  const Icon = iconMap[step.icon] ?? Settings;

  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px bg-[var(--color-border)] z-0" />
      )}

      {/* Icon circle */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-4 shadow-[var(--shadow-sm)]">
        <Icon size={28} className="text-[var(--color-primary)]" strokeWidth={1.5} />
      </div>

      {/* Step number */}
      <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-1">
        Шаг {step.id}
      </span>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-oswald)] text-lg font-semibold uppercase text-[var(--color-primary)] mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] max-w-[180px]">
        {step.description}
      </p>
    </div>
  );
}
