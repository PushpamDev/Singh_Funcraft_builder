import { Link } from "react-router-dom";
import Head from "react-helmet";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; // <-- 1. IMPORT MOTION

// --- Data for the sections ---
const turnkeyScope = [
  "Concept design & 3D visualization",
  "Civil and structural work",
  "Interior fit-outs and finishing",
  "Furniture design and manufacturing",
  "Modular workstations and cabinetry",
  "HVAC, electrical, plumbing, and fire safety works",
  "Branding, signage, and IT infrastructure setup",
  "Site supervision and quality assurance",
];

const contractingServices = [
  "ISO-certified processes ensuring quality and safety",
  "PAN India execution with 300+ professional partners",
  "Proven expertise across 1 lakh+ sq.ft. large-scale projects",
  "Collaboration with top-tier consultants (HVAC, LEED, IT, Branding)",
];

const specializedOfferings = [
  "LEED and green building compliance",
  "Smart workspace and acoustic planning",
  "Energy-efficient lighting and air systems",
  "Bespoke furniture & interior fabrication",
  "Brand-based retail and F&B space customization",
];

// --- 2. DEFINE ANIMATION VARIANTS ---
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

// --- The Main Component ---
const Services = () => (
  <>
    <Head>
      <title>Our Services - Singh FurnCraft</title>
      <meta name="description" content="Explore our end-to-end turnkey interior solutions, general contracting, and specialized project execution." />
    </Head>

    {/* 3. ADD OVERFLOW-X-HIDDEN HERE */}
    <div className="space-y-24 md:space-y-32 py-16 overflow-x-hidden">
      
      {/* --- 1. Page Header --- */}
      <motion.section 
        className="container mx-auto px-4"
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">What We Do</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Our Capabilities
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            From end-to-end turnkey solutions to precision general contracting, 
            we are your single-point partner for building exceptional spaces.
          </p>
        </div>
      </motion.section>

      {/* --- 2. Service: Turnkey Solutions --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image (Animate from Left) */}
          <motion.div
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card"
          >
            <img 
              src="/Singh_FurnCraft_Portfolio/AAI JORBAGH/Pasted image (3).png"
              alt="Turnkey Interior Solutions"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Text (Animate from Right) */}
          <motion.div 
            className="max-w-xl"
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Turnkey Interior Solutions
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We specialize in turnkey interior contracting, handling every stage of the project — from conceptualization to completion. 
              Our team ensures that every project is delivered on time, within budget, and to the highest standards of quality.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-foreground">
              A single-point solution for cohesive project delivery.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">Scope of Work Includes:</h3>
            <ul className="mt-4 space-y-3">
              {turnkeyScope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Service: General Contracting --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text (Animate from Left) */}
          <motion.div 
            className="max-w-xl lg:order-last"
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              General Contracting
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              As a leading general contracting firm, Singh Furncraft undertakes complete civil and interior development works for commercial, institutional, and government projects. 
              We coordinate with architects and consultants to execute designs with technical precision.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">Why Choose Us:</h3>
            <ul className="mt-4 space-y-3">
              {contractingServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Image (Animate from Right) */}
          <motion.div
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card lg:order-first"
          >
            <img 
              src="/Singh_FurnCraft_Portfolio/VANIJYA BHAWAN/Pasted image (4).png"
              alt="General Contracting"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 4. Service: Specialized Execution --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image (Animate from Left) */}
          <motion.div
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card"
          >
            <img 
              src="/Singh_FurnCraft_Portfolio/IMFA/Pasted image (4).png"
              alt="Specialized Project Execution"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Text (Animate from Right) */}
          <motion.div 
            className="max-w-xl"
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Specialized Project Execution
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Beyond core contracting, we provide integrated project support to enhance design quality, operational efficiency, and sustainability.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">Specialized Offerings:</h3>
            <ul className="mt-4 space-y-3">
              {specializedOfferings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 5. Final CTA --- */}
      <motion.section 
        className="container mx-auto px-4"
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <div className="rounded-[2.5rem] border border-border/60 bg-secondary/40 p-10 shadow-card lg:p-16 text-center">
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">
            Let’s Build Your Dream Space Together
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-muted-foreground">
            Our 25 years of expertise are at your service. Contact us today 
            to discuss your project requirements and get a free consultation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>
      </motion.section>

    </div>
  </>
);

export default Services;