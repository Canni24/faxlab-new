import { motion } from "framer-motion";
import { Users, ShieldCheck, Target, MapPin } from "lucide-react";
import { whyFaxLab } from "@/data/team";

const icons = [Users, ShieldCheck, Target, MapPin];
const accentClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  coral: "bg-coral-light text-coral-foreground",
  gold: "bg-gold-light text-gold-foreground",
  sky: "bg-sky-light text-sky-foreground",
};

const TrustBar = () => {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Why FaxLab AI
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            A partner, not a pitch.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFaxLab.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-[1.75rem] p-7 shadow-soft hover-lift"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${accentClasses[item.accent]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
