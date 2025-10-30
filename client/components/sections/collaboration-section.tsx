import { Link } from "react-router-dom";

export const CollaborationSection = () => (
  <section className="mt-28 overflow-hidden rounded-[2.5rem] border border-border/60 bg-primary/12 p-10 text-center shadow-soft md:p-16">
    <div className="mx-auto max-w-3xl">
      <span className="text-xs uppercase tracking-[0.45em] text-primary">Let's Create the Unimaginable</span>
      <h2 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
        Your vision, our expertise. Together, we can build landmarks that will define generations.
      </h2>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        From concept through commissioning, Singh FurnCraft delivers human-centric environments where form and
        function coalesce. Engage our teams to translate your ambitions into enduring interior experiences.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
        >
          Initiate Collaboration
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
        >
          Our Process
        </Link>
      </div>
    </div>
  </section>
);
