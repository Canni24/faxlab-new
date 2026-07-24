import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// New blended canvas image imports
import aiCanvasImage from "@/assets/Untitled design32 (1).png";
import educationCanvasImage from "@/assets/Untitled design12 (1).png";

const ROTATING_WORDS = ["Properly.", "Strategically.", "Seamlessly.", "Effectively."];

const TRUSTED_BY = [
  { initials: "PS", accent: "bg-coral" },
  { initials: "AK", accent: "bg-gold" },
  { initials: "NR", accent: "bg-sky" },
  { initials: "VS", accent: "bg-primary" },
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = ROTATING_WORDS[wordIndex];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 200 : 2000;

    if (!isDeleting && displayText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <section className="relative overflow-hidden bg-mist pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative dots */}
      <div className="absolute top-24 left-6 md:left-16 w-3 h-3 rounded-full bg-primary/60" />
      <div className="absolute top-1/2 right-8 md:right-20 w-4 h-4 rounded-full bg-sky/70" />
      <div className="absolute bottom-10 left-1/3 w-2.5 h-2.5 rounded-full bg-coral/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              AI Education • Consulting • Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-foreground"
            >
              Put AI to work.{" "}
              <span className="text-primary inline-block min-w-[180px] sm:min-w-[260px] text-left">
                {displayText}
                <span className="animate-pulse text-coral">|</span>
              </span>{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg"
            >
              FaxLab AI partners with enterprises, universities, and professionals to turn artificial intelligence from a buzzword into measurable capability through strategy, training, and hands-on innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex -space-x-3">
                {TRUSTED_BY.map((person) => (
                  <Avatar key={person.initials} className="h-9 w-9 border-2 border-background">
                    <AvatarFallback className={`${person.accent} text-white text-xs font-semibold`}>
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Learners</span> are growing with us
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="xl" variant="coral" className="w-full sm:w-auto group">
                  Book a Consultation
                  <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </Link>
              <Link to="/courses" className="w-full sm:w-auto">
                <Button size="xl" variant="outline" className="w-full sm:w-auto group">
                  Explore Courses
                  <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Blended Canvas - Overlapping Diagonal Placement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block h-[640px] w-full"
          >
            {/* Decorative blobs behind canvas */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/15 rounded-[40%_60%_65%_35%/45%_40%_60%_55%] animate-blob blur-3xl z-0" />
            <div className="absolute bottom-20 right-4 w-80 h-80 bg-sky/20 rounded-[60%_40%_35%_65%/55%_60%_40%_45%] animate-blob blur-3xl z-0" />

            {/* Positioned illustrative assets - Animated and Shifted Left */}
            <motion.img
              src={aiCanvasImage}
              alt="Blended AI head illustration"
              className="absolute -top-4 -left-20 w-[85%] max-w-[650px] object-contain drop-shadow-xl z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.img
              src={educationCanvasImage}
              alt="Blended education book stack illustration"
              className="absolute -bottom-8 -right-8 w-[90%] max-w-[700px] object-contain drop-shadow-2xl z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Added blended web design elements */}
            <motion.div
              className="absolute top-[80px] right-[5%] flex items-center gap-1 text-primary/40 z-0"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute top-[45%] left-[5%] w-24 h-[3px] bg-sky-light/60 rounded-full rotate-45 z-30"
            />

            <motion.div
              className="absolute bottom-[35%] right-[35%] w-4 h-4 rounded-[4px] bg-coral/40 z-0 rotate-12"
            />

            {/* Floating stat card - Brought forward and centered */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-elevated px-6 py-4 flex items-center gap-3 z-30 border border-mist-dark"
            >
              <div className="flex items-center gap-1 text-gold">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <div className="text-sm">
                <span className="font-bold text-foreground">4.8/5</span>
                <span className="text-muted-foreground"> avg. course rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;