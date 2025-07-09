
import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, SlidersHorizontal } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from database
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Transform database properties to match the expected format
      const transformedProperties = data?.map((property) => ({
        id: property.id,
        title: property.title,
        price: property.price ? `₹${(property.price / 100000).toFixed(1)} Lakhs` : "Price on request",
        location: property.location || "Location not specified",
        image: property.image_url || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
        beds: property.bedrooms || 0,
        baths: property.bathrooms || 0,
        sqft: property.square_feet || 0,
        type: property.property_type || "Property"
      })) || [];

      setProperties(transformedProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  // Set search term from URL params on component mount
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);


  // Filter properties based on search criteria
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch = searchTerm === "" || 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = propertyType === "" || 
        property.type.toLowerCase() === propertyType.toLowerCase();

      const matchesPrice = priceRange === "" || (() => {
        const priceText = property.price.replace(/[₹,]/g, '').toLowerCase();
        const lakhs = priceText.includes('lakhs') ? parseFloat(priceText) : 0;
        const crores = priceText.includes('crores') ? parseFloat(priceText) * 100 : 0;
        const totalLakhs = lakhs + crores;
        
        switch (priceRange) {
          case "0-50l": return totalLakhs <= 50;
          case "50l-1cr": return totalLakhs > 50 && totalLakhs <= 100;
          case "1cr-2cr": return totalLakhs > 100 && totalLakhs <= 200;
          case "2cr+": return totalLakhs > 200;
          default: return true;
        }
      })();

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [properties, searchTerm, propertyType, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#dd4dc7] to-[#e966d4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Browse our extensive collection of premium properties and find your dream home today
          </p>
          <div className="flex items-center text-white/80">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{properties.length} Properties Available</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50l">₹0 - ₹50 Lakhs</SelectItem>
                  <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                  <SelectItem value="1cr-2cr">₹1 Crore - ₹2 Crore</SelectItem>
                  <SelectItem value="2cr+">₹2 Crore+</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="loft">Loft</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-primary hover:bg-primary/90 text-white hover-scale">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
              <Button variant="outline" size="sm">
                Sort: Price (Low to High)
              </Button>
              <Button variant="outline" size="sm">
                Map View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <p className="text-gray-600 mt-1">
              {searchTerm ? `Showing results for "${searchTerm}"` : "Showing all available properties in your area"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Grid View</Button>
            <Button variant="outline" size="sm">List View</Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="text-center">Loading properties...</div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center text-gray-500">
              No properties found. {searchTerm && `Try adjusting your search for "${searchTerm}".`}
            </div>
          ) : (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale"
          >
            Load More Properties
          </Button>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Properties;
