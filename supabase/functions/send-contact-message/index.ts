import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactMessageRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactMessageRequest = await req.json();

    console.log("Received contact message:", { name, email, subject });

    // Send email to the business
    const businessEmailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <contact@phoenixrealesthatic.com>",
      to: ["contact@phoenixrealesthatic.com"],
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Message from Website</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 15px;">
            <strong>Message:</strong>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">
          This message was sent from the Phoenix Realesthatic contact form.
        </p>
      `,
    });

    // Send confirmation email to the customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <contact@phoenixrealesthatic.com>",
      to: [email],
      subject: "Thank you for contacting Phoenix Realesthatic",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p>We have received your message regarding <strong>"${subject}"</strong> and will get back to you as soon as possible.</p>
          <p>Our team typically responds within 24 hours during business days.</p>
        </div>
        <div style="margin-top: 30px;">
          <h3>Your Message:</h3>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #dd4dc7;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 30px; padding: 20px; background: #ffeef9; border-radius: 8px;">
          <h3 style="color: #dd4dc7; margin-top: 0;">Contact Information</h3>
          <p><strong>Phone:</strong> +91 93301 02817</p>
          <p><strong>Email:</strong> contact@phoenixrealesthatic.com</p>
          <p><strong>Address:</strong> Regus Globsyn Crystals, X-11& 12, Block-EP, Saltlake Sector-V, Kolkata-91, IN</p>
        </div>
        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>The Phoenix Realesthatic Team</strong>
        </p>
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          If you have any urgent inquiries, please call us directly at +91 93301 02817.
        </p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact message sent successfully",
        email: {
          business: businessEmailResponse,
          confirmation: confirmationEmailResponse
        }
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-message function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        message: "Failed to send contact message"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);