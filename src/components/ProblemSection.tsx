import { motion } from "framer-motion";
import { UserX, DollarSign, ShieldOff, Clock, BarChart3, PhoneOff } from "lucide-react";

const categories = [
  {
    title: "Distribyutor muammolari",
    problems: [
      { icon: UserX, text: "Mijoz (do‘kon) topish qiyin va qimmat" },
      { icon: DollarSign, text: "Agentlarga bog‘liqlik: ko‘p harajat, tez ketadi" },
      { icon: BarChart3, text: "Sotuvlar beqaror, oldindan prognoz qilish qiyin" },
      { icon: ShieldOff, text: "Buyurtmalarda xatoliklar ko‘p: noto‘g‘ri mahsulot/miqdor" },
      { icon: Clock, text: "Debitorlik (nasiya)ni kuzatish qiyin" },
      { icon: PhoneOff, text: "To‘lovlar kechikadi, cashflow muammo" },
      { icon: BarChart3, text: "Narx yangilanishi hamma klientlarga yetib bormaydi" },
      { icon: Clock, text: "Qaysi buyurtma qayerdaligi ko‘rinmaydi: tracking yo‘q" },
    ],
  },
  {
    title: "Do‘kon egasi muammolari",
    problems: [
      { icon: PhoneOff, text: "Bir nechta distribyutor bilan alohida-alohida gaplashishga majbur" },
      { icon: BarChart3, text: "Narxlarni solishtirish imkoni yo‘q" },
      { icon: ShieldOff, text: "Buyurtmada xatoliklar chiqadi" },
      { icon: DollarSign, text: "Nasiya (qarz) hisobini yuritish qiyin" },
      { icon: Clock, text: "Kimga qancha qarz borligi aniq emas" },
      { icon: PhoneOff, text: "Tez buyurtma berish imkoni yo‘q: time loss" },
      { icon: UserX, text: "Distribyutor bilan aloqa sekin" },
      { icon: ShieldOff, text: "Yetkazib berish vaqti noaniq" },
    ],
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Muammo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Qaysi muammolarni hal etmoqchisiz?
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="grid gap-4">
                {category.problems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-transparent bg-background/50 transition-all hover:border-destructive/20 hover:bg-background">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                      <item.icon size={18} />
                    </div>
                    <p className="text-sm leading-6 text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
