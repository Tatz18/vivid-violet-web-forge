
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  ArrowLeft,
  MessageCircle,
  Calendar,
  Home
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("id", id)
          .single();
          
        if (error) throw error;
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button className="bg-[#dd4dc7] hover:bg-[#c341b3] text-white">
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(1)} Lakhs`;
  };

  const handleWhatsAppClick = () => {
    const formattedPrice = property.price ? formatPrice(property.price) : "Price on request";
    const message = `Hi! I'm interested in the property: ${property.title} located at ${property.location}. Price: ${formattedPrice}. Can you provide more information?`;
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/properties" className="inline-flex items-center text-[#dd4dc7] hover:text-[#c341b3] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Images */}
            <div className="mb-8">
              <img 
                src={property.image_url || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"} 
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Property Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#dd4dc7] hover:bg-[#c341b3]">
                  {property.property_type || "Property"}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location || "Location not specified"}</span>
              </div>
              <p className="text-3xl font-bold text-[#dd4dc7] mb-6">
                {property.price ? formatPrice(property.price) : "Price on request"}
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {property.description || "No description available"}
              </p>
            </div>

            {/* Property Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Bedrooms:</span>
                      <span className="ml-2">{property.bedrooms || 0}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Bathrooms:</span>
                      <span className="ml-2">{property.bathrooms || 0}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Square Feet:</span>
                      <span className="ml-2">{property.square_feet || 0} sqft</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Home className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Property Type:</span>
                      <span className="ml-2 capitalize">{property.property_type || "Property"}</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Status:</span>
                      <span className="ml-2 capitalize">{property.status || "Available"}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with us for more information, schedule a viewing, or discuss financing options.
                </p>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#dd4dc7] hover:bg-[#c341b3] text-white mb-4"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Click here to know more
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Contact us on WhatsApp for instant response</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
