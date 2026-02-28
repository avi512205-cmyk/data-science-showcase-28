import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "SQL & Databases", level: 88 },
  { name: "Data Visualization", level: 92 },
  { name: "NLP", level: 80 },
  { name: "Statistics", level: 90 },
  { name: "TensorFlow / PyTorch", level: 82 },
];

const tools = [
  "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn",
  "Spark", "Airflow", "Docker", "AWS", "Tableau", "Git", "Jupyter",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// skills"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-primary">Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="font-mono text-sm text-muted-foreground mb-4">
                Tools & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-md font-mono text-xs text-secondary-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
