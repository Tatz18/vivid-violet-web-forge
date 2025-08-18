-- Fix SECURITY DEFINER functions by adding proper search_path configuration
-- This prevents SQL injection attacks and follows security best practices

-- Update is_admin function with proper search_path
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id
      AND role = 'admin'
  );
$function$;

-- Update handle_new_user function with proper search_path  
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$function$;

-- Update other functions that may need search_path fixes
CREATE OR REPLACE FUNCTION public.generate_slug(title text)
RETURNS text
LANGUAGE plpgsql
STABLE
SET search_path = public
AS $function$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
      '\s+', '-', 'g'
    )
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_blogs_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;