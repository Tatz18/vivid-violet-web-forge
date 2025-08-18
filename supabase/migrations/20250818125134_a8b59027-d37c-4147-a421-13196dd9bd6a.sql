-- Fix the security definer view by recreating it properly
DROP VIEW IF EXISTS public.properties_public;

-- Create a proper view without SECURITY DEFINER
CREATE VIEW public.properties_public AS
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