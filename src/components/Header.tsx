
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { ScheduleTourModal } from "@/components/ScheduleTourModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md shadow-sm border-b border-gray-100 transition-colors duration-300 ${
      isScrolled ? 'bg-[#d745a6]/95' : 'bg-white/95'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 93301 02817</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@phoenixrealesthatic.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61574123769484" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/phoenixrealesthatic?igsh=MXBkcTU0MnZzeDUwcA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/phoenix-realesthatic/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center animate-fade-in">
            <img 
              src="/lovable-uploads/81af2cac-f0ff-4ba8-ad13-a820ef1020f9.png" 
              alt="Phoenix Realesthatic - Turning Properties into Prosperities" 
              className={`h-40 md:h-32 w-auto hover-scale transition-all duration-300 ${
                isScrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 story-link ${
                  isActive(item.path)
                    ? isScrolled 
                      ? "text-white bg-white/20" 
                      : "text-primary bg-primary/5"
                    : isScrolled
                      ? "text-white hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ScheduleTourModal>
              <Button 
                variant="outline" 
                size="sm"
                className={`transition-all duration-300 hover-lift ${
                  isScrolled
                    ? "border-white text-white hover:bg-white hover:text-[#d745a6]"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Schedule Tour
              </Button>
            </ScheduleTourModal>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-white hover:text-white hover:bg-white/10"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-in-down">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors hover-lift ${
                    isActive(item.path)
                      ? isScrolled 
                        ? "text-white bg-white/20" 
                        : "text-primary bg-primary/5"
                      : isScrolled
                        ? "text-white hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
               <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                 <ScheduleTourModal>
                   <Button 
                     variant="outline" 
                     size="sm" 
                     className={`transition-all duration-300 ${
                       isScrolled
                         ? "border-white text-white hover:bg-white hover:text-[#d745a6]"
                         : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                     }`}
                   >
                     Schedule Tour
                   </Button>
                 </ScheduleTourModal>
               </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
