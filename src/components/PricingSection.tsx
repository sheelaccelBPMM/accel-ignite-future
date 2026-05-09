import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Sparkles } from "lucide-react";

// Base prices in INR (from Brego Business pricing)
const TIERS = [
  {
    name: "Startup",
    tagline: "For early-stage SMEs",
    setupINR: 25000,
    monthlyINR: 30000,
    transactions: "0–500 transactions / mo",
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growing Business",
    tagline: "Most popular for scaling teams",
    setupINR: 25000,
    monthlyINR: 70000,
    transactions: "500–1,000 transactions / mo",
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    tagline: "Custom-built for complex ops",
    setupINR: null,
    monthlyINR: null,
    transactions: "1,000+ transactions / mo",
    highlighted: false,
    cta: "Book a Call",
  },
];

const FEATURES = [
  "Data Entry",
  "Reviews of Books",
  "GSTR 1 / 3B Calculation & Filing",
  "GST 2B Reconciliation",
  "TDS Calculation, Filing & 26AS Recon",
  "Profession & Advance Tax",
  "Sales & Expense Bifurcation",
  "Balance Sheet, P&L, Cash Flow",
  "Debtor & Creditor Ageing",
  "E-commerce Reconciliation",
];

// Approx FX rates (1 INR -> currency). Updated periodically.
const FX: Record<string, { code: string; symbol: string; rate: number; locale: string }> = {
  USD: { code: "USD", symbol: "$", rate: 0.012, locale: "en-US" },
  INR: { code: "INR", symbol: "₹", rate: 1, locale: "en-IN" },
  EUR: { code: "EUR", symbol: "€", rate: 0.011, locale: "en-IE" },
  GBP: { code: "GBP", symbol: "£", rate: 0.0095, locale: "en-GB" },
  AUD: { code: "AUD", symbol: "A$", rate: 0.018, locale: "en-AU" },
  CAD: { code: "CAD", symbol: "C$", rate: 0.016, locale: "en-CA" },
  AED: { code: "AED", symbol: "AED ", rate: 0.044, locale: "en-AE" },
  SGD: { code: "SGD", symbol: "S$", rate: 0.016, locale: "en-SG" },
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  US: "USD", IN: "INR", GB: "GBP", AU: "AUD", CA: "CAD",
  AE: "AED", SG: "SGD",
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR", IE: "EUR", PT: "EUR", BE: "EUR", AT: "EUR", FI: "EUR", GR: "EUR",
};

const formatPrice = (inr: number, currency: typeof FX[string]) => {
  const converted = inr * currency.rate;
  // Round nicely
  const rounded =
    converted >= 1000 ? Math.round(converted / 50) * 50 :
    converted >= 100 ? Math.round(converted / 5) * 5 :
    Math.round(converted);
  try {
    return new Intl.NumberFormat(currency.locale, {
      style: "currency",
      currency: currency.code,
      maximumFractionDigits: 0,
    }).format(rounded);
  } catch {
    return `${currency.symbol}${rounded.toLocaleString()}`;
  }
};

const PricingSection = () => {
  const [currency, setCurrency] = useState(FX.USD);
  const [country, setCountry] = useState<string>("US");

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const cc = data?.country_code as string | undefined;
        const curCode = data?.currency as string | undefined;
        const resolved = (curCode && FX[curCode]) || (cc && FX[COUNTRY_TO_CURRENCY[cc]]) || FX.USD;
        setCurrency(resolved);
        if (cc) setCountry(cc);
      })
      .catch(() => {
        setCurrency(FX.USD);
      });
    return () => { cancelled = true; };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gradient-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-glow bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles size={14} className="text-accent" />
            Transparent pricing · No hidden fees
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Enterprise outcomes,{" "}
            <span className="text-gradient-primary">SME pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay a fraction of what US firms charge — same delivery quality, dedicated offshore team.
            Prices shown in <span className="text-foreground font-semibold">{currency.code}</span>
            {country && <span className="text-muted-foreground/70"> (auto-detected for {country})</span>}.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary/50 bg-card shadow-glow"
                  : "border-border bg-card/60"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

              <div className="mb-6 min-h-[120px]">
                {tier.monthlyINR !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {formatPrice(tier.monthlyINR, currency)}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      + one-time setup{" "}
                      <span className="text-foreground font-medium">
                        {formatPrice(tier.setupINR!, currency)}
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold text-gradient-primary">Custom</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Tailored to your transaction volume & complexity
                    </p>
                  </>
                )}
              </div>

              <p className="text-sm font-medium text-foreground mb-4">{tier.transactions}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full rounded-lg px-5 py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {tier.name === "Enterprise" && <Phone size={16} />}
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-10 max-w-2xl mx-auto">
          Indian clients: prices exclude 18% GST. International prices auto-converted from INR at indicative FX rates and may vary at invoicing. Income tax returns, ROC compliance, payroll, audit support and backlog work are quoted separately.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
