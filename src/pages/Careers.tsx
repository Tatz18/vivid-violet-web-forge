import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, DollarSign, Users, Upload, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  jobPosition: z.string().min(1, "Please select a position"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});

type FormData = z.infer<typeof formSchema>;

const jobPositions = [
  {
    id: "sales-executive",
    title: "Sales Executive",
    type: "Full Time",
    location: "Kolkata, Salt Lake",
    salary: "₹3-5 LPA + Incentives",
    description: "We are looking for a dynamic Sales Executive to join our growing team. You'll be responsible for generating leads, conducting property showings, and closing deals.",
    requirements: [
      "1-3 years of sales experience (real estate preferred)",
      "Excellent communication and negotiation skills",
      "Bachelor's degree in any field",
      "Strong networking abilities",
      "Own vehicle preferred"
    ],
    responsibilities: [
      "Generate and follow up on leads",
      "Conduct property tours and presentations",
      "Negotiate deals and close sales",
      "Maintain client relationships",
      "Achieve monthly sales targets"
    ]
  },
  {
    id: "backoffice-executive",
    title: "Back Office Executive",
    type: "Full Time", 
    location: "Kolkata, Salt Lake",
    salary: "₹2.5-4 LPA",
    description: "Join our administrative team as a Back Office Executive. Handle documentation, client support, and ensure smooth operations behind the scenes.",
    requirements: [
      "0-2 years of administrative experience",
      "Proficiency in MS Office Suite",
      "Strong organizational skills",
      "Attention to detail",
      "Graduate in any discipline"
    ],
    responsibilities: [
      "Manage property documentation",
      "Handle client inquiries and support",
      "Maintain databases and records",
      "Coordinate with sales team",
      "Process applications and paperwork"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobPosition: "",
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('job_applications')
        .insert({
          job_position: data.jobPosition,
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          experience: data.experience,
          cover_letter: data.coverLetter,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      form.reset();
      setSelectedJob(null);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build Your Career in Real Estate with Phoenix Realesthatic. 
            We're looking for passionate individuals to grow with us.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team that values growth, innovation, and excellence in real estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Team Culture</h3>
              <p className="text-muted-foreground">
                Work with passionate professionals in a supportive environment that encourages growth.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Compensation</h3>
              <p className="text-muted-foreground">
                Attractive salary packages with performance-based incentives and growth opportunities.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground">
                Clear career progression paths with training programs and skill development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Discover exciting career opportunities with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {jobPositions.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6" 
                    onClick={() => {
                      setSelectedJob(job.id);
                      form.setValue("jobPosition", job.title);
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section className="py-16 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Apply for Position</CardTitle>
                <CardDescription>
                  Fill out the form below to submit your application. All fields are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest. We'll review your application and contact you soon.
                    </p>
                    <Button 
                      className="mt-4" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedJob(null);
                      }}
                    >
                      Apply for Another Position
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="jobPosition"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {jobPositions.map((job) => (
                                  <SelectItem key={job.id} value={job.title}>
                                    {job.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="0-1">0-1 years</SelectItem>
                                <SelectItem value="1-3">1-3 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="5+">5+ years</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4">
                        <Label>Resume Upload (Optional)</Label>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            You can email your resume to{" "}
                            <a href="mailto:careers@phoenixrealesthatic.com" className="text-primary underline">
                              careers@phoenixrealesthatic.com
                            </a>{" "}
                            after submitting this form.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setSelectedJob(null)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="flex-1"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <HomeFooter />
    </div>
  );
};

export default Careers;