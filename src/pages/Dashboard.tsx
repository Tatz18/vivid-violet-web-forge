import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PropertyForm } from "@/components/PropertyForm";
import { PropertyList } from "@/components/PropertyList";
import { BulkPropertyImport } from "@/components/BulkPropertyImport";
import { useSimpleAuth } from "@/components/SimpleAuth";

const Dashboard = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, logout } = useSimpleAuth();

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      navigate("/auth");
    } else {
      fetchProperties();
    }
    setLoading(false);
  }, [isAuthenticated, navigate]);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch properties",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = () => {
    logout();
    navigate("/auth");
  };

  const handlePropertyAdded = () => {
    fetchProperties();
    setShowForm(false);
    toast({
      title: "Success",
      description: "Property added successfully!",
    });
  };

  const handleBulkImportSuccess = () => {
    fetchProperties();
    setShowBulkImport(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
              Property Dashboard
            </Link>
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/properties" className="text-sm hover:text-primary transition-colors">
                Properties
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">phoenixrealesthatic@gmail.com</span>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Properties</h2>
          <div className="flex gap-2">
            <Button 
              onClick={() => {
                setShowBulkImport(!showBulkImport);
                setShowForm(false);
              }}
              variant="outline"
            >
              {showBulkImport ? "Cancel" : "Bulk Import"}
            </Button>
            <Button onClick={() => {
              setShowForm(!showForm);
              setShowBulkImport(false);
            }}>
              {showForm ? "Cancel" : "Add Property"}
            </Button>
          </div>
        </div>

        {showForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Property</CardTitle>
              <CardDescription>Fill in the details below to add a new property</CardDescription>
            </CardHeader>
            <CardContent>
              <PropertyForm onSuccess={handlePropertyAdded} />
            </CardContent>
          </Card>
        )}

        {showBulkImport && (
          <div className="mb-6">
            <BulkPropertyImport onSuccess={handleBulkImportSuccess} />
          </div>
        )}

        <PropertyList properties={properties} onUpdate={fetchProperties} />
      </main>
    </div>
  );
};

export default Dashboard;