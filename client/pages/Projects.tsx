import { useState } from "react";
import { projects, projectCategories } from "@/lib/projects"; // Make sure to import from your new lib/projects.ts
import { ProjectCard } from "@/components/project-card";
import Head from "react-helmet"; // Use react-helmet for title
import { motion, AnimatePresence } from "framer-motion";

// --- Filter Button Component ---
const FilterButton = ({ category, activeCategory, setCategory }) => (
  <button
    onClick={() => setCategory(category)}
    className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
      activeCategory === category
        ? "bg-primary text-primary-foreground"
        : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80"
    }`}
  >
    {category}
  </button>
);

// --- Main Projects Page ---
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Our Portfolio - Singh FurnCraft</title>
        <meta name="description" content="A showcase of our commitment to quality, from grand corporate offices to bespoke commercial spaces." />
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-4 text-center font-display text-4xl leading-tight text-foreground md:text-5xl">
          Our Portfolio
        </h1>
        <p className="mb-12 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          A showcase of our commitment to quality, from grand corporate 
          offices to bespoke commercial spaces.
        </p>

        {/* --- FILTER BUTTONS --- */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {projectCategories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              setCategory={setActiveCategory}
            />
          ))}
        </div>

        {/* --- ANIMATED GRID --- */}
        <motion.div
          layout // This tells framer-motion to animate layout changes
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout // Animates the card's position
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* This uses the new ProjectCard, NOT the old carousel */}
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}