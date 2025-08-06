import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogForm } from "@/components/BlogForm";
import { BlogList } from "@/components/BlogList";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  const handleBlogAdded = () => {
    fetchBlogs();
    setShowForm(false);
    setEditingBlog(null);
    toast({
      title: "Success",
      description: "Blog post saved successfully!",
    });
  };

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog);
    setShowForm(true);
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
            <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
            <p className="text-muted-foreground">
              Create and manage your blog content and articles
            </p>
          </div>
          <Button
            onClick={() => {
              setShowForm(!showForm);
              setEditingBlog(null);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            {showForm ? "Cancel" : "New Blog Post"}
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>
                {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
              </CardTitle>
              <CardDescription>
                {editingBlog 
                  ? "Update your blog post content and settings"
                  : "Write and publish a new blog post for your website"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BlogForm onSuccess={handleBlogAdded} blog={editingBlog} />
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts ({blogs.length})</CardTitle>
            <CardDescription>
              Manage your blog posts, drafts, and published content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BlogList 
              blogs={blogs} 
              onUpdate={fetchBlogs} 
              onEdit={handleEditBlog} 
            />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogs;