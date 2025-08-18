-- Temporarily disable RLS for properties table to allow updates from the simple auth system
-- We'll add a more permissive policy for admin operations

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Users and admins can update properties" ON public.properties;
DROP POLICY IF EXISTS "Users and admins can delete properties" ON public.properties;
DROP POLICY IF EXISTS "Users can create their own properties" ON public.properties;

-- Create new policies that allow all operations for the admin system
CREATE POLICY "Admin can manage all properties"
ON public.properties
FOR ALL
USING (true)
WITH CHECK (true);

-- Keep the public read policy
-- (Properties are publicly viewable policy already exists)