import { motion } from "framer-motion";
import { Store, Truck, Car, Check } from "lucide-react";

const roles = [
  {
    icon: Store,
    title: "Do'kon egasi",
    color: "text-accent",
    bgColor: "bg-accent/10",
    benefits: [
      "1 click buyurtma beradi",
      "Narxlarni solishtiradi",
      "Distributor bilan chat qiladi",
      "Yetkazib berishni live kuzatadi",
      "Online to'lov qiladi",
    ],
  },
  {
    icon: Truck,
    title: "Distributor",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    benefits: [
      "Mahsulot va katalog boshqaradi",
      "Buyurtmalarni qabul qiladi",
      "Driverlarga buyurtma biriktiradi",
      "Savdo analytics ko'radi",
      "To'lov va nasiya nazorati",
    ],
  },
  {
    icon: Car,
    title: "Driver",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    benefits: [
      "Buyurtma oladi (assigned)",
      "Google Maps navigatsiya",
      "Status real-time yangilaydi",
      "Yetkazish statistikasi",
      "Distributor bilan aloqa",
    ],
  },
];

const UserRolesSection = () => {
  return (
    <section id="users" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Foydalanuvchilar</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Har bir rol uchun foydalar
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Admin panel yo'q — barcha boshqaruv Distributor panelida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${role.bgColor} flex items-center justify-center mb-6`}>
                <role.icon size={26} className={role.color} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">{role.title}</h3>
              <ul className="space-y-3">
                {role.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-muted-foreground">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRolesSection;
