
import Header from "@/components/Header";
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

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  // Set search term from URL params on component mount
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  const properties = [
    {
      id: 1,
      title: "2BHK Apartment - Avidipta",
      price: "₹88 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
      beds: 2,
      baths: 2,
      sqft: 834,
      type: "Apartment"
    },
    {
      id: 2,
      title: "3BHK Apartment - Sucasa",
      price: "₹73 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 3,
      baths: 2,
      sqft: 1454,
      type: "Apartment"
    },
    {
      id: 3,
      title: "3BHK Apartment - Dhakuria",
      price: "₹90 Lakhs",
      location: "Dhakuria, Kolkata",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      beds: 3,
      baths: 2,
      sqft: 1226,
      type: "Apartment"
    },
    {
      id: 4,
      title: "2BHK Apartment",
      price: "₹45 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
      beds: 2,
      baths: 2,
      sqft: 920,
      type: "Apartment"
    },
    {
      id: 5,
      title: "3BHK Manjuri Garden",
      price: "₹70 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500",
      beds: 3,
      baths: 2,
      sqft: 1180,
      type: "Apartment"
    },
    {
      id: 6,
      title: "3BHK Bakul Bagan",
      price: "₹65 Lakhs",
      location: "Bhawanipur, Kolkata",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500",
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "Apartment"
    },
    {
      id: 7,
      title: "3BHK Near Sishu Mangal Hospital",
      price: "₹2.25 Crores",
      location: "Sarat Bose Road, Kolkata",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      beds: 3,
      baths: 3,
      sqft: 1765,
      type: "Apartment",
      featured: true
    },
    {
      id: 8,
      title: "3BHK Near Gaja Park",
      price: "₹3.2 Crores",
      location: "Asutosh Mukherjee Road, Kolkata",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      beds: 3,
      baths: 2,
      sqft: 2325,
      type: "Apartment",
      featured: true
    }
  ];

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
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
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
    </div>
  );
};

export default Properties;
