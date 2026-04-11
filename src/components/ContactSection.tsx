import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Finance & Accounting",
  "Customer Support",
  "Legal Process Outsourcing",
  "Research & ESG",
  "Strategy Consulting",
  "AI Transformation",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-section" id="contact">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold lg:text-5xl">
              Ready to <span className="text-gradient-primary">Reinvent</span>{" "}
              Your Business?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Schedule a free consultation with our transformation experts.
              We'll assess your operations and show you exactly how we can help.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="#contact"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <Calendar size={20} className="text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Schedule a Call</div>
                  <div className="text-sm text-muted-foreground">30-min strategy session</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </a>
              <a
                href="mailto:hello@accelbpmm.com"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <Send size={20} className="text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-sm text-muted-foreground">hello@accelbpmm.com</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Get a Custom Plan
            </h3>

            <div className="space-y-4">
              <input
                required
                maxLength={100}
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                required
                type="email"
                maxLength={255}
                placeholder="Work Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                required
                maxLength={100}
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="" disabled>Service Interest</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                required
                maxLength={1000}
                rows={4}
                placeholder="Tell us about your needs..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
