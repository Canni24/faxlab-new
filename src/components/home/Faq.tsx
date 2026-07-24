import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. Every course is self-paced with lifetime access, so you can start, pause, and pick up right where you left off — whenever it works for you.",
  },
  {
    question: "Are there any free courses?",
    answer:
      "Yes — we offer free courses to help you get started, and you can jump straight to them from the \"Get Started Free\" button on the homepage.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We currently accept all major credit and debit cards through our secure, encrypted checkout.",
  },
  {
    question: "Do you offer live sessions with instructors?",
    answer:
      "Premium learners get access to monthly live Q&A sessions with AI experts, on top of the full self-paced video library.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
              Frequently Asked Questions
            </h2>
            <svg width="90" height="20" viewBox="0 0 90 20" fill="none" className="my-4 text-primary" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14C10 4 18 4 26 10C34 16 42 16 50 8C58 0 66 2 74 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M68 6L76 10L70 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Reach out and our team will help.
            </p>
          </motion.div>

          <div className="space-y-4">
            {/* Featured, always-open first answer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[1.75rem] bg-gradient-to-br from-primary to-accent p-7 text-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5" />
                    <h3 className="font-bold text-lg">
                      Do I get a certificate after completing a course?
                    </h3>
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Yes! Every course includes a certificate of completion, downloadable
                    right from your dashboard once you finish all the modules.
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 bg-card"
                  >
                    <AccordionTrigger className="hover:no-underline font-semibold text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
