import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Interested in collaborating on a data science project or have an
            opportunity to discuss? I'd love to hear from you.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 transition-opacity mb-12"
          >
            your.email@example.com
          </a>

          <div className="flex justify-center gap-6 text-muted-foreground">
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
                className="hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
