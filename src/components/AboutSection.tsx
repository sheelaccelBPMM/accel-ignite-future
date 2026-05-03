import { motion } from "framer-motion";
import { Award, MapPin, Target } from "lucide-react";

const AboutSection = () => (
  <section className="py-24 lg:py-32" id="about">
    <div className="container mx-auto px-4">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            About <span className="text-gradient-primary">AccelBPMM</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            AccelBPMM was founded by seasoned leaders from Accenture, Genpact
            and other leading global consulting firms with one mission: bring
            enterprise-grade transformation to small and mid-sized businesses
            at a cost they can actually afford.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With delivery centers in India and client alignment teams in the
            U.S., we combine the best of offshore efficiency with onshore
            accountability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { icon: Award, title: "Experienced Leadership", desc: "Our leadership team brings decades of experience from the world's top consulting firms." },
            { icon: MapPin, title: "Offshore Delivery", desc: "Scalable, cost-efficient delivery without compromising quality or speed." },
            { icon: Target, title: "SME-Focused Mission", desc: "Every solution is designed for the agility and budget of small and mid-sized enterprises." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <item.icon size={24} className="shrink-0 text-primary mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
