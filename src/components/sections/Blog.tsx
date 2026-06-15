import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development: What to Expect in 2024",
    category: "Technology Insights",
    date: "Oct 12, 2023",
    author: "Rohit",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    desc: "Explore the emerging trends in web architecture, from server components to AI-assisted coding."
  },
  {
    title: "Why Zero-Trust Architecture is Crucial for Cloud Security",
    category: "Cyber Security",
    date: "Nov 05, 2023",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    desc: "A deep dive into securing enterprise cloud environments against modern cyber threats."
  },
  {
    title: "Automating Sales with WhatsApp Business APIs",
    category: "Business Automation",
    date: "Dec 18, 2023",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    desc: "How integrating WhatsApp with your CRM can increase lead conversion rates by 40%."
  }
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Technology Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Read our latest articles on software development, security, and digital growth strategies.
            </p>
          </div>
          <a href="#blog" className="inline-flex items-center gap-2 font-semibold text-[#0066FF] hover:text-[#003A8C] transition-colors shrink-0">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-[#0066FF] rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">{post.desc}</p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0066FF] group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
