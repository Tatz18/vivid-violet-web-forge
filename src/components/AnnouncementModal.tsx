import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Home, Gift, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already dismissed the announcement today
    const lastDismissed = localStorage.getItem("announcement-dismissed");
    const today = new Date().toDateString();
    
    if (lastDismissed !== today) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user dismissed it today
    localStorage.setItem("announcement-dismissed", new Date().toDateString());
  };

  const handleClaimOffer = () => {
    handleClose();
    navigate('/contact');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl mx-4 overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Gift className="h-10 w-10 text-white" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎉 Limited Time Offer!
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 mb-6">
            Get <span className="font-bold text-primary">2% Off</span> on Property Registration
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Home className="h-5 w-5 text-primary" />
              <span>Free Legal Consultation Worth ₹25,000</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Gift className="h-5 w-5 text-primary" />
              <span>2% Discount on Registration Fees</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Clock className="h-5 w-5 text-primary" />
              <span>Valid Until December 31st, 2024</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button
              onClick={handleClaimOffer}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Claim This Offer Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-gray-500">
              * Offer valid for new property purchases only. Terms and conditions apply.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-12 left-12 w-2 h-2 bg-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default AnnouncementModal;