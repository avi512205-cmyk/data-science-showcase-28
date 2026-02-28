import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "🎓", label: "CS Graduate" },
    { value: "🔬", label: "ML Enthusiast" },
    { value: "📊", label: "Data Explorer" },
    { value: "🚀", label: "Quick Learner" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// about"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an aspiring Data Scientist with a strong foundation in
                mathematics, statistics, and programming. I'm passionate about
                machine learning and enjoy building projects that turn data into
                actionable insights.
              </p>
              <p>
                I've explored NLP, computer vision, and data visualization
                through academic projects and self-learning. I believe in
                continuous growth, hands-on experimentation, and communicating
                findings through clear, compelling stories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card border border-border rounded-lg p-5 text-center border-glow"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
