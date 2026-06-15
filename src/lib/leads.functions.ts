import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  whatsapp: z.string().trim().max(40).optional().default(""),
  businessType: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().min(1).max(120),
  budget: z.string().trim().max(60).optional().default(""),
  contactMethod: z.string().trim().max(40).optional().default(""),
  deadline: z.string().trim().max(60).optional().default(""),
  requirements: z.string().trim().min(5).max(4000),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const leadId = `NBL-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase()}`;

    // API-ready: this is where CRM / DB / email / WhatsApp API integrations plug in.
    // e.g. supabaseAdmin.from('leads').insert({ ...data, lead_id: leadId })
    console.log("[lead:received]", leadId, data);

    return {
      ok: true as const,
      leadId,
      message:
        "Thank you for contacting The Nord Byte Labs. Our team will reach out shortly.",
    };
  });
