-- Remove the overly permissive policy that uses 'true' condition
-- This policy allows any authenticated user to manage all properties, which is a security risk
DROP POLICY IF EXISTS "Admin can manage all properties" ON public.properties;

-- The table already has proper specific policies that use is_admin():
-- - "Admins can delete properties" 
-- - "Admins can insert properties"
-- - "Admins can update properties" 
-- - "Admins can view all properties"
-- - "Public can view available properties"
-- So the overly permissive policy is redundant and dangerous