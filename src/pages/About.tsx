import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Building2,
  Home,
  TrendingUp,
  Shield,
  Clock,
  Heart,
  Target,
  Lightbulb
} from "lucide-react";

const About = () => {
  // Company statistics
  const stats = [
    { number: "1500+", label: "Happy Clients", icon: Users },
    { number: "90%", label: "Client Satisfaction", icon: Star },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Properties Sold", icon: Building2 }
  ];

  // Our process steps
  const processSteps = [
    {
      icon: Target,
      title: "Understand Your Needs",
      description: "We start by understanding your specific requirements, budget, and preferred locations to find the perfect match."
    },
    {
      icon: Building2,
      title: "Curate Property Lists",
      description: "Our experts handpick properties that align with your criteria, saving you time and ensuring quality options."
    },
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description: "From viewing to negotiation to closing, we provide professional guidance throughout your property journey."
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at closing. We provide continued support for all your real estate needs."
    }
  ];

  // Team values
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in honest communication and transparent dealing in every transaction."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and client experience."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern technology and innovative approaches to real estate solutions."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Count on us to deliver on our promises with consistent, dependable service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-blue-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-primary block mb-2">Empowering</span>
                <span className="text-gray-900 block mb-2">Real Estate</span>
                <span className="text-gray-600 block">Excellence</span>
              </h1>
              
              <div className="bg-primary/10 rounded-3xl p-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Phoenix Realesthatic has been turning properties into prosperities since 2018. 
                  We're committed to providing exceptional real estate services with integrity, 
                  innovation, and unwavering dedication to our clients' success.
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary/20 to-blue-100 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=500&fit=crop" 
                  alt="Real estate professional"
                  className="w-full h-[500px] object-cover mix-blend-multiply"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">₹500Cr+</div>
                    <div className="text-sm text-gray-600">Total Sales Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures a smooth and successful real estate experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop" 
                alt="Modern office space"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is the Story of Phoenix Realesthatic?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To revolutionize the real estate landscape by delivering unparalleled service excellence, 
                      fostering lasting client relationships, and creating sustainable value through innovative 
                      property solutions that transform lives and communities across Eastern India.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To become the leading real estate conglomerate in Eastern India, setting industry benchmarks 
                      through cutting-edge technology, sustainable development practices, and building a legacy of 
                      trust that spans generations while contributing to the economic growth of our region.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Journey</h3>
                    <p className="text-gray-600">
                      Since 2018, we've rapidly grown to serve over 1500 happy clients, maintaining a 90% client 
                      satisfaction rate. Over 10 years of combined team experience has helped us successfully 
                      facilitate 500+ property transactions across Kolkata and Eastern India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading with vision, passion, and commitment to excellence
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/39f9851d-ae49-449d-817a-1e87047ecfe8.png" 
                  alt="Prasenjit Mallick - Founder"
                  className="w-80 h-80 rounded-3xl object-cover shadow-2xl mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl p-4 shadow-xl">
                  <div className="text-sm font-semibold">Founder & CEO</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prasenjit Mallick</h3>
              <p className="text-lg text-primary font-semibold mb-6">Founder & CEO</p>
              
              <div className="bg-white/80 rounded-3xl p-8 shadow-lg border border-gray-100">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  "Since founding Phoenix Realesthatic in 2018, my vision has been simple yet ambitious - 
                  to transform how people experience real estate. We've built more than just a business; 
                  we've created a legacy of trust, innovation, and excellence."
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  "With over a decade of combined team experience and having served 1500+ satisfied clients, 
                  we continue to push boundaries in the real estate industry. Our 90% client satisfaction 
                  rate is not just a number - it represents families who found their dream homes and 
                  investors who achieved their financial goals."
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  "At Phoenix Realesthatic, we don't just sell properties - we turn them into prosperities, 
                  creating lasting value for our clients and communities across Eastern India."
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold">Prasenjit Mallick</span>
                    <span className="mx-2">•</span>
                    <span>Founder & CEO, Phoenix Realesthatic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape every client interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have found their perfect properties with Phoenix Realesthatic. 
            Let us help you turn your real estate dreams into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale px-8">
                Browse Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-lift px-8">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16">
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
                <li><Link to="/auth" className="hover:text-white transition-colors">Dashboard</Link></li>
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

export default About;
