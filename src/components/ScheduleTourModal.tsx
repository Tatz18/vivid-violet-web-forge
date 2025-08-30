import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface ScheduleTourModalProps {
  children: React.ReactNode;
}

export const ScheduleTourModal = ({ children }: ScheduleTourModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property_id: "",
    time_slot: "",
    special_requests: ""
  });
  const { toast } = useToast();

  // Fetch properties for selection
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("id, title, location")
          .limit(20);

        if (error) throw error;
        setProperties(data || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !selectedDate || !formData.time_slot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including date and time.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Find selected property details
      const selectedProperty = properties.find(p => p.id === formData.property_id);
      
      // Prepare email data
      const emailData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        property: selectedProperty ? `${selectedProperty.title} - ${selectedProperty.location}` : "Any available property",
        tour_date: format(selectedDate, "PPPP"),
        tour_time: formData.time_slot,
        special_requests: formData.special_requests || "None"
      };

      console.log("Sending tour request:", emailData);

      // Call edge function to send email
      const { data, error } = await supabase.functions.invoke('send-tour-request', {
        body: emailData
      });

      console.log("Email response:", { data, error });

      if (error) throw error;

      toast({
        title: "Tour Request Sent!",
        description: "We've received your tour request and will contact you shortly to confirm the details.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        property_id: "",
        time_slot: "",
        special_requests: ""
      });
      setSelectedDate(undefined);
      setOpen(false);

    } catch (error: any) {
      console.error("Error sending tour request:", error);
      toast({
        title: "Request Failed",
        description: error.message || "Failed to send tour request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto z-40 bg-white">
        <DialogHeader>
          <DialogTitle>Schedule a Property Tour</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll contact you to confirm your tour appointment.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Property Selection */}
          <div className="space-y-2">
            <Label>Property of Interest</Label>
            <Select value={formData.property_id} onValueChange={(value) => handleInputChange("property_id", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a property (optional)" />
              </SelectTrigger>
              <SelectContent className="max-h-48">
                <SelectItem value="any">Any available property</SelectItem>
                {properties.map((property) => (
                  <SelectItem key={property.id} value={property.id}>
                    {property.title} - {property.location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Preferred Tour Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-auto p-0 z-[9999] bg-white border shadow-lg" 
                align="start"
                sideOffset={4}
              >
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today || date.getDay() === 0; // Disable past dates and Sundays
                  }}
                  initialFocus
                  className="p-3 pointer-events-auto bg-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label>Preferred Time *</Label>
            <Select value={formData.time_slot} onValueChange={(value) => handleInputChange("time_slot", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred time">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {formData.time_slot || "Select a time"}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="special_requests">Special Requests</Label>
            <Textarea
              id="special_requests"
              value={formData.special_requests}
              onChange={(e) => handleInputChange("special_requests", e.target.value)}
              placeholder="Any specific requirements or questions? (optional)"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending Request..." : "Schedule Tour"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};