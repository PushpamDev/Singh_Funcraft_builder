"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

// ... (heroSlides data is unchanged)
const heroSlides = [
  {
    superTitle: "Turnkey Excellence",
    title: "Kaushal Bhawan",
    description: "A landmark government building defined by modern architecture and functional design.",
    imgSrc: "public/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png", // The exterior shot
  },
  {
    superTitle: "Corporate Interiors",
    title: "Modern Workspaces",
    description: "Dynamic office environments designed for productivity and collaboration.",
    imgSrc: "public/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image.png", // The yellow office
  },
  {
    superTitle: "Bespoke Solutions",
    title: "IILM Auditorium",
    description: "Acoustically engineered and aesthetically designed for an immersive experience.",
    imgSrc: "public/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (3).png", // The purple seats
  },
  {
    superTitle: "Precision Engineering",
    title: "Executive Boardrooms",
    description: "State-of-the-art facilities that blend technology with sophisticated design.",
    imgSrc: "public/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (5).png", // The long conference room
  },
];


export const HeroSection = () => {
  // ... (all your hooks and functions are unchanged)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect); 
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);


  return (
    // --- THIS IS THE FIX ---
    // Added 'bg-background' to make the slider card opaque
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden rounded-[2.75rem] border border-border/60 shadow-soft bg-background">
      
      {/* Embla Slider Viewport */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        {/* ... (rest of the file is unchanged) ... */}
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div
              className="relative h-full flex-[0_0_100%] min-w-0 animate-embla-fade-in"
              key={slide.title}
            >
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
        {/* ... (text content is unchanged) ... */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/90">
              {heroSlides[activeIndex].superTitle}
            </span>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
              {heroSlides[activeIndex].title}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/80">
              {heroSlides[activeIndex].description}
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {/* ... (dots are unchanged) ... */}
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "w-6 bg-primary" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Logo Scroller */}
      {/* Changed bg-gradient-to-t... to a solid bg-background/90 for better readability */}
      <div className="absolute bottom-0 w-full bg-background/90 py-8">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Trusted By
        </h3>
        <div className="mt-8">
          <p className="text-center text-muted-foreground/50 text-xs">Logo Scroller Component Goes Here</p>
        </div>
      </div>
    </section>
  );
};