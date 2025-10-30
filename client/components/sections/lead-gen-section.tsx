import { Link } from "react-router-dom";

export const LeadGenSection = () => {
  return (
    <section className="container mx-auto px-4">
      {/* Changed bg-secondary/40 to bg-secondary */}
      <div className="rounded-[2.5rem] border border-border/60 bg-secondary p-8 shadow-card lg:p-14">
        <div className="max-w-3xl mx-auto text-center">
          {/* ... (rest of file is unchanged) ... */}
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            Start Your Project Today
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            Ready to transform your space? Get in touch for a free 
            consultation with our design experts.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault(); 
              alert(`Form submitted for: ${e.target.email.value}`);
            }}
            className="mt-10"
          >
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
              <input 
                type="email" 
                name="email"
                required
                placeholder="Enter your email address"
                // Changed bg-background/70 to bg-background
                className="flex-grow rounded-full border border-border bg-background px-6 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 max-w-sm mx-auto sm:mx-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Or, see our past projects &rarr;
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}