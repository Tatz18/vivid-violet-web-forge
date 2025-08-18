-- Fix storage RLS policies for property-images bucket to allow uploads from admin system

-- Drop existing restrictive policies on storage.objects
DROP POLICY IF EXISTS "Users can upload their own files" ON storage.objects;
DROP POLICY IF EXISTS "Users can view their own files" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own files" ON storage.objects;

-- Create permissive policies for property-images bucket to allow admin uploads
CREATE POLICY "Allow all operations on property-images"
ON storage.objects
FOR ALL
USING (bucket_id = 'property-images')
WITH CHECK (bucket_id = 'property-images');