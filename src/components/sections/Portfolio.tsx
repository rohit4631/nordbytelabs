import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Global E-Commerce Marketplace",
    industry: "Retail",
    tech: ["Next.js", "Node.js", "Stripe", "AWS"],
    desc: "A high-performance marketplace platform handling over 10,000 daily transactions with real-time inventory syncing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80"
  },
  {
    title: "Healthcare Patient Portal",
    industry: "Healthcare",
    tech: ["React Native", "Firebase", "HealthKit"],
    desc: "HIPAA compliant mobile application for patient management, telemedicine consultations, and prescription tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    title: "Enterprise ERP Dashboard",
    industry: "Manufacturing",
    tech: ["React", "Python", "PostgreSQL"],
    desc: "Comprehensive resource planning system automating supply chain logistics and workforce management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Featured Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A selection of recent projects showcasing our technical capabilities across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#0066FF] shadow-lg">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-gray-900 rounded-full">
                    {item.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">{item.desc}</p>
                
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Technology Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:text-[#003A8C] transition-colors">
            Discuss your next project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
