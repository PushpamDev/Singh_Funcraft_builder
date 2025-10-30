import { CollaborationSection } from "@/components/sections/collaboration-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectShowcaseSection } from "@/components/sections/project-showcase";
import { ServicesSection } from "@/components/sections/services-section"; // <-- NEW
import { MetricsSection } from "@/components/sections/metrics-section"; // <-- NEW
import { LeadGenSection } from "@/components/sections/lead-gen-section"; // <-- NEW
import Head from "next/head";

const craftPillars = [
  {
    number: "01",
    title: "Holistic Discovery",
    description:
      "Immersive brand and lifestyle workshops surface the narrative, spatial expectations, and sensory cues that define success.",
  },
  {
    number: "02",
    title: "Precision Engineering",
    description:
      "Integrated architecture, MEP, and bespoke joinery teams orchestrate detail-rich environments with sustainable intelligence.",
  },
  {
    number: "03",
    title: "Signature Delivery",
    description:
      "An elite execution crew ensures every surface, finish, and interaction celebrates the BuildRight promise of excellence.",
  },
];

export default function Index() {
  return (
    <>
      <Head>
        <title>Singh FurnCraft - Turnkey Interior Excellence</title>
        <meta name="description" content="We specialize in end-to-end design and build solutions, from the first sketch to the final fixture." />
      </Head>

      {/* This new layout is much more modular and professional */}
      <div className="space-y-24">
        
        {/* 1. New Slider Hero */}
        <HeroSection />

        {/* 2. New Metrics Section (Moved from Hero) */}
        <MetricsSection />

        {/* 3. New Services Section (Like the video) */}
        <ServicesSection />

        {/* 4. Existing Methodology Section */}
        {/* <section className="grid gap-10 rounded-[2.5rem] border border-border/60 bg-background/80 p-8 shadow-card lg:grid-cols-[0.78fr,1.22fr] lg:p-14">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Singh FurnCraft Methodology</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-[2.85rem]">
                A turnkey interior journey refined for discerning partners.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              We choreograph every project via a seamless continuum of strategy, design, engineering, and on-site craftsmanship.
              The result: immersive spaces where materials, light, and experience converge.
            </p>
          </div>
          <div className="grid gap-6">
            {craftPillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 p-8 transition-colors duration-300 hover:bg-secondary/60"
              >
                <div className="absolute -right-4 -top-6 text-[10rem] font-bold text-foreground/5 opacity-50 transition-transform duration-300 group-hover:scale-105 group-hover:text-foreground/10">
                  {pillar.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{pillar.number}</p>
                  <h3 className="mt-3 font-display text-2xl text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section> */}

        {/* 5. Existing Project Showcase */}
        <ProjectShowcaseSection />

        {/* 6. New Lead Gen Section (Moved from Hero) */}
        <LeadGenSection />

        {/* 7. Existing Collaboration/Logo Section */}
        {/* <CollaborationSection /> */} 
        {/* Note: Your new HeroSection has the logo scroller built-in at the bottom.
          You can either remove the scroller from the HeroSection, 
          or remove this <CollaborationSection /> to avoid showing it twice. 
          I recommend removing this one.
        */}

      </div>
    </>
  );
}