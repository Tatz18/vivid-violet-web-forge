import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Check, AlertCircle } from "lucide-react";

interface BulkPropertyImportProps {
  onSuccess: () => void;
}

export const BulkPropertyImport = ({ onSuccess }: BulkPropertyImportProps) => {
  const [textData, setTextData] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsedProperties, setParsedProperties] = useState<any[]>([]);
  const { toast } = useToast();

  const parsePropertyData = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const properties = [];

    for (const line of lines) {
      try {
        // Remove numbering (1., 2., etc.)
        const cleanLine = line.replace(/^\d+\./, '').trim();
        const parts = cleanLine.split('/');
        
        if (parts.length < 8) continue;

        // Extract BHK info
        const bhkMatch = parts[0].match(/(\d+)bhk/i);
        const bedrooms = bhkMatch ? parseInt(bhkMatch[1]) : 1;
        
        // Property type
        const propertyType = parts[1]?.toLowerCase().includes('apartment') ? 'apartment' : 'house';
        
        // Location (combine multiple location parts)
        let location = parts[2] || '';
        if (parts.length > 10) {
          location += ', ' + parts[parts.length - 1];
        }
        
        // Square feet
        const sqftMatch = parts[3]?.match(/(\d+)sqft/i);
        const squareFeet = sqftMatch ? parseInt(sqftMatch[1]) : null;
        
        // Floor
        const floor = parts[4] || '';
        
        // Bedrooms (override if specified)
        const bedroomMatch = parts[5]?.match(/(\d+)bedroom/i);
        const finalBedrooms = bedroomMatch ? parseInt(bedroomMatch[1]) : bedrooms;
        
        // Bathrooms
        const bathroomMatch = parts[6]?.match(/(\d+)bathroom/i);
        const bathrooms = bathroomMatch ? parseInt(bathroomMatch[1]) : 1;
        
        // Price (look for price in lakhs or crores)
        let price = null;
        for (const part of parts) {
          const lakhMatch = part.match(/(\d+(?:\.\d+)?)l/i);
          const croreMatch = part.match(/(\d+(?:\.\d+)?)cr/i);
          
          if (lakhMatch) {
            price = parseFloat(lakhMatch[1]) * 100000; // Convert lakhs to rupees
          } else if (croreMatch) {
            price = parseFloat(croreMatch[1]) * 10000000; // Convert crores to rupees
          }
        }
        
        // Generate title
        const title = `${finalBedrooms}BHK ${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)} at ${location}`;
        
        properties.push({
          title,
          property_type: propertyType,
          bedrooms: finalBedrooms,
          bathrooms,
          square_feet: squareFeet,
          price,
          location,
          status: 'available',
          description: `${finalBedrooms}BHK ${propertyType} on ${floor}. ${squareFeet ? squareFeet + ' sqft.' : ''} Located in ${location}.`.trim()
        });
        
      } catch (error) {
        console.error('Error parsing line:', line, error);
      }
    }
    
    return properties;
  };

  const handlePreview = () => {
    const properties = parsePropertyData(textData);
    setParsedProperties(properties);
    
    if (properties.length === 0) {
      toast({
        title: "No Properties Found",
        description: "Unable to parse any properties from the provided text. Please check the format.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Properties Parsed",
        description: `Found ${properties.length} properties ready to import.`,
      });
    }
  };

  const handleImport = async () => {
    if (parsedProperties.length === 0) {
      toast({
        title: "No Properties",
        description: "Please preview the properties first.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const propertiesWithUserId = parsedProperties.map(property => ({
        ...property,
        user_id: user.id
      }));

      const { error } = await supabase
        .from("properties")
        .insert(propertiesWithUserId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Successfully imported ${parsedProperties.length} properties!`,
      });
      
      setTextData("");
      setParsedProperties([]);
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Bulk Property Import
          </CardTitle>
          <CardDescription>
            Paste your property data below. Each property should be on a new line.
            Format: bhk/type/location/sqft/floor/bedrooms/bathrooms/kitchen/hall/price/additional_location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your property data here...&#10;Example:&#10;1.2bhk apartment/resale/avidipta/834sqft/2nd floor/2bedroom/2bathroom/1kitchen/1hall/88l/em bypass"
            value={textData}
            onChange={(e) => setTextData(e.target.value)}
            rows={10}
            className="font-mono text-sm"
          />
          
          <div className="flex gap-2">
            <Button 
              onClick={handlePreview} 
              variant="outline"
              disabled={!textData.trim()}
            >
              Preview Properties
            </Button>
            
            <Button 
              onClick={handleImport}
              disabled={loading || parsedProperties.length === 0}
              className="flex items-center gap-2"
            >
              {loading ? "Importing..." : "Import Properties"}
              {parsedProperties.length > 0 && <Check className="w-4 h-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {parsedProperties.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              Parsed Properties ({parsedProperties.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {parsedProperties.map((property, index) => (
                <div key={index} className="p-3 border rounded-lg text-sm">
                  <div className="font-medium">{property.title}</div>
                  <div className="text-muted-foreground">
                    {property.bedrooms} bed, {property.bathrooms} bath, 
                    {property.square_feet && ` ${property.square_feet} sqft,`}
                    {property.price && ` ₹${(property.price / 100000).toFixed(1)}L`}
                  </div>
                  <div className="text-xs text-muted-foreground">{property.location}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};