import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Muammo", href: "#problem" },
  { label: "Yechim", href: "#solution" },
  { label: "Qanday ishlaydi", href: "#how-it-works" },
  { label: "Imkoniyatlar", href: "#features" },
  { label: "Rollar", href: "#users" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-heading font-bold text-sm">D</span>
          </div>
          <span className="font-heading font-bold text-lg text-hero-foreground">Dokonect</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
            Kirish
          </a>
          <a
            href="#cta"
            className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Boshlash
          </a>
        </div>

        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-glass border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-hero-muted hover:text-hero-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Boshlash
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
