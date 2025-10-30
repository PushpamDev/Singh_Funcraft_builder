import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Link } from "react-router-dom";

// Get just the first 3 projects for the showcase
const showcasedProjects = projects.slice(0, 3);

export const ProjectShowcaseSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Our Work</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Spaces That Speak
          </h2>
        </div>
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center rounded-full border border-border bg-secondary/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
        >
          View All Projects
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcasedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};