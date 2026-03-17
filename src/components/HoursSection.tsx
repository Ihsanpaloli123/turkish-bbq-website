import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const HoursSection = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  // IST offset
  const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const currentDay = ist.getDay();
  const currentHour = ist.getHours();
  const isOpen = currentHour >= 12 && currentHour < 23;

  return (
    <section id="hours" className="section-padding">
      <div className="container mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Visit Us</p>
          <h2 className="heading-display text-foreground">
            Opening <span className="italic text-gradient-gold">Hours</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8"
        >
          {/* Status badge */}
          <div className="flex justify-center mb-6">
            {isOpen ? (
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open Now
              </span>
            ) : (
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-red-900/40 text-red-400 border border-red-500/30">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Closed
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-foreground font-body tabular-nums text-sm">
              {ist.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}
            </span>
          </div>

          <div className="space-y-3">
            {days.map((day, i) => (
              <div
                key={day}
                className={`flex justify-between items-center py-2 px-3 rounded-md text-sm ${
                  i === currentDay
                    ? "bg-primary/10 border border-primary/20"
                    : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {i === currentDay && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                  <span className={i === currentDay ? "text-foreground font-medium" : "text-muted-foreground"}>
                    {day}
                  </span>
                </span>
                <span className={`tabular-nums ${i === currentDay ? "text-foreground" : "text-muted-foreground"}`}>
                  12:00 PM – 11:00 PM
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoursSection;
