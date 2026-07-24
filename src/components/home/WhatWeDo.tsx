import { motion } from "framer-motion";
import { Compass, BookOpen, Sparkles, LayoutGrid } from "lucide-react";
import { Card } from "@/components/ui/card";
import { services } from "@/data/team";

const icons = [Compass, BookOpen, Sparkles, LayoutGrid];

const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 bg-mist">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Four ways we help you move.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="p-7 hover-lift border-0 shadow-soft h-full rounded-[1.75rem] bg-card">
                  <div className="w-11 h-11 rounded-xl bg-coral-light text-coral-foreground flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
