import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Find Us</p>
        <h2 className="heading-display text-foreground">
          Our <span className="italic text-gradient-gold">Location</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden rounded-lg aspect-[4/3] lg:aspect-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8!2d76.08!3d11.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA0JzEyLjAiTiA3NsKwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Turkish BBQ Location"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col justify-center"
        >
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Address</h3>
              <p className="body-text text-sm leading-relaxed">
                Mb Hospital Bus Stop, Ferokh, NH-213<br />
                Palakkad–Kozhikode Highway<br />
                Varangode, Down Hill<br />
                Malappuram, Kerala 676505, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Phone</h3>
              <a href="tel:+919645122786" className="body-text text-sm hover:text-accent transition-colors">
                +91 96451 22786
              </a>
            </div>
          </div>

          <a href="tel:+919645122786" className="btn-primary text-center mt-8">
            Call to Reserve
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
