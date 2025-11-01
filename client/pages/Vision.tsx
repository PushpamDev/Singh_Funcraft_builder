import { Link } from "react-router-dom";
import Head from "react-helmet";
import { motion } from "framer-motion";
import { LeadGenSection } from "@/components/sections/lead-gen-section";

// --- 1. Define your vision videos and content ---
const visionVideos = [
  {
    title: "From Vision to Reality",
    description: "Our process begins with your vision. We leverage cutting-edge tools and decades of expertise to translate abstract ideas into tangible, breathtaking realities. This is where the blueprint meets the build.",
    videoSrc: "/Singh_FurnCraft_Portfolio/VISION VIDEOs/SINGHFURNCRAFT5.mp4"
  },
  {
    // --- THIS IS THE FIX ---
    title: "Digital Prototyping & VR",
    description: "We bridge the gap between imagination and reality. Our team creates high-fidelity 3D models and photorealistic renders, allowing clients to virtually walk through their space before construction begins. This digital prototyping process ensures every detail is perfect.",
    videoSrc: "/Singh_FurnCraft_Portfolio/VISION VIDEOs/SINGHFURNCRAFT1.mp4"
  },
  {
    title: "Crafted From Scratch",
    description: "True quality is built, not bought. From bespoke joinery to complex architectural elements, our in-house teams craft every detail from scratch, ensuring a level of finish that is unmatched.",
    videoSrc: "/Singh_FurnCraft_Portfolio/VISION VIDEOs/SINGHFURNCRAFT2.mp4"
  },
  {
    title: "Precision in Every Detail",
    description: "A look at the speed, efficiency, and flawless execution that defines our on-site management. We believe that luxury is found in the precision of the details and the smoothness of the process.",
    videoSrc: "/Singh_FurnCraft_Portfolio/VISION VIDEOs/SINGHFURNCRAFT3.mp4"
  },
  {
    title: "Architectural Excellence",
    description: "We don't just decorate spaces; we build them. Our expertise extends to complex structural and architectural features, merging bespoke design with uncompromising engineering and safety.",
    videoSrc: "/Singh_FurnCraft_Portfolio/VISION VIDEOs/SINGHFURNCRAFT4.mp4"
  }
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
const Vision = () => (
  <>
    <Head>
      <title>Our Vision - Singh FurnCraft</title>
      <meta name="description" content="Explore our process, from digital prototyping to hands-on craftsmanship and final execution." />
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
          <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Our Vision & Process</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            How We Build Your Dream
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            We merge timeless craftsmanship with modern technology. See how our 
            commitment to quality and innovation shapes every project we touch.
          </p>
        </div>
      </motion.section>

      {/* --- 2. Video Sections --- */}
      {visionVideos.map((item, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <section key={item.title} className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Video Block */}
              <motion.div
                variants={isOdd ? fromRight : fromLeft}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.3 }}
                transition={animationTransition}
                className={`h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card bg-black ${isOdd ? 'lg:order-last' : ''}`}
              >
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              
              {/* Text Block */}
              <motion.div 
                className="max-w-xl"
                variants={isOdd ? fromLeft : fromRight}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.3 }}
                transition={animationTransition}
              >
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>

            </div>
          </section>
        );
      })}

      {/* --- 3. NEW Professional Summary Section --- */}
      <motion.section 
        className="container mx-auto px-4"
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            Our Process, Your Peace of Mind
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            From the first blueprint to the final handover, our process is built on transparency, precision, and a relentless pursuit of quality. These videos showcase our technical capabilities, but our true measure of success is a seamless client experience. We handle the complexity so you can enjoy the transformation.
          </p>
        </div>
      </motion.section>

      {/* --- 4. Final CTA --- */}
      <motion.section 
        className="container mx-auto px-4"
        variants={fromBottom}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        transition={animationTransition}
      >
        <LeadGenSection />
      </motion.section>

    </div>
  </>
);

export default Vision;