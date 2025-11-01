import { Link } from "react-router-dom";
import Head from "react-helmet";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

// --- REUSABLE COMPONENTS ---
// We can reuse these from other pages
import { MetricsSection } from "@/components/sections/metrics-section";
import { LeadGenSection } from "@/components/sections/lead-gen-section";

// --- ANIMATION VARIANTS (Consistent with Services page) ---
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

// --- DATA FOR THIS PAGE ---
const isoCerts = [
  {
    icon: Award,
    title: "ISO 9001:2008",
    description: "Quality Management System",
  },
  {
    icon: Award,
    title: "ISO 14001:2004",
    description: "Environmental Management System",
  },
  {
    icon: Award,
    title: "ISO 18001:2007",
    description: "Occupational Health & Safety",
  },
];

const whyChooseUsList = [
  "21+ Years of Proven Expertise",
  "End-to-End Turnkey Solutions",
  "PAN India Project Execution",
  "ISO Certified & MSME Registered",
  "Over 350 Projects Across Sectors",
  "Commitment to Innovation & Quality",
];


// --- THE MAIN COMPONENT ---
const About = () => (
  <>
    <Head>
      <title>About Us - Singh FurnCraft</title>
      <meta name="description" content="With over 21 years of experience, Singh Furncraft is a trusted name in the interior turnkey and contracting industry." />
    </Head>

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
          <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">About Singh Furncraft</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Build Your Dream Place
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            With over 21 years of experience, Singh Furncraft Pvt. Ltd. is a trusted name in the interior turnkey and contracting industry, shaping premium spaces across India through quality craftsmanship, innovative design, and flawless execution.
          </p>
        </div>
      </motion.section>

      {/* --- 2. Reused Metrics Section --- */}
      <motion.div
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <MetricsSection />
      </motion.div>

      {/* --- 3. Core Narrative --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card"
          >
            <img 
              src="/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png"
              alt="Kaushal Bhawan Government Building"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="max-w-xl"
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Our Legacy of Excellence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We combine design sensibility with engineering excellence to deliver functional, aesthetic, and sustainable spaces — from corporate offices and government buildings to hotels, retail chains, and institutional interiors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our success lies in collaboration and craftsmanship. Every project reflects our commitment to precision, innovation, and on-time delivery.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* --- 4. Vision & Mission --- */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="font-display text-3xl leading-tight text-foreground md:text-4xl"
            variants={fromBottom}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            Our Guiding Principles
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            className="rounded-3xl border border-border/60 bg-secondary/40 p-8"
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h3 className="font-display text-2xl text-foreground">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To be the leading brand in construction recognized for quality and innovation, supporting our people and the communities we serve, by being the contractor of choice in our market.
            </p>
          </motion.div>
          <motion.div 
            className="rounded-3xl border border-border/60 bg-secondary/40 p-8"
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To provide the highest-quality workmanship while understanding client needs to deliver projects on time and on budget. We aim to be known for our innovation, collaboration, and long-term client relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 5. Certifications --- */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="font-display text-3xl leading-tight text-foreground md:text-4xl"
            variants={fromBottom}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            Certified Quality & Standards
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground"
            variants={fromBottom}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={{...animationTransition, delay: 0.2}}
          >
            Our certifications ensure that every project adheres to the highest standards of safety, efficiency, and sustainability.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {isoCerts.map((cert, i) => (
            <motion.div 
              key={cert.title}
              className="flex items-center gap-6 rounded-3xl border border-border/60 bg-secondary/40 p-8"
              variants={fromBottom}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{...animationTransition, delay: i * 0.15}}
            >
              <cert.icon className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. Leadership --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="max-w-xl"
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Leadership
            </h2>
            <h3 className="mt-4 font-display text-2xl text-primary">
              Mr. P. P. Singh, Managing Director
            </h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A visionary leader with decades of industry experience, Mr. Singh has driven SFC’s growth through his commitment to innovation, quality, and long-term client relationships.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our PAN India presence and experienced team of architects, engineers, MBAs, and consultants allow us to manage projects seamlessly from concept to completion.
            </p>
          </motion.div>
          <motion.div
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card"
          >
            <img 
              src="/Singh_FurnCraft_Portfolio/MR PP SINGH/image-Picsart-AiImageEnhancer.jpeg"
              alt="Executive Office Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 7. Why Choose Us --- */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="max-w-xl"
            variants={fromLeft}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
          >
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Why Choose Singh Furncraft?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Singh Furncraft, every project is not just a contract — it’s a commitment to excellence. We believe in creating spaces that inspire, empower, and endure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our approach integrates design, functionality, and sustainability to transform ideas into living spaces that reflect our clients’ vision.
            </p>
          </motion.div>
          <motion.div
            variants={fromRight}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.3 }}
            transition={animationTransition}
            className="rounded-3xl border border-border/60 bg-secondary/40 p-8"
          >
            <ul className="space-y-4">
              {whyChooseUsList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 8. Reused CTA Section --- */}
      <motion.div
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <LeadGenSection />
      </motion.div>

    </div>
  </>
);

export default About;