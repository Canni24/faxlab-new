import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    title: "Real AI Work From Day One",
    description:
      "No shadow projects. You'll work on live client engagements, courses, and our YouTube content.",
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Learn From Practitioners",
    description:
      "Direct mentorship from a founder with 20 years of industry and strategy experience.",
    accent: "bg-coral-light text-coral-foreground",
  },
  {
    title: "Certificate & Recommendation",
    description:
      "Every intern who ships good work leaves with a verifiable certificate and an honest recommendation.",
    accent: "bg-gold-light text-gold-foreground",
  },
  {
    title: "Remote-Friendly",
    description:
      "Work from anywhere in India. What matters is the output, not the pin code.",
    accent: "bg-sky-light text-sky-foreground",
  },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    applyingFor: "",
    education: "",
    college: "",
    linkedin: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Application received!",
        description: "We read every application personally shortlisted candidates hear back within a week.",
      });
      setFormData({ fullName: "", email: "", applyingFor: "", education: "", college: "", linkedin: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-light text-coral-foreground text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              Careers & Internships
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
              Build the Future of <span className="text-primary">AI Education</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a small, serious team in a fast-moving field. If you want real
              responsibility, real mentorship, and work you can point to apply below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="p-7 hover-lift border-0 shadow-soft h-full rounded-[1.75rem]">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${benefit.accent}`}>
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-0 shadow-soft rounded-[2rem]">
                <h2 className="text-2xl font-bold mb-2 text-gradient">Tell Us Who You Are</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  A few minutes, one form. We read every application personally and reply
                  to shortlisted candidates within a week.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label>Applying For</Label>
                      <Select
                        value={formData.applyingFor}
                        onValueChange={(v) => setFormData({ ...formData, applyingFor: v })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Education</Label>
                      <Select
                        value={formData.education}
                        onValueChange={(v) => setFormData({ ...formData, education: v })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="Graduate">Graduate</SelectItem>
                          <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="college">College / University</Label>
                    <Input
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. IIM Calcutta"
                    />
                  </div>

                  <div>
                    <Label htmlFor="linkedin">
                      LinkedIn URL <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://www.linkedin.com/in/yourname"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Anything else we should know? <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Projects, achievements, why FaxLab AI..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
