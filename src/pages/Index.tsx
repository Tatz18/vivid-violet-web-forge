import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice } from "@/lib/utils";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(3);
        
        if (error) throw error;

        const transformedProperties = data?.map((property) => ({
          id: property.id,
          title: property.title,
          price: property.price ? formatPrice(property.price) : "Price on request",
          location: property.location || "Location not specified",
          image: property.image_url || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
          beds: property.bedrooms || 0,
          baths: property.bathrooms || 0,
          sqft: property.square_feet || 0,
          propertyType: property.property_type || "Single Family"
        })) || [];
        
        setProperties(transformedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const partnerLogos = [
    { name: "WATG", logo: "WATG" },
    { name: "IMPACT", logo: "IMPACT" },
    { name: "SRP", logo: "SRP" },
    { name: "DEVELOP", logo: "DEVELOP" },
    { name: "The Mutual Fund", logo: "The Mutual Fund" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-900 rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold tracking-wider">ASTRAVISTA</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                <span>Buy</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Sell</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Rent</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Mortgage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Agents & Offices</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </nav>

            {/* Menu */}
            <div className="flex items-center space-x-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                Experience<br />
                Real Estate<br />
                Agility
              </h1>
              
              <div className="flex items-center space-x-2 text-white/80">
                <span className="text-sm">View more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              
              <p className="text-white/70 max-w-md text-lg leading-relaxed">
                Discover luxury homes across America with our premier real estate agency. Our expert team is dedicated to guiding you through every step of the home-buying process.
              </p>

              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>New York, USA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <Button className="bg-white text-slate-900 hover:bg-white/90 px-6 py-3 text-base font-medium">
                  Find a home
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 text-base font-medium">
                  My home value
                </Button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter an address, city or zip"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Building Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              alt="Modern skyscrapers"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Current Listings Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Current Listings</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 animate-pulse">
                  <div className="bg-slate-700 h-48 w-full rounded-t-lg"></div>
                  <CardContent className="p-4">
                    <div className="h-4 bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 bg-slate-700 rounded mb-3 w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-slate-700 rounded w-1/4"></div>
                      <div className="h-3 bg-slate-700 rounded w-1/4"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Link key={property.id} to={`/property/${property.id}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-white">{property.price}</h3>
                      </div>
                      <div className="text-sm text-white/70 mb-3">
                        <div>{property.beds} beds | {property.baths} baths</div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{property.location}</span>
                        </div>
                      </div>
                      <div className="text-sm text-white/50">
                        {property.propertyType}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Partners Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">PARTNERS & CLIENTS</p>
            <h2 className="text-3xl font-bold">
              Our valued<br />
              collaborators and friends<br />
              over the last decade
            </h2>
          </div>

          <div className="flex justify-center items-center space-x-12 opacity-60">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="text-white/80 font-semibold text-lg">
                {partner.logo}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Sections */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {/* Seller's Assurance Program */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">THE SMARTEST CHOICE FOR HOME SELLERS</p>
              <h2 className="text-3xl font-bold mb-4">Seller's Assurance Program</h2>
              <p className="text-white/70 mb-6">
                Sell with AstraVista Real Estate and get amazing benefits like home improvements at no upfront cost and new technology to help find worthy buyers.
              </p>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn more
              </Button>
            </div>
            
            {/* Vertical text */}
            <div className="flex items-center space-x-8">
              <div className="writing-mode-vertical text-white/40 text-sm tracking-wider">
                Really Reliable
              </div>
              <div className="writing-mode-vertical text-white/40 text-sm tracking-wider">
                Buyer Connections
              </div>
            </div>
          </div>

          {/* AARP Benefits */}
          <div className="space-y-6">
            <div className="bg-slate-800/30 rounded-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                alt="Real estate consultation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-3">AARP® Real Estate Benefits</h3>
              <p className="text-white/70 text-sm mb-4">
                Did you know? AARP® members may earn $300 to $7,500 in benefits when buying or selling a home with a participating AstraVista affiliated agent.
              </p>
              <div className="flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;