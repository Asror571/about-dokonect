import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-hero-foreground mb-6">
            Savdoni{' '}
            <span className="text-gradient-accent">real-time tizimga</span>{' '}
            o'tkazing
          </h2>
          <p className="text-hero-muted text-lg mb-10">
            Buyurtma, chat va delivery — hammasi bitta platformada. Agentlarsiz, murakkab CRM'siz, tez va nazorat qilinadigan tizim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-base flex items-center gap-2 hover:opacity-90 transition-all glow-accent"
            >
              Ro'yxatdan o'tish
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl bg-glass text-hero-foreground font-semibold text-base hover:bg-hero-muted/10 transition-all"
            >
              Demo ko'rish
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
