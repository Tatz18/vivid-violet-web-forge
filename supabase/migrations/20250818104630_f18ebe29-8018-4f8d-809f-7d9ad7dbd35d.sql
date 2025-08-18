-- Update properties table RLS policies to allow admin access
-- Drop existing policies first
DROP POLICY IF EXISTS "Users can update their own properties" ON properties;
DROP POLICY IF EXISTS "Users can delete their own properties" ON properties;

-- Create new policies that allow admin access or user access
CREATE POLICY "Users and admins can update properties" 
ON properties 
FOR UPDATE 
USING (auth.uid() = user_id OR is_admin());

CREATE POLICY "Users and admins can delete properties" 
ON properties 
FOR DELETE 
USING (auth.uid() = user_id OR is_admin());