import { useState } from "react";
import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Handshake, 
  TrendingUp, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BusinessEnquiry = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our business development team will contact you within 24 hours."
    });
    
    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "",
      projectType: "",
      budget: "",
      timeline: "",
      location: "",
      message: ""
    });
  };

  const businessServices = [
    {
      icon: Building2,
      title: "Corporate Real Estate",
      description: "Complete corporate property solutions including office spaces, warehouses, and industrial complexes."
    },
    {
      icon: Users,
      title: "Bulk Property Deals",
      description: "Special pricing and terms for bulk property purchases and large-scale developments."
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Joint ventures, strategic partnerships, and investment collaboration opportunities."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Professional investment guidance for institutional investors and high-net-worth individuals."
    }
  ];

  const benefits = [
    "Dedicated relationship manager",
    "Priority access to premium properties",
    "Customized financing solutions",
    "Exclusive off-market opportunities",
    "Comprehensive market analysis",
    "Tax optimization strategies",
    "Portfolio management services",
    "24/7 support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">B2B Solutions</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Business Enquiry
              <br />
              <span className="text-white/90">& Partnership</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with Phoenix Realesthatic for comprehensive business real estate solutions. 
              From corporate relocations to large-scale investments, we deliver results that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored for businesses and institutional clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessServices.map((service, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our B2B Services?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand the unique challenges businesses face in real estate decisions. 
                Our dedicated B2B team provides specialized solutions that align with your business objectives.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop" 
                alt="Business meeting"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to discuss your business real estate needs? Our team is here to help you find the perfect solution.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hotline</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Email</h4>
                    <p className="text-gray-600">business@phoenixrealesthatic.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Location</h4>
                    <p className="text-gray-600">Salt Lake, Kolkata, West Bengal</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Business Enquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        required
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        required
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="business@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="office-space">Office Space</SelectItem>
                          <SelectItem value="warehouse">Warehouse</SelectItem>
                          <SelectItem value="retail-space">Retail Space</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-50l">Below ₹50 Lakhs</SelectItem>
                          <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                          <SelectItem value="1cr-5cr">₹1 Crore - ₹5 Crores</SelectItem>
                          <SelectItem value="5cr-10cr">₹5 Crores - ₹10 Crores</SelectItem>
                          <SelectItem value="above-10cr">Above ₹10 Crores</SelectItem>
                          <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                          <SelectItem value="short-term">Short Term (3-6 months)</SelectItem>
                          <SelectItem value="medium-term">Medium Term (6-12 months)</SelectItem>
                          <SelectItem value="long-term">Long Term (12+ months)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, Area, or specific location requirements"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details & Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      placeholder="Please describe your requirements, project details, and any specific needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3">
                    Submit Business Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default BusinessEnquiry;