import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyForm } from "@/components/PropertyForm";
import { PropertyList } from "@/components/PropertyList";
import { BulkPropertyImport } from "@/components/BulkPropertyImport";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload } from "lucide-react";

const AdminProperties = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchProperties();
  }, []);

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
    } finally {
      setLoading(false);
    }
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
    toast({
      title: "Success",
      description: "Properties imported successfully!",
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
            <p className="text-muted-foreground">
              Manage your property listings and inventory
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setShowBulkImport(!showBulkImport);
                setShowForm(false);
              }}
            >
              <Upload className="h-4 w-4 mr-2" />
              {showBulkImport ? "Cancel Import" : "Bulk Import"}
            </Button>
            <Button
              onClick={() => {
                setShowForm(!showForm);
                setShowBulkImport(false);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              {showForm ? "Cancel" : "Add Property"}
            </Button>
          </div>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Property</CardTitle>
              <CardDescription>
                Fill in the details below to add a new property listing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PropertyForm onSuccess={handlePropertyAdded} />
            </CardContent>
          </Card>
        )}

        {showBulkImport && (
          <Card>
            <CardHeader>
              <CardTitle>Bulk Import Properties</CardTitle>
              <CardDescription>
                Import multiple properties at once using CSV or Excel file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BulkPropertyImport onSuccess={handleBulkImportSuccess} />
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Property Listings ({properties.length})</CardTitle>
            <CardDescription>
              All your property listings and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PropertyList properties={properties} onUpdate={fetchProperties} />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminProperties;