import { motion } from "framer-motion";
import { Shield, Cpu, Globe } from "lucide-react";

const items = [
  { icon: Shield, text: "Built by leaders from Accenture, Deloitte & global consulting firms" },
  { icon: Cpu, text: "AI-first approach with proven transformation frameworks" },
  { icon: Globe, text: "Offshore efficiency with onshore alignment" },
];

const TrustBar = () => (
  <section className="border-y border-border bg-card/50">
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 justify-center text-center md:text-left">
            <item.icon size={20} className="shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
