import { motion, useMotionValue, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bbq.jpg";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const textX = useTransform(mouseX, [0, 1], [5, -5]);
  const textY = useTransform(mouseY, [0, 1], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Smoke particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 rounded-full animate-smoke-rise opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)",
            left: `${15 + i * 18}%`,
            bottom: "10%",
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base tracking-[0.3em] uppercase text-accent mb-4 sm:mb-6 font-body"
        >
          The Art of the Flame
        </motion.p>

        <motion.h1
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] uppercase tracking-[0.15em] font-light leading-none text-foreground"
        >
          TURKISH <span className="text-gradient-gold italic">B.B.Q</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto font-body"
        >
          Authentic Arabic & BBQ Flavors in the heart of Malappuram
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu" className="btn-ghost">View Menu</a>
          <a href="tel:+919645122786" className="btn-primary">Order Now</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-accent/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
