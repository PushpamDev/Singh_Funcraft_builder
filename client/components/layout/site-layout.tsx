import { PropsWithChildren, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { WatermarkAnimation } from "../ui/watermark-animation";
import { VideoBackground } from "../ui/video-background"; // <-- 1. IMPORT VIDEO BG
import { Footer } from "./footer";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const MobileMenu = ({
  isOpen,
  onClose,
  currentPath,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}) => (
  <div
    className={cn(
      "fixed inset-0 z-40 bg-background/90 backdrop-blur-md transition-opacity duration-200",
      isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
    )}
  >
    {/* ... (Mobile menu code is unchanged) ... */}
    <div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
      <img src="/favicon-32x32.png" alt="Singh FurnCraft" className="h-8 w-auto" />
      <p className="font-display text-3xl text-foreground">Singh FurnCraft</p>
      <nav className="flex flex-col items-center gap-6 text-lg font-medium">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className={cn(
              "transition-colors duration-200",
              currentPath === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        to="/contact"
        onClick={onClose}
        className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
      >
        Get a Quote
      </Link>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
      >
        Close
      </button>
    </div>
  </div>
);

export const SiteLayout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // --- 2. ADD THIS LOGIC ---
  const isHomepage = location.pathname === '/';

  return (
    <div className="relative flex min-h-screen flex-col">
      
      {/* --- 3. ADD THIS CONDITIONAL LOGIC --- */}
      {isHomepage ? <VideoBackground /> : <WatermarkAnimation />}
      
      <header className="sticky top-0 z-30 backdrop-blur-xl">
        {/* ... (Header code is unchanged) ... */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-6">
          <Link to="/" className="relative flex items-center gap-4">
            <img src="/favicon-32x32.png" alt="Singh FurnCraft" className="h-8 w-auto" />
            <span className="font-display text-2xl tracking-tight text-foreground">Singh FurnCraft</span>
            <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative py-1 transition-colors",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "hover:text-foreground",
                )}
              >
                {location.pathname === link.href && (
                  <span className="absolute inset-x-1 -bottom-2 h-0.5 rounded-full bg-primary" />
                )}
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary md:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} currentPath={location.pathname} />
      <main className="relative z-10 flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 md:pb-32 md:pt-20">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};