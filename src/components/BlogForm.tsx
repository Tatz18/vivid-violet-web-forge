import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BlogFormProps {
  onSuccess: () => void;
  blog?: any;
}

export const BlogForm = ({ onSuccess, blog }: BlogFormProps) => {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    content: blog?.content || "",
    excerpt: blog?.excerpt || "",
    featured_image_url: blog?.featured_image_url || "",
    status: blog?.status || "published",
    tags: blog?.tags?.join(", ") || "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const slug = generateSlug(formData.title);
      const tags = formData.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const blogData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt || formData.content.substring(0, 150) + "...",
        featured_image_url: formData.featured_image_url,
        slug: blog ? blog.slug : slug,
        status: formData.status,
        tags: tags,
        published_at: formData.status === "published" ? new Date().toISOString() : null,
      };

      let result;
      if (blog) {
        result = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", blog.id);
      } else {
        result = await supabase
          .from("blogs")
          .insert([blogData]);
      }

      if (result.error) throw result.error;

      toast({
        title: "Success",
        description: `Blog ${blog ? "updated" : "created"} successfully!`,
      });

      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || `Failed to ${blog ? "update" : "create"} blog`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter blog title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          placeholder="Brief description of the blog post"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Write your blog content here..."
          rows={12}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featured_image_url">Featured Image URL</Label>
        <Input
          id="featured_image_url"
          value={formData.featured_image_url}
          onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
          placeholder="https://example.com/image.jpg"
          type="url"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          placeholder="real estate, property, investment (comma separated)"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
      </Button>
    </form>
  );
};