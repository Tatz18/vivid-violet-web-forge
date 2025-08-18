-- Disable Row Level Security on properties table to work with SimpleAuth
-- Since the app uses client-side SimpleAuth instead of Supabase auth,
-- RLS policies that check auth.uid() will always fail
ALTER TABLE public.properties DISABLE ROW LEVEL SECURITY;