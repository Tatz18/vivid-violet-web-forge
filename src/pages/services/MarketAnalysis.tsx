import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  TrendingUp, 
  PieChart, 
  Target, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Star,
  Calculator,
  FileText,
  MapPin,
  Building2,
  DollarSign,
  Calendar,
  Users,
  LineChart,
  Activity
} from "lucide-react";

const MarketAnalysis = () => {
  const analysisServices = [
    {
      icon: BarChart,
      title: "Price Trend Analysis",
      description: "Comprehensive analysis of property price movements across different areas and property types in Kolkata."
    },
    {
      icon: PieChart,
      title: "Market Segmentation",
      description: "Detailed breakdown of market segments including residential, commercial, and luxury property performance."
    },
    {
      icon: TrendingUp,
      title: "Growth Projections",
      description: "Future market predictions based on infrastructure development, policy changes, and economic indicators."
    },
    {
      icon: Target,
      title: "Investment Hotspots",
      description: "Identification of emerging areas with high growth potential and investment opportunities."
    },
    {
      icon: Calculator,
      title: "Yield Analysis",
      description: "Rental yield calculations and ROI analysis for different property types and locations."
    },
    {
      icon: Activity,
      title: "Market Pulse",
      description: "Real-time market sentiment, demand-supply dynamics, and transaction volume analysis."
    }
  ];

  const marketReports = [
    {
      type: "Quarterly Market Report",
      description: "Comprehensive quarterly analysis of Kolkata real estate market trends and performance",
      features: ["Price trend analysis", "Volume statistics", "Market forecasts", "Policy impact assessment"],
      price: "₹15,000",
      popular: false
    },
    {
      type: "Annual Market Outlook", 
      description: "In-depth annual report with long-term projections and strategic investment recommendations",
      features: ["12-month forecasts", "Investment strategies", "Risk analysis", "Opportunity mapping", "Sector deep-dive"],
      price: "₹45,000",
      popular: true
    },
    {
      type: "Custom Area Analysis",
      description: "Tailored analysis for specific locations or property types based on your requirements",
      features: ["Location-specific insights", "Comparable analysis", "Development pipeline", "Investment recommendations"],
      price: "₹25,000",
      popular: false
    }
  ];

  const marketInsights2024 = [
    {
      area: "Salt Lake Sector V",
      priceChange: "+18%",
      trend: "↗️",
      avgPrice: "₹8,500/sq ft",
      rentalYield: "4.5%",
      outlook: "Strong Growth"
    },
    {
      area: "New Town Action Area",
      priceChange: "+22%", 
      trend: "↗️",
      avgPrice: "₹6,200/sq ft",
      rentalYield: "5.2%",
      outlook: "Rapid Expansion"
    },
    {
      area: "Ballygunge",
      priceChange: "+12%",
      trend: "↗️", 
      avgPrice: "₹12,000/sq ft",
      rentalYield: "3.8%",
      outlook: "Stable Premium"
    },
    {
      area: "EM Bypass",
      priceChange: "+15%",
      trend: "↗️",
      avgPrice: "₹7,800/sq ft", 
      rentalYield: "4.8%",
      outlook: "Connectivity Boost"
    },
    {
      area: "Rajarhat",
      priceChange: "+20%",
      trend: "↗️",
      avgPrice: "₹5,800/sq ft",
      rentalYield: "5.8%",
      outlook: "Airport Proximity"
    },
    {
      area: "Park Street Area",
      priceChange: "+8%",
      trend: "↗️",
      avgPrice: "₹15,000/sq ft",
      rentalYield: "3.2%",
      outlook: "Heritage Premium"
    }
  ];

  const keyFactors = [
    {
      factor: "Metro Expansion",
      impact: "High Positive",
      description: "New metro lines and stations significantly boosting property values along corridors"
    },
    {
      factor: "IT Sector Growth", 
      impact: "High Positive",
      description: "Expansion of IT companies in Sector V and New Town driving residential demand"
    },
    {
      factor: "Infrastructure Development",
      impact: "Medium Positive",
      description: "Road improvements, flyovers, and connectivity projects enhancing accessibility"
    },
    {
      factor: "Policy Changes",
      impact: "Medium Positive", 
      description: "RERA implementation and digitization improving market transparency"
    },
    {
      factor: "Economic Growth",
      impact: "Medium Positive",
      description: "Overall economic development in Bengal attracting investments and migrations"
    },
    {
      factor: "Interest Rates",
      impact: "Medium Variable",
      description: "Home loan interest rates affecting affordability and purchase decisions"
    }
  ];

  const futureProjections = [
    {
      timeframe: "Next 6 Months",
      prediction: "5-8% price appreciation",
      confidence: "High",
      factors: ["Festival season demand", "Infrastructure completion", "Policy stability"]
    },
    {
      timeframe: "Next 1 Year",
      prediction: "12-15% overall growth", 
      confidence: "High",
      factors: ["Metro line expansion", "IT sector growth", "New residential projects"]
    },
    {
      timeframe: "Next 3 Years",
      prediction: "35-45% cumulative growth",
      confidence: "Medium-High", 
      factors: ["Smart city initiatives", "Airport expansion", "Industrial corridor development"]
    },
    {
      timeframe: "Next 5 Years",
      prediction: "60-80% long-term appreciation",
      confidence: "Medium",
      factors: ["Urban expansion", "Population growth", "Economic development"]
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
              <Badge className="bg-white/20 text-white mb-4">Data-Driven Market Intelligence</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Kolkata Real Estate
                <br />
                <span className="text-white/90">Market Analysis</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Comprehensive market research and analysis providing deep insights into Kolkata's real estate trends, pricing, and investment opportunities for informed decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                    <BarChart className="w-5 h-5 mr-2" />
                    Get Market Report
                  </Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                    View Market Data
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=500&fit=crop" 
                alt="Market analysis and data"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Market Analysis Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional market research and analysis to support your real estate decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analysisServices.map((service, index) => (
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

      {/* Market Insights 2024 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2024 Market Performance</h2>
            <p className="text-xl text-gray-600">Current year performance across key areas in Kolkata</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketInsights2024.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{insight.area}</h3>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{insight.trend}</span>
                      <Badge className={`${
                        insight.priceChange.startsWith('+2') ? 'bg-green-600' :
                        insight.priceChange.startsWith('+1') ? 'bg-blue-600' :
                        'bg-purple-600'
                      } text-white`}>
                        {insight.priceChange}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Avg Price:</span>
                      <span className="font-medium">{insight.avgPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rental Yield:</span>
                      <span className="font-medium text-green-600">{insight.rentalYield}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Outlook:</span>
                      <span className="font-medium text-blue-600">{insight.outlook}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Market Factors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Market Drivers</h2>
            <p className="text-xl text-gray-600">Factors influencing Kolkata real estate market performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                    <Badge className={`${
                      factor.impact === 'High Positive' ? 'bg-green-600' :
                      factor.impact === 'Medium Positive' ? 'bg-blue-600' :
                      'bg-yellow-600'
                    } text-white`}>
                      {factor.impact}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Projections</h2>
            <p className="text-xl text-gray-600">Future outlook for Kolkata real estate market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureProjections.map((projection, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{projection.timeframe}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{projection.prediction}</div>
                    <Badge className={`${
                      projection.confidence === 'High' ? 'bg-green-100 text-green-800' :
                      projection.confidence === 'Medium-High' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {projection.confidence} Confidence
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Factors:</h4>
                    {projection.factors.map((factor, factorIndex) => (
                      <div key={factorIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{factor}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Market Reports</h2>
            <p className="text-xl text-gray-600">Detailed research reports for strategic decision making</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketReports.map((report, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${report.popular ? 'ring-2 ring-primary' : ''}`}>
                {report.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Comprehensive
                  </div>
                )}
                <CardContent className={`p-8 ${report.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{report.type}</h3>
                    <p className="text-gray-600 mb-6">{report.description}</p>
                    <div className="text-3xl font-bold text-primary mb-4">{report.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {report.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${report.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                      Order Report
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
          <h2 className="text-4xl font-bold mb-8">Get Professional Market Intelligence</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Make informed real estate decisions with our comprehensive market analysis and research reports. Stay ahead of market trends and identify profitable opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3">
                <BarChart className="w-5 h-5 mr-2" />
                Request Analysis
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Market Data
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

export default MarketAnalysis;