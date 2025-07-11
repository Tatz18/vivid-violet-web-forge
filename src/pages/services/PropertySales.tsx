import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  DollarSign, 
  Users, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Star,
  TrendingUp,
  Calculator,
  FileText,
  Clock,
  MapPin,
  Handshake,
  Award,
  Target,
  Facebook,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";

const PropertySales = () => {
  const salesProcess = [
    {
      step: "1",
      title: "Property Valuation",
      description: "Our certified appraisers conduct comprehensive market analysis to determine the optimal selling price for your property.",
      icon: Calculator
    },
    {
      step: "2", 
      title: "Marketing Strategy",
      description: "We create compelling property listings with professional photography and deploy multi-channel marketing campaigns.",
      icon: Target
    },
    {
      step: "3",
      title: "Buyer Screening",
      description: "We pre-qualify potential buyers and arrange viewings to ensure serious inquiries and smooth transactions.",
      icon: Users
    },
    {
      step: "4",
      title: "Negotiation & Closing",
      description: "Our expert negotiators secure the best deal while handling all paperwork and legal formalities for you.",
      icon: Handshake
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Decade of proven track record in Kolkata real estate market with over 2000+ successful transactions."
    },
    {
      icon: TrendingUp,
      title: "Best Market Prices",
      description: "We achieve 15-20% higher selling prices through strategic marketing and expert negotiation skills."
    },
    {
      icon: Clock,
      title: "Quick Sale Guarantee",
      description: "Average selling time of 45-60 days with our proven marketing strategies and buyer network."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Complete legal verification and documentation support with insurance coverage for transactions."
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with dedicated relationship managers for personalized service."
    },
    {
      icon: FileText,
      title: "Transparent Process",
      description: "Clear communication and regular updates throughout the selling process with detailed reports."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Banerjee",
      location: "Bhawanipur",
      content: "Phoenix Realesthatic sold my 3BHK apartment in just 3 weeks at 18% above my expected price. Their marketing strategy was exceptional!",
      rating: 5,
      salePrice: "₹95 Lakhs"
    },
    {
      name: "Priya Chakraborty", 
      location: "Salt Lake",
      content: "Professional service from start to finish. They handled everything while I was abroad. Highly recommend for property selling.",
      rating: 5,
      salePrice: "₹1.2 Crores"
    },
    {
      name: "Amit Sengupta",
      location: "New Town",
      content: "Transparent process, excellent communication, and got the best price in the market. Will definitely use their services again.",
      rating: 5,
      salePrice: "₹85 Lakhs"
    }
  ];

  const salesPackages = [
    {
      name: "Basic Sale",
      price: "2% Commission",
      features: [
        "Property Valuation",
        "Basic Marketing",
        "Buyer Coordination",
        "Legal Documentation",
        "Sale Agreement Preparation"
      ],
      popular: false
    },
    {
      name: "Premium Sale",
      price: "2.5% Commission", 
      features: [
        "Everything in Basic",
        "Professional Photography",
        "360° Virtual Tours",
        "Premium Listing Placement",
        "Social Media Marketing",
        "Dedicated Relationship Manager",
        "Home Staging Consultation"
      ],
      popular: true
    },
    {
      name: "Luxury Sale",
      price: "3% Commission",
      features: [
        "Everything in Premium",
        "Drone Photography & Video",
        "Luxury Property Magazine Features",
        "Exclusive Buyer Network Access",
        "Interior Design Consultation",
        "Concierge Services",
        "Post-Sale Support"
      ],
      popular: false
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
              <Badge className="bg-white/20 text-white mb-4">Expert Property Sales</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sell Your Property
                <br />
                <span className="text-white/90">At Best Market Price</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Get 15-20% higher selling prices with our proven marketing strategies, expert negotiations, and extensive buyer network across Kolkata.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Valuation
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                    View Sold Properties
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop" 
                alt="Luxury home for sale"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Sales Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Sales Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures maximum returns and hassle-free property selling experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {process.step}
                  </div>
                  <process.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Phoenix Realesthatic?</h2>
            <p className="text-xl text-gray-600">Proven expertise that delivers exceptional results for property sellers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Sales Package</h2>
            <p className="text-xl text-gray-600">Tailored solutions to meet different property selling needs and budgets</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {salesPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from satisfied property sellers across Kolkata</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                    <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                    <Badge className="bg-green-100 text-green-800">Sold: {testimonial.salePrice}</Badge>
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
          <h2 className="text-4xl font-bold mb-8">Ready to Sell Your Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free property valuation and discover how much your property is worth in today's market. Our experts are ready to help you achieve the best possible price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                <Calculator className="w-5 h-5 mr-2" />
                Get Free Valuation
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Market Trends
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default PropertySales;