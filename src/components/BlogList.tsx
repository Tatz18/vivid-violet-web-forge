import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Edit, Trash2, Eye } from "lucide-react";
import { format } from "date-fns";

interface BlogListProps {
  blogs: any[];
  onUpdate: () => void;
  onEdit: (blog: any) => void;
}

export const BlogList = ({ blogs, onUpdate, onEdit }: BlogListProps) => {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    setDeletingId(id);
    try {
      const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post deleted successfully!",
      });

      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const toggleStatus = async (blog: any) => {
    try {
      const newStatus = blog.status === "published" ? "draft" : "published";
      const { error } = await supabase
        .from("blogs")
        .update({ 
          status: newStatus,
          published_at: newStatus === "published" ? new Date().toISOString() : null
        })
        .eq("id", blog.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Blog ${newStatus === "published" ? "published" : "unpublished"} successfully!`,
      });

      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update blog status",
        variant: "destructive",
      });
    }
  };

  if (blogs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No blog posts yet. Create your first blog post!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <CardTitle className="text-lg">{blog.title}</CardTitle>
                <CardDescription>
                  {blog.excerpt || (blog.content?.substring(0, 100) + "...")}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Created: {format(new Date(blog.created_at), "MMM d, yyyy")}</span>
                  {blog.published_at && (
                    <span>• Published: {format(new Date(blog.published_at), "MMM d, yyyy")}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={blog.status === "published" ? "default" : "secondary"}>
                  {blog.status}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleStatus(blog)}
                  title={blog.status === "published" ? "Unpublish" : "Publish"}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(blog)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(blog.id)}
                  disabled={deletingId === blog.id}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          {blog.tags && blog.tags.length > 0 && (
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1">
                {blog.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};