import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Building, PenTool, Users, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalBlogs: 0,
    activeProperties: 0,
    publishedBlogs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch properties stats
      const { data: properties, error: propertiesError } = await supabase
        .from("properties")
        .select("status");

      if (propertiesError) throw propertiesError;

      // Fetch blogs stats
      const { data: blogs, error: blogsError } = await supabase
        .from("blogs")
        .select("status");

      if (blogsError) throw blogsError;

      setStats({
        totalProperties: properties?.length || 0,
        totalBlogs: blogs?.length || 0,
        activeProperties: properties?.filter(p => p.status === 'available')?.length || 0,
        publishedBlogs: blogs?.filter(b => b.status === 'published')?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Properties",
      value: stats.totalProperties,
      description: `${stats.activeProperties} active`,
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      description: `${stats.publishedBlogs} published`,
      icon: PenTool,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Listings",
      value: stats.activeProperties,
      description: "Available properties",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Published Content",
      value: stats.publishedBlogs,
      description: "Live blog posts",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your property management admin panel
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {loading ? "..." : stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Properties</CardTitle>
              <CardDescription>
                Latest property listings added to the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Go to Properties section to manage your listings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Blogs</CardTitle>
              <CardDescription>
                Latest blog posts and content updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Go to Blogs section to manage your content
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;