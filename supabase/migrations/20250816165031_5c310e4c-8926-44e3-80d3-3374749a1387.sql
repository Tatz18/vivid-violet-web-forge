-- Update existing property locations to use proper capitalization
UPDATE public.properties 
SET location = 'North Kolkata'
WHERE location = 'north kolkata';

UPDATE public.properties 
SET location = 'Central Kolkata'
WHERE location = 'central kolkata';

UPDATE public.properties 
SET location = 'South Kolkata'
WHERE location = 'south kolkata';

UPDATE public.properties 
SET location = 'Hoogly'
WHERE location = 'hoogly';