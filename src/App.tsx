
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Services from "./pages/Services";
import PropertySales from "./pages/services/PropertySales";
import PropertyRental from "./pages/services/PropertyRental";
import InvestmentConsulting from "./pages/services/InvestmentConsulting";
import PropertyManagement from "./pages/services/PropertyManagement";
import MarketAnalysis from "./pages/services/MarketAnalysis";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BusinessEnquiry from "./pages/BusinessEnquiry";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Commercial from "./pages/Commercial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/property-sales" element={<PropertySales />} />
          <Route path="/services/property-rental" element={<PropertyRental />} />
          <Route path="/services/investment-consulting" element={<InvestmentConsulting />} />
          <Route path="/services/property-management" element={<PropertyManagement />} />
          <Route path="/services/market-analysis" element={<MarketAnalysis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/business-enquiry" element={<BusinessEnquiry />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
