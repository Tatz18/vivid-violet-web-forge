
import { useParams, Link } from "react-router-dom";
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
  Home,
  Car,
  Wifi,
  Shield,
  Trees,
  Dumbbell
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  
  // Mock property data - in a real app, this would come from an API
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$850,000",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Loft",
      featured: true,
      description: "Experience luxury living in this stunning modern loft located in the heart of downtown. This beautifully designed space features high ceilings, large windows, and premium finishes throughout.",
      yearBuilt: 2020,
      parking: 1,
      features: ["High Ceilings", "Hardwood Floors", "Modern Kitchen", "City Views", "In-unit Laundry", "Rooftop Access"],
      amenities: ["Gym", "Rooftop Terrace", "Concierge", "Security", "Storage"],
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
      ]
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$1,250,000",
      location: "Suburban Hills",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      beds: 4,
      baths: 3,
      sqft: 2500,
      type: "House",
      featured: true,
      description: "Beautiful family home nestled in the prestigious Suburban Hills neighborhood. This spacious property offers comfort, elegance, and modern amenities perfect for family living.",
      yearBuilt: 2018,
      parking: 2,
      features: ["Open Floor Plan", "Gourmet Kitchen", "Master Suite", "Walk-in Closets", "Backyard", "Fireplace"],
      amenities: ["Swimming Pool", "Garden", "Garage", "Security System", "Central Air"],
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
      ]
    }
  ];

  const property = properties.find(p => p.id === parseInt(id || '1'));
  
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

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in the property: ${property.title} located at ${property.location}. Price: ${property.price}. Can you provide more information?`;
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
                src={property.image} 
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Property Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#dd4dc7] hover:bg-[#c341b3]">
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
              <p className="text-3xl font-bold text-[#dd4dc7] mb-6">{property.price}</p>
              
              <p className="text-gray-600 text-lg leading-relaxed">{property.description}</p>
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
                      <span className="ml-2">{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Bathrooms:</span>
                      <span className="ml-2">{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Square Feet:</span>
                      <span className="ml-2">{property.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Year Built:</span>
                      <span className="ml-2">{property.yearBuilt}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Parking:</span>
                      <span className="ml-2">{property.parking} spaces</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Property Type:</span>
                      <span className="ml-2">{property.type}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#dd4dc7] rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#dd4dc7] rounded-full mr-3"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
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
