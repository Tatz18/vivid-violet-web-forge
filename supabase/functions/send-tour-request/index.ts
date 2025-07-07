import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TourRequestData {
  name: string;
  phone: string;
  email: string;
  property: string;
  tour_date: string;
  tour_time: string;
  special_requests: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, property, tour_date, tour_time, special_requests }: TourRequestData = await req.json();

    // Send email to the company (admin)
    const adminEmailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <tours@phoenixrealesthatic.com>",
      to: ["info@phoenixrealesthatic.com"], // Replace with your actual email
      subject: `New Tour Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dd4dc7; border-bottom: 2px solid #dd4dc7; padding-bottom: 10px;">
            New Property Tour Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Tour Details</h3>
            <p><strong>Property:</strong> ${property}</p>
            <p><strong>Preferred Date:</strong> ${tour_date}</p>
            <p><strong>Preferred Time:</strong> ${tour_time}</p>
          </div>
          
          ${special_requests ? `
            <div style="background-color: #fff8dc; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #333;">Special Requests</h3>
              <p>${special_requests}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #e8f5e8; padding: 15px; margin: 20px 0; border-radius: 8px;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>Action Required:</strong> Please contact the customer within 24 hours to confirm the tour appointment.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <tours@phoenixrealesthatic.com>",
      to: [email],
      subject: "Tour Request Received - Phoenix Realesthatic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dd4dc7; border-bottom: 2px solid #dd4dc7; padding-bottom: 10px;">
            Thank you for your tour request, ${name}!
          </h2>
          
          <p>We've received your request to schedule a property tour and our team will contact you shortly to confirm the details.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Your Tour Request Details</h3>
            <p><strong>Property:</strong> ${property}</p>
            <p><strong>Requested Date:</strong> ${tour_date}</p>
            <p><strong>Requested Time:</strong> ${tour_time}</p>
            ${special_requests ? `<p><strong>Special Requests:</strong> ${special_requests}</p>` : ''}
          </div>
          
          <div style="background-color: #e3f2fd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">What's Next?</h3>
            <ul style="padding-left: 20px;">
              <li>Our team will review your request within 24 hours</li>
              <li>We'll contact you via phone or email to confirm availability</li>
              <li>You'll receive a confirmation with exact tour details</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3e0; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Contact Us</h3>
            <p>If you have any questions or need to modify your request, please contact us:</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@phoenixrealesthatic.com</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Best regards,<br>
            The Phoenix Realesthatic Team<br>
            <em>"Turning Properties into Prosperities"</em>
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, customerEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmail: adminEmailResponse,
        customerEmail: customerEmailResponse 
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
    console.error("Error in send-tour-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);