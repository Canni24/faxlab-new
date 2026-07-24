import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Clock, Layers } from "lucide-react";
import { featuredProgram } from "@/data/team";

const FeaturedProgram = () => {
  return (
    <section className="py-14 md:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-primary to-accent px-8 py-14 md:px-16 md:py-16 grid md:grid-cols-[1.15fr_1fr] gap-10 items-center"
        >
          {/* decorative glow */}
          <div className="hidden md:block absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="hidden md:block absolute -right-6 bottom-0 w-56 h-56 rounded-full bg-gold/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold mb-3">
              Featured Program
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {featuredProgram.title}
            </h2>
            <p className="mt-1 text-white/70 text-lg font-medium">{featuredProgram.subtitle}</p>
            <p className="mt-4 text-white/85 max-w-lg mx-auto md:mx-0">
              Taught by {featuredProgram.instructor} — the psychology and frameworks
              behind winning negotiations, built for real business scenarios.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 text-white/80 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-4 w-4" /> {featuredProgram.modules} modules
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {featuredProgram.hours} hours
              </span>
            </div>

            <Button
              size="xl"
              className="mt-8 bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5"
              onClick={() => window.open(featuredProgram.url, "_blank", "noopener,noreferrer")}
            >
              Go to the Course
              <ArrowUpRight className="ml-1 h-5 w-5" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 bg-white/10 backdrop-blur rounded-[2rem] p-6 border border-white/20"
          >
            <ul className="space-y-4">
              {featuredProgram.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-gold" />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProgram;
