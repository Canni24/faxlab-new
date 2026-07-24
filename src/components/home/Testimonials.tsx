import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Amit Jain",
    role: "Managing Director, M&A & Value Creation IIM Lucknow alumnus",
    content:
      "I negotiate deals for a living, and I still walked away with new tools. Rishabh’s treatment of BATNA and leverage is sharper than most corporate workshops I’ve attended practical, structured, and grounded in real transactions.",
    rating: 5,
    
    avatar: "AJ",
  },
  {
    name: "Anshul Agrawal",
    role: "Banking & Credit Bureau Professional · Sydney, Australia",
    content:
      "Working in banking in Australia, I negotiate across cultures every week. This course changed how I prepare interests over positions, always. The salary negotiation module alone is worth the entire fee.",
    rating: 5,
    
    avatar: "AA",
  },
  {
    name: "Ashutosh Karan",
    role: "Senior Manager, Applied Data Science · MDI Gurgaon alumnus",
    content:
      "As a data science leader, I thought negotiation was a “soft skill” I could wing. Rishabh proved me wrong — he makes it a system. The real case studies from his own boardroom deals make every framework stick.",
    rating: 5,
  
    avatar: "AK",
  },
  {
    name: "Vikram Singh",
    role: "Data Scientist",
    content:
      "Best investment in my career! The TensorFlow course gave me the skills to lead AI projects at my company.",
    rating: 5,
    metric: "3x salary increase",
    avatar: "VS",
  },
  {
    name: "Ananya Patel",
    role: "Product Manager",
    content:
      "Understanding AI fundamentals helped me bridge the gap with my engineering team. Highly recommended!",
    rating: 5,
    metric: "Promoted to AI PM",
    avatar: "AP",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    content:
      "Built my AI startup after completing the Generative AI course. The ROI was incredible!",
    rating: 5,
    
    avatar: "RM",
  },
];

const ACCENTS = ["bg-coral", "bg-gold", "bg-sky", "bg-primary", "bg-coral", "bg-sky"];

// Percentage-based orbit positions around the central card (desktop only)
const ORBIT_POSITIONS = [
  { top: "2%", left: "10%" },
  { top: "8%", left: "78%" },
  { top: "45%", left: "0%" },
  { top: "45%", left: "92%" },
  { top: "82%", left: "14%" },
  { top: "86%", left: "74%" },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="py-20 md:py-28 bg-mist relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            What Our Learners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who transformed their careers with FaxLab AI.
          </p>
        </motion.div>

        {/* Desktop orbit layout */}
        <div className="relative hidden lg:block h-[520px] max-w-3xl mx-auto mt-6">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.avatar}
              onClick={() => setActive(i)}
              style={{ top: ORBIT_POSITIONS[i].top, left: ORBIT_POSITIONS[i].left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <Avatar
                className={`h-16 w-16 border-4 smooth-transition ${
                  active === i ? "border-primary shadow-elevated scale-110" : "border-white/80 shadow-soft opacity-80"
                }`}
              >
                <AvatarFallback className={`${ACCENTS[i]} text-white font-semibold`}>
                  {t.avatar}
                </AvatarFallback>
              </Avatar>
            </motion.button>
          ))}

          <div className="absolute inset-0 flex items-center justify-center px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-[2rem] shadow-elevated p-10 max-w-md text-center relative z-20"
              >
                <Quote className="h-9 w-9 text-primary/30 mx-auto" />
                <div className="flex justify-center gap-1 my-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">"{current.content}"</p>
                <div className="mt-6 font-bold text-foreground">{current.name}</div>
                <div className="text-sm text-muted-foreground">{current.role}</div>
                <div className="text-xs text-primary font-semibold mt-2">✨ {current.metric}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet: simple stacked card + selector row */}
        <div className="lg:hidden mt-6 max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] shadow-elevated p-8 text-center"
            >
              <Quote className="h-8 w-8 text-primary/30 mx-auto" />
              <div className="flex justify-center gap-1 my-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">"{current.content}"</p>
              <div className="mt-5 font-bold text-foreground">{current.name}</div>
              <div className="text-sm text-muted-foreground">{current.role}</div>
              <div className="text-xs text-primary font-semibold mt-2">✨ {current.metric}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {testimonials.map((t, i) => (
              <button key={t.avatar} onClick={() => setActive(i)}>
                <Avatar
                  className={`h-11 w-11 border-2 smooth-transition ${
                    active === i ? "border-primary scale-110" : "border-white/60 opacity-70"
                  }`}
                >
                  <AvatarFallback className={`${ACCENTS[i]} text-white text-xs font-semibold`}>
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white shadow-soft rounded-full">
            <span className="text-primary font-semibold">#1 New Release in AI Learning</span>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
