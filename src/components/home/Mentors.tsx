import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/team";
import founderImage from "@/assets/founder-rishabh.jpg";

const accentBg: Record<string, string> = {
  coral: "bg-coral-light",
  gold: "bg-gold-light",
  sky: "bg-sky-light",
  primary: "bg-primary/10",
};
// Define the founder object
const founder = {
  name: "Rishabh Agarwal",
  role: "Founder & CEO",
  image: founderImage,
  accent: "primary",
  linkedinUrl: "https://www.linkedin.com/in/rishabhagarwaliimc",
};

// Add the founder to the very beginning of the featured array
const featured = [founder, ...teamMembers.slice(0,3)]


const Mentors = () => {
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            The People Behind FaxLab AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the leadership team building the courses, community, and curriculum.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className={`relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-[2rem] ${accentBg[member.accent]} flex items-center justify-center mb-4`}>
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at FaxLab AI`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-[1.6rem] object-cover shadow-soft group-hover:shadow-elevated smooth-transition"
                />
              </div>
              <h3 className="font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 smooth-transition"
          >
            See Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentors;
