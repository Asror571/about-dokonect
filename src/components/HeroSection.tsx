import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-hero-muted">Smart B2B Marketplace</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-hero-foreground leading-tight mb-6"
          >
            Buyurtma, chat va delivery —{' '}
            <span className="text-gradient-accent">bitta platformada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-hero-muted max-w-2xl mx-auto mb-10"
          >
            Dokonect — distributor va do'konlarni real-time bog'laydigan, buyurtma, chat va delivery tizimi birlashtirilgan smart B2B marketplace platforma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-base flex items-center gap-2 hover:opacity-90 transition-all glow-accent"
            >
              Boshlash
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-xl bg-glass text-hero-foreground font-semibold text-base flex items-center gap-2 hover:bg-hero-muted/10 transition-all"
            >
              <Play size={18} />
              Demo ko'rish
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-hero-muted/10 shadow-2xl shadow-accent/5">
            <img
              src={dashboardMockup}
              alt="Dokonect dashboard — buyurtmalar, chat va delivery tizimi"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
