import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Send, BarChart3, BrainCircuit, Database } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:your.email@example.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — Attract / Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold leading-snug">
                Let's turn your <span className="text-primary text-glow">data</span> into
                <br />
                your competitive advantage.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Whether you need a predictive model, a data pipeline, or
                actionable insights from messy datasets — I'm here to help.
                Let's collaborate and build something impactful.
              </p>

              {/* Value props */}
              <div className="space-y-4 pt-2">
                {[
                  { icon: BrainCircuit, text: "Custom ML models tailored to your business" },
                  { icon: BarChart3, text: "Clear visualizations that tell the story" },
                  { icon: Database, text: "Scalable data pipelines & architecture" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-secondary-foreground">{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex gap-4 pt-4 text-muted-foreground">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 space-y-5 border-glow"
            >
              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-mono text-sm py-2.5 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="w-3.5 h-3.5" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
