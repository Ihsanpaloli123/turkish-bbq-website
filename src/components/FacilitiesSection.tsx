import { motion } from "framer-motion";
import { Users, Sparkles, ConciergeBell, CalendarCheck, Baby, CreditCard, Smartphone, Car, ParkingCircle } from "lucide-react";

const facilities = [
  { icon: Users, label: "Family Friendly" },
  { icon: Sparkles, label: "Casual Trendy Atmosphere" },
  { icon: ConciergeBell, label: "Table Service" },
  { icon: CalendarCheck, label: "Accepts Reservations" },
  { icon: Baby, label: "Good for Kids" },
];

const payments = [
  { icon: CreditCard, label: "Credit Cards" },
  { icon: CreditCard, label: "Debit Cards" },
  { icon: Smartphone, label: "NFC Mobile Payments" },
];

const parking = [
  { icon: ParkingCircle, label: "Free Parking Lot" },
  { icon: Car, label: "Free Street Parking" },
  { icon: ParkingCircle, label: "General Parking" },
];

const IconGrid = ({ title: t, subtitle: s, items }: { title: string; subtitle: string; items: { icon: React.ElementType; label: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">{s}</p>
    <h2 className="heading-section text-foreground mb-8">
      {t.split(" ").slice(0, -1).join(" ")}{" "}
      <span className="italic text-gradient-gold">{t.split(" ").slice(-1)}</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-4 group cursor-default"
        >
          <item.icon className="w-6 h-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-foreground text-sm">{item.label}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const FacilitiesSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto max-w-5xl space-y-16">
      <IconGrid title="Our Facilities" subtitle="Amenities" items={facilities} />
      <IconGrid title="Payment Methods" subtitle="We Accept" items={payments} />
      <IconGrid title="Available Parking" subtitle="Convenience" items={parking} />
    </div>
  </section>
);

export default FacilitiesSection;
