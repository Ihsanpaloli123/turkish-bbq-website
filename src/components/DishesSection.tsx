import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import dishMandi from "@/assets/dish-mandi.jpg";
import dishShawarma from "@/assets/dish-shawarma.jpg";
import dishGrilled from "@/assets/dish-grilled-chicken.jpg";
import dishPeri from "@/assets/dish-peri-peri.jpg";
import dishHoney from "@/assets/dish-honey-chilli.jpg";
import dishBbq from "@/assets/dish-bbq-specials.jpg";

const dishes = [
  { name: "Mandi", desc: "Tender meat slow-cooked with aromatic spiced rice", img: dishMandi },
  { name: "Shawarma", desc: "Juicy marinated meat wrapped in fresh flatbread", img: dishShawarma },
  { name: "Grilled Chicken", desc: "Whole chicken charred to perfection over open flame", img: dishGrilled },
  { name: "Peri-Peri Al Faham", desc: "Fiery peri-peri glazed chicken, smoky and bold", img: dishPeri },
  { name: "Honey Chilli Al Faham", desc: "Sweet honey meets fiery chilli in every bite", img: dishHoney },
  { name: "BBQ Specials", desc: "Mixed grill platter with our finest cuts", img: dishBbq },
];

const DishCard = ({ dish }: { dish: typeof dishes[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 260, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), { stiffness: 260, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const resetMouse = () => {
    x.set(0.5);
    y.set(0.5);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetMouse}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden cursor-pointer group relative"
    >
      {/* Glow on hover */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-500 pointer-events-none ${
          hovered ? "glow-gold opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="p-5 relative" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-display text-xl text-foreground font-medium">{dish.name}</h3>
        <p className="body-text text-xs mt-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          {dish.desc}
        </p>
      </div>
    </motion.div>
  );
};

const DishesSection = () => (
  <section id="menu" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">The Menu</p>
        <h2 className="heading-display text-foreground">
          Signature <span className="italic text-gradient-gold">Dishes</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
        {dishes.map((d) => (
          <DishCard key={d.name} dish={d} />
        ))}
      </div>
    </div>
  </section>
);

export default DishesSection;
