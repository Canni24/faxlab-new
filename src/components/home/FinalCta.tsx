import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCta = () => {
  return (
    <section className="px-4 lg:px-8 pb-20 md:pb-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-primary/5 border border-primary/10 px-8 py-12 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          {/* decorative sunburst */}
          <svg
            className="absolute -left-6 -top-6 w-32 h-32 text-gold/50 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2="50"
                y2="6"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </svg>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Start Your Learning Journey Today
            </h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-lg">
              Pick a course, learn at your own pace, and take the next step in your AI career.
            </p>
          </div>

          <Link to="/courses" className="relative z-10 shrink-0">
            <Button size="xl" className="group">
              Explore Courses
              <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
