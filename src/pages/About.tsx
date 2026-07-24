import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamMemberCard from "@/components/about/TeamMemberCard";
import { founder, teamMembers } from "@/data/team";

const credentialAccents: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  coral: "bg-coral-light text-coral-foreground",
  gold: "bg-gold-light text-gold-foreground",
  sky: "bg-sky-light text-sky-foreground",
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              AI Education · Consulting · Innovation
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
              About <span className="text-primary">FaxLab AI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Putting AI to work, properly through honest strategy, hands-on
              training, and courses built for real careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center mb-12">
              Meet Our Founder
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-elevated hover-lift">
                  <img 
                    src={founder.image} 
                    alt="Rishabh Agarwal - Founder & CEO of FaxLab AI"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </motion.div>

              {/* Founder Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-3xl font-extrabold text-gradient mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    {founder.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {founder.credentials.map((c) => (
                    <span
                      key={c.label}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${credentialAccents[c.accent]}`}
                    >
                      {c.label}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-hover transition-colors font-medium"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={founder.bioLinksUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/70 transition-colors font-medium"
                  >
                    Bio Links
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">
              Meet the FaxLab Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals driving innovation and excellence at FaxLab AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedinUrl={member.linkedinUrl}
                bio={member.bio}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                FaxLab AI was born out of a simple observation: artificial intelligence is
                transforming every industry, yet most organisations are sold hype instead
                of a clear-eyed assessment of where it actually helps. Founded by Rishabh
                Agarwal — an engineer, IIM Calcutta alumnus, and author of four books with
                20 years in supply chain and strategy — FaxLab AI set out to close the gap
                between AI's promise and everyday practice.
              </p>
              <p>
                Today FaxLab AI works across three fronts: hands-on courses for individual
                learners, structured training and workshops for corporates and universities,
                and vendor-neutral consulting for organisations deciding where AI is genuinely
                worth the investment — and where it isn't.
              </p>
              <p>
                Rooted in Vadodara and built for Indian scale with global standards, every
                engagement — whether it's a self-paced course or an enterprise pilot — starts
                with the same promise: honest advice, practical skills, and capability that
                stays with you long after we leave.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Practitioner-led curriculum, not recycled slideware",
                  "No referral fees — only recommendations that work for you",
                  "Every engagement starts with a measurable definition of success",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary font-semibold">
                Join us on our mission to make AI adoption honest, practical, and human.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
