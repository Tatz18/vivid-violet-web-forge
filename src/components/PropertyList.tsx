import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit } from "lucide-react";

interface PropertyListProps {
  properties: any[];
  onUpdate: () => void;
}

export const PropertyList = ({ properties, onUpdate }: PropertyListProps) => {
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    
    setLoading(id);
    try {
      const { error } = await supabase
        .from("properties")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Property deleted successfully",
      });
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "sold":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (properties.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No properties found. Add your first property!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          {property.image_url && (
            <div className="aspect-video overflow-hidden">
              <img
                src={property.image_url}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{property.title}</CardTitle>
              <Badge className={getStatusColor(property.status)}>
                {property.status}
              </Badge>
            </div>
            {property.location && (
              <CardDescription>{property.location}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {property.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {property.description}
              </p>
            )}
            
            <div className="space-y-2 mb-4">
              {property.price && (
                <p className="text-lg font-semibold text-primary">
                  {formatPrice(property.price)}
                </p>
              )}
              
              <div className="flex gap-4 text-sm text-muted-foreground">
                {property.bedrooms && (
                  <span>{property.bedrooms} bed</span>
                )}
                {property.bathrooms && (
                  <span>{property.bathrooms} bath</span>
                )}
                {property.square_feet && (
                  <span>{property.square_feet} sqft</span>
                )}
              </div>
              
              {property.property_type && (
                <p className="text-sm capitalize">{property.property_type}</p>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {/* TODO: Implement edit */}}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(property.id)}
                disabled={loading === property.id}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};