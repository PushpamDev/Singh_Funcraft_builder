"use client";

import { Link } from "react-router-dom"; // <-- 1. IMPORT from react-router-dom
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // --- 2. THE FIX ---
    // Changed 'href' prop to 'to'
    <Link 
      to={`/projects/${project.slug}`} 
      className="group block overflow-hidden rounded-3xl shadow-card"
    >
      <motion.div
        className="relative h-96 w-full"
        whileHover="hover"
      >
        {/* The Image */}
        <motion.img
          src={project.images[0]}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
          variants={{
            initial: { scale: 1.05 },
            hover: { scale: 1 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          variants={{
            initial: { opacity: 0.8 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        />

        {/* The Text */}
        <motion.div className="relative flex h-full flex-col justify-end p-8">
          <motion.h3
            className="font-display text-3xl text-white"
            variants={{
              initial: { y: 10 },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>
          <motion.div
            className="mt-2 text-primary-foreground/70"
            variants={{
              initial: { y: 10, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View Project &rarr;
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};