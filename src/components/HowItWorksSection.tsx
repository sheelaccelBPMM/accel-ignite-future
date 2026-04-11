import { motion } from "framer-motion";
import { Search, Hammer, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Diagnose & Design",
    desc: "We assess your operations, identify inefficiencies, and design a tailored transformation blueprint.",
  },
  {
    icon: Hammer,
    num: "02",
    title: "Build & Transition",
    desc: "Rapid setup of teams, technology, and processes — with zero disruption to your business.",
  },
  {
    icon: RotateCcw,
    num: "03",
    title: "Run & Reinvent",
    desc: "Continuous operations management with ongoing AI-driven optimization and reinvention.",
  },
];

const HowItWorksSection = () => (
  <section className="py-24 lg:py-32 bg-gradient-section" id="how-it-works">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          How It <span className="text-gradient-primary">Works</span>
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative rounded-xl border border-border bg-card p-8 text-center"
          >
            <div className="mb-4 text-5xl font-display font-bold text-primary/20">{s.num}</div>
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
