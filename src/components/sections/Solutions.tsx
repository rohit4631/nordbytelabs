import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const packages = [
  { tag: "GROWTH", title: "Business Growth Package", desc: "Website + CRM + Lead Generation system to fuel pipeline.", color: "from-[#003A8C] to-[#0066FF]" },
  { tag: "HEALTHCARE", title: "Healthcare Package", desc: "Website + Appointment System + WhatsApp automation.", color: "from-[#0A1E45] to-[#003A8C]" },
  { tag: "REAL ESTATE", title: "Real Estate Package", desc: "Website + CRM + Lead Management with nurturing flows.", color: "from-[#0066FF] to-[#3B82F6]" },
  { tag: "E-COMMERCE", title: "E-commerce Package", desc: "Storefront + Analytics + Marketing Automation suite.", color: "from-[#003A8C] to-[#1E40AF]" },
  { tag: "ENTERPRISE", title: "Enterprise Package", desc: "Custom Software + Cloud Infrastructure + Cybersecurity.", color: "from-[#0A1E45] to-[#0066FF]" },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">Featured Solutions</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Pre-built packages tailored to your industry
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Get a custom quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.color} p-7 text-white shadow-elegant hover:shadow-glow transition-all min-h-[240px] flex flex-col justify-between`}
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <span className="inline-block text-[10px] font-bold tracking-[0.2em] bg-white/15 backdrop-blur px-3 py-1 rounded-full">{p.tag}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold">
                Learn more <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
