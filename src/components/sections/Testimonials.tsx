import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Anika Sharma",
    role: "Director",
    company: "Sharma Health Clinic",
    initials: "AS",
    review: "Nord Byte Labs built our patient portal and appointment system. We've seen a 45% jump in bookings and our staff saves hours every day.",
  },
  {
    name: "Rohan Mehta",
    role: "CEO",
    company: "Crestline Realty",
    initials: "RM",
    review: "Their CRM and lead-management setup tripled our qualified leads in three months. The team is sharp, fast and a true technology partner.",
  },
  {
    name: "Sara Lindqvist",
    role: "COO",
    company: "NorthBound Logistics",
    initials: "SL",
    review: "From cloud migration to security audits, they delivered enterprise quality without the enterprise overhead. Highly recommended.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by industry leaders worldwide to deliver mission-critical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all relative group"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200 group-hover:text-[#0066FF] transition-colors" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-8">"{t.review}"</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#003A8C] flex items-center justify-center text-white font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
