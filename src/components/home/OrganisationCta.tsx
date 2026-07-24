import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganisationCta = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-violet-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to make AI real for your organisation?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            A conversation costs nothing. Tell us your goals and we'll tell you
            candidly how we can help.
          </p>
          <Button
            size="xl"
            className="mt-8 bg-coral text-coral-foreground hover:bg-coral/90 hover:-translate-y-0.5"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganisationCta;
