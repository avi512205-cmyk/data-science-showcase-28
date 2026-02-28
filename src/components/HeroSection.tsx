import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Python Developer",
  "Analytics Expert",
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  { icon: FileText, href: "#", label: "Resume" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid bg-gradient-radial overflow-hidden">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * -300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          style={{
            left: `${20 + i * 12}%`,
            top: `${60 + Math.random() * 20}%`,
          }}
        />
      ))}

      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-md" />
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-primary/30 overflow-hidden border-glow">
                <img
                  src={profileImg}
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-primary mb-3 text-sm tracking-widest uppercase"
            >
              {">"} Hello, World
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            >
              I'm <span className="text-primary text-glow">Your Name</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-lg md:text-xl text-muted-foreground mb-5 h-7"
            >
              <span className="text-secondary-foreground">{text}</span>
              <span className="text-primary animate-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg mb-7 leading-relaxed text-sm"
            >
              Turning raw data into actionable insights. I build predictive models,
              craft visualizations, and uncover patterns hidden in complex datasets.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 mb-7 justify-center md:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary/30 text-primary font-mono text-sm rounded-md hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
