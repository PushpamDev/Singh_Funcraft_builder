const heroMetrics = [
  { value: "25", label: "Years in business" },
  { value: "350+", label: "Projects delivered" },
  { value: "99+", label: "Satisfied clients" },
];

export const MetricsSection = () => (
  <section className="container mx-auto px-4">
    <dl className="grid gap-px rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-3 overflow-hidden">
      {heroMetrics.map((metric) => (
        <div
          key={metric.label}
          // Changed bg-background/80 to bg-background
          className="bg-background px-6 py-10 text-center"
        >
          <dt className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{metric.label}</dt>
          <dd className="mt-4 font-display text-4xl text-foreground">{metric.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);