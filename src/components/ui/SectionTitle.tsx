interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-[family-name:var(--font-oswald)] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 ${
          light ? "text-white" : "text-[var(--color-primary)]"
        }`}
      >
        {title}
      </h2>
      {/* Accent underline */}
      <div
        className={`h-1 w-16 bg-[var(--color-accent)] ${centered ? "mx-auto" : ""} mb-4`}
      />
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            light ? "text-gray-300" : "text-[var(--color-text-muted)]"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
