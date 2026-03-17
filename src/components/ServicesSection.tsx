import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Truck, Shield, Car, CircleDot } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, label: "Dine-in" },
  { icon: ShoppingBag, label: "Takeaway" },
  { icon: Truck, label: "Delivery" },
  { icon: Shield, label: "No-contact Delivery" },
  { icon: CircleDot, label: "Kerbside Pickup" },
  { icon: Car, label: "Drive-through" },
];

const ServicesSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">How We Serve</p>
        <h2 className="heading-display text-foreground">
          Service <span className="italic text-gradient-gold">Options</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card glass-card-hover p-6 text-center group cursor-default"
          >
            <s.icon className="w-7 h-7 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-foreground text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
