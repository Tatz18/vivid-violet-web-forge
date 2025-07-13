import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BusinessEnquiryData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  projectType: string;
  budget: string;
  timeline: string;
  location: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { companyName, contactPerson, email, phone, businessType, projectType, budget, timeline, location, message }: BusinessEnquiryData = await req.json();

    // Send business enquiry details to admin email
    const emailResponse = await resend.emails.send({
      from: "Phoenix Realesthatic <noreply@phoenixrealesthatic.com>",
      to: ["phoenixrealesthatic@gmail.com"],
      subject: "New Business Enquiry - Phoenix Realesthatic",
      html: `
        <h2>New Business Enquiry Received</h2>
        <p>A business has submitted an enquiry with the following details:</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Company Details:</h3>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Contact Person:</strong> ${contactPerson}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Project Information:</h3>
          <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <p><strong>Preferred Location:</strong> ${location || 'Not specified'}</p>
          
          <h3>Project Details:</h3>
          <p>${message || 'No additional details provided'}</p>
        </div>
        
        <p>Please contact the client to discuss their business requirements.</p>
        
        <p>Phoenix Realesthatic Admin Panel</p>
      `,
    });

    console.log("Business enquiry email sent successfully:", emailResponse);

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
    console.error("Error sending business enquiry email:", error);
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