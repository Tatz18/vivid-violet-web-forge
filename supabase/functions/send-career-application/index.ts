import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CareerApplicationData {
  jobPosition: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobPosition, fullName, email, phone, experience, coverLetter }: CareerApplicationData = await req.json();

    // Send career application details to admin email
    const emailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <noreply@phoenixrealesthatic.com>",
      to: ["phoenixrealesthatic@gmail.com"],
      subject: `New Job Application - ${jobPosition} - Phoenix Realesthatic`,
      html: `
        <h2>New Job Application Received</h2>
        <p>A candidate has submitted an application with the following details:</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Candidate Details:</h3>
          <p><strong>Position Applied For:</strong> ${jobPosition}</p>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Experience Level:</strong> ${experience}</p>
          
          <h3>Cover Letter:</h3>
          <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">${coverLetter}</p>
        </div>
        
        <p>Please review the application and contact the candidate for further evaluation.</p>
        
        <p>Phoenix Realesthatic HR Team</p>
      `,
    });

    console.log("Career application email sent successfully:", emailResponse);

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
    console.error("Error sending career application email:", error);
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