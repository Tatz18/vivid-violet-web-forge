import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const HomeFooter = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/81af2cac-f0ff-4ba8-ad13-a820ef1020f9.png" 
                alt="Phoenix Realesthatic" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Turning Properties into Prosperities. Your trusted partner in real estate success with expert guidance and personalized service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574123769484" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/phoenixrealesthatic?igsh=MXBkcTU0MnZzeDUwcA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/phoenix-realesthatic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/business-enquiry" className="text-gray-300 hover:text-white transition-colors">
                  Business Enquiry
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/property-sales" className="text-gray-300 hover:text-white transition-colors">
                  Property Sales
                </Link>
              </li>
              <li>
                <Link to="/services/property-rental" className="text-gray-300 hover:text-white transition-colors">
                  Property Rental
                </Link>
              </li>
              <li>
                <Link to="/services/investment-consulting" className="text-gray-300 hover:text-white transition-colors">
                  Investment Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/property-management" className="text-gray-300 hover:text-white transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/services/market-analysis" className="text-gray-300 hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="text-gray-300 text-sm">
                  <p>Regus Globsyn Crystals</p>
                  <p>X-11& 12, Block-EP</p>
                  <p>Saltlake Sector-V, Kolkata-91, IN</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 93301 02817</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">contact@phoenixrealesthatic.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Phoenix Realesthatic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/dashboard" className="text-gray-400 hover:text-white text-sm transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;