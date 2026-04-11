import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold text-foreground">
            Accel<span className="text-gradient-primary">BPMM</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Enterprise transformation for SMEs. AI-powered. Offshore-delivered.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Finance & Accounting</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Customer Support</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Legal Process Outsourcing</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Research & ESG</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Industries</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Legal</li>
            <li>Healthcare</li>
            <li>Fintech</li>
            <li>Manufacturing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">GDPR & CCPA</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AccelBPMM. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
