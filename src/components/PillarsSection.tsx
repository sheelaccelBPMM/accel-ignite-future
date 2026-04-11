import { motion } from "framer-motion";
import { Lightbulb, Cpu, Settings, Monitor } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Strategy & Consulting",
    desc: "End-to-end transformation roadmaps aligned to your growth objectives and competitive landscape.",
  },
  {
    icon: Cpu,
    title: "Technology & AI",
    desc: "Cutting-edge AI, automation, and cloud solutions engineered for measurable business outcomes.",
  },
  {
    icon: Settings,
    title: "Managed Operations (BPMM)",
    desc: "Scalable, offshore-powered managed services that run and continuously optimize your processes.",
  },
  {
    icon: Monitor,
    title: "Digital Experience",
    desc: "Modern digital interfaces and customer journeys that drive engagement and retention.",
  },
];

const PillarsSection = () => (
  <section className="py-24 lg:py-32" id="pillars">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          What We <span className="text-gradient-primary">Do</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Four integrated pillars that drive end-to-end transformation for SMEs.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-glow"
          >
            <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
              <p.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
