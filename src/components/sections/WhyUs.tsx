import { motion } from "framer-motion";
import { TrendingUp, Users, Cpu, ShieldCheck, Zap, MessageSquare, Handshake, Maximize2 } from "lucide-react";

const reasons = [
  { title: "Business Focused Solutions", icon: TrendingUp, desc: "We focus on ROI, revenue, and measurable outcomes." },
  { title: "Experienced Developers", icon: Users, desc: "Senior engineers with a track record of enterprise success." },
  { title: "Modern Technologies", icon: Cpu, desc: "Utilizing the latest frameworks and cloud infrastructure." },
  { title: "Security First Approach", icon: ShieldCheck, desc: "Built-in protection and compliance from day one." },
  { title: "Fast Delivery", icon: Zap, desc: "Agile methodologies ensuring rapid time-to-market." },
  { title: "Transparent Communication", icon: MessageSquare, desc: "Clear updates, weekly reports, and no hidden surprises." },
  { title: "Long Term Support", icon: Handshake, desc: "Ongoing maintenance, optimization, and scaling assistance." },
  { title: "Scalable Architecture", icon: Maximize2, desc: "Systems designed to handle millions of users effortlessly." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Nord Byte Labs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are more than just a development agency. We are your dedicated technology growth partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-[#EAF3FF] rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-[#0066FF]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
