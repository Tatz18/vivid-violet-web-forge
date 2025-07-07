
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  image, 
  beds, 
  baths, 
  sqft, 
  type,
  featured = false 
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-[#dd4dc7] hover:bg-[#c341b3]">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#dd4dc7] transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-2xl font-bold text-[#dd4dc7]">{price}</p>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 pt-4 border-t">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
