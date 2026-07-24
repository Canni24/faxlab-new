import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Making AI adoption honest, practical, and human.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Most organisations don't need more AI hype. They need a clear-eyed
            assessment of where AI creates value, the skills to use it well, and
            a partner who tells them the truth including when AI is the wrong tool.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            FaxLab AI was founded to close the gap between AI's promise and
            everyday practice. We teach, advise, and build alongside our clients
            and learners, so the capability stays with them long after we leave.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
