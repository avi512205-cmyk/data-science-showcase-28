import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Animated accent blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-72 h-72 bg-primary/[0.07] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-60 h-60 bg-accent/[0.07] rounded-full blur-3xl"
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-center">
          
          {/* Left content — spans 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="font-mono text-xs text-primary">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Your
              <br />
              <span className="text-primary text-glow">Name</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="font-mono text-lg text-muted-foreground h-7"
            >
              <span className="text-secondary-foreground">{text}</span>
              <span className="text-primary animate-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-muted-foreground max-w-md leading-relaxed"
            >
              Turning raw data into actionable insights. I build predictive
              models, craft visualizations, and uncover hidden patterns.
            </motion.p>

            {/* CTA + Socials row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
              >
                Contact Me
              </a>

              <div className="hidden sm:block w-px h-8 bg-border mx-1" />

              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right bento — spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Profile image — full width top */}
              <div className="col-span-2 relative group">
                <div className="rounded-2xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur-sm p-2">
                  <div className="rounded-xl overflow-hidden aspect-[16/10] relative">
                    <img
                      src={profileImg}
                      alt="Profile photo"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-mono text-xs text-primary/80">data_scientist.py</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat card 1 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-4 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Experience</span>
                <div>
                  <span className="text-3xl font-bold text-primary font-mono">5+</span>
                  <span className="text-xs text-muted-foreground ml-1">years</span>
                </div>
              </motion.div>

              {/* Stat card 2 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-4 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Projects</span>
                <div>
                  <span className="text-3xl font-bold text-primary font-mono">50+</span>
                  <span className="text-xs text-muted-foreground ml-1">shipped</span>
                </div>
              </motion.div>

              {/* Tech strip */}
              <div className="col-span-2 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-3 overflow-hidden">
                <div className="flex gap-2 overflow-hidden">
                  {["Python", "TensorFlow", "PyTorch", "SQL", "Spark", "AWS"].map((t) => (
                    <span
                      key={t}
                      className="flex-shrink-0 px-2.5 py-1 rounded-md bg-secondary/60 border border-border/40 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
