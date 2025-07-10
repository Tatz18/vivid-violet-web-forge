import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Star,
  Calendar,
  CreditCard,
  FileText,
  AlertTriangle,
  Home,
  Smartphone,
  Settings,
  ThumbsUp
} from "lucide-react";

const PropertyManagement = () => {
  const managementServices = [
    {
      icon: Wrench,
      title: "24/7 Maintenance",
      description: "Round-the-clock maintenance support with verified technicians for all types of repairs and emergencies."
    },
    {
      icon: CreditCard,
      title: "Rent Collection",
      description: "Automated rent collection system with timely payments, late fee management, and detailed financial reporting."
    },
    {
      icon: Users,
      title: "Tenant Management",
      description: "Complete tenant lifecycle management from screening to lease renewal and dispute resolution."
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Ensure all properties comply with local regulations, safety standards, and legal requirements."
    },
    {
      icon: Calendar,
      title: "Property Inspections",
      description: "Regular property inspections with detailed reports and maintenance recommendations."
    },
    {
      icon: Smartphone,
      title: "Digital Platform",
      description: "Owner and tenant portal for seamless communication, payments, and service requests."
    }
  ];

  const managementPackages = [
    {
      name: "Basic Management",
      price: "₹2,500",
      period: "per property/month",
      features: [
        "Rent collection & remittance",
        "Basic maintenance coordination",
        "Monthly financial reports",
        "Tenant communication",
        "Emergency response (9 AM - 6 PM)"
      ],
      properties: "1-5 Properties",
      popular: false
    },
    {
      name: "Full Management",
      price: "₹4,500", 
      period: "per property/month",
      features: [
        "Everything in Basic",
        "24/7 emergency maintenance",
        "Quarterly property inspections",
        "Legal documentation support",
        "Tenant screening & placement",
        "Insurance claim assistance",
        "Online owner/tenant portal"
      ],
      properties: "1-10 Properties",
      popular: true
    },
    {
      name: "Premium Management",
      price: "₹7,500",
      period: "per property/month", 
      features: [
        "Everything in Full Management",
        "Dedicated property manager",
        "Monthly property visits",
        "Concierge services",
        "Property value enhancement",
        "Tax planning assistance",
        "Portfolio optimization advice"
      ],
      properties: "Unlimited Properties",
      popular: false
    }
  ];

  const maintenanceServices = [
    {
      category: "Electrical Services",
      services: ["Wiring repairs", "Fixture replacement", "Power backup", "Safety inspections"],
      responseTime: "2-4 hours",
      icon: "⚡"
    },
    {
      category: "Plumbing Services", 
      services: ["Pipe repairs", "Drain cleaning", "Water heater service", "Bathroom fixtures"],
      responseTime: "1-3 hours",
      icon: "🔧"
    },
    {
      category: "HVAC Services",
      services: ["AC repair/service", "Ventilation cleaning", "Heating systems", "Air quality"],
      responseTime: "4-6 hours", 
      icon: "❄️"
    },
    {
      category: "General Repairs",
      services: ["Painting", "Carpentry", "Door/window repair", "Flooring maintenance"],
      responseTime: "1-2 days",
      icon: "🔨"
    }
  ];

  const clientTestimonials = [
    {
      name: "Rajesh Kumar",
      properties: "3 Properties in Salt Lake",
      content: "Phoenix manages all my rental properties flawlessly. Tenants are happy, maintenance is prompt, and I receive regular updates.",
      rating: 5,
      monthlyIncome: "₹85,000"
    },
    {
      name: "Priya Sharma", 
      properties: "Commercial Complex, Sector V",
      content: "Professional property management with excellent tenant relations. They handle everything so I can focus on my business.",
      rating: 5,
      monthlyIncome: "₹2,50,000"
    },
    {
      name: "Amit Sengupta",
      properties: "5 Apartments across Kolkata",
      content: "Best decision was to hand over property management to Phoenix. Consistent income and well-maintained properties.",
      rating: 5,
      monthlyIncome: "₹1,45,000"
    }
  ];

  const managementFeatures = [
    {
      title: "Tenant Screening",
      description: "Comprehensive background checks including credit verification, employment history, and previous landlord references.",
      benefits: ["Quality tenants", "Reduced defaults", "Long-term leases"]
    },
    {
      title: "Financial Management",
      description: "Complete financial oversight including rent collection, expense tracking, and detailed monthly reporting.",
      benefits: ["Timely payments", "Transparent accounting", "Tax documentation"]
    },
    {
      title: "Maintenance Coordination", 
      description: "Proactive maintenance scheduling with trusted vendors and emergency response capabilities.",
      benefits: ["Property preservation", "Cost optimization", "Tenant satisfaction"]
    },
    {
      title: "Legal Compliance",
      description: "Ensure properties meet all regulatory requirements including safety standards and documentation.",
      benefits: ["Risk mitigation", "Legal protection", "Regulatory compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/20 text-white mb-4">Professional Property Management</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hassle-Free
                <br />
                <span className="text-white/90">Property Management</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Complete property management services ensuring optimal returns, happy tenants, and well-maintained properties with 24/7 support and professional oversight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                    <Settings className="w-5 h-5 mr-2" />
                    Start Management
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                    View Managed Properties
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop" 
                alt="Property management"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Management Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service property management covering every aspect of property ownership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Management Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Management Features</h2>
            <p className="text-xl text-gray-600">Detailed breakdown of our comprehensive management approach</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {managementFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Owner Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from property owners who trust us with their investments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.properties}</p>
                    <Badge className="bg-green-100 text-green-800">Income: {testimonial.monthlyIncome}/month</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Professional Property Management?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experienced team take care of your properties while you enjoy consistent returns and peace of mind. Get started with professional property management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                <Settings className="w-5 h-5 mr-2" />
                Start Management
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Our Portfolio
                <Home className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default PropertyManagement;