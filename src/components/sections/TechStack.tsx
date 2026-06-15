import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Laravel", "Django", ".NET", "Python", "Go"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Cloudflare"] },
  { title: "AI", items: ["OpenAI", "Gemini", "LangChain", "Anthropic"] },
];

export function TechStack() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">Technology Stack</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
            Modern tools. Battle-tested platforms.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-border p-6 shadow-soft"
            >
              <h3 className="font-display font-bold text-navy mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
