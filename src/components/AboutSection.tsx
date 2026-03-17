import { motion } from "framer-motion";
import { Flame, Star, Users } from "lucide-react";

const highlights = [
  { icon: Flame, label: "Famous Grilled Dishes" },
  { icon: Star, label: "Authentic Middle Eastern Cuisine" },
  { icon: Users, label: "Friendly Family Environment" },
];

const AboutSection = () => (
  <section id="about" className="section-padding" style={{ background: "var(--gradient-section)" }}>
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Our Story</p>
        <h2 className="heading-display text-foreground">
          A Legacy of <span className="italic text-gradient-gold">Flavour</span>
        </h2>
        <p className="body-text mt-6 max-w-2xl mx-auto">
          TURKISH B.B.Q is a popular Arabic and BBQ restaurant located in Varangode, Malappuram, 
          known for authentic Middle Eastern flavors and grilled dishes. With over 882 ratings 
          and 216+ reviews, we've built a reputation for excellence.
        </p>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center items-center gap-2 mt-8"
      >
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < 4 ? "fill-accent text-accent" : "fill-accent/40 text-accent/40"}
            />
          ))}
        </div>
        <span className="text-foreground font-display text-xl ml-2">4.2</span>
        <span className="text-muted-foreground text-sm">/ 5</span>
        <span className="text-muted-foreground text-sm ml-2">· 882 ratings</span>
      </motion.div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="glass-card glass-card-hover p-6 text-center group cursor-default"
          >
            <h.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-foreground text-sm font-medium">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
