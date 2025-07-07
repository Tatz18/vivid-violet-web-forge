import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search, 
  ArrowRight,
  MapPin,
  Building2,
  DollarSign,
  Home,
  Users,
  Clock,
  Award,
  Shield,
  CheckCircle,
  Phone,
  Star,
  Bed,
  Bath,
  Square
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/properties');
  };

  // How it Works Steps
  const workSteps = [
    {
      step: "1",
      title: "Start & Discuss",
      description: "We start by understanding your needs, budget, and preferences for your perfect property."
    },
    {
      step: "2",
      title: "Choose A List",
      description: "Browse through our curated list of properties that match your specific criteria."
    },
    {
      step: "3",
      title: "Finalize & Buy",
      description: "Complete the paperwork and finalize your dream property with our expert guidance."
    }
  ];

  // Why Work With Us Features
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Our Benefits",
      description: "Comprehensive insurance coverage and legal protection for all transactions."
    },
    {
      icon: Clock,
      title: "Traditional methods",
      description: "Time-tested approaches combined with modern technology for optimal results."
    },
    {
      icon: Users,
      title: "Flexibility",
      description: "Customized solutions and flexible payment terms to suit your requirements."
    },
    {
      icon: Award,
      title: "Communication",
      description: "Clear and transparent communication throughout your property journey."
    },
    {
      icon: CheckCircle,
      title: "Greater control",
      description: "You maintain full control over decisions with our expert guidance and support."
    },
    {
      icon: Star,
      title: "Increased transparency",
      description: "Complete transparency in pricing, documentation, and all property details."
    }
  ];

  // Popular Listings
  const popularProperties = [
    {
      id: 1,
      title: "2BHK Apartment - Avidipta",
      price: "₹88 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
      beds: 2,
      baths: 2,
      sqft: 834,
      tag: "Featured"
    },
    {
      id: 2,
      title: "3BHK Apartment - Sucasa",
      price: "₹73 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 3,
      baths: 2,
      sqft: 1454,
      tag: "New Listed"
    },
    {
      id: 3,
      title: "3BHK Apartment",
      price: "₹90 Lakhs",
      location: "Dhakuria, Kolkata",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
      beds: 3,
      baths: 2,
      sqft: 1226,
      tag: "Hot Listed"
    },
    {
      id: 4,
      title: "2BHK Apartment",
      price: "₹45 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
      beds: 2,
      baths: 2,
      sqft: 920,
      tag: "Popular"
    },
    {
      id: 5,
      title: "3BHK Apartment - Manjuri Garden",
      price: "₹70 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      beds: 3,
      baths: 2,
      sqft: 1180,
      tag: "New Listed"
    },
    {
      id: 6,
      title: "3BHK Apartment - Bakul Bagan",
      price: "₹65 Lakhs",
      location: "Bhawanipur, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 3,
      baths: 2,
      sqft: 1600,
      tag: "Featured"
    }
  ];

  // Newest Properties (last 3)
  const newestProperties = popularProperties.slice(-3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover and Your
                <br />
                <span className="text-white/90">Perfect Dream Home</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Whether you're looking for a cozy retreat, a modern apartment or a spacious family home, we have the perfect property waiting for you.
              </p>
              
              {/* Search Form */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl animate-scale-in text-gray-900">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Find your Best Property what do you want!</h3>
                <p className="text-sm text-gray-600 mb-4">Please fill all the details</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Kolkata, Location</label>
                      <Input placeholder="Enter location" className="border-0 bg-gray-50" />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Apartment Types</label>
                      <Select>
                        <SelectTrigger className="border-0 bg-gray-50">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2bhk">2 BHK</SelectItem>
                          <SelectItem value="3bhk">3 BHK</SelectItem>
                          <SelectItem value="4bhk">4 BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">₹30-50 Lakh</label>
                      <Select>
                        <SelectTrigger className="border-0 bg-gray-50">
                          <SelectValue placeholder="Budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30-50">₹30-50 Lakh</SelectItem>
                          <SelectItem value="50-80">₹50-80 Lakh</SelectItem>
                          <SelectItem value="80-1cr">₹80 Lakh - 1 Crore</SelectItem>
                          <SelectItem value="1cr+">₹1 Crore+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSearch}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-semibold rounded-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Property Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop" 
                alt="Modern home"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How its Work</h2>
          </div>
          
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Same steps repeated as in design */}
          <div className="grid md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={`second-${index}`} className="text-center animate-fade-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Listing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Popular Listing</h2>
            <Link to="/properties">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                All View Property
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProperties.map((property, index) => (
              <Link key={property.id} to={`/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.tag}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{property.title}</h3>
                      <span className="text-lg font-bold text-gray-900">{property.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.beds} Bed
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.baths} Bathroom
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.sqft} sqft
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newest Property Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Newest Property</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newestProperties.map((property, index) => (
              <Link key={property.id} to={`/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{property.title}</h3>
                      <span className="text-lg font-bold text-gray-900">{property.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.beds} Bed
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.baths} Bathroom
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.sqft} sqft
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Phoenix Realesthatic
              </h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in real estate, helping you find the perfect property since 2008.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4" />
                <span>Licensed & Bonded</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Property Sales</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Property Management</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Market Analysis</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Investment Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Property Street</p>
                <p>Kolkata, West Bengal 700001</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@phoenixrealesthatic.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Phoenix Realesthatic. All rights reserved. | Licensed Real Estate Broker</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;