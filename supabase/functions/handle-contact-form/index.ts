import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const CONTACT_EMAIL = "contact@aaccelbpmm.com";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  honeypot?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactForm = await req.json();

    // Honeypot check
    if (body.honeypot) {
      // Silently succeed for bots
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validation
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || null,
      service: body.service?.trim() || null,
      message: body.message.trim(),
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Failed to store submission");
    }

    // Send notification email to AccelBPMM
    const notificationHtml = `
      <h2>New Lead from AccelBPMM Website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.name)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.company || "N/A")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service Interest</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.service || "N/A")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.message)}</td></tr>
      </table>
    `;

    // Send auto-response to user
    const autoResponseHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#0a0c10;">🚀 Your AccelBPMM Request Is In Motion</h2>
        <p>Hi ${escapeHtml(body.name)},</p>
        <p>Thanks for reaching out to AccelBPMM.</p>
        <p>Our team is reviewing your request and will get back to you within the next 24 hours.</p>
        <p>In the meantime, here's what you can expect:</p>
        <ul>
          <li>A quick understanding of your current challenges</li>
          <li>Initial ideas on how to optimize and automate your processes</li>
          <li>A clear path to measurable ROI</li>
        </ul>
        <p>We're excited to explore how we can help you scale smarter and operate more efficiently.</p>
        <p>— Team AccelBPMM</p>
      </div>
    `;

    // Use Supabase's built-in email or Resend if configured
    // For now, we'll use the Resend API if a key is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      // Send notification email
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "AccelBPMM <noreply@aaccelbpmm.com>",
          to: [CONTACT_EMAIL],
          subject: "New Lead from AccelBPMM Website",
          html: notificationHtml,
        }),
      });

      // Send auto-response
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "AccelBPMM <noreply@aaccelbpmm.com>",
          to: [body.email],
          subject: "🚀 Your AccelBPMM Request Is In Motion",
          html: autoResponseHtml,
        }),
      });
    } else {
      console.log("RESEND_API_KEY not configured. Emails not sent. Submission stored in database.");
      console.log("Notification email would be sent to:", CONTACT_EMAIL);
      console.log("Auto-response would be sent to:", body.email);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process submission" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
