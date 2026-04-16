import { motion } from "framer-motion";
import { Store, Truck, Car } from "lucide-react";

const solutions = [
  {
    icon: Store,
    title: "Do'kon egasi",
    desc: "Katalogdan tanlaydi, 1 click buyurtma, chat va live tracking",
  },
  {
    icon: Truck,
    title: "Distributor",
    desc: "Mahsulot, buyurtma, delivery, analytics — hammasi bitta panelda",
  },
  {
    icon: Car,
    title: "Driver",
    desc: "Buyurtma oladi, navigatsiya, status yangilaydi, tez yetkazadi",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Yechim</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-hero-foreground mt-3">
            Dokonect nima?
          </h2>
          <p className="text-hero-muted mt-4 max-w-xl mx-auto text-lg">
            Dokonect distribyutor va do‘konlarni bitta platformada bog‘lab, mahsulot qidirish, narx solishtirish, buyurtma berish, nasiya va yetkazib berishni real-time avtomatlashtiradi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-glass rounded-2xl p-8 text-center hover:glow-accent transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-hero-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
