-- Drop the publicly viewable policy that exposes user_id
DROP POLICY IF EXISTS "Properties are publicly viewable" ON public.properties;

-- Create a view for public property access that excludes user_id
CREATE OR REPLACE VIEW public.properties_public AS
SELECT 
  id,
  price,
  bedrooms,
  bathrooms,
  square_feet,
  created_at,
  updated_at,
  description,
  image_url,
  location,
  property_type,
  status,
  title
FROM public.properties
WHERE status = 'available';

-- Create RLS policy for the public view
CREATE POLICY "Public properties view is accessible to everyone"
ON public.properties
FOR SELECT
USING (status = 'available');

-- Grant access to the public view
GRANT SELECT ON public.properties_public TO anon;
GRANT SELECT ON public.properties_public TO authenticated;