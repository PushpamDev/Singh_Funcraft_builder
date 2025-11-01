import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, projects, Project } from '@/lib/projects'; // Import 'projects'
import NotFound from './NotFound';
import Head from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fromLeft = {
  initial: { opacity: 0, x: -50 },
  inView: { opacity: 1, x: 0 },
};

const fromRight = {
  initial: { opacity: 0, x: 50 },
  inView: { opacity: 1, x: 0 },
};

const fromBottom = {
  initial: { opacity: 0, y: 50 },
  inView: { opacity: 1, y: 0 },
};

const animationTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

// --- Sub-components ---
const ProjectInfoItem = ({ label, value }) => (
  <motion.div 
    className="rounded-2xl border border-border/60 bg-secondary/40 p-6"
    variants={fromBottom}
  >
    <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
    <dd className="mt-2 font-display text-2xl text-foreground">{value}</dd>
  </motion.div>
);

const ProcessCard = ({ title, src }) => (
  <div className="group overflow-hidden rounded-3xl border border-border/60 bg-secondary/40">
    <div className="h-64 w-full overflow-hidden">
      <img 
        src={src} 
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl text-foreground">{title}</h3>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const project: Project | undefined = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }
  
  // --- Logic for Next Project ---
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]; // Wraps around to first
  
  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1);

  return (
    <>
      <Head>
          <title>{project.name} - Singh FurnCraft</title>
          <meta name="description" content={project.description} />
      </Head>

      {/* 3. ADD OVERFLOW-X-HIDDEN HERE */}
      <div className="space-y-24 md:space-y-32 py-16 overflow-x-hidden">
        
        {/* --- 1. Project Header --- */}
        <motion.section 
          className="container mx-auto px-4"
          variants={fromBottom}
          initial="initial"
          animate="inView" // Animate on load
          transition={animationTransition}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">{project.client}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              {project.name}
            </h1>
          </div>
        </motion.section>

        {/* --- 2. Hero Image --- */}
        <motion.section 
          className="container mx-auto px-4"
          variants={fromBottom}
          initial="initial"
          animate="inView"
          transition={{...animationTransition, delay: 0.2}}
        >
          <div className="w-full h-[600px] overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card">
            <img 
              src={heroImage} 
              alt={project.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.section>

        {/* --- 3. Project Details Section --- */}
        <motion.section 
          className="container mx-auto px-4"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProjectInfoItem label="Location" value={project.location} />
            <ProjectInfoItem label="Area" value={project.area} />
            <ProjectInfoItem label="Service" value={project.type} />
          </dl>
        </motion.section>

        {/* --- 4. NEW: Project Story --- */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              variants={fromLeft}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={animationTransition}
            >
              <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                The Challenge
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </motion.div>
            <motion.div
              variants={fromRight}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={animationTransition}
            >
              <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                The Solution
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </section>

        
        {/* --- 6. Gallery Grid --- */}
        {galleryImages.length > 0 && (
          <section className="container mx-auto px-4">
            <motion.h2 
              className="text-center font-display text-4xl text-foreground mb-12"
              variants={fromBottom}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={animationTransition}
            >
              Final Gallery
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {galleryImages.map((img, index) => (
                <motion.div 
                  key={index} 
                  className="h-96 w-full overflow-hidden rounded-3xl border border-border/60 shadow-card"
                  variants={fromBottom}
                >
                  <img 
                    src={img} 
                    alt={`${project.name} gallery image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
        
        {/* --- 7. NEW: Next Project Link --- */}
        <section className="container mx-auto px-4">
          <motion.div
            variants={fromBottom}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <Link 
              to={`/projects/${nextProject.slug}`} 
              className="group relative block h-80 w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card"
            >
              <img 
                src={nextProject.images[0]} 
                alt={nextProject.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">Next Project</span>
                <h3 className="mt-4 font-display text-4xl md:text-5xl">
                  {nextProject.name}
                </h3>
                <div className="mt-6 opacity-0 transition-all duration-300 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 font-semibold text-primary-foreground">
                    View Project <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

      </div>
    </>
  );
}