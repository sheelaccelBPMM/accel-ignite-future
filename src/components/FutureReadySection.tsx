import { motion } from "framer-motion";
import { Bot, Layers, Gauge, TrendingUp } from "lucide-react";

const items = [
  { icon: Bot, title: "Agentic AI", desc: "Autonomous AI agents that learn, decide, and act on your behalf." },
  { icon: Layers, title: "Digital Twin Models", desc: "Virtual replicas of your operations for simulation and optimization." },
  { icon: Gauge, title: "Zero-Touch Operations", desc: "Fully automated processes that require no manual intervention." },
  { icon: TrendingUp, title: "Continuous Optimization", desc: "Self-improving systems that get better with every cycle." },
];

const FutureReadySection = () => (
  <section className="relative py-24 lg:py-32 overflow-hidden">
    {/* Decorative glows */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          <span className="text-gradient-primary">Future-Ready</span> Operations
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We don't just optimize today — we architect your business for tomorrow.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-8 transition-all hover:shadow-glow-accent"
          >
            <item.icon size={28} className="mb-4 text-accent" />
            <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FutureReadySection;
