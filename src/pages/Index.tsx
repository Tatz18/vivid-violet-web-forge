import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [popularProperties, setPopularProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(6);
        
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
        })) || [];
        
        setPopularProperties(transformedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setPopularProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Main Hero Section - Exact Dribbble Layout */}
      <section className="relative min-h-screen bg-slate-900 overflow-hidden">
        {/* Curved Line Background Element */}
        <div className="absolute top-20 left-20 w-80 h-80 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M50,200 Q200,50 350,200 Q200,350 50,200" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-8 min-h-[90vh]">
            {/* Left Column - Main Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Experience
                  <br />
                  Real Estate
                  <br />
                  <span className="text-white/90">Agility</span>
                </h1>
                
                <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
                  Discover luxury homes across America with our premier real estate agency. Our expert team is dedicated to guiding you through every step of the home-buying process.
                </p>
                
                {/* Location */}
                <div className="flex items-center gap-2 mb-8">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">New York USA</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg backdrop-blur-sm">
                    Find a home
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                    My home value
                  </Button>
                </div>
                
                {/* Search Bar */}
                <div className="flex items-center bg-white/5 border border-white/20 rounded-lg p-3 max-w-md">
                  <Search className="w-5 h-5 text-white/60 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter an address, city or zip"
                    className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Column - Current Listings & Sections */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Current Listings Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Current Listings</h3>
                  <div className="w-12 h-1 bg-white/20 rounded-full">
                    <div className="w-6 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {loading ? (
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2 animate-pulse">
                        <div className="h-24 bg-white/10 rounded mb-2"></div>
                        <div className="h-3 bg-white/10 rounded mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {popularProperties.slice(0, 3).map((property) => (
                      <Link key={property.id} to={`/property/${property.id}`}>
                        <div className="bg-white/5 hover:bg-white/10 rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer">
                          <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="p-3">
                            <h4 className="text-white font-semibold text-sm mb-1">{property.price}</h4>
                            <p className="text-white/60 text-xs truncate">{property.title}</p>
                            <p className="text-white/50 text-xs">{property.beds}BR/{property.baths}BA</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Collaborators Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white text-lg font-semibold mb-4 leading-tight">
                  Our valued<br />
                  <span className="text-white/70">collaborators and friends</span><br />
                  <span className="text-white/50 text-sm">over the last decade</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center h-12">
                    <span className="text-white/80 font-semibold text-sm">WATG</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center h-12">
                    <span className="text-white/80 font-semibold text-sm">IMPACT</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center h-12">
                    <span className="text-white/80 font-semibold text-sm">360°</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center h-12">
                    <span className="text-white/80 font-semibold text-sm">BH</span>
                  </div>
                </div>
              </div>
              
              {/* Seller's Assurance Program */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-white/60 text-xs mb-2 uppercase tracking-wide">
                  The smartest choice for home sellers
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Seller's Assurance Program</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  Get cash advances, price cues and sell with confidence! Understanding we'll try to offer the service you need to move the home-buying process forward.
                </p>
                <Button className="bg-white text-slate-900 hover:bg-white/90 px-4 py-2 text-sm rounded-lg mb-4">
                  Learn more
                </Button>
                
                {/* Program Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">AAA+ Real Estate</span>
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-xs mb-1">Our premium Advisor program</div>
                  <div className="text-white/80 text-xs">
                    $240k+ revenue experience<br />
                    <span className="text-white/60">Learn more →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HomeFooter />
    </div>
  );
};

export default Index;