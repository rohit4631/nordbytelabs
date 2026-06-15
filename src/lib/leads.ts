export const WHATSAPP_NUMBER = "919999999999"; // Update with real number
export const CONTACT_EMAIL = "contact@nordbytelabs.com";

export const SERVICE_OPTIONS = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "CRM Development",
  "Lead Generation",
  "WhatsApp Integration",
  "Appointment Booking System",
  "Cyber Security",
  "Cloud Solutions",
  "AI Automation",
  "Data Analytics",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
] as const;

export const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"] as const;

export type LeadPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  businessType?: string;
  service: string;
  budget?: string;
  contactMethod?: string;
  deadline?: string;
  requirements: string;
};

export function buildWhatsAppMessage(lead: LeadPayload, leadId?: string) {
  const lines = [
    "Hello Nord Byte Labs,",
    "",
    "I submitted a project inquiry.",
    "",
    `Name: ${lead.name}`,
    lead.company ? `Company: ${lead.company}` : null,
    `Service: ${lead.service}`,
    lead.budget ? `Budget: ${lead.budget}` : null,
    lead.deadline ? `Deadline: ${lead.deadline}` : null,
    "",
    "Project Details:",
    lead.requirements,
    "",
    leadId ? `Reference: ${leadId}` : null,
    "Please contact me.",
  ].filter(Boolean);
  return encodeURIComponent(lines.join("\n"));
}
