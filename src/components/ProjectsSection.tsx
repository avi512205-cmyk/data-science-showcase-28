import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Category = "All" | "ML" | "DL" | "GenAI";

const projects = [
  {
    title: "Customer Churn Predictor",
    description:
      "Built an XGBoost model to predict customer churn with 94% accuracy. Feature engineering pipeline processing 2M+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    category: "ML" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-primary/30 to-accent/20",
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned BERT model for multi-class sentiment analysis on product reviews. Deployed as REST API with FastAPI.",
    tags: ["PyTorch", "Transformers", "FastAPI", "NLP"],
    category: "DL" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-accent/30 to-primary/20",
  },
  {
    title: "Real-time Anomaly Detection",
    description:
      "Streaming anomaly detection system using Isolation Forest on IoT sensor data. Reduced false positives by 60%.",
    tags: ["Spark", "Kafka", "Python", "ML"],
    category: "ML" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-primary/25 to-accent/25",
  },
  {
    title: "AI Chatbot Assistant",
    description:
      "Built a conversational AI assistant using LangChain and OpenAI GPT. Supports RAG with custom knowledge base.",
    tags: ["LangChain", "OpenAI", "Python", "RAG"],
    category: "GenAI" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-accent/25 to-primary/30",
  },
  {
    title: "Image Classification CNN",
    description:
      "Deep learning model using ResNet architecture for multi-class image classification with 97% validation accuracy.",
    tags: ["PyTorch", "CNN", "ResNet", "OpenCV"],
    category: "DL" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-primary/20 to-accent/30",
  },
  {
    title: "Text Summarizer with LLM",
    description:
      "Fine-tuned a large language model for abstractive text summarization. Integrated with a Streamlit web interface.",
    tags: ["Hugging Face", "LLM", "Streamlit", "NLP"],
    category: "GenAI" as Category,
    link: "https://github.com",
    github: "https://github.com",
    screenColor: "from-accent/20 to-primary/25",
  },
];

const categories: Category[] = ["All", "ML", "DL", "GenAI"];

const LaptopMockup = ({
  screenColor,
  tags,
}: {
  screenColor: string;
  tags: string[];
}) => (
  <div className="relative mx-auto w-full max-w-[260px]">
    <div className="relative rounded-t-xl border-[3px] border-border bg-card overflow-hidden aspect-[16/10]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${screenColor} flex flex-col items-center justify-center p-4 bg-grid`}
      >
        <div className="w-full bg-background/80 rounded-md border border-border p-3 backdrop-blur-sm">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
          </div>
          <div className="font-mono text-[9px] text-primary/80 space-y-0.5">
            <p><span className="text-muted-foreground">$</span> python train.py</p>
            <p className="text-muted-foreground">Loading dataset...</p>
            <p className="text-primary">✓ Accuracy: 94.2%</p>
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
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent pointer-events-none" />
    </div>
    <div className="relative">
      <div className="mx-auto h-[3px] w-[40%] rounded-b bg-border" />
      <div className="mx-auto h-[12px] w-[110%] -ml-[5%] rounded-b-lg bg-gradient-to-b from-border to-muted border-x-[3px] border-b-[3px] border-border" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[3px] rounded-b bg-muted-foreground/20" />
    </div>
  </div>
);

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Featured <span className="text-primary">Work</span>
          </h2>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 border ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mb-4 cursor-pointer"
                >
                  <LaptopMockup screenColor={project.screenColor} tags={project.tags} />
                </motion.div>

                <div className="text-center px-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
