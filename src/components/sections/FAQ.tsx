import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  // Web Development
  { q: "What technologies do you use for web development?", a: "We use modern, scalable technologies including React, Next.js, Vue, Node.js, Python, and robust CMS platforms depending on the project requirements." },
  { q: "Do you provide website maintenance and support?", a: "Yes, we offer ongoing maintenance, security updates, and performance optimization to ensure your website remains fast and secure." },
  { q: "Will my website be mobile-friendly and SEO optimized?", a: "Absolutely. All our websites are built with a mobile-first approach and include technical SEO best practices out of the box." },
  
  // Mobile Apps
  { q: "Do you build apps for both iOS and Android?", a: "Yes, we build native applications as well as cross-platform apps using frameworks like React Native and Flutter." },
  { q: "Can you help publish the app to the App Store and Google Play?", a: "Yes, we handle the entire deployment process, ensuring your app meets all guidelines for a successful launch." },
  { q: "How long does it take to build a mobile application?", a: "A standard MVP takes 2-3 months, while complex enterprise applications can take 4-6 months depending on the feature set." },

  // CRM & Business Automation
  { q: "Can you integrate a new CRM with our existing software?", a: "Yes, we build custom APIs and use middleware to seamlessly connect your new CRM with legacy systems, accounting software, and marketing tools." },
  { q: "Do you provide custom dashboard development?", a: "Yes, we build highly customized admin panels and reporting dashboards tailored to your specific business KPIs." },

  // Blockchain
  { q: "What blockchain services do you offer?", a: "We offer smart contract development, Web3 integration, custom token creation, and blockchain security consulting." },
  { q: "Which blockchain networks do you work with?", a: "We primarily work with Ethereum, Polygon, Solana, and Binance Smart Chain, selecting the best network based on your scalability and cost requirements." },

  // Cyber Security
  { q: "What does your cybersecurity audit cover?", a: "Our audits cover vulnerability assessments, penetration testing, source code review, and cloud infrastructure security." },
  { q: "Can you help us achieve SOC2 or GDPR compliance?", a: "Yes, we provide architecture upgrades and compliance consulting to help your organization meet strict data protection regulations." },

  // Digital Marketing & Lead Gen
  { q: "How do your lead generation systems work?", a: "We build automated funnels combining targeted landing pages, CRM integration, and instant WhatsApp/Email follow-ups to capture and qualify leads." },
  { q: "Do you manage paid ad campaigns?", a: "Yes, we manage Google Ads, Meta (Facebook/Instagram) Ads, and LinkedIn Ads focusing strictly on ROI and cost-per-acquisition." },
  { q: "What is your approach to SEO?", a: "We focus on technical SEO, high-quality content strategy, and authoritative link building to drive sustainable organic traffic over time." },

  // Pricing & Support
  { q: "How do you price your projects?", a: "We offer both fixed-price contracts for clearly defined scopes and time-and-materials (hourly/monthly) models for ongoing agile development." },
  { q: "Is there a minimum budget for your services?", a: "Our project engagements typically start at $5,000, ensuring we can dedicate the necessary senior resources to deliver enterprise-grade quality." },
  { q: "Do I own the source code after completion?", a: "Yes. Once the final payment is cleared, you receive 100% ownership of the intellectual property and source code." },
  { q: "What happens if we find a bug after launch?", a: "We include a standard warranty period for all projects to fix any critical bugs, followed by optional SLAs for ongoing technical support." },
  { q: "How do we communicate during the project?", a: "You will have a dedicated project manager. We use Slack/Teams for daily communication, Jira for task tracking, and provide weekly progress meetings." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers about our services, processes, and technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-xl bg-white overflow-hidden transition-colors ${openIndex === i ? 'border-[#0066FF]' : 'border-gray-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#0066FF]' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
