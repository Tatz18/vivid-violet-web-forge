
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
      title: "2BHK Apartment - Avidipta",
      price: "₹88 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
      beds: 2,
      baths: 2,
      sqft: 834,
      type: "Apartment",
      description: "Beautiful 2BHK apartment in Avidipta complex on EM Bypass. Features modern amenities and excellent connectivity to major parts of Kolkata.",
      yearBuilt: 2019,
      floor: "2nd Floor",
      features: ["Modular Kitchen", "Vitrified Tiles", "24x7 Security", "Power Backup", "Parking Space", "Gated Community"],
      amenities: ["Lift", "Security", "Power Backup", "Water Supply", "Parking"],
      gallery: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
      ]
    },
    {
      id: 2,
      title: "3BHK Apartment - Sucasa",
      price: "₹73 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      beds: 3,
      baths: 2,
      sqft: 1454,
      type: "Apartment",
      description: "Spacious 3BHK apartment in Sucasa apartment complex. Well-planned layout with modern fittings and excellent location on EM Bypass.",
      yearBuilt: 2020,
      floor: "1st Floor",
      features: ["Semi-furnished", "Modular Kitchen", "Marble Flooring", "Balcony", "Cross Ventilation", "Ready to Move"],
      amenities: ["Lift", "Security", "Generator", "Water Tank", "Parking", "Garden"],
      gallery: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
      ]
    },
    {
      id: 3,
      title: "3BHK Apartment",
      price: "₹90 Lakhs",
      location: "Dhakuria, Kolkata",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 3,
      baths: 2,
      sqft: 1226,
      type: "Apartment",
      description: "Well-maintained 3BHK apartment in the heart of Dhakuria. Perfect for families looking for a peaceful residential area with good connectivity.",
      yearBuilt: 2018,
      floor: "5th Floor",
      features: ["Balcony", "Cross Ventilation", "Modular Kitchen", "Marble Flooring", "Ready to Move", "East Facing"],
      amenities: ["Lift", "Security", "Power Backup", "Water Supply", "Parking", "Terrace Access"],
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800"
      ]
    },
    {
      id: 4,
      title: "2BHK Apartment",
      price: "₹45 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
      beds: 2,
      baths: 2,
      sqft: 920,
      type: "Apartment",
      description: "Affordable 2BHK apartment on EM Bypass. Great for first-time buyers with easy access to IT hubs and shopping centers.",
      yearBuilt: 2017,
      floor: "4th Floor",
      features: ["Compact Design", "Good Ventilation", "Modular Kitchen", "Vitrified Tiles", "Ready to Move"],
      amenities: ["Lift", "Security", "Generator", "Water Tank", "Parking"],
      gallery: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
      ]
    },
    {
      id: 5,
      title: "3BHK Apartment - Manjuri Garden",
      price: "₹70 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      beds: 3,
      baths: 2,
      sqft: 1180,
      type: "Apartment",
      description: "Beautiful 3BHK apartment in Manjuri Garden complex. Well-planned layout with garden view and modern amenities.",
      yearBuilt: 2019,
      floor: "2nd Floor",
      features: ["Garden View", "Spacious Rooms", "Modular Kitchen", "Marble Flooring", "Balcony", "Cross Ventilation"],
      amenities: ["Lift", "24x7 Security", "Power Backup", "Water Supply", "Parking", "Garden", "Children's Play Area"],
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
      ]
    },
    {
      id: 6,
      title: "3BHK Apartment - Bakul Bagan",
      price: "₹65 Lakhs",
      location: "Bhawanipur, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "Apartment",
      description: "Spacious 3BHK apartment in Bakul Bagan area of Bhawanipur. Prime location with excellent connectivity and local amenities.",
      yearBuilt: 2020,
      floor: "4th Floor",
      features: ["Prime Location", "Spacious Layout", "High Ceiling", "Modular Kitchen", "Marble Flooring", "Multiple Balconies"],
      amenities: ["Lift", "Security", "Generator", "Water Supply", "Parking", "Rooftop Access"],
      gallery: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
      ]
    },
    {
      id: 7,
      title: "3BHK Apartment - Near Sishu Mangal Hospital",
      price: "₹2.25 Crores",
      location: "Sarat Bose Road, Kolkata",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 3,
      baths: 3,
      sqft: 1765,
      type: "Apartment",
      description: "Premium 3BHK apartment near Sishu Mangal Hospital on Sarat Bose Road. High-end building with modern amenities and prime location.",
      yearBuilt: 2021,
      floor: "3rd Floor (G+7 Building)",
      features: ["Premium Location", "3 Toilets", "Balcony", "High-end Fittings", "Near Gaja Park", "Hospital Proximity"],
      amenities: ["Lift", "24x7 Security", "Power Backup", "Water Supply", "Parking", "Intercom", "CCTV"],
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800"
      ]
    },
    {
      id: 8,
      title: "3BHK Apartment - Near Gaja Park",
      price: "₹2.10 Crores",
      location: "Asutosh Mukherjee Road, Kolkata",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      beds: 3,
      baths: 2,
      sqft: 2325,
      type: "Apartment",
      description: "Luxurious 3BHK apartment on Asutosh Mukherjee Road near Gaja Park. Spacious layout with premium fittings and excellent location.",
      yearBuilt: 2022,
      floor: "5th Floor",
      features: ["Luxury Fittings", "Near Park", "Spacious Layout", "Premium Location", "High-end Building", "Modern Design"],
      amenities: ["Lift", "24x7 Security", "Power Backup", "Water Supply", "Parking", "Gym", "Swimming Pool"],
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
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
                      <Home className="w-5 h-5 mr-3 text-[#dd4dc7]" />
                      <span className="font-medium">Floor:</span>
                      <span className="ml-2">{property.floor}</span>
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
