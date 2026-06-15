import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  whatsapp: z.string().trim().max(40).optional(),
  businessType: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1).max(120),
  budget: z.string().trim().max(60).optional(),
  contactMethod: z.string().trim().max(40).optional(),
  deadline: z.string().trim().max(60).optional(),
  requirements: z.string().trim().min(5).max(4000),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
} as const;

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const raw = await request.json();
          const data = LeadSchema.parse(raw);
          const leadId = `NBL-${Date.now().toString(36).toUpperCase()}-${Math.random()
            .toString(36)
            .slice(2, 6)
            .toUpperCase()}`;

          // API-ready: integrate CRM (HubSpot/Zoho), DB persistence,
          // email/WhatsApp notifications, or Google Sheets here.
          console.log("[api/leads]", leadId, data);

          return new Response(
            JSON.stringify({
              ok: true,
              leadId,
              message:
                "Thank you for contacting The Nord Byte Labs. Our team will reach out shortly.",
            }),
            {
              status: 201,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            }
          );
        } catch (err) {
          const message =
            err instanceof z.ZodError ? "Invalid input" : "Server error";
          return new Response(
            JSON.stringify({ ok: false, error: message }),
            {
              status: err instanceof z.ZodError ? 400 : 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            }
          );
        }
      },
    },
  },
});
