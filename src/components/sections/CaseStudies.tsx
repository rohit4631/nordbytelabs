import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Global Real Estate Lead Generation Platform",
    category: "PropTech & Automation",
    challenge: "A leading real estate firm struggled with manual lead qualification and slow response times, resulting in a 40% drop-off rate for high-value inquiries.",
    solution: "We engineered an automated lead nurturing pipeline integrated with WhatsApp API and a custom CRM dashboard to instantly qualify, route, and engage prospects.",
    technology: ["React", "Node.js", "WhatsApp Business API", "PostgreSQL", "AWS"],
    businessImpact: "The automated system completely eliminated manual data entry and reduced the average response time from 4 hours to under 3 minutes.",
    results: [
      { label: "Lead Volume", value: "+300%" },
      { label: "Conversion Rate", value: "+40%" },
      { label: "Sales Productivity", value: "+60%" }
    ],
  },
  {
    title: "Healthcare Provider Operations Portal",
    category: "HealthTech & Cloud Security",
    challenge: "A multi-clinic healthcare provider relied on disparate legacy systems that caused data silos, security vulnerabilities, and scheduling conflicts.",
    solution: "We deployed a HIPAA-compliant unified Business Operating System (BOS) featuring a centralized patient database, automated booking engine, and staff mobile app.",
    technology: ["Next.js", "GraphQL", "Azure Health Data Services", "Docker", "SOC2 Compliant Architecture"],
    businessImpact: "Centralized all operations into a single digital ecosystem, significantly improving patient NPS and ensuring 100% regulatory compliance.",
    results: [
      { label: "Operational Speed", value: "+2.5x" },
      { label: "Booking Errors", value: "-85%" },
      { label: "Patient Retention", value: "+28%" }
    ],
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise Case Studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore how we've architected scalable solutions to solve complex operational challenges and drive measurable growth.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border">
                
                {/* Left side: Context & Detail */}
                <div className="lg:col-span-3 p-8">
                  <div className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                    {cs.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{cs.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="text-sm text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Our Solution</h4>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technology Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.technology.map(tech => (
                          <span key={tech} className="px-2.5 py-1 rounded bg-muted text-xs font-medium text-foreground border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Business Impact</h4>
                      <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-lg border border-border">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground font-medium">{cs.businessImpact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Results & CTA */}
                <div className="lg:col-span-2 p-8 bg-muted/30 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Measurable Results</h4>
                  <div className="space-y-6">
                    {cs.results.map((result) => (
                      <div key={result.label} className="flex flex-col">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                          {result.value}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground mt-1">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      Discuss a similar project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
