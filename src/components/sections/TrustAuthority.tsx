import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Users, Briefcase, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Briefcase },
  { value: "200+", label: "Business Clients", icon: Users },
  { value: "99%", label: "Client Satisfaction", icon: CheckCircle2 },
  { value: "10+", label: "Years Experience", icon: Award },
];

export function TrustAuthority() {
  return (
    <section className="py-20 bg-[#0A1E45] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 text-[#EAF3FF] text-sm font-semibold mb-6">
            <ShieldCheck className="h-4 w-4" />
            Verified & Proven
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Technology Partner For Growing Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <stat.icon className="h-8 w-8 text-[#0066FF] mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
