import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PropertyUpdateData {
  title?: string;
  description?: string;
  price?: number;
  location?: string;
  property_type?: string;
  status?: string;
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  image_url?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.json();
    const { id: propertyId, operation, ...updateData } = requestBody;

    if (!propertyId) {
      return new Response(
        JSON.stringify({ error: 'Property ID is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create Supabase client with service role key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    console.log(`Admin property operation: ${operation} for property ${propertyId}`);

    if (operation === 'update') {
      const propertyUpdateData: PropertyUpdateData = updateData;
      
      console.log('Updating property with data:', propertyUpdateData);

      const { data, error } = await supabaseAdmin
        .from('properties')
        .update(propertyUpdateData)
        .eq('id', propertyId)
        .select();

      if (error) {
        console.error('Update error:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      console.log('Property updated successfully:', data);
      return new Response(
        JSON.stringify({ data }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );

    } else if (operation === 'delete') {
      console.log('Deleting property');

      const { error } = await supabaseAdmin
        .from('properties')
        .delete()
        .eq('id', propertyId);

      if (error) {
        console.error('Delete error:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      console.log('Property deleted successfully');
      return new Response(
        JSON.stringify({ success: true }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid operation' }),
      { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});