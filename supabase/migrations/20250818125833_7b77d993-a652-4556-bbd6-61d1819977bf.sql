-- Based on the security analysis, the 'security definer view' error likely refers to 
-- views that could potentially bypass RLS. Let's ensure our view is properly configured.

-- Drop the existing view and recreate it with explicit permissions
DROP VIEW IF EXISTS public.properties_public;

-- Create a simple view that doesn't inherit any special privileges
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

-- Ensure proper permissions (no special definer rights)
GRANT SELECT ON public.properties_public TO anon;
GRANT SELECT ON public.properties_public TO authenticated;

-- Revoke any potential definer rights that might have been inherited
REVOKE ALL ON public.properties_public FROM PUBLIC;
GRANT SELECT ON public.properties_public TO anon, authenticated;