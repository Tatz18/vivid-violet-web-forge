import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2,500+", label: "Properties Sold" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and transparency."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your needs and goals are at the center of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every transaction and interaction."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We leverage cutting-edge technology to provide superior service."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
      description: "With over 20 years in real estate, Sarah founded PropertyHub to revolutionize the industry."
    },
    {
      name: "David Chen",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      description: "David leads our sales team with expertise in luxury and commercial properties."
    },
    {
      name: "Maria Rodriguez",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      description: "Maria oversees our property management division with exceptional attention to detail."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#dd4dc7] to-[#e966d4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About PropertyHub
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Your trusted real estate partner since 2008, committed to turning your property dreams into reality with unmatched expertise and personalized service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-[#dd4dc7] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 by Sarah Mitchell, PropertyHub began as a small boutique real estate firm with a simple mission: to provide exceptional service and genuine care for every client's property needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into one of the region's most trusted real estate companies, but our core values remain unchanged. We believe that buying or selling a property is more than just a transaction – it's a life-changing experience that deserves expert guidance and personal attention.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#dd4dc7] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Licensed and bonded real estate professionals</span>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#dd4dc7] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Award-winning customer service team</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#dd4dc7] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cutting-edge technology and market insights</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
                alt="Our Office" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional service to every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#dd4dc7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#dd4dc7]/20 transition-colors">
                    <value.icon className="w-8 h-8 text-[#dd4dc7]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success in real estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#dd4dc7] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the PropertyHub difference. Let us help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#dd4dc7] hover:bg-gray-100 px-8">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/properties">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                View Properties
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

export default About;
