import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Star,
  Calculator,
  BarChart,
  Clock,
  MapPin,
  Award,
  Users,
  FileText,
  PieChart,
  Building2,
  Briefcase
} from "lucide-react";

const InvestmentConsulting = () => {
  const consultingServices = [
    {
      icon: BarChart,
      title: "Market Analysis",
      description: "Comprehensive analysis of Kolkata real estate market trends, price movements, and future growth projections."
    },
    {
      icon: Target,
      title: "Investment Strategy",
      description: "Customized investment strategies based on your financial goals, risk appetite, and investment horizon."
    },
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Detailed return on investment calculations including rental yields, capital appreciation, and tax benefits."
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description: "Strategic property portfolio planning across different locations and property types for optimal returns."
    },
    {
      icon: FileText,
      title: "Due Diligence",
      description: "Complete legal and financial due diligence to ensure secure and profitable property investments."
    },
    {
      icon: Briefcase,
      title: "Exit Strategy Planning",
      description: "Strategic planning for property exit including timing, market conditions, and profit maximization."
    }
  ];

  const investmentTypes = [
    {
      type: "Residential Investment",
      description: "High-rental yield apartments and independent houses in prime locations",
      expectedROI: "12-15% annually",
      riskLevel: "Low to Medium",
      minInvestment: "₹50 Lakhs",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400",
      features: ["Steady rental income", "Capital appreciation", "Tax benefits", "Easy liquidity"]
    },
    {
      type: "Commercial Investment", 
      description: "Office spaces, retail outlets, and commercial complexes with corporate tenants",
      expectedROI: "15-20% annually",
      riskLevel: "Medium",
      minInvestment: "₹1 Crore",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      features: ["Higher rental yields", "Long-term leases", "Professional tenants", "Appreciation potential"]
    },
    {
      type: "Land Banking",
      description: "Strategic land acquisition in upcoming development corridors and growth areas",
      expectedROI: "20-30% over 3-5 years",
      riskLevel: "Medium to High",
      minInvestment: "₹25 Lakhs",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
      features: ["High appreciation", "Future development", "Lower entry cost", "Long-term wealth"]
    }
  ];

  const marketInsights = [
    {
      location: "Salt Lake Sector V",
      appreciation: "+18%",
      trend: "Strong Growth",
      rentalYield: "4.5%",
      reason: "IT hub expansion and metro connectivity"
    },
    {
      location: "New Town Action Area",
      appreciation: "+22%",
      trend: "Rapid Growth", 
      rentalYield: "5.2%",
      reason: "Planned infrastructure and commercial development"
    },
    {
      location: "EM Bypass Corridor",
      appreciation: "+15%",
      trend: "Steady Growth",
      rentalYield: "4.8%",
      reason: "Connectivity and upcoming metro stations"
    },
    {
      location: "Rajarhat Area",
      appreciation: "+20%",
      trend: "High Growth",
      rentalYield: "5.8%",
      reason: "Airport proximity and IT companies"
    }
  ];

  const successStories = [
    {
      client: "Rajesh Kumar",
      investment: "₹75 Lakhs",
      returns: "₹1.2 Crores",
      period: "4 years",
      property: "3BHK in Salt Lake",
      story: "Achieved 60% appreciation through strategic location selection and optimal timing."
    },
    {
      client: "Priya Sharma",
      investment: "₹1.5 Crores", 
      returns: "₹2.8 Crores",
      period: "5 years",
      property: "Commercial Space, Sector V",
      story: "Generated consistent 18% annual returns through rental income and appreciation."
    },
    {
      client: "Amit Sengupta",
      investment: "₹40 Lakhs",
      returns: "₹85 Lakhs",
      period: "3 years",
      property: "Land in New Town",
      story: "Over 100% returns through land banking strategy in developing corridor."
    }
  ];

  const consultingPackages = [
    {
      name: "Basic Consultation",
      price: "₹15,000",
      duration: "One-time",
      features: [
        "Market analysis report",
        "Investment opportunity identification",
        "Basic ROI calculations",
        "Property recommendations",
        "Investment strategy overview"
      ],
      popular: false
    },
    {
      name: "Comprehensive Advisory",
      price: "₹50,000", 
      duration: "3 months",
      features: [
        "Everything in Basic",
        "Detailed portfolio planning",
        "Legal due diligence support",
        "Negotiation assistance",
        "Monthly market updates",
        "Exit strategy planning",
        "Tax optimization guidance"
      ],
      popular: true
    },
    {
      name: "Premium Wealth Management",
      price: "₹1,50,000",
      duration: "1 year",
      features: [
        "Everything in Comprehensive",
        "Dedicated investment manager",
        "Quarterly portfolio reviews", 
        "Priority property access",
        "End-to-end transaction support",
        "Annual wealth assessment",
        "Legacy planning assistance"
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
              <Badge className="bg-white/20 text-white mb-4">Expert Investment Advisory</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Wealth Through
                <br />
                <span className="text-white/90">Smart Real Estate</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Strategic investment consulting to maximize returns and build long-term wealth through carefully selected real estate opportunities in Kolkata's growing market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Investment Plan
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                    View Opportunities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop" 
                alt="Investment consulting"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advisory services to guide your real estate investment journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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

      {/* Investment Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p className="text-xl text-gray-600">Diversified real estate investment options for different risk profiles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentTypes.map((investment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={investment.image} 
                    alt={investment.type}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{investment.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">{investment.expectedROI}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{investment.type}</h3>
                  <p className="text-gray-600 mb-4">{investment.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Expected ROI:</span>
                      <span className="font-semibold text-green-600">{investment.expectedROI}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Risk Level:</span>
                      <span className="font-semibold">{investment.riskLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Min Investment:</span>
                      <span className="font-semibold text-primary">{investment.minInvestment}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {investment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Insights & Trends</h2>
            <p className="text-xl text-gray-600">Real-time market data and appreciation trends across Kolkata</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{insight.location}</h3>
                    <Badge className={`${
                      insight.trend === 'Rapid Growth' ? 'bg-green-600' :
                      insight.trend === 'High Growth' ? 'bg-blue-600' :
                      insight.trend === 'Strong Growth' ? 'bg-purple-600' : 'bg-gray-600'
                    } text-white`}>
                      {insight.appreciation}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Trend:</span>
                      <span className="font-medium">{insight.trend}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rental Yield:</span>
                      <span className="font-medium text-green-600">{insight.rentalYield}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 italic">{insight.reason}</p>
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our strategic investment advisory</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.client}</h3>
                    <Badge className="bg-green-100 text-green-800">{story.property}</Badge>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Investment:</span>
                      <span className="font-semibold">{story.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Current Value:</span>
                      <span className="font-semibold text-green-600">{story.returns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time Period:</span>
                      <span className="font-semibold">{story.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic border-t pt-4">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Consulting Packages</h2>
            <p className="text-xl text-gray-600">Choose the right advisory package for your investment goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultingPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <div className="text-gray-600">{pkg.duration}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a consultation with our investment experts and discover how to build wealth through strategic real estate investments in Kolkata's growing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                <Calculator className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Explore Opportunities
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentConsulting;