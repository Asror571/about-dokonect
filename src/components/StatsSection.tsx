import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Do'konlar ulandi" },
  { value: "50+", label: "Distributorlar" },
  { value: "10K+", label: "Buyurtmalar" },
  { value: "⚡", label: "Real-time delivery" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/3" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-heading font-bold text-gradient-accent mb-2">
                {stat.value}
              </div>
              <p className="text-hero-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
