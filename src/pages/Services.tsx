
import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Search, 
  TrendingUp, 
  Users, 
  Calculator,
  FileText,
  Key,
  PiggyBank,
  Building,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Sales",
      description: "Complete buying and selling services for single-family homes, condos, and townhouses.",
      features: ["Market Analysis", "Professional Photography", "Staging Consultation", "Negotiation Support"]
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Expert guidance for office buildings, retail spaces, and investment properties.",
      features: ["Investment Analysis", "Lease Management", "Property Valuation", "Market Research"]
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Full-service property management for landlords and real estate investors.",
      features: ["Tenant Screening", "Rent Collection", "Maintenance Coordination", "Financial Reporting"]
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description: "Strategic advice for building and managing your real estate investment portfolio.",
      features: ["ROI Analysis", "Market Forecasting", "Risk Assessment", "Portfolio Optimization"]
    }
  ];

  const additionalServices = [
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Accurate property appraisals using comparative market analysis and industry expertise."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive contract preparation and review to protect your interests."
    },
    {
      icon: Key,
      title: "Relocation Services",
      description: "Complete support for clients moving locally or from out of state."
    },
    {
      icon: PiggyBank,
      title: "Financing Assistance",
      description: "Connect with trusted lenders and explore financing options that fit your needs."
    },
    {
      icon: MapPin,
      title: "Neighborhood Analysis",
      description: "Detailed insights into schools, amenities, and community features."
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Customized property searches based on your specific criteria and preferences."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your goals, timeline, and requirements."
    },
    {
      step: "02",
      title: "Market Analysis",
      description: "Our team conducts thorough market research to inform your strategy and pricing decisions."
    },
    {
      step: "03",
      title: "Property Search/Listing",
      description: "We either find properties that match your criteria or market your property effectively."
    },
    {
      step: "04",
      title: "Negotiation & Closing",
      description: "Expert negotiation and seamless transaction management through closing."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#dd4dc7] to-[#e966d4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to meet all your property needs with expertise and personalized attention.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our primary service offerings designed to handle every aspect of your real estate journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#dd4dc7]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#dd4dc7]/20 transition-colors">
                    <service.icon className="w-8 h-8 text-[#dd4dc7]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#dd4dc7] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to support every aspect of your real estate experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#dd4dc7]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#dd4dc7]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#dd4dc7]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that ensures successful outcomes for every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#dd4dc7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#dd4dc7] to-[#e966d4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your real estate goals with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#dd4dc7] hover:bg-gray-100 px-8">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              <Mail className="w-4 h-4 mr-2" />
              Request Information
            </Button>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Services;
