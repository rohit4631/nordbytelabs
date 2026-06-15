import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Rohit",
    role: "Principal Solutions Architect",
    specialization: "Cloud Architecture & AI Systems",
    experience: "10+ Years Experience",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&backgroundColor=e2e8f0",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    role: "Lead Software Engineer",
    specialization: "Full-Stack & React Native",
    experience: "8+ Years Experience",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=e2e8f0",
    linkedin: "#",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Cybersecurity",
    specialization: "Threat Intelligence & Compliance",
    experience: "12+ Years Experience",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=e2e8f0",
    linkedin: "#",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet The Experts Behind Nord Byte Labs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our leadership team brings decades of combined experience in enterprise software, artificial intelligence, and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6">
                <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-0 right-0 rounded-full bg-[#0A66C2] p-1.5 text-white shadow-sm hover:bg-[#004182] transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <div className="w-full h-px bg-border my-3" />
              <p className="text-sm font-semibold text-foreground">{member.specialization}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
