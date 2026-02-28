import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "ML Models Deployed" },
    { value: "10M+", label: "Data Points Processed" },
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
                I'm a Data Scientist passionate about leveraging machine learning
                and statistical analysis to solve real-world problems. With a
                strong foundation in mathematics and computer science, I
                specialize in building end-to-end data pipelines and predictive
                models.
              </p>
              <p>
                My work spans across NLP, computer vision, time series
                forecasting, and recommendation systems. I believe in
                data-driven decision making and communicating complex findings
                through clear, compelling visualizations.
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
