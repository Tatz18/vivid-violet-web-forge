import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PropertyForm } from "@/components/PropertyForm";
import { PropertyList } from "@/components/PropertyList";
import { BulkPropertyImport } from "@/components/BulkPropertyImport";
import { BlogForm } from "@/components/BlogForm";
import { BlogList } from "@/components/BlogList";
import { useAuth } from "@/components/AuthProvider";

const Dashboard = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("properties");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signOut } = useAuth();

  useEffect(() => {
    // Check authentication
    if (!user) {
      navigate("/auth");
    } else {
      fetchProperties();
      fetchBlogs();
    }
    setLoading(false);
  }, [user, navigate]);

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

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch blogs",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = () => {
    signOut();
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

  const handleBlogAdded = () => {
    fetchBlogs();
    setShowBlogForm(false);
    setEditingBlog(null);
    toast({
      title: "Success",
      description: "Blog saved successfully!",
    });
  };

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog);
    setShowBlogForm(true);
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
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => {
              setActiveTab("properties");
              setShowForm(false);
              setShowBulkImport(false);
              setShowBlogForm(false);
            }}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === "properties"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => {
              setActiveTab("blogs");
              setShowForm(false);
              setShowBulkImport(false);
              setShowBlogForm(false);
            }}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === "blogs"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blogs
          </button>
        </div>

        {/* Properties Tab */}
        {activeTab === "properties" && (
          <div>
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
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === "blogs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Blog Posts</h2>
              <Button onClick={() => {
                setShowBlogForm(!showBlogForm);
                setEditingBlog(null);
              }}>
                {showBlogForm ? "Cancel" : "Add New Blog"}
              </Button>
            </div>

            {showBlogForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{editingBlog ? "Edit Blog Post" : "Add New Blog Post"}</CardTitle>
                  <CardDescription>Fill in the details below to {editingBlog ? "update" : "create"} a blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <BlogForm onSuccess={handleBlogAdded} blog={editingBlog} />
                </CardContent>
              </Card>
            )}

            <BlogList blogs={blogs} onUpdate={fetchBlogs} onEdit={handleEditBlog} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;