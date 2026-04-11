import { motion } from "framer-motion";
import { Calculator, Headphones, Scale, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    what: "Record-to-Report, Order-to-Cash, Procure-to-Pay — fully managed with AI-driven reconciliation and reporting.",
    outcomes: ["30–50% cost reduction", "99.5% accuracy in financial close", "Real-time dashboards"],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    what: "AI-augmented omnichannel support — voice, chat, email, and social — with intelligent routing and sentiment analysis.",
    outcomes: ["40% faster resolution", "24/7 coverage", "Higher CSAT scores"],
  },
  {
    icon: Scale,
    title: "Legal Process Outsourcing",
    what: "E-filing, document retrieval, mailbox support, and compliance monitoring for law firms and corporate legal teams.",
    outcomes: ["60% cost savings", "Faster turnaround times", "Reduced compliance risk"],
  },
  {
    icon: Search,
    title: "Research & ESG Services",
    what: "Market research, competitive intelligence, and ESG reporting powered by data analytics and AI.",
    outcomes: ["Data-driven decisions", "Regulatory compliance", "Investor-ready ESG reports"],
  },
];

const ServicesSection = () => (
  <section className="py-24 lg:py-32" id="services">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl font-bold lg:text-5xl">
          Our <span className="text-gradient-primary">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Comprehensive managed services designed for measurable impact.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-glow"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.what}</p>
            <ul className="mt-4 space-y-1.5">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {o}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Talk to an Expert <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
