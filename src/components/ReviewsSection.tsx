import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { text: "Amazing BBQ and grilled dishes! The shawarma is the best I've had in Malappuram.", author: "Ahmed K.", rating: 5 },
  { text: "Great shawarma and kebabs. The flavors are truly authentic Middle Eastern.", author: "Priya M.", rating: 4 },
  { text: "Perfect for family and group dining. The mandi is outstanding!", author: "Rashid N.", rating: 5 },
  { text: "Wonderful variety of international flavors. Love the Peri-Peri Al Faham.", author: "Sarah J.", rating: 4 },
  { text: "The Honey Chilli Al Faham is addictive! Great ambiance too.", author: "Faisal R.", rating: 5 },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="reviews" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Testimonials</p>
          <h2 className="heading-display text-foreground">
            What Our <span className="italic text-gradient-gold">Guests</span> Say
          </h2>
        </motion.div>

        <div className="relative glass-card p-8 sm:p-12 min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < reviews[current].rating ? "fill-accent text-accent" : "text-muted"}
                  />
                ))}
              </div>
              <blockquote className="font-display text-xl sm:text-2xl text-foreground font-light italic leading-relaxed">
                "{reviews[current].text}"
              </blockquote>
              <p className="mt-4 text-sm text-accent font-body tracking-wide">
                — {reviews[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="p-2 glass-card glass-card-hover rounded-full" aria-label="Previous review">
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex gap-1.5 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-4" : "bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 glass-card glass-card-hover rounded-full" aria-label="Next review">
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
