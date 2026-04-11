import { motion } from "framer-motion";

const stats = [
  { value: "45%", label: "Reduction in operational costs" },
  { value: "60%", label: "Improvement in process efficiency" },
  { value: "10 wks", label: "AI automation deployed" },
  { value: "99.5%", label: "Financial close accuracy" },
];

const CaseStudiesSection = () => (
  <section className="py-24 lg:py-32 bg-gradient-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          Proven <span className="text-gradient-primary">Outcomes</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Real results delivered for businesses like yours.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-8 text-center"
          >
            <div className="font-display text-4xl font-bold text-gradient-primary">{s.value}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
