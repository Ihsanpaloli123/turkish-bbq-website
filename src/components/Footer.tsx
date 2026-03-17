import { MapPin, Phone , MessageCircle ,Mail ,Instagram} from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl text-foreground tracking-[0.1em] mb-3">
            TURKISH <span className="text-gradient-gold">B.B.Q</span>
          </h3>
          <p className="body-text text-xs">
            Authentic Arabic & BBQ Flavors in the heart of Malappuram.
          </p>
        </div>
        <div>
          <h4 className="text-foreground text-sm font-medium mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["#menu", "#hours", "#reviews", "#location"].map((h) => (
              <a key={h} href={h} className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                {h.replace("#", "").charAt(0).toUpperCase() + h.slice(2)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-foreground text-sm font-medium mb-3">Contact</h4>
          <div className="flex items-start gap-2 mb-2">
            <Phone size={14} className="text-accent mt-0.5" />
            <a href="tel:+919645122786" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              +91 96451 22786
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
          <Mail size={14} className="text-accent" />
          <a href="mailto:turkishbbq1mail@gmail.com" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
            turkishbbq1@gmail.com
          </a>
        </div>
          <div className="flex items-center gap-2 mb-2">
          <MessageCircle size={14} className="text-accent mt-0.5" />
            <a href="https://wa.me/919645122786" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              +91 96451 22786
            </a>
            </div>
            <div className="flex items-center gap-2 mb-2">
          <Instagram size={14} className="text-accent" />
          <a href="https://instagram.com/turkish_bbq" target="_blank" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
            @turkish_bbq
          </a>
        </div>
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-xs">
              Varangode, Malappuram, Kerala
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Turkish B.B.Q. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
