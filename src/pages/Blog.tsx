import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Neighborhoods in Kolkata for Real Estate Investment in 2024",
      excerpt: "Discover the most promising areas in Kolkata that offer excellent ROI potential for property investors. From Salt Lake to New Town, we analyze market trends and growth prospects.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      author: "Rajesh Kumar",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Investment",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Property Registration Process in West Bengal",
      excerpt: "A comprehensive guide to property registration in West Bengal, including required documents, fees, and step-by-step process to ensure smooth property transactions.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600",
      author: "Priya Sharma",
      date: "December 12, 2024", 
      readTime: "7 min read",
      category: "Legal",
      featured: false
    },
    {
      id: 3,
      title: "Home Loan Interest Rates: What to Expect in 2024",
      excerpt: "Latest updates on home loan interest rates from major banks and financial institutions. Tips to get the best rates and choose the right loan tenure.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600",
      author: "Amit Ghosh",
      date: "December 10, 2024",
      readTime: "4 min read", 
      category: "Finance",
      featured: false
    },
    {
      id: 4,
      title: "Vastu Tips for Your New Home: Creating Positive Energy",
      excerpt: "Learn about essential Vastu principles while choosing and setting up your new home. Simple tips to enhance positive energy and prosperity in your living space.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
      author: "Dr. Sunita Roy",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
      featured: false
    },
    {
      id: 5,
      title: "Smart Home Technology: Future of Real Estate",
      excerpt: "Explore how smart home technology is revolutionizing the real estate market. From automated lighting to security systems, discover what modern buyers expect.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
      author: "Tech Team",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Technology",
      featured: false
    },
    {
      id: 6,
      title: "Kolkata Metro Expansion: Impact on Property Prices",
      excerpt: "Analysis of how the ongoing metro expansion projects in Kolkata are affecting property values in different areas. Investment opportunities along new metro routes.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600",
      author: "Market Research Team",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Market Analysis",
      featured: false
    }
  ];

  const categories = ["All", "Investment", "Legal", "Finance", "Lifestyle", "Technology", "Market Analysis"];

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
            Stay updated with the latest trends, tips, and insights from Kolkata's real estate market
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group mb-12">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Expert insights and market updates to help you make informed decisions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
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

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Market Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and get weekly updates on Kolkata real estate market trends, investment tips, and exclusive property listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Phoenix Realesthatic
              </h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in real estate, helping you find the perfect property since 2008.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Licensed & Bonded</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Property Sales</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Property Management</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Market Analysis</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Investment Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Property Street</p>
                <p>Kolkata, West Bengal 700001</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@phoenixrealesthatic.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Phoenix Realesthatic. All rights reserved. | Licensed Real Estate Broker</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;