import { motion } from "framer-motion";
import { Stethoscope, Building2, GraduationCap, LineChart, ShoppingBag, ShoppingCart, Factory, Truck, Utensils, Briefcase, Rocket } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Stethoscope },
  { name: "Real Estate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: LineChart },
  { name: "Retail", icon: ShoppingBag },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
  { name: "Hospitality", icon: Utensils },
  { name: "Professional Services", icon: Briefcase },
  { name: "Startups", icon: Rocket },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Delivering domain-specific technology solutions across multiple sectors globally.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-full border border-gray-200 bg-white shadow-sm hover:border-[#0066FF] hover:text-[#0066FF] hover:shadow-md transition-all cursor-default"
            >
              <ind.icon className="h-5 w-5" />
              <span className="font-medium text-sm">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
