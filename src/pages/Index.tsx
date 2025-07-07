
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Home, 
  Search, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const Index = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$850,000",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Loft",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$1,250,000",
      location: "Suburban Hills",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      beds: 4,
      baths: 3,
      sqft: 2500,
      type: "House",
      featured: true
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$675,000",
      location: "Marina Bay",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
      beds: 1,
      baths: 1,
      sqft: 850,
      type: "Condo",
      featured: true
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through every step of buying or selling your property"
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Advanced search tools to find your perfect home or investment"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market insights and property valuations"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Full-service property management for landlords and investors"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Buyer",
      content: "PropertyHub made buying my first home incredibly smooth. Their team was professional and supportive throughout the entire process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Investor", 
      content: "I've used PropertyHub for multiple investments. Their market analysis is spot-on and has helped me make profitable decisions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero 
        title="Find Your Dream Property"
        subtitle="Discover exceptional homes and investment opportunities with our expert real estate services"
        showSearch={true}
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#dd4dc7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#dd4dc7]/20 transition-colors">
                    <service.icon className="w-8 h-8 text-[#dd4dc7]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Handpicked premium properties that offer exceptional value and quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/properties">
              <Button size="lg" className="bg-[#dd4dc7] hover:bg-[#c341b3] text-white px-8">
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-[#dd4dc7] mb-4" />
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dd4dc7] to-[#e966d4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who found their dream homes with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#dd4dc7] hover:bg-gray-100 px-8">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#dd4dc7' }}>
                PropertyHub
              </h3>
              <p className="text-gray-400">
                Your trusted partner in real estate, helping you find the perfect property.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Sales</li>
                <li>Property Management</li>
                <li>Market Analysis</li>
                <li>Investment Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Property Street</p>
                <p>Real Estate City, RE 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@propertyhub.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
