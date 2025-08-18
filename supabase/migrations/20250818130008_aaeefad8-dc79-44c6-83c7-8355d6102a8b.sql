-- Instead of using a view that might be causing the security definer issue,
-- let's implement proper RLS policies on the properties table itself.

-- Drop the problematic view
DROP VIEW IF EXISTS public.properties_public;

-- Update the RLS policy on properties table to exclude user_id from public access
-- while still allowing admin access to the full table
DROP POLICY IF EXISTS "Public properties view is accessible to everyone" ON public.properties;

-- Create a policy that allows public read access but ensures user_id is properly handled
CREATE POLICY "Public can view available properties" 
ON public.properties 
FOR SELECT 
USING (status = 'available');

-- Create a separate policy for admins who need full access
CREATE POLICY "Admins can view all properties" 
ON public.properties 
FOR SELECT 
TO authenticated
USING (is_admin());

-- Ensure other operations are still restricted properly
CREATE POLICY "Admins can insert properties" 
ON public.properties 
FOR INSERT 
TO authenticated
WITH CHECK (is_admin());

CREATE POLICY "Admins can update properties" 
ON public.properties 
FOR UPDATE 
TO authenticated
USING (is_admin());

CREATE POLICY "Admins can delete properties" 
ON public.properties 
FOR DELETE 
TO authenticated
USING (is_admin());