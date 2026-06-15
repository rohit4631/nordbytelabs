import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

type Step = "service" | "size" | "timeline" | "budget" | "result";

export function AICalculator() {
  const [step, setStep] = useState<Step>("service");
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (key: string, value: string, nextStep: Step) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setStep(nextStep), 300);
  };

  const calculateEstimate = () => {
    let base = 2000;
    if (selections.service === "Business Operating System") base += 3000;
    if (selections.service === "CyberShield 360") base -= 1000;
    if (selections.size === "Enterprise (50+)") base *= 2;
    if (selections.timeline === "ASAP (Rush)") base *= 1.5;
    
    return `$${base.toLocaleString()} - $${(base * 1.5).toLocaleString()}`;
  };

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 mb-6">
            <Calculator className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-foreground tracking-wide uppercase">AI Consultation Calculator</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Estimate Your Project
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer 4 quick questions to instantly receive a personalized solution roadmap and budget estimate.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden min-h-[400px] flex flex-col relative">
          <div className="h-2 w-full bg-muted">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: step === 'service' ? '25%' : step === 'size' ? '50%' : step === 'timeline' ? '75%' : '100%' }}
            />
          </div>

          <div className="p-8 flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === "service" && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold mb-6">What is your primary goal?</h3>
                  <div className="space-y-3">
                    {["AI Growth Engine (Lead Gen & Automation)", "Business Operating System (CRM/ERP)", "CyberShield 360 (Security & Audit)", "Custom Software Development"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect("service", opt, "size")}
                        className="w-full text-left px-6 py-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === "size" && (
                <motion.div
                  key="size"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold mb-6">What is your company size?</h3>
                  <div className="space-y-3">
                    {["Startup (1-10)", "Growing (11-50)", "Enterprise (50+)"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect("size", opt, "timeline")}
                        className="w-full text-left px-6 py-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === "timeline" && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold mb-6">What is your ideal timeline?</h3>
                  <div className="space-y-3">
                    {["ASAP (Rush)", "1-3 Months", "Flexible (3+ Months)"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect("timeline", opt, "budget")}
                        className="w-full text-left px-6 py-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === "budget" && (
                <motion.div
                  key="budget"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold mb-6">What is your project budget?</h3>
                  <div className="space-y-3">
                    {["$1,000 - $5,000", "$5,000 - $15,000", "$15,000+"].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect("budget", opt, "result")}
                        className="w-full text-left px-6 py-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your Estimate is Ready</h3>
                  <p className="text-muted-foreground mb-8">Based on your requirements, here is your estimated budget projection:</p>
                  
                  <div className="inline-block px-8 py-6 rounded-2xl bg-muted border border-border mb-8">
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Estimated Investment</div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                      {calculateEstimate()}
                    </div>
                  </div>

                  <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      // The form will connect to our /api/leads endpoint
                      const email = new FormData(e.currentTarget).get("email");
                      await fetch("/api/leads", {
                        method: "POST",
                        body: JSON.stringify({ ...selections, email, name: "Calculator Lead", service: selections.service })
                      });
                      alert("Detailed roadmap sent to your email!");
                    }}
                    className="max-w-sm mx-auto space-y-4"
                  >
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Enter email to get detailed roadmap" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    />
                    <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                      Get My Detailed Roadmap
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  
                  <button 
                    onClick={() => setStep("service")}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Start over
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
