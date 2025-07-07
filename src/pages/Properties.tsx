
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
import { useState } from "react";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$850,000",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Loft",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$1,250,000",
      location: "Suburban Hills",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      beds: 4,
      baths: 3,
      sqft: 2500,
      type: "House",
      featured: true
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$675,000",
      location: "Marina Bay",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
      beds: 1,
      baths: 1,
      sqft: 850,
      type: "Condo"
    },
    {
      id: 4,
      title: "Victorian Townhouse",
      price: "$950,000",
      location: "Historic Quarter",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "Townhouse"
    },
    {
      id: 5,
      title: "Penthouse Suite",
      price: "$2,100,000",
      location: "City Center",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500",
      beds: 3,
      baths: 3,
      sqft: 2200,
      type: "Penthouse",
      featured: true
    },
    {
      id: 6,
      title: "Garden Apartment",
      price: "$425,000",
      location: "Green Valley",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
      beds: 2,
      baths: 1,
      sqft: 950,
      type: "Apartment"
    },
    {
      id: 7,
      title: "Contemporary Villa",
      price: "$1,800,000",
      location: "Hillside Estates",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 5,
      baths: 4,
      sqft: 3500,
      type: "Villa"
    },
    {
      id: 8,
      title: "Studio Downtown",
      price: "$320,000",
      location: "Arts District",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500",
      beds: 1,
      baths: 1,
      sqft: 600,
      type: "Studio"
    },
    {
      id: 9,
      title: "Beachfront House",
      price: "$1,650,000",
      location: "Coastal Drive",
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "House",
      featured: true
    }
  ];

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
                  <SelectItem value="0-500k">$0 - $500k</SelectItem>
                  <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m+">$2M+</SelectItem>
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

              <Button className="bg-[#dd4dc7] hover:bg-[#c341b3] text-white">
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
              {properties.length} Properties Found
            </h2>
            <p className="text-gray-600 mt-1">
              Showing all available properties in your area
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Grid View</Button>
            <Button variant="outline" size="sm">List View</Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 border-[#dd4dc7] text-[#dd4dc7] hover:bg-[#dd4dc7] hover:text-white"
          >
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
