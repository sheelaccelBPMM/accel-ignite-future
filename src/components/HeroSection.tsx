import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles size={14} className="text-primary" />
          AI-Powered Transformation for SMEs
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          Enterprise Reinvention.{" "}
          <span className="text-gradient-primary">SME Speed.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
          AccelBPMM helps U.S. SMEs transform faster, reduce costs, and scale
          with AI-powered operations—delivered from India.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:opacity-90"
          >
            Book a Free Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
