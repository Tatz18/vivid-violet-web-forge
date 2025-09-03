import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { Search, ArrowRight, MapPin, Building2, DollarSign, Home, Users, Clock, Award, Shield, CheckCircle, Phone, Star, Bed, Bath, Square, ChevronLeft, ChevronRight, Plus, Minus, Facebook, Instagram, Linkedin, Mail, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "@/integrations/supabase/client";
import { PopularLocations } from "@/components/PopularLocations";

// Import testimonial images
import testimonialAmit from "@/assets/testimonial-amit.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";
import testimonialRavi from "@/assets/testimonial-ravi.jpg";
import testimonialSneha from "@/assets/testimonial-sneha.jpg";
const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentNewProperty, setCurrentNewProperty] = useState(0);
  const [popularProperties, setPopularProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleSearch = () => {
    navigate('/properties');
  };

  // Testimonials Data
  const testimonials = [{
    name: "Amit Sengupta",
    role: "Property Investor",
    content: "I was honestly skeptical about buying property in Kolkata, but these guys completely changed my mind. They showed me this amazing spot in Salt Lake that I never would've considered. The ROI has been fantastic! Really grateful for their patience with all my questions.",
    rating: 5,
    image: testimonialAmit
  }, {
    name: "Priya Chakraborty",
    role: "First-time Buyer",
    content: "As a first-time buyer, I was pretty nervous about the whole process. But they literally held my hand through everything - from understanding loan documents to negotiating with the seller. I'm typing this from my beautiful new apartment right now!",
    rating: 5,
    image: testimonialPriya
  }, {
    name: "Rajesh Banerjee",
    role: "Home Seller",
    content: "I needed to sell quickly due to a job transfer, and honestly thought I'd have to settle for less. These folks got me three serious buyers in the first week! Sold at market price within two weeks. Can't ask for better than that.",
    rating: 5,
    image: testimonialRavi
  }, {
    name: "Sneha Roy",
    role: "Property Buyer",
    content: "After months of searching on my own, I was getting frustrated. They listened to what I actually wanted - not just my budget, but my lifestyle too. Found me this perfect 3BHK with great natural light. My family absolutely loves it here!",
    rating: 5,
    image: testimonialSneha
  }];

  // FAQ Data
  const faqs = [{
    question: "How Much Can I Afford To Spend On A House?",
    answer: "Your budget should typically be 3-4 times your annual income. Consider down payment, monthly payments, and additional costs like maintenance, taxes, and registration fees. Our experts can help you calculate the exact affordable range based on your financial situation."
  }, {
    question: "What Is The Process Of Buying A House?",
    answer: "The process includes property search, site visits, price negotiation, token payment, loan approval, legal verification, registration, and possession. We guide you through each step ensuring transparency and smooth completion."
  }, {
    question: "What Should I Look For When Viewing A Property?",
    answer: "Check the location, connectivity, legal documents, construction quality, amenities, parking, water supply, electricity backup, and future development plans. Our experts accompany you for detailed property evaluation."
  }, {
    question: "How Much Should I Offer When Buying A Home?",
    answer: "Your offer should be based on market analysis, property condition, location benefits, and comparable sales in the area. We provide expert guidance on competitive pricing and negotiation strategies."
  }, {
    question: "What Documents Are Required For Property Purchase?",
    answer: "Key documents include sale deed, khatiyan, mutation certificate, tax receipts, NOC from society, and loan approval letter. We assist in document verification and ensure all legal requirements are met."
  }, {
    question: "How Long Does The Property Registration Process Take?",
    answer: "Typically 15-30 days depending on document readiness and bank loan processing. With our assistance and proper preparation, the process can be completed efficiently within the timeline."
  }];

  // How it Works Steps
  const workSteps = [{
    step: "1",
    title: "Start & Discuss",
    description: "We begin by understanding your needs"
  }, {
    step: "2",
    title: "Choose From a List",
    description: "Browse through our curated list of properties that match your specific criteria."
  }, {
    step: "3",
    title: "Finalize & Buy",
    description: "Complete the paperwork and finalize your dream property with our expert guidance."
  }];

  // Why Work With Us Features
  const whyChooseUs = [{
    icon: Shield,
    title: "Our Benefits",
    description: "Comprehensive insurance coverage and legal protection for all transactions."
  }, {
    icon: Clock,
    title: "Traditional methods",
    description: "Time-tested approaches combined with modern technology for optimal results."
  }, {
    icon: Users,
    title: "Flexibility",
    description: "Customized solutions and flexible payment terms to suit your requirements."
  }, {
    icon: Award,
    title: "Communication",
    description: "Clear and transparent communication throughout your property journey."
  }, {
    icon: CheckCircle,
    title: "Greater control",
    description: "You make the final decisions, supported by our expert guidance"
  }, {
    icon: Star,
    title: "Increased transparency",
    description: "Complete transparency in pricing, documentation, and all property details."
  }];

  // Fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const {
          data,
          error
        } = await supabase.from("properties").select("*").order("created_at", {
          ascending: false
        }).limit(6);
        if (error) throw error;

        // Transform database properties to match the expected format
        const transformedProperties = data?.map((property, index) => ({
          id: property.id,
          title: property.title,
          price: property.price ? formatPrice(property.price) : "Price on request",
          location: property.location || "Location not specified",
          image: property.image_url || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
          beds: property.bedrooms || 0,
          baths: property.bathrooms || 0,
          sqft: property.square_feet || 0,
          tag: index === 0 ? "Featured" : index === 1 ? "New Listed" : index === 2 ? "Hot Listed" : "Popular"
        })) || [];
        setPopularProperties(transformedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
        // Fallback to empty array if no properties
        setPopularProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Newest Properties (last 3)
  const newestProperties = popularProperties.slice(-3);

  // Auto-rotate testimonials and new properties
  React.useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    const propertyInterval = setInterval(() => {
      setCurrentNewProperty(prev => (prev + 1) % newestProperties.length);
    }, 5000);
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(propertyInterval);
    };
  }, [testimonials.length, newestProperties.length]);
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Modern Dribbble Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        {/* Geometric Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-8 h-full min-h-[80vh]">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none">
                  Experience
                  <br />
                  <span className="text-white/90">Real Estate</span>
                  <br />
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Excellence</span>
                </h1>
                
                <p className="text-xl text-white/90 mb-12 max-w-2xl leading-relaxed">
                  Discover premium properties in Kolkata's most sought-after locations. 
                  Whether you're looking for a modern apartment or a spacious family home, 
                  we have the perfect property waiting for you.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <Button 
                    onClick={handleSearch}
                    className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Browse Properties
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 text-white">
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-white/80 text-sm">Properties Sold</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Current Listings Sidebar - Right Side */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Current Listings</h3>
                  <span className="text-white/80 text-sm">{popularProperties.length} Properties</span>
                </div>
                
                {loading ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-4 animate-pulse">
                        <div className="h-24 bg-white/10 rounded-xl mb-3"></div>
                        <div className="h-4 bg-white/10 rounded mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {popularProperties.slice(0, 4).map((property, index) => (
                      <Link key={property.id} to={`/property/${property.id}`}>
                        <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300 group cursor-pointer">
                          <div className="flex gap-4">
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="w-20 h-20 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold mb-1 truncate">{property.title}</h4>
                              <p className="text-white/70 text-sm mb-2 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                <span className="truncate">{property.location}</span>
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-white font-bold">{property.price}</span>
                                <div className="flex items-center gap-2 text-white/60 text-xs">
                                  <span>{property.beds}B</span>
                                  <span>{property.baths}Ba</span>
                                  <span>{property.sqft}sf</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                
                <Link to="/properties">
                  <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm rounded-xl py-3">
                    View All Properties
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Popular Listing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12 flex-col sm:flex-row gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center sm:text-left">Popular Listing</h2>
            <Link to="/properties">
              <Button className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-4 sm:px-6">
                All View Property
              </Button>
            </Link>
          </div>
          
          
          {loading ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => <Card key={index} className="overflow-hidden animate-pulse">
                  <div className="bg-gray-300 h-48 w-full"></div>
                  <CardContent className="p-4">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-3 w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </CardContent>
                </Card>)}
            </div> : popularProperties.length === 0 ? <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No properties available at the moment.</p>
              <p className="text-gray-500 text-sm mt-2">Check back later for new listings!</p>
            </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularProperties.map((property, index) => <Link key={property.id} to={`/property/${property.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                    <div className="relative">
                      <img src={property.image} alt={property.title} className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {property.tag}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <h3 className="font-semibold text-gray-900 text-sm truncate flex-1">{property.title}</h3>
                        <span className="text-sm sm:text-lg font-bold text-gray-900 flex-shrink-0">{property.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-3">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 gap-1">
                        <div className="flex items-center min-w-0">
                          <Bed className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{property.beds} Bed</span>
                        </div>
                        <div className="flex items-center min-w-0">
                          <Bath className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{property.baths} Bath</span>
                        </div>
                        <div className="flex items-center min-w-0">
                          <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{property.sqft} sqft</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>}
        </div>
      </section>

      {/* Popular Locations Section */}
      <PopularLocations />

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-t from-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newest Property Section - Movable */}
      <section className="py-20 bg-gradient-to-bl from-primary/8 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Newest Properties</h2>
            <p className="text-xl text-gray-600 mt-4">Discover our latest property listings with modern amenities</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentNewProperty * 100}%)`
            }}>
                {newestProperties.map((property, index) => <div key={property.id} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto">
                      <Link to={`/property/${property.id}`}>
                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group bg-white/90 backdrop-blur-sm border border-primary/10">
                          <div className="relative">
                            <img src={property.image} alt={property.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                              </span>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900 text-lg">{property.title}</h3>
                              <span className="text-xl font-bold text-primary">{property.price}</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm mb-4">
                              <MapPin className="w-4 h-4 mr-1" />
                              {property.location}
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-1" />
                                {property.beds} Bed
                              </div>
                              <div className="flex items-center">
                                <Bath className="w-4 h-4 mr-1" />
                                {property.baths} Bathroom
                              </div>
                              <div className="flex items-center">
                                <Square className="w-4 h-4 mr-1" />
                                {property.sqft} sqft
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </div>)}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button variant="outline" size="sm" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-primary text-primary hover:bg-primary hover:text-white z-10" onClick={() => setCurrentNewProperty(prev => (prev - 1 + newestProperties.length) % newestProperties.length)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-primary text-primary hover:bg-primary hover:text-white z-10" onClick={() => setCurrentNewProperty(prev => (prev + 1) % newestProperties.length)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {newestProperties.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentNewProperty ? 'bg-primary' : 'bg-gray-300'}`} onClick={() => setCurrentNewProperty(index)} />)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to the most common questions about property buying and selling</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-6 text-left bg-white/50 hover:bg-primary/5 cursor-pointer transition-colors">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <Plus className="w-5 h-5 text-primary group-open:hidden flex-shrink-0" />
                      <Minus className="w-5 h-5 text-primary hidden group-open:block flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 bg-white/70">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Memberships & Affiliations</h2>
            <p className="text-lg text-gray-600">We are recognized and certified by leading real estate organizations.</p>
          </div>
          
          <div className="flex items-center justify-center space-x-12 md:space-x-16">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="/lovable-uploads/ad9df93c-c658-4692-97d5-8a93f531d43b.png" alt="National Association of Realtors - India" className="h-24 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="/lovable-uploads/9a9ff7fc-fbd2-4585-bc9e-aa11b7d33756.png" alt="RECA Kolkata" className="h-24 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Movable */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">These are real experiences from satisfied customers</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentTestimonial * 100}%)`
            }}>
                {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="max-w-4xl mx-auto text-center hover:shadow-lg transition-shadow p-8 bg-white/90 backdrop-blur-sm border border-primary/10">
                      <CardContent className="p-0">
                        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-6" />
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic max-w-3xl mx-auto">
                          "{testimonial.content}"
                        </p>
                        <h4 className="font-semibold text-gray-900 mb-1 text-xl">{testimonial.name}</h4>
                        <p className="text-gray-600 mb-4">{testimonial.role}</p>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button variant="outline" size="sm" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg border-primary text-primary hover:bg-primary hover:text-white" onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg border-primary text-primary hover:bg-primary hover:text-white" onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'}`} onClick={() => setCurrentTestimonial(index)} />)}
            </div>
          </div>
        </div>
      </section>


      <HomeFooter />
    </div>;
};
export default Index;