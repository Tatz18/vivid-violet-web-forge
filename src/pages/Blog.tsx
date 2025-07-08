import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
  Home,
  MapPin
} from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from blogs
  const categories = ["All", ...Array.from(new Set(blogs.flatMap(blog => blog.tags || [])))];
  
  // Filter blogs by category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.tags?.includes(selectedCategory));

  const featuredBlog = filteredBlogs[0]; // First blog as featured
  const regularBlogs = filteredBlogs.slice(1); // Rest of the blogs

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
        <HomeFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Real Estate Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Stay updated with the latest trends, tips, and insights from Phoenix Realesthatic
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 1 && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredBlogs.length === 0 ? (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Yet</h2>
              <p className="text-gray-600 mb-8">
                We're working on creating amazing content for you. Check back soon for the latest real estate insights and market updates!
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredBlog && (
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                </div>
                
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group mb-12">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      {featuredBlog.featured_image_url ? (
                        <img 
                          src={featuredBlog.featured_image_url} 
                          alt={featuredBlog.title}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-64 md:h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <div className="text-center text-primary">
                            <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-lg font-semibold">Featured Article</p>
                          </div>
                        </div>
                      )}
                      <Badge className="absolute top-4 left-4 bg-primary">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        {featuredBlog.tags && featuredBlog.tags.length > 0 && (
                          <Badge variant="outline" className="border-primary text-primary">
                            {featuredBlog.tags[0]}
                          </Badge>
                        )}
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {format(new Date(featuredBlog.published_at), "MMM d, yyyy")}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredBlog.excerpt || featuredBlog.content.substring(0, 200) + "..."}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">{featuredBlog.author_name}</span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">
                          <Link to={`/blog/${featuredBlog.slug || featuredBlog.id}`}>
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          {regularBlogs.length > 0 && (
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                  <p className="text-xl text-gray-600">Expert insights and market updates to help you make informed decisions</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularBlogs.map((blog, index) => (
                    <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative">
                        {blog.featured_image_url ? (
                          <img 
                            src={blog.featured_image_url} 
                            alt={blog.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                            <Home className="w-12 h-12 text-primary" />
                          </div>
                        )}
                        {blog.tags && blog.tags.length > 0 && (
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                            {blog.tags[0]}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {format(new Date(blog.published_at), "MMM d, yyyy")}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {blog.excerpt || blog.content.substring(0, 120) + "..."}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="text-sm text-gray-600">{blog.author_name}</span>
                          </div>
                          <Link to={`/blog/${blog.slug || blog.id}`}>
                            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Market Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and get weekly updates on real estate market trends, investment tips, and exclusive property listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Blog;