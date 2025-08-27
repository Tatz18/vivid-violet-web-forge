
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

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
  id,
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
    <Link to={`/property/${id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer hover-lift animate-fade-in">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary/90 animate-scale-in">
              Featured
            </Badge>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {type}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors truncate">
              {title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="text-sm truncate">{location}</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-primary">{price}</p>
          </div>
          
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 pt-4 border-t gap-2">
            <div className="flex items-center min-w-0">
              <Bed className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{beds} Beds</span>
            </div>
            <div className="flex items-center min-w-0">
              <Bath className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{baths} Baths</span>
            </div>
            <div className="flex items-center min-w-0">
              <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{sqft} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
