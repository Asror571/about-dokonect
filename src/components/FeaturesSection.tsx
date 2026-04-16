import { motion } from "framer-motion";
import { Package, MessageCircle, MapPin, FileText, TrendingUp, CreditCard } from "lucide-react";

const features = [
  { icon: Package, title: "Smart katalog tizimi", desc: "Barcha mahsulotlar bitta joyda, tez qidiruv va 1 click buyurtma" },
  { icon: MessageCircle, title: "Real-time chat", desc: "Do'kon va distributor o'rtasida bevosita chat, fayl va invoice yuborish" },
  { icon: MapPin, title: "Live delivery tracking", desc: "Buyurtma qayerdaligini real-time kuzating, driver navigatsiyasi" },
  { icon: FileText, title: "Nasiya savdo nazorati", desc: "Qarzdorlik avtomatik hisoblanadi, to'lov kuzatuvi" },
  { icon: TrendingUp, title: "Real-time analytics", desc: "Savdo, daromad va o'sishni jonli kuzating" },
  { icon: CreditCard, title: "Online to'lov", desc: "Payme, Click, Uzum orqali to'lov qabul qilish" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Imkoniyatlar</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-hero-foreground mt-3">
            Kuchli funksiyalar
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-glass rounded-2xl p-8 hover:glow-accent transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-hero-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
