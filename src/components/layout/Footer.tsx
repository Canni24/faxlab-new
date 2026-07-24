import { Link } from "react-router-dom";
import { Mail, Youtube, Linkedin, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import faxlabLogo from "@/assets/faxlab-logo.png";
import { featuredProgram } from "@/data/team";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const courseCategories = [
    { name: "Basics", path: "/courses?category=Basics" },
    { name: "Advanced", path: "/courses?category=Advanced" },
    { name: "Ethics", path: "/courses?category=Ethics" },
    { name: "Career", path: "/courses?category=Career" },
  ];

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@faxlabai" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rishabhagarwaliimc" },
    { icon: Mail, label: "Email", href: "mailto:mail@faxlab.in" },
  ];

  return (
    <footer className="bg-footer-deep text-white relative overflow-hidden">
      {/* decorative glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src={faxlabLogo} alt="FaxLab AI" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-bold text-white">FaxLab AI</h3>
                <span className="text-[10px] text-white/50 tracking-wider uppercase">Future. AI. X-factor</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 max-w-xs">
              AI education, consulting, and innovation helping organisations
              and professionals put AI to work.
            </p>
            <p className="flex items-center gap-1.5 text-sm text-white/50">
              <MapPin className="h-3.5 w-3.5" />
              Vadodara, Gujarat, India
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground smooth-transition"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white smooth-transition inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 smooth-transition" />
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={featuredProgram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white smooth-transition inline-flex items-center gap-1 group"
                >
                  Win-Win Code
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 smooth-transition" />
                </a>
              </li>
            </ul>
          </div>

          {/* Course categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Explore Courses</h4>
            <ul className="space-y-2.5">
              {courseCategories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-white smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <p className="text-sm text-white/70">Get AI insights and course updates</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full focus-visible:ring-accent"
              />
              <Button size="icon" className="rounded-full shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">© 2026 FaxLab Technologies Private Limited. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white smooth-transition">Privacy Policy</a>
            <a href="#" className="hover:text-white smooth-transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
