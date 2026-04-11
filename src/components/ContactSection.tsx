import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    honeypot: "", // anti-spam
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "handle-contact-form",
        {
          body: {
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            service: form.service,
            message: form.message.trim(),
            honeypot: form.honeypot,
          },
        }
      );

      if (error) throw error;

      toast.success(
        "✅ Request received. Get ready—our team will connect with you shortly to explore how we can reduce costs, improve efficiency, and accelerate your growth."
      );
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        honeypot: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(
        "⚠️ Something didn't go as planned. Please try again or email us directly at contact@aaccelbpmm.com—we'll make sure your request reaches us."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border ${
      errors[field] ? "border-red-500" : "border-border"
    } bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none`;

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
                  <div className="font-semibold text-foreground">
                    Schedule a Call
                  </div>
                  <div className="text-sm text-muted-foreground">
                    30-min strategy session
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto text-muted-foreground"
                />
              </a>
              <a
                href="mailto:contact@aaccelbpmm.com"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <Send size={20} className="text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-sm text-muted-foreground">
                    contact@aaccelbpmm.com
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto text-muted-foreground"
                />
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

            {/* Honeypot - hidden from users */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
              className="absolute opacity-0 pointer-events-none h-0 w-0"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="space-y-4">
              <div>
                <input
                  required
                  maxLength={100}
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="Work Email *"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <input
                maxLength={100}
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass("company")}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass("service")}
              >
                <option value="" disabled>
                  Service Interest
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <div>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  placeholder="Tell us about your needs... *"
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
