import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Predictor",
    description:
      "Built an XGBoost model to predict customer churn with 94% accuracy. Feature engineering pipeline processing 2M+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-primary/30 to-accent/20",
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned BERT model for multi-class sentiment analysis on product reviews. Deployed as REST API with FastAPI.",
    tags: ["PyTorch", "Transformers", "FastAPI", "NLP"],
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-accent/30 to-primary/20",
  },
  {
    title: "Real-time Anomaly Detection",
    description:
      "Streaming anomaly detection system using Isolation Forest on IoT sensor data. Reduced false positives by 60%.",
    tags: ["Spark", "Kafka", "Python", "ML"],
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-primary/25 to-accent/25",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Time series forecasting with Prophet and ARIMA models. Interactive dashboard for stakeholder reporting.",
    tags: ["Prophet", "Tableau", "SQL", "Statistics"],
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-accent/25 to-primary/30",
  },
];

const LaptopMockup = ({
  title,
  screenColor,
  tags,
}: {
  title: string;
  screenColor: string;
  tags: string[];
}) => (
  <div className="relative mx-auto w-full max-w-[280px]">
    {/* Screen */}
    <div className="relative rounded-t-xl border-[3px] border-border bg-card overflow-hidden aspect-[16/10]">
      {/* Screen content */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${screenColor} flex flex-col items-center justify-center p-4 bg-grid`}
      >
        {/* Fake terminal */}
        <div className="w-full bg-background/80 rounded-md border border-border p-3 backdrop-blur-sm">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
          </div>
          <div className="font-mono text-[9px] text-primary/80 space-y-0.5">
            <p>
              <span className="text-muted-foreground">$</span> python train.py
            </p>
            <p className="text-muted-foreground">Loading dataset...</p>
            <p className="text-primary">
              ✓ Accuracy: 94.2%
            </p>
          </div>
        </div>
        <div className="flex gap-1 mt-2 flex-wrap justify-center">
          {tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 bg-background/50 rounded text-[8px] font-mono text-primary/70 border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Screen glare */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent pointer-events-none" />
    </div>

    {/* Laptop base / hinge */}
    <div className="relative">
      <div className="mx-auto h-[3px] w-[40%] rounded-b bg-border" />
      <div className="mx-auto h-[12px] w-[110%] -ml-[5%] rounded-b-lg bg-gradient-to-b from-border to-muted border-x-[3px] border-b-[3px] border-border" />
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[3px] rounded-b bg-muted-foreground/20" />
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {"// projects"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Featured <span className="text-primary">Work</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group block"
              >
                {/* Laptop */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mb-5 cursor-pointer"
                >
                  <LaptopMockup
                    title={project.title}
                    screenColor={project.screenColor}
                    tags={project.tags}
                  />
                </motion.div>

                {/* Info */}
                <div className="text-center px-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
