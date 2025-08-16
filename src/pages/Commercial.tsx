import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users, MapPin, Calculator, PieChart, Shield, Clock, Award, CheckCircle, ArrowRight, Target, Briefcase, BarChart3 } from "lucide-react";

const Commercial = () => {
  const commercialServices = [
    {
      icon: Building2,
      title: "Commercial Property Sales",
      description: "Expert assistance in buying and selling commercial real estate including offices, retail spaces, warehouses, and industrial properties.",
      features: ["Market valuation", "Due diligence", "Negotiation support", "Documentation assistance"]
    },
    {
      icon: TrendingUp,
      title: "Commercial Leasing",
      description: "Comprehensive leasing solutions for landlords and tenants, ensuring optimal rental agreements and property utilization.",
      features: ["Tenant sourcing", "Lease structuring", "Rental optimization", "Legal compliance"]
    },
    {
      icon: Users,
      title: "Corporate Relocation",
      description: "Seamless corporate relocation services helping businesses find the perfect commercial spaces for their operations.",
      features: ["Space planning", "Location analysis", "Move management", "Ongoing support"]
    },
    {
      icon: Calculator,
      title: "Commercial Investment Advisory",
      description: "Strategic investment guidance for commercial real estate portfolios, maximizing returns and minimizing risks.",
      features: ["ROI analysis", "Market research", "Portfolio optimization", "Risk assessment"]
    },
    {
      icon: PieChart,
      title: "Asset Management",
      description: "Professional management of commercial real estate assets to enhance value and generate consistent returns.",
      features: ["Property maintenance", "Tenant relations", "Financial reporting", "Value enhancement"]
    },
    {
      icon: BarChart3,
      title: "Market Research & Analytics",
      description: "In-depth market analysis and commercial real estate intelligence to support informed business decisions.",
      features: ["Market trends", "Competitive analysis", "Feasibility studies", "Custom reports"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Years of experience in commercial real estate with deep market knowledge and proven track record."
    },
    {
      icon: Shield,
      title: "Trusted Partnerships",
      description: "Strong relationships with developers, investors, and corporate clients ensuring exclusive opportunities."
    },
    {
      icon: Clock,
      title: "Efficient Process",
      description: "Streamlined processes and dedicated support to minimize disruption to your business operations."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable results that align with your business objectives and growth plans."
    }
  ];

  const sectors = [
    "Office Spaces",
    "Retail Properties", 
    "Industrial Warehouses",
    "Hospitality",
    "Healthcare Facilities",
    "Educational Institutions",
    "Mixed-Use Developments",
    "Co-working Spaces"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Real Estate
              <br />
              <span className="text-white/90">Solutions</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Empowering businesses with strategic commercial real estate services. From office spaces to industrial complexes, 
              we provide comprehensive solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/properties">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Commercial Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Commercial Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive commercial real estate services designed to support your business growth and investment goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sectors We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We cater to diverse commercial real estate needs across multiple industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{sector}</h3>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Phoenix Realesthatic</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your success is our priority. Here&apos;s what sets us apart in commercial real estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you find the perfect commercial space or maximize your property investments. 
            Our expert team is ready to support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/business-enquiry">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Commercial;