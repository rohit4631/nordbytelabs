import { motion } from "framer-motion";

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements." },
  { step: "02", title: "Strategy", desc: "Creating a comprehensive roadmap, technology stack selection, and architecture planning." },
  { step: "03", title: "Design", desc: "Crafting wireframes, UI/UX designs, and interactive prototypes for approval." },
  { step: "04", title: "Development", desc: "Writing clean, scalable code following agile methodologies and best practices." },
  { step: "05", title: "Testing", desc: "Rigorous QA testing including security, performance, and cross-device compatibility." },
  { step: "06", title: "Launch", desc: "Smooth deployment to production servers with zero downtime and final configurations." },
  { step: "07", title: "Support", desc: "Ongoing maintenance, monitoring, security patches, and feature updates." },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A proven 7-step methodology ensuring high-quality software delivery on time and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-7 gap-6">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xl border-4 border-gray-50 shadow-md relative z-10 mb-6">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed px-2">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
