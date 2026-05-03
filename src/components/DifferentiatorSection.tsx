import { motion } from "framer-motion";
import { DollarSign, Zap, Brain, Globe, RefreshCw } from "lucide-react";

const points = [
  { icon: DollarSign, title: "Upto 60% Cost Advantage", desc: "Enterprise-grade delivery at a fraction of onshore costs." },
  { icon: Zap, title: "2-4 Week Onboarding Cycle", desc: "Rapid transformation sprints, not year-long programs." },
  { icon: Brain, title: "Intelligent Delivery", desc: "Every engagement is powered by intelligent automation systems." },
  { icon: Globe, title: "Offshore + Onshore", desc: "India-based delivery with US-aligned communication and governance." },
  { icon: RefreshCw, title: "Continuous Reinvention", desc: "Ongoing optimization, not one-time projects using our Quality Gate system." },
];

const DifferentiatorSection = () => (
  <section className="py-24 lg:py-32 bg-gradient-section" id="why-us">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          Why <span className="text-gradient-primary">AccelBPMM?</span>
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 rounded-xl border border-border bg-card/70 p-6 transition-all hover:border-primary/30"
          >
            <div className="shrink-0 mt-1">
              <p.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiatorSection;
