
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  showSearch?: boolean;
}

const Hero = ({ title, subtitle, showSearch = false }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/properties');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onError={(e) => console.log('Video failed to load:', e)}
      >
        <source src="https://cdn.pixabay.com/video/2023/09/15/181815-866182078_large.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2022/03/06/110344-686273050_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
        
        {showSearch && (
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter location, property type..."
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <Button onClick={handleSearch} className="bg-white text-primary hover:bg-gray-100 hover-scale px-8 py-3">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/properties">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale px-8">
              Browse Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-lift px-8">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
