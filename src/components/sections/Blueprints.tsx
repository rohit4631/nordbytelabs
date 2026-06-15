import { motion } from "framer-motion";
import { ArrowRight, Bot, LayoutTemplate, ShieldCheck } from "lucide-react";

const blueprints = [
  {
    title: "AI Growth Engine™",
    description: "For startups, SaaS companies, and eCommerce brands. Generate more leads while reducing manual work.",
    price: "Starting from $1,999",
    icon: Bot,
    features: [
      "AI Chatbots",
      "CRM Automation",
      "Lead Qualification",
      "Email Automation",
      "WhatsApp Automation",
      "Analytics Dashboard",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Business Operating System™",
    description: "For SMEs and Enterprises. Centralize operations into one digital ecosystem.",
    price: "Starting from $4,999",
    icon: LayoutTemplate,
    features: [
      "Custom CRM",
      "ERP Solutions",
      "Employee Portal",
      "Workflow Automation",
      "Reporting Dashboard",
      "Cloud Infrastructure",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "CyberShield 360™",
    description: "For organizations requiring security. Enterprise-grade protection and business continuity.",
    price: "Starting from $999",
    icon: ShieldCheck,
    features: [
      "Security Audit",
      "Vulnerability Assessment",
      "Security Monitoring",
      "Compliance (SOC2/GDPR)",
      "Cloud Security",
      "Backup Systems",
    ],
    color: "from-emerald-500 to-teal-400",
  },
];

export function Blueprints() {
  return (
    <section id="blueprints" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise Solution Blueprints
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just write code. We deploy comprehensive digital ecosystems proven to scale operations, secure data, and drive revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blueprints.map((blueprint, i) => (
            <motion.div
              key={blueprint.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${blueprint.color}`} />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <blueprint.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{blueprint.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">
                {blueprint.description}
              </p>
              
              <div className="mb-6 font-mono text-sm font-semibold text-foreground bg-muted inline-block py-1 px-3 rounded">
                {blueprint.price}
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {blueprint.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#assessment"
                className="group flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
