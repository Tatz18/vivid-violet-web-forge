import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Phoenix Realesthatic assistant. I can help you with information about our properties, services, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const botResponses = {
    greetings: [
      "Hello! How can I help you with your real estate needs today?",
      "Hi there! I'm here to assist you with any questions about Phoenix Realesthatic.",
      "Welcome! Feel free to ask me about our properties or services.",
    ],
    services: [
      "We offer Property Sales, Property Rental, Investment Consulting, Property Management, and Market Analysis. Which service interests you?",
      "Our main services include buying, selling, renting, and managing properties. We also provide investment consulting and market analysis.",
    ],
    properties: [
      "You can browse our available properties on the Properties page. We have residential and commercial properties available for sale and rent.",
      "We have a wide range of properties available. Visit our Properties page to see current listings with photos and details.",
    ],
    contact: [
      "You can reach us at +91 93301 02817 or email contact@phoenixrealesthatic.com. Our office is located in Kolkata, Salt Lake Sector-V.",
      "Feel free to contact us via phone at +91 93301 02817 or visit our Contact page for more information.",
    ],
    pricing: [
      "Property prices vary based on location, size, and type. Please check our Properties page for current listings with prices, or contact us for personalized assistance.",
      "For specific pricing information, I'd recommend browsing our Properties page or contacting our team directly for a consultation.",
    ],
    location: [
      "We're based in Kolkata, India, specifically at Regus Globsyn Crystals, Saltlake Sector-V. We serve the greater Kolkata area and beyond.",
      "Our office is located in Salt Lake Sector-V, Kolkata. We primarily serve the Kolkata metropolitan area.",
    ],
    investment: [
      "We offer comprehensive investment consulting services to help you make informed real estate decisions. Our market analysis can guide your investment strategy.",
      "Our investment consulting team can help you identify profitable opportunities and provide market insights for your real estate investments.",
    ],
    default: [
      "I'm sorry, I didn't quite understand that. You can ask me about our services, properties, contact information, or general real estate questions.",
      "Could you please rephrase your question? I can help with information about our services, properties, pricing, or contact details.",
      "I'm here to help! Try asking about our services, available properties, pricing, or how to get in touch with us.",
    ],
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return getRandomResponse(botResponses.greetings);
    }
    
    if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
      return getRandomResponse(botResponses.services);
    }
    
    if (message.includes("property") || message.includes("properties") || message.includes("house") || message.includes("apartment")) {
      return getRandomResponse(botResponses.properties);
    }
    
    if (message.includes("contact") || message.includes("phone") || message.includes("email") || message.includes("reach")) {
      return getRandomResponse(botResponses.contact);
    }
    
    if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("expensive")) {
      return getRandomResponse(botResponses.pricing);
    }
    
    if (message.includes("location") || message.includes("where") || message.includes("address") || message.includes("office")) {
      return getRandomResponse(botResponses.location);
    }
    
    if (message.includes("invest") || message.includes("investment") || message.includes("profit") || message.includes("market")) {
      return getRandomResponse(botResponses.investment);
    }
    
    return getRandomResponse(botResponses.default);
  };

  const getRandomResponse = (responses: string[]): string => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 btn-gradient-pink btn-hover-glow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-lg">
            <div>
              <h3 className="font-semibold text-primary-foreground">Phoenix Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Online now</p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="btn-gradient-pink">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;