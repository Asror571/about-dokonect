import { motion } from "framer-motion";
import { Upload, Search, MousePointerClick, Truck, CheckCircle2, CreditCard } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "Distributor mahsulot yuklaydi", desc: "Katalogga mahsulotlar qo'shiladi" },
  { icon: Search, num: "02", title: "Do'kon egasi tanlaydi", desc: "Katalogdan kerakli mahsulotni topadi" },
  { icon: MousePointerClick, num: "03", title: "1 click buyurtma", desc: "Buyurtma tezkor yuboriladi" },
  { icon: Truck, num: "04", title: "Driverga beriladi", desc: "Distributor buyurtmani driverga biriktiradi" },
  { icon: CheckCircle2, num: "05", title: "Do'konga yetkaziladi", desc: "Driver real-time tracking bilan yetkazadi" },
  { icon: CreditCard, num: "06", title: "To'lov amalga oshadi", desc: "Online yoki nasiya orqali yopiladi" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Jarayon</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Qanday ishlaydi?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-6">
                <step.icon size={24} className="text-accent" />
              </div>
              <span className="text-xs font-bold text-accent mb-2 block">{step.num}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
