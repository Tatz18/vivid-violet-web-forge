import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface LocationData {
  location: string;
  count: number;
  image_url: string;
}

export const PopularLocations = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("location, image_url")
          .not("location", "is", null);

        if (error) throw error;

        // Group by location and count properties
        const locationMap = new Map<string, { count: number; image_url: string }>();
        
        data?.forEach((property) => {
          const location = property.location;
          if (location) {
            const existing = locationMap.get(location);
            if (existing) {
              existing.count += 1;
            } else {
              locationMap.set(location, {
                count: 1,
                image_url: property.image_url || getDefaultLocationImage(location)
              });
            }
          }
        });

        // Convert to array and sort by count
        const locationData = Array.from(locationMap.entries()).map(([location, data]) => ({
          location,
          count: data.count,
          image_url: data.image_url
        })).sort((a, b) => b.count - a.count).slice(0, 4); // Top 4 locations

        setLocations(locationData);
      } catch (error) {
        console.error("Error fetching location data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  const getDefaultLocationImage = (location: string) => {
    const imageMap: Record<string, string> = {
      "North Kolkata": "https://images.unsplash.com/photo-1590725175609-3ee9ecb6b7e4?w=400&h=300&fit=crop",
      "Central Kolkata": "https://images.unsplash.com/photo-1729095755814-9c18b4f18c99?w=400&h=300&fit=crop",
      "South Kolkata": "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&h=300&fit=crop",
      "Hoogly": "https://images.unsplash.com/photo-1647781550952-5fc6b7fc1f23?w=400&h=300&fit=crop",
      "Salt Lake": "https://images.unsplash.com/photo-1719754093851-cf4dc6c8d3fa?w=400&h=300&fit=crop",
      "New Town": "https://images.unsplash.com/photo-1692950166096-17b97bac8dbc?w=400&h=300&fit=crop",
      "Rajarhat": "https://images.unsplash.com/photo-1654870531351-23fd30b1c0aa?w=400&h=300&fit=crop",
      "Howrah": "https://images.unsplash.com/photo-1654844506325-8dab6cfdd9aa?w=400&h=300&fit=crop"
    };
    return imageMap[location] || "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&h=300&fit=crop";
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Popular Locations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are the most popular properties in Kolkata among homebuyers. 
              Who better to help you choose than those actually living there?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="overflow-hidden animate-pulse">
                <div className="bg-muted h-48 w-full"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (locations.length === 0) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Popular Locations</h2>
            <p className="text-muted-foreground text-lg">
              No properties available by location yet. Add some properties to see them here!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Popular Locations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the most popular properties in Kolkata among homebuyers. 
            Who better to help you choose than those actually living there?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Link key={location.location} to={`/properties?location=${encodeURIComponent(location.location)}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in h-full" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="relative">
                  <img 
                    src={location.image_url} 
                    alt={location.location}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-1">{location.location}</h3>
                  <p className="text-muted-foreground">
                    {location.count} {location.count === 1 ? 'Property' : 'Properties'}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};