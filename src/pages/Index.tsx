import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { 
  Home, 
  Search, 
  TrendingUp, 
  Users, 
  ArrowRight,
  MapPin,
  Building2,
  DollarSign,
  Filter,
  Phone,
  Mail,
  Clock,
  Award,
  Shield,
  CheckCircle,
  Star
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

  const stats = [
    { number: "250+", label: "Properties Available" },
    { number: "100+", label: "Happy Customers" },
    { number: "30%", label: "Average Price Drop" },
    { number: "4.9", label: "Customer Rating" }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Historic Home With Modern Upgrades",
      location: "Salt Lake, Kolkata",
      price: "₹95 Lakh",
      beds: 3,
      baths: 2,
      sqft: "1,456 sq ft",
      tag: "Sale",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
    },
    {
      id: 2,
      title: "Conveniently Located Townhouse",
      location: "Dhakuria, Kolkata",
      price: "₹90 Lakh",
      beds: 3,
      baths: 2,
      sqft: "1,226 sq ft",
      tag: "Sale",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
    },
    {
      id: 3,
      title: "Historic Home With Modern Upgrades",
      location: "EM Bypass, Kolkata",
      price: "₹70 Lakh",
      beds: 3,
      baths: 2,
      sqft: "1,180 sq ft",
      tag: "Sale",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500"
    },
    {
      id: 4,
      title: "Conveniently Located Townhouse",
      location: "Bhawanipur, Kolkata",
      price: "₹65 Lakh",
      beds: 3,
      baths: 2,
      sqft: "1,600 sq ft",
      tag: "Sale",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500"
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Personalized Service",
      description: "Dedicated agents to help you navigate the complex real estate process."
    },
    {
      icon: Users,
      title: "Expert Local Agents",
      description: "Experienced professionals who know your neighborhood inside and out."
    },
    {
      icon: TrendingUp,
      title: "Track Records",
      description: "Proven success in helping clients buy and sell properties efficiently."
    },
    {
      icon: Award,
      title: "Advanced Search Filters",
      description: "Find exactly what you're looking for with our powerful search tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Start Your Search
                <br />
                For The <span className="text-white/90">Perfect Living Space</span> Now
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequam non molestie 
                laboriosam accusamus ratione ut voluptatem a adipisci dignissimos ab.
              </p>
              
              {/* Search Form */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl animate-scale-in">
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <Input
                        placeholder="Enter location"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Type</label>
                    <div className="relative">
                      <Home className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <Input
                        placeholder="Property type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <div className="relative">
                      <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <Input
                        placeholder="Max budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleSearch}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                >
                  Search Property
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" alt="" />
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-sm font-bold">
                    2K+
                  </div>
                </div>
                <div>
                  <p className="text-sm opacity-90">Your Trusted Real Estate Adviser! Dedicated to Making Your</p>
                  <p className="text-sm opacity-90">Home Dreams a Reality! Connect Services</p>
                </div>
              </div>
            </div>

            {/* Right Content - Property Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=700&fit=crop" 
                  alt="Modern home"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                {/* Floating Stats */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Customer satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Your Ideal Living Space!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary">{property.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Explore all listings
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Real Estate Partner
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow group border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our FAQ
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How Much Can I Afford To Spend On A House?</h3>
              <p className="text-gray-600">Your budget should typically be 3-4 times your annual income. Consider down payment, monthly payments, and additional costs like maintenance and taxes.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What Is The Process Of Buying A House?</h3>
              <p className="text-gray-600">The process includes getting pre-approved, finding a property, making an offer, inspection, and closing. We guide you through each step.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What Should I Look For When Viewing A Property?</h3>
              <p className="text-gray-600">Check the location, condition, size, amenities, and potential for appreciation. Our agents help you evaluate each property thoroughly.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How Much Should I Offer When Buying A Home?</h3>
              <p className="text-gray-600">Your offer should be based on market analysis, property condition, and comparable sales. We provide expert guidance on competitive pricing.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their dream homes with PropertyHub. Let's start your real estate journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                <Phone className="w-4 h-4 mr-2" />
                Get Started Today
              </Button>
            </Link>
            <Link to="/properties">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Browse Properties
              </Button>
            </Link>
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
                <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
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