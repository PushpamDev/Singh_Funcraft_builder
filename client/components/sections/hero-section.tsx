"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

// --- SLIDES DATA ---
const heroSlides = [
  {
    superTitle: "Turnkey Excellence",
    title: "Kaushal Bhawan",
    description: "A landmark government building defined by modern architecture and functional design.",
    imgSrc: "/Singh_FurnCraft_Portfolio/KAUSHAL BHAWAN/Pasted image.png",
  },
  {
    superTitle: "Corporate Interiors",
    title: "Modern Workspaces",
    description: "Dynamic office environments designed for productivity and collaboration.",
    imgSrc: "/Singh_FurnCraft_Portfolio/HYDRO OFFICE AT POLYPLEX CORPORATION LIMITED/Pasted image.png",
  },
  {
    superTitle: "Bespoke Solutions",
    title: "IILM Auditorium",
    description: "Acoustically engineered and aesthetically designed for an immersive experience.",
    imgSrc: "/Singh_FurnCraft_Portfolio/IILM AUDITORIUM/Pasted image (3).png",
  },
  {
    superTitle: "Precision Engineering",
    title: "Executive Boardrooms",
    description: "State-of-the-art facilities that blend technology with sophisticated design.",
    imgSrc: "/Singh_FurnCraft_Portfolio/NATIONAL HIGHWAYS INFRA TRUST/Pasted image (5).png",
  },
];

// --- LOGO DATA ---
const logos = [
  { src: "/Brand_Collabs_logo/AAI Logo.png", alt: "AAI Logo" },
  { src: "/Brand_Collabs_logo/AIPL-LOGO.webp", alt: "AIPL-LOGO" },
  { src: "/Brand_Collabs_logo/AMRITA LOGO.avif", alt: "AMRITA LOGO" },
  { src: "/Brand_Collabs_logo/Axis-Bank-Logo.png", alt: "Axis-Bank-Logo" },
  { src: "/Brand_Collabs_logo/Chawla ALuminium Logo.png", alt: "Chawla ALuminium Logo" },
  { src: "/Brand_Collabs_logo/ELI_logo.svg", alt: "ELI_logo" },
  { src: "/Brand_Collabs_logo/GTS_Logo.png", alt: "GTS_Logo" },
  { src: "/Brand_Collabs_logo/IILM_LOGO.png", alt: "IILM_LOGO" },
  { src: "/Brand_Collabs_logo/Indian_AirForce.png", alt: "Indian_AirForce" },
  { src: "/Brand_Collabs_logo/Indian_satyamev_logo.png", alt: "Indian_satyamev_logo" },
  { src: "/Brand_Collabs_logo/Iskconlogo.png", alt: "Iskconlogo" },
  { src: "/Brand_Collabs_logo/MECON_logo.png", alt: "MECON_logo" },
  { src: "/Brand_Collabs_logo/MMTC logo.gif", alt: "MMTC logo" },
  { src: "/Brand_Collabs_logo/MOVIETIME CINEMAS.svg", alt: "MOVIETIME CINEMAS" },
  { src: "/Brand_Collabs_logo/Ministry_of_Steel.gif", alt: "Ministry_of_Steel" },
  { src: "/Brand_Collabs_logo/NHIT-logo-with-TM-01.png", alt: "NHIT-logo-with-TM-01" },
  { src: "/Brand_Collabs_logo/Pizza_Express.svg", alt: "Pizza_Express" },
  { src: "/Brand_Collabs_logo/Reliance_Communications_Logo.svg.png", alt: "Reliance_Communications_Logo" },
  { src: "/Brand_Collabs_logo/SBI Logo.png", alt: "SBI Logo" },
  { src: "/Brand_Collabs_logo/Sail Logo.png", alt: "Sail Logo" },
  { src: "/Brand_Collabs_logo/Vedanta-BALCO-Logo2.png", alt: "Vedanta-BALCO-Logo2" },
  { src: "/Brand_Collabs_logo/Vi-logo.svg", alt: "Vi-logo" },
  { src: "/Brand_Collabs_logo/ZTE-logo.svg", alt: "ZTE-logo" },
  { src: "/Brand_Collabs_logo/agilent-logo.png", alt: "agilent-logo" },
  { src: "/Brand_Collabs_logo/colour-logo-png-01.png", alt: "colour-logo-png-01" },
  { src: "/Brand_Collabs_logo/imfa-logo.ce2aef33.svg", alt: "imfa-logo" },
  { src: "/Brand_Collabs_logo/innovaccer-logo.svg", alt: "innovaccer-logo" },
  { src: "/Brand_Collabs_logo/integreon-logo03.png", alt: "integreon-logo03" },
  { src: "/Brand_Collabs_logo/m3m-logo.png", alt: "m3m-logo" },
  { src: "/Brand_Collabs_logo/nalco-logo.png", alt: "nalco-logo" },
  { src: "/Brand_Collabs_logo/polyplex-logo.jpg", alt: "polyplex-logo" },
  { src: "/Brand_Collabs_logo/tata_logo.webp", alt: "tata_logo" },
  { src: "/Brand_Collabs_logo/wipro_new_logo.svg", alt: "wipro_new_logo" },
];

// --- LOGO SCROLLER COMPONENT ---
const LogoScroller = () => (
  <div
    className="w-full overflow-hidden"
    style={{
      maskImage: "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
    }}
  >
    <div className="flex w-max animate-logo-scroll">
      {[...logos, ...logos].map((logo, index) => (
        <div 
          key={index} 
          className="flex-shrink-0 w-36 h-24 flex items-center justify-center mx-6"
        >
          {/* --- THIS IS THE FIX --- */}
          {/* Removed 'grayscale' and 'hover:grayscale-0' */}
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="max-w-full max-h-full object-contain opacity-60 transition-all duration-300 hover:opacity-100" 
          />
        </div>
      ))}
    </div>
  </div>
);


// --- HERO SECTION COMPONENT ---
export const HeroSection = () => {
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
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden rounded-[2.75rem] border border-border/60 shadow-soft bg-background">
      
      {/* Embla Slider Viewport */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
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
      <div className="absolute bottom-0 w-full bg-background/90 py-8">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Trusted By
        </h3>
        <div className="mt-8">
          <LogoScroller />
        </div>
      </div>
    </section>
  );
};