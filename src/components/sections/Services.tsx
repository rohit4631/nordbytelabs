import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, Link, Users, Filter, BarChart, PenTool, Image as ImageIcon, Shield, Cloud, MessageCircle, Calendar, MapPin } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    items: ["Corporate Websites", "Business Websites", "Custom Web Applications", "E-commerce Development", "Landing Pages", "CMS Development", "Website Maintenance", "Website Redesign", "Website Speed Optimization", "SEO-Friendly Websites"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    items: ["Android Development", "iOS Development", "Flutter Development", "React Native Development", "Cross Platform Applications", "Enterprise Applications", "App Maintenance", "App Store Deployment"]
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    items: ["ERP Systems", "CRM Systems", "Inventory Management", "HR Management Systems", "Business Automation Software", "Custom Dashboards", "Admin Panels", "SaaS Platforms"]
  },
  {
    icon: Link,
    title: "Blockchain Development",
    items: ["Smart Contracts", "NFT Platforms", "Crypto Wallet Integration", "Blockchain Consulting", "Token Development", "Web3 Applications", "Blockchain Security"]
  },
  {
    icon: Users,
    title: "CRM Development & Setup",
    items: ["Custom CRM Development", "Sales Automation", "Customer Management", "Lead Tracking", "Sales Pipelines", "Reporting Systems", "CRM Integration", "CRM Migration"]
  },
  {
    icon: Filter,
    title: "Lead Generation Solutions",
    items: ["Lead Capture Systems", "Landing Pages", "Sales Funnels", "Conversion Tracking", "Lead Qualification", "Marketing Automation", "Lead Management Dashboards"]
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    items: ["SEO", "Google Ads", "Meta Ads", "Social Media Marketing", "Email Marketing", "Content Marketing", "Brand Strategy", "Performance Marketing"]
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    items: ["Website Design", "Mobile App Design", "Dashboard Design", "Wireframes", "Prototypes", "User Experience Research", "Brand Identity"]
  },
  {
    icon: ImageIcon,
    title: "Graphic Design",
    items: ["Logo Design", "Branding", "Brochures", "Business Cards", "Marketing Creatives", "Social Media Posts", "Presentations"]
  },
  {
    icon: Shield,
    title: "Cyber Security",
    items: ["Security Audits", "Vulnerability Assessment", "Penetration Testing", "Malware Protection", "Cloud Security", "Data Protection", "Security Monitoring", "Compliance Consulting"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    items: ["AWS", "Azure", "Google Cloud", "Server Setup", "Cloud Migration", "DevOps", "Monitoring", "Backup Solutions"]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    items: ["WhatsApp API", "WhatsApp Chatbots", "Lead Capture", "Customer Support", "Notifications", "Automated Messaging"]
  },
  {
    icon: Calendar,
    title: "Appointment Booking Systems",
    items: ["Booking Calendar", "Automated Reminders", "Payment Integration", "Notifications", "Admin Dashboard"]
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    items: ["Google Business Setup", "Verification", "Optimization", "Review Management", "Local SEO", "Maps Optimization"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Professional IT Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive end-to-end technology solutions tailored for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF3FF] group-hover:bg-[#0066FF] transition-colors">
                <service.icon className="h-7 w-7 text-[#0066FF] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <ul className="space-y-2 flex-1">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-600">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                    {item}
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
