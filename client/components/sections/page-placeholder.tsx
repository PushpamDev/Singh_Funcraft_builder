import { Link } from "react-router-dom";

interface PagePlaceholderProps {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const PagePlaceholder = ({ title, description, primaryCta, secondaryCta }: PagePlaceholderProps) => (
  <section className="mx-auto max-w-4xl rounded-[2.5rem] border border-border/60 bg-background/80 p-10 text-center shadow-card md:p-16">
    <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Singh FurnCraft</span>
    <h1 className="mt-6 font-display text-4xl text-foreground md:text-5xl">{title}</h1>
    <p className="mt-6 text-base leading-relaxed text-muted-foreground">{description}</p>
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        to={primaryCta.href}
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
      >
        {primaryCta.label}
      </Link>
      {secondaryCta ? (
        <Link
          to={secondaryCta.href}
          className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
        >
          {secondaryCta.label}
        </Link>
      ) : null}
    </div>
  </section>
);
