import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

// --- Footer Column Component ---
const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
      {title}
    </h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

// --- Footer Link Component ---
const FooterLink = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      {children}
    </Link>
  </li>
);

// --- Footer Contact Item Component ---
const ContactItem = ({ icon: Icon, children }) => (
  <li className="flex items-start gap-3">
    <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

export const Footer = () => {
  return (
    // --- THIS IS THE FIX ---
    // Changed bg-secondary/40 to bg-secondary
    <footer className="border-t border-border/60 bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* --- Column 1: About --- */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="font-display text-2xl text-foreground">
              Singh Furncraft
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Build Your Dream Place. With over 25 years of experience, we 
              deliver turnkey interior solutions with precision and quality.
            </p>
            {/* TODO: Add Social Media Icons Here if you have them */}
          </div>

          {/* --- Column 2: Quick Links --- */}
          <FooterColumn title="Navigate">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* --- Column 3: Services --- */}
          <FooterColumn title="Services">
            <FooterLink href="/services">Turnkey Solutions</FooterLink>
            <FooterLink href="/services">General Contracting</FooterLink>
            <FooterLink href="/projects?category=Corporate">Corporate Interiors</FooterLink>
            <FooterLink href="/projects?category=Government">Government Projects</FooterLink>
            <FooterLink href="/projects?category=Hospitality">Hospitality</FooterLink>
          </FooterColumn>

          {/* --- Column 4: Contact --- */}
          <FooterColumn title="Get In Touch">
            <ContactItem icon={MapPin}>
              L-73, Lajpat Nagar - II, <br />
              New Delhi - 110024
            </ContactItem>
            <ContactItem icon={Phone}>
              011-417-18066 / 4657551
            </ContactItem>
            <ContactItem icon={Mail}>
              <a 
                href="mailto:singhfurncraft@yahoo.com" 
                className="transition-colors hover:text-primary"
              >
                singhfurncraft@yahoo.com
              </a>
            </ContactItem>
          </FooterColumn>
        </div>
      </div>

      {/* --- Bottom Copyright Bar --- */}
      {/* --- THIS IS THE FIX --- */}
      {/* Added bg-secondary to make it opaque too */}
      <div className="border-t border-border/60 py-6 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Singh Furncraft Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};