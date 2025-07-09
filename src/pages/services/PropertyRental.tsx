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
  Key,
  FileText,
  Clock,
  MapPin,
  Search,
  Award,
  Wrench,
  Calendar,
  CreditCard,
  UserCheck
} from "lucide-react";

const PropertyRental = () => {
  const rentalProcess = [
    {
      step: "1",
      title: "Property Listing",
      description: "We create attractive listings with professional photos and detailed descriptions to attract quality tenants.",
      icon: FileText
    },
    {
      step: "2", 
      title: "Tenant Screening",
      description: "Comprehensive background checks including credit score, employment verification, and reference validation.",
      icon: UserCheck
    },
    {
      step: "3",
      title: "Agreement & Documentation",
      description: "Legal rental agreements with proper documentation and security deposit management.",
      icon: Shield
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "24/7 support for maintenance requests, rent collection, and tenant relationship management.",
      icon: Wrench
    }
  ];

  const rentalServices = [
    {
      icon: Search,
      title: "Tenant Sourcing",
      description: "Access to verified tenant database with pre-screened professionals and families looking for quality rental properties."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive rental agreements compliant with West Bengal tenancy laws with proper registration and stamp duty."
    },
    {
      icon: CreditCard,
      title: "Rent Collection",
      description: "Automated rent collection system with timely payments, late fee management, and financial reporting."
    },
    {
      icon: Wrench,
      title: "Property Maintenance",
      description: "24/7 maintenance support with verified vendor network for repairs, cleaning, and property upkeep."
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Property insurance and tenant default protection to safeguard your investment against damages and defaults."
    },
    {
      icon: Calendar,
      title: "Regular Inspections",
      description: "Quarterly property inspections with detailed reports to ensure your property is well-maintained."
    }
  ];

  const rentalTypes = [
    {
      type: "Residential Rental",
      description: "Apartments, independent houses, and villas for families and professionals",
      averageRent: "₹15,000 - ₹50,000",
      locations: ["Salt Lake", "New Town", "Ballygunge", "Park Street"],
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400"
    },
    {
      type: "Commercial Rental", 
      description: "Office spaces, shops, and commercial complexes for businesses",
      averageRent: "₹25,000 - ₹1,00,000",
      locations: ["Sector V", "Park Street", "Camac Street", "AJC Bose Road"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
    },
    {
      type: "Luxury Rental",
      description: "Premium properties with high-end amenities and concierge services", 
      averageRent: "₹50,000 - ₹2,00,000",
      locations: ["Alipore", "Ballygunge", "New Town", "EM Bypass"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
    }
  ];

  const testimonials = [
    {
      name: "Sneha Roy",
      propertyType: "3BHK Apartment, Salt Lake",
      content: "Phoenix managed my property rental seamlessly. Found quality tenants within 2 weeks and handle everything professionally.",
      rating: 5,
      monthlyRent: "₹28,000/month"
    },
    {
      name: "Rajesh Kumar", 
      propertyType: "Commercial Space, Sector V",
      content: "Excellent service for commercial property rental. They handle all tenant issues and ensure timely rent collection.",
      rating: 5,
      monthlyRent: "₹65,000/month"
    },
    {
      name: "Priya Sharma",
      propertyType: "2BHK Flat, Park Street",
      content: "Professional property management with regular updates. Highly recommend for hassle-free rental income.",
      rating: 5,
      monthlyRent: "₹22,000/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Management",
      percentage: "8%",
      description: "of monthly rent",
      features: [
        "Tenant sourcing & screening",
        "Rental agreement preparation",
        "Rent collection",
        "Basic maintenance coordination",
        "Monthly financial reports"
      ],
      popular: false
    },
    {
      name: "Full Management",
      percentage: "12%", 
      description: "of monthly rent",
      features: [
        "Everything in Basic",
        "24/7 emergency maintenance",
        "Quarterly property inspections", 
        "Legal support & documentation",
        "Insurance claim assistance",
        "Tenant relationship management",
        "Vacancy marketing at no extra cost"
      ],
      popular: true
    },
    {
      name: "Premium Management",
      percentage: "15%",
      description: "of monthly rent",
      features: [
        "Everything in Full Management",
        "Interior design consultation",
        "Property value enhancement advice",
        "Concierge services for tenants",
        "Annual property appreciation reports",
        "Investment advisory services",
        "Tax planning assistance"
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
              <Badge className="bg-white/20 text-white mb-4">Professional Rental Management</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Maximize Your
                <br />
                <span className="text-white/90">Rental Income</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Professional property rental management services ensuring consistent income, quality tenants, and hassle-free property ownership experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                    <Key className="w-5 h-5 mr-2" />
                    List Your Property
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                    View Rental Properties
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&h=500&fit=crop" 
                alt="Rental property management"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rental Management Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined process to get your property rented quickly with quality tenants
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalProcess.map((process, index) => (
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

      {/* Rental Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Rental Services</h2>
            <p className="text-xl text-gray-600">End-to-end property rental management for peace of mind</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalServices.map((service, index) => (
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

      {/* Rental Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Types We Manage</h2>
            <p className="text-xl text-gray-600">Specialized management for different property categories</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rentalTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={type.image} 
                    alt={type.type}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{type.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{type.type}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Average Rent:</span>
                      <span className="font-semibold text-primary">{type.averageRent}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">Popular Locations:</span>
                      <div className="flex flex-wrap gap-1">
                        {type.locations.map((location, locIndex) => (
                          <Badge key={locIndex} variant="outline" className="text-xs">
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Management Fee Structure</h2>
            <p className="text-xl text-gray-600">Transparent pricing with no hidden costs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.percentage}</div>
                    <div className="text-gray-600">{plan.description}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Owner Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied property owners across Kolkata</p>
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
                    <p className="text-gray-600 text-sm mb-2">{testimonial.propertyType}</p>
                    <Badge className="bg-green-100 text-green-800">Earning: {testimonial.monthlyRent}</Badge>
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
          <h2 className="text-4xl font-bold mb-8">Start Earning Rental Income Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            List your property with us and start earning consistent rental income with professional management and quality tenants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                <Key className="w-5 h-5 mr-2" />
                List Your Property
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Rental Market
                <Search className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default PropertyRental;