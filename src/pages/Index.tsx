import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search, 
  ArrowRight,
  MapPin,
  Building2,
  DollarSign,
  Home,
  Users,
  Clock,
  Award,
  Shield,
  CheckCircle,
  Phone,
  Star,
  Bed,
  Bath,
  Square,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react";
import { useState } from "react";
import React from "react";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentNewProperty, setCurrentNewProperty] = useState(0);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/properties');
  };

  // Testimonials Data
  const testimonials = [
    {
      name: "Amit Sengupta",
      role: "Property Investor",
      content: "Phoenix Realesthatic made my property investment journey incredible. Their market insights helped me choose the perfect location in Salt Lake. The team was professional and guided me through every step.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    {
      name: "Priya Chakraborty", 
      role: "First-time Buyer",
      content: "Exceptional service from start to finish. They guided me through every step of buying my first home in Kolkata. The transparency and support were outstanding. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
    },
    {
      name: "Rajesh Banerjee",
      role: "Home Seller",
      content: "Outstanding professionalism and market knowledge. They sold my property in Bhawanipur within just 2 weeks at the best price. The entire process was smooth and hassle-free.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      name: "Sneha Roy",
      role: "Property Buyer",
      content: "Found my dream 3BHK apartment through Phoenix Realesthatic. Their understanding of my requirements and budget constraints was remarkable. Great team with excellent service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How Much Can I Afford To Spend On A House?",
      answer: "Your budget should typically be 3-4 times your annual income. Consider down payment, monthly payments, and additional costs like maintenance, taxes, and registration fees. Our experts can help you calculate the exact affordable range based on your financial situation."
    },
    {
      question: "What Is The Process Of Buying A House?",
      answer: "The process includes property search, site visits, price negotiation, token payment, loan approval, legal verification, registration, and possession. We guide you through each step ensuring transparency and smooth completion."
    },
    {
      question: "What Should I Look For When Viewing A Property?",
      answer: "Check the location, connectivity, legal documents, construction quality, amenities, parking, water supply, electricity backup, and future development plans. Our experts accompany you for detailed property evaluation."
    },
    {
      question: "How Much Should I Offer When Buying A Home?",
      answer: "Your offer should be based on market analysis, property condition, location benefits, and comparable sales in the area. We provide expert guidance on competitive pricing and negotiation strategies."
    },
    {
      question: "What Documents Are Required For Property Purchase?",
      answer: "Key documents include sale deed, khatiyan, mutation certificate, tax receipts, NOC from society, and loan approval letter. We assist in document verification and ensure all legal requirements are met."
    },
    {
      question: "How Long Does The Property Registration Process Take?",
      answer: "Typically 15-30 days depending on document readiness and bank loan processing. With our assistance and proper preparation, the process can be completed efficiently within the timeline."
    }
  ];



  // How it Works Steps
  const workSteps = [
    {
      step: "1",
      title: "Start & Discuss",
      description: "We start by understanding your needs, budget, and preferences for your perfect property."
    },
    {
      step: "2",
      title: "Choose A List",
      description: "Browse through our curated list of properties that match your specific criteria."
    },
    {
      step: "3",
      title: "Finalize & Buy",
      description: "Complete the paperwork and finalize your dream property with our expert guidance."
    }
  ];

  // Why Work With Us Features
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Our Benefits",
      description: "Comprehensive insurance coverage and legal protection for all transactions."
    },
    {
      icon: Clock,
      title: "Traditional methods",
      description: "Time-tested approaches combined with modern technology for optimal results."
    },
    {
      icon: Users,
      title: "Flexibility",
      description: "Customized solutions and flexible payment terms to suit your requirements."
    },
    {
      icon: Award,
      title: "Communication",
      description: "Clear and transparent communication throughout your property journey."
    },
    {
      icon: CheckCircle,
      title: "Greater control",
      description: "You maintain full control over decisions with our expert guidance and support."
    },
    {
      icon: Star,
      title: "Increased transparency",
      description: "Complete transparency in pricing, documentation, and all property details."
    }
  ];

  // Popular Listings
  const popularProperties = [
    {
      id: 1,
      title: "2BHK Apartment - Avidipta",
      price: "₹88 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
      beds: 2,
      baths: 2,
      sqft: 834,
      tag: "Featured"
    },
    {
      id: 2,
      title: "3BHK Apartment - Sucasa",
      price: "₹73 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 3,
      baths: 2,
      sqft: 1454,
      tag: "New Listed"
    },
    {
      id: 3,
      title: "3BHK Apartment",
      price: "₹90 Lakhs",
      location: "Dhakuria, Kolkata",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
      beds: 3,
      baths: 2,
      sqft: 1226,
      tag: "Hot Listed"
    },
    {
      id: 4,
      title: "2BHK Apartment",
      price: "₹45 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
      beds: 2,
      baths: 2,
      sqft: 920,
      tag: "Popular"
    },
    {
      id: 5,
      title: "3BHK Apartment - Manjuri Garden",
      price: "₹70 Lakhs",
      location: "EM Bypass, Kolkata",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      beds: 3,
      baths: 2,
      sqft: 1180,
      tag: "New Listed"
    },
    {
      id: 6,
      title: "3BHK Apartment - Bakul Bagan",
      price: "₹65 Lakhs",
      location: "Bhawanipur, Kolkata",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      beds: 3,
      baths: 2,
      sqft: 1600,
      tag: "Featured"
    }
  ];

  // Newest Properties (last 3)
  const newestProperties = popularProperties.slice(-3);

  // Auto-rotate testimonials and new properties
  React.useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    const propertyInterval = setInterval(() => {
      setCurrentNewProperty((prev) => (prev + 1) % newestProperties.length);
    }, 5000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(propertyInterval);
    };
  }, [testimonials.length, newestProperties.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover and Your
                <br />
                <span className="text-white/90">Perfect Dream Home</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Whether you're looking for a cozy retreat, a modern apartment or a spacious family home, we have the perfect property waiting for you.
              </p>
              
              {/* Search Form */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl animate-scale-in text-gray-900">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Find your Best Property what do you want!</h3>
                <p className="text-sm text-gray-600 mb-4">Please fill all the details</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Kolkata, Location</label>
                      <Input placeholder="Enter location" className="border-0 bg-gray-50" />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Apartment Types</label>
                      <Select>
                        <SelectTrigger className="border-0 bg-gray-50">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2bhk">2 BHK</SelectItem>
                          <SelectItem value="3bhk">3 BHK</SelectItem>
                          <SelectItem value="4bhk">4 BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">₹30-50 Lakh</label>
                      <Select>
                        <SelectTrigger className="border-0 bg-gray-50">
                          <SelectValue placeholder="Budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30-50">₹30-50 Lakh</SelectItem>
                          <SelectItem value="50-80">₹50-80 Lakh</SelectItem>
                          <SelectItem value="80-1cr">₹80 Lakh - 1 Crore</SelectItem>
                          <SelectItem value="1cr+">₹1 Crore+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSearch}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-semibold rounded-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Property Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop" 
                alt="Modern home"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How its Work</h2>
          </div>
          
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Same steps repeated as in design */}
          <div className="grid md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={`second-${index}`} className="text-center animate-fade-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Listing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Popular Listing</h2>
            <Link to="/properties">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                All View Property
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProperties.map((property, index) => (
              <Link key={property.id} to={`/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.tag}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{property.title}</h3>
                      <span className="text-lg font-bold text-gray-900">{property.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-t from-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
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

      {/* Newest Property Section - Movable */}
      <section className="py-20 bg-gradient-to-bl from-primary/8 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Newest Property</h2>
            <p className="text-xl text-gray-600 mt-4">Discover our latest property listings with modern amenities</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNewProperty * 100}%)` }}
              >
                {newestProperties.map((property, index) => (
                  <div key={property.id} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto">
                      <Link to={`/property/${property.id}`}>
                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group bg-white/90 backdrop-blur-sm border border-primary/10">
                          <div className="relative">
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
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
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-primary text-primary hover:bg-primary hover:text-white z-10"
              onClick={() => setCurrentNewProperty((prev) => (prev - 1 + newestProperties.length) % newestProperties.length)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-primary text-primary hover:bg-primary hover:text-white z-10"
              onClick={() => setCurrentNewProperty((prev) => (prev + 1) % newestProperties.length)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {newestProperties.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentNewProperty ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentNewProperty(index)}
                />
              ))}
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
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Movable */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers who achieved their real estate goals with us</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="max-w-4xl mx-auto text-center hover:shadow-lg transition-shadow p-8 bg-white/90 backdrop-blur-sm border border-primary/10">
                      <CardContent className="p-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                        />
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic max-w-3xl mx-auto">
                          "{testimonial.content}"
                        </p>
                        <h4 className="font-semibold text-gray-900 mb-1 text-xl">{testimonial.name}</h4>
                        <p className="text-gray-600 mb-4">{testimonial.role}</p>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
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

export default Index;