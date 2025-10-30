import Head from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// --- Assuming these are your shadcn/ui component paths ---
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// --- ANIMATION VARIANTS (Consistent with other pages) ---
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

// --- Contact Info Item Component ---
const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h3 className="font-display text-xl text-foreground">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground">{children}</div>
    </div>
  </div>
);

// --- THE MAIN COMPONENT ---
const Contact = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your form submission logic here (e.g., API call)
    alert("Message sent! (Placeholder)");
  };

  return (
    <>
      <Head>
        <title>Contact Us - Singh FurnCraft</title>
        <meta name="description" content="Reach out to us for project consultations, collaborations, or turnkey interior solutions." />
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
            <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Get In Touch</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Whether you’re planning a corporate office, retail outlet, hospitality space, or government project, 
              our team is ready to turn your vision into reality.
            </p>
          </div>
        </motion.section>

        {/* --- 2. Main Contact Grid --- */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* --- LEFT COLUMN: Contact Details --- */}
            <motion.div 
              className="space-y-8"
              variants={fromLeft}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
              transition={animationTransition}
            >
              <ContactInfoItem title="Head Office" icon={MapPin}>
                L-73, Lajpat Nagar – II, <br />
                New Delhi – 110024, India
              </ContactInfoItem>

              <ContactInfoItem title="Phone" icon={Phone}>
                <a href="tel:01141718066" className="transition-colors hover:text-primary">
                  011-41718066
                </a> / 
                <a href="tel:0114657551" className="transition-colors hover:text-primary">
                  011-4657551
                </a>
              </ContactInfoItem>

              <ContactInfoItem title="Email" icon={Mail}>
                <a href="mailto:singhfurncraft@yahoo.com" className="transition-colors hover:text-primary">
                  singhfurncraft@yahoo.com
                </a>
              </ContactInfoItem>

              <ContactInfoItem title="Business Hours" icon={Clock}>
                Monday – Saturday: 10:00 AM – 6:30 PM <br />
                Sunday: Closed
              </ContactInfoItem>
            </motion.div>

            {/* --- RIGHT COLUMN: Contact Form --- */}
            <motion.div
              variants={fromRight}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
              transition={animationTransition}
              className="rounded-3xl border border-border/60 bg-secondary/40 p-8 shadow-card"
            >
              <h2 className="font-display text-3xl text-foreground">
                Send Us a Message
              </h2>
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Enter your full name" 
                    required 
                    className="mt-2" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                    className="mt-2" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Contact Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="text" 
                    placeholder="Enter your contact number" 
                    required 
                    className="mt-2" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project" 
                    required 
                    className="mt-2 min-h-[120px]" 
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full text-sm font-semibold uppercase tracking-[0.28em] shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>

          </div>
        </section>

        {/* --- 3. Map Section --- */}
        <motion.section 
          className="container mx-auto px-4"
          variants={fromBottom}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.2 }}
          transition={animationTransition}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl leading-tight text-foreground">
              Visit Our Head Office
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.731388647243!2d77.2407318150813!3d28.57781598244081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a880aaaaab%3A0x8a7395e87a201c9!2sL-73%2C%20Lajpat%20Nagar%20II%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024%2C%20India!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Contact;