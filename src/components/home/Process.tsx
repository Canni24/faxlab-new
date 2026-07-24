import { motion } from "framer-motion";
import { process } from "@/data/team";

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral-light text-coral-foreground text-sm font-semibold">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Assess. Pilot. Scale.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center md:text-left bg-mist rounded-[1.75rem] p-7"
            >
              <div className="text-5xl font-extrabold text-primary/15 mb-2">{item.step}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
