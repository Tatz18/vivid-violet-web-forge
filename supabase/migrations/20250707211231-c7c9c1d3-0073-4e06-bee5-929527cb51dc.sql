-- Allow public read access to properties for property detail pages
DROP POLICY IF EXISTS "Users can view their own properties" ON public.properties;

CREATE POLICY "Properties are publicly viewable" 
ON public.properties 
FOR SELECT 
USING (true);