import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Python Developer",
  "Analytics Expert",
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

      <div className="container relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary mb-4 text-sm tracking-widest uppercase"
        >
          {">"} Hello, World
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          I'm{" "}
          <span className="text-primary text-glow">Your Name</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 h-8"
        >
          <span className="text-secondary-foreground">{text}</span>
          <span className="text-primary animate-blink">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Turning raw data into actionable insights. I build predictive models,
          craft visualizations, and uncover patterns hidden in complex datasets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center"
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
