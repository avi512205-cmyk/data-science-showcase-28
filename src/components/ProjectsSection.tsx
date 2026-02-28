import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Predictor",
    description:
      "Built an XGBoost model to predict customer churn with 94% accuracy. Implemented feature engineering pipeline processing 2M+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned BERT model for multi-class sentiment analysis on product reviews. Deployed as REST API with FastAPI.",
    tags: ["PyTorch", "Transformers", "FastAPI", "NLP"],
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "Real-time Anomaly Detection",
    description:
      "Streaming anomaly detection system using Isolation Forest on IoT sensor data. Reduced false positives by 60%.",
    tags: ["Spark", "Kafka", "Python", "ML"],
    gradient: "from-primary/15 to-accent/15",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Time series forecasting with Prophet and ARIMA models. Interactive Tableau dashboard for stakeholder reporting.",
    tags: ["Prophet", "Tableau", "SQL", "Statistics"],
    gradient: "from-accent/15 to-primary/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// projects"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-primary">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group bg-gradient-to-br ${project.gradient} border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 border-glow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground">
                    <Github className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
                    <ExternalLink className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-background/60 border border-border rounded text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
