import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ... (servicesData is unchanged)
const servicesData = [
  {
    title: "Design & Build",
    description: "End-to-end solutions where we manage your project from the first sketch to the final, built-out reality.",
    href: "/services",
    imageUrl: "/Singh_FurnCraft_Portfolio/INNOVACER/Pasted image.png", // The yellow office
  },
  {
    title: "Corporate Interiors",
    description: "Creating productive and inspiring workspaces, from large-scale offices to bespoke conference rooms.",
    href: "/services",
    imageUrl: "/Singh_FurnCraft_Portfolio/IMFA/Pasted image (5).png", // The long conference room
  },
  {
    title: "Bespoke Joinery",
    description: "Custom-crafted furniture, fixtures, and acoustic paneling designed and built to your exact specifications.",
    href: "/services",
    imageUrl: "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (2).png", // The auditorium
  },
];


const ServiceCard = ({ title, description, href, imageUrl }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    // Changed bg-secondary/40 to bg-secondary
    className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-secondary shadow-card"
  >
    <Link to={href} className="flex flex-col h-full">
      {/* ... (rest of card is unchanged) ... */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="mt-6 font-semibold text-primary transition-colors group-hover:text-primary/80">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  </motion.div>
);

export const ServicesSection = () => {
  // ... (rest of file is unchanged)
  return (
    <section className="container mx-auto px-4">
      {/* --- THIS IS THE FIX --- */}
      {/* Wrapped the header in a styled, opaque card */}
      <div className="rounded-[2.5rem] border border-border/60 bg-background p-8 shadow-card lg:p-14 mb-14">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">What We Do</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Our Core Capabilities
          </h2>
        </div>
      </div>
      {/* --- END OF FIX --- */}

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};