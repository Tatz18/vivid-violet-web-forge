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

    // Send tour request details to admin email
    const emailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <noreply@phoenixrealesthatic.com>",
      to: ["mondaldebdip7585@gmail.com"],
      subject: "New Tour Request - Phoenix Realesthatic",
      html: `
        <h2>New Tour Request Received</h2>
        <p>A customer has submitted a tour request with the following details:</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Property of Interest:</strong> ${property}</p>
          <p><strong>Preferred Date:</strong> ${tour_date}</p>
          <p><strong>Preferred Time:</strong> ${tour_time}</p>
          ${special_requests ? `<p><strong>Special Requests:</strong> ${special_requests}</p>` : ''}
        </div>
        
        <p>Please contact the customer to confirm the appointment.</p>
        
        <p>Phoenix Realesthatic Admin Panel</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, email: emailResponse }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
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