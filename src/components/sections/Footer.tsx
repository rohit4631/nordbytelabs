import { Linkedin, Twitter, Github, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/Logo";

const WHATSAPP_NUMBER = "919999999999";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Pre-footer CTA */}
        <div className="mb-14 rounded-3xl bg-gradient-brand p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-glow">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Ready To Grow Your Business?</h3>
            <p className="mt-2 text-white/85">Let's build scalable digital solutions together.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-navy font-semibold hover:scale-[1.02] transition-transform">
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white font-semibold hover:scale-[1.02] transition-transform">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <div className="leading-tight">
                <div className="font-display font-bold tracking-tight">THE NORD BYTE</div>
                <div className="text-[10px] tracking-[0.25em] text-primary font-semibold">LABS</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 max-w-sm leading-relaxed">
              Future-ready digital solutions — building technology that drives real business growth.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg bg-white/5 hover:bg-gradient-brand flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FCol title="Company" items={["About", "Careers", "Blog", "Press"]} />
          <FCol title="Services" items={["Web Development", "Mobile Apps", "CRM Systems", "AI Automation", "Cybersecurity"]} />
          <FCol title="Industries" items={["Healthcare", "Real Estate", "E-commerce", "Education", "Finance"]} />
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <div>© 2026 The Nord Byte Labs. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
