-- Update existing property locations to use standardized names
UPDATE public.properties 
SET location = 'north kolkata'
WHERE location IN ('resale', 'resale, bakulbagan', '1454sqft');

UPDATE public.properties 
SET location = 'south kolkata'
WHERE location IN ('avidipta, em bypass');

UPDATE public.properties 
SET location = 'central kolkata'
WHERE location IN (' ManjuriGarden');

-- You can add more mappings as needed for other existing locations