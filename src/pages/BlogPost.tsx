import Header from "@/components/Header";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { 
  Calendar, 
  User, 
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Share2,
  BookOpen,
  TrendingUp,
  Home,
  MapPin,
  CheckCircle
} from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Neighborhoods in Kolkata for Real Estate Investment in 2024",
      excerpt: "Discover the most promising areas in Kolkata that offer excellent ROI potential for property investors. From Salt Lake to New Town, we analyze market trends and growth prospects.",
      content: `
        <h2>Introduction</h2>
        <p>Kolkata's real estate market has been experiencing significant growth in recent years, with several neighborhoods emerging as hotspots for property investment. As we move through 2024, understanding which areas offer the best return on investment (ROI) is crucial for both seasoned investors and first-time buyers.</p>
        
        <h2>1. Salt Lake City (Sector V)</h2>
        <p>Salt Lake City, particularly Sector V, continues to be one of the most sought-after areas for real estate investment in Kolkata. Known as the IT hub of the city, this area has witnessed tremendous infrastructure development over the past decade.</p>
        
        <h3>Why Invest Here:</h3>
        <ul>
          <li>IT corridor with major companies like TCS, Wipro, and Cognizant</li>
          <li>Excellent connectivity via metro and bus services</li>
          <li>Modern amenities including malls, hospitals, and schools</li>
          <li>Expected appreciation of 8-12% annually</li>
        </ul>
        
        <h3>Average Property Prices:</h3>
        <p>2 BHK apartments range from ₹65-85 lakhs, while 3 BHK units are priced between ₹90-120 lakhs.</p>
        
        <h2>2. New Town (Action Area I & II)</h2>
        <p>New Town represents the future of Kolkata's urban development. This planned township offers modern infrastructure and is rapidly developing into a self-sustained city.</p>
        
        <h3>Investment Highlights:</h3>
        <ul>
          <li>Planned infrastructure with wide roads and proper drainage</li>
          <li>Proximity to Netaji Subhash Chandra Bose International Airport</li>
          <li>Upcoming metro connectivity</li>
          <li>Green spaces and modern amenities</li>
        </ul>
        
        <h2>3. Rajarhat</h2>
        <p>Rajarhat has emerged as a premium residential destination, attracting both IT professionals and traditional business families. The area offers a perfect blend of modern living and cultural heritage.</p>
        
        <h2>4. Behala</h2>
        <p>Behala presents an excellent opportunity for budget-conscious investors. The area has seen significant development in terms of connectivity and amenities while maintaining affordable property prices.</p>
        
        <h2>5. Howrah (Shibpur & Botanical Garden Area)</h2>
        <p>The western bank of the Hooghly River is experiencing a renaissance. With the upcoming metro extension and several infrastructure projects, Howrah is poised for significant appreciation.</p>
        
        <h2>Investment Tips for 2024</h2>
        <ul>
          <li>Focus on areas with upcoming metro connectivity</li>
          <li>Consider proximity to IT hubs and educational institutions</li>
          <li>Evaluate the developer's track record and project approvals</li>
          <li>Factor in rental yields for investment properties</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Kolkata's real estate market offers diverse opportunities for investors. While established areas like Salt Lake provide stability, emerging neighborhoods like New Town offer higher growth potential. The key is to align your investment strategy with your financial goals and risk appetite.</p>
      `,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      author: "Rajesh Kumar",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Investment",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Property Registration Process in West Bengal",
      excerpt: "A comprehensive guide to property registration in West Bengal, including required documents, fees, and step-by-step process to ensure smooth property transactions.",
      content: `
        <h2>Introduction to Property Registration in West Bengal</h2>
        <p>Property registration is a crucial legal process that establishes your ownership rights over a property. In West Bengal, the registration process has been streamlined over the years, but understanding the requirements and procedures is essential for a smooth transaction.</p>
        
        <h2>Required Documents for Property Registration</h2>
        
        <h3>For the Seller:</h3>
        <ul>
          <li>Original sale deed or title documents</li>
          <li>Khatiyan and plot information</li>
          <li>Mutation certificate</li>
          <li>Non-encumbrance certificate</li>
          <li>Tax payment receipts</li>
          <li>PAN card and Aadhaar card</li>
        </ul>
        
        <h3>For the Buyer:</h3>
        <ul>
          <li>PAN card and Aadhaar card</li>
          <li>Address proof</li>
          <li>Bank loan approval letter (if applicable)</li>
          <li>Income proof documents</li>
        </ul>
        
        <h2>Step-by-Step Registration Process</h2>
        
        <h3>Step 1: Document Verification</h3>
        <p>Before proceeding with registration, verify all property documents thoroughly. This includes checking the chain of title, ensuring clear ownership, and confirming that all taxes are paid.</p>
        
        <h3>Step 2: Property Valuation</h3>
        <p>The Sub-Registrar office will assess the property value based on the circle rate or market value, whichever is higher. Registration fees and stamp duty are calculated based on this valuation.</p>
        
        <h3>Step 3: Payment of Fees</h3>
        <p>Pay the required stamp duty and registration fees. In West Bengal, stamp duty rates vary based on property type and location:</p>
        <ul>
          <li>Residential properties: 6-7% of property value</li>
          <li>Commercial properties: 7-8% of property value</li>
          <li>Registration fee: 1% of property value (subject to maximum limits)</li>
        </ul>
        
        <h3>Step 4: Document Execution</h3>
        <p>Execute the sale deed in the presence of the Sub-Registrar and required witnesses. Both parties must be present during this process.</p>
        
        <h3>Step 5: Registration Completion</h3>
        <p>Once all formalities are completed, the property is officially registered, and you receive the registered sale deed.</p>
        
        <h2>Online Registration Process</h2>
        <p>West Bengal has introduced online property registration to make the process more efficient:</p>
        <ul>
          <li>Book appointment online through the official portal</li>
          <li>Upload required documents digitally</li>
          <li>Pay fees online</li>
          <li>Visit Sub-Registrar office only for final execution</li>
        </ul>
        
        <h2>Common Challenges and Solutions</h2>
        
        <h3>Document Discrepancies</h3>
        <p>Ensure all names, addresses, and property details match across documents. Any discrepancy can delay the registration process.</p>
        
        <h3>Title Issues</h3>
        <p>Conduct a thorough title search to identify any legal issues. Resolve these before proceeding with registration.</p>
        
        <h2>Tips for Smooth Registration</h2>
        <ul>
          <li>Engage a qualified lawyer for document verification</li>
          <li>Ensure all utility bills are updated</li>
          <li>Keep multiple copies of all documents</li>
          <li>Verify property tax status before registration</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Property registration in West Bengal has become more streamlined with digital initiatives. However, proper preparation and understanding of the process remain crucial for successful completion. Always consult with legal experts to ensure compliance with all requirements.</p>
      `,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      author: "Priya Sharma",
      date: "December 12, 2024", 
      readTime: "10 min read",
      category: "Legal",
      featured: false
    },
    {
      id: 3,
      title: "Home Loan Interest Rates: What to Expect in 2024",
      excerpt: "Latest updates on home loan interest rates from major banks and financial institutions. Tips to get the best rates and choose the right loan tenure.",
      content: `
        <h2>Current Home Loan Landscape in 2024</h2>
        <p>The home loan market in 2024 has been characterized by competitive interest rates and innovative loan products. With the Reserve Bank of India's monetary policy influencing lending rates, understanding the current scenario is crucial for potential homebuyers.</p>
        
        <h2>Interest Rate Trends</h2>
        
        <h3>Current Rates by Bank Type</h3>
        <ul>
          <li><strong>Public Sector Banks:</strong> 8.40% - 9.65% per annum</li>
          <li><strong>Private Banks:</strong> 8.25% - 10.50% per annum</li>
          <li><strong>NBFCs:</strong> 8.50% - 12.00% per annum</li>
          <li><strong>Housing Finance Companies:</strong> 8.30% - 11.75% per annum</li>
        </ul>
        
        <h3>Factors Affecting Interest Rates</h3>
        <ul>
          <li>RBI's repo rate decisions</li>
          <li>Credit score of the borrower</li>
          <li>Loan amount and tenure</li>
          <li>Income stability and employment type</li>
          <li>Property type and location</li>
        </ul>
        
        <h2>Major Banks and Their Offerings</h2>
        
        <h3>State Bank of India (SBI)</h3>
        <p>SBI continues to offer competitive rates starting from 8.50% for eligible borrowers. Special schemes for women borrowers and government employees provide additional rate benefits.</p>
        
        <h3>HDFC Bank</h3>
        <p>Known for quick processing and customer service, HDFC offers rates starting from 8.60% with flexible repayment options.</p>
        
        <h3>ICICI Bank</h3>
        <p>ICICI's home loan rates start from 8.70% with instant approval facilities for pre-approved customers.</p>
        
        <h2>Tips to Secure Better Interest Rates</h2>
        
        <h3>Maintain a High Credit Score</h3>
        <p>A credit score above 750 significantly improves your chances of getting favorable interest rates. Regularly monitor your credit report and address any discrepancies.</p>
        
        <h3>Compare Multiple Lenders</h3>
        <p>Don't settle for the first offer. Compare rates, processing fees, and terms from multiple lenders to find the best deal.</p>
        
        <h3>Consider Loan Amount and Tenure</h3>
        <p>While longer tenures reduce EMI burden, they result in higher overall interest payments. Find the right balance based on your financial situation.</p>
        
        <h3>Negotiate Processing Fees</h3>
        <p>Many banks are flexible with processing fees, especially for customers with good credit profiles or existing relationships.</p>
        
        <h2>Government Schemes and Subsidies</h2>
        
        <h3>Pradhan Mantri Awas Yojana (PMAY)</h3>
        <p>Eligible beneficiaries can avail interest subsidies up to ₹2.67 lakhs under this scheme, making homeownership more affordable.</p>
        
        <h3>Credit Linked Subsidy Scheme (CLSS)</h3>
        <p>Provides interest subsidies for different income groups, reducing the effective cost of borrowing.</p>
        
        <h2>Fixed vs. Floating Interest Rates</h2>
        
        <h3>Fixed Interest Rates</h3>
        <p>Provide certainty in EMI payments but are typically higher than floating rates. Ideal for risk-averse borrowers.</p>
        
        <h3>Floating Interest Rates</h3>
        <p>Linked to benchmark rates like MCLR or external benchmarks. Offer potential savings when rates fall but carry interest rate risk.</p>
        
        <h2>Predictions for 2024</h2>
        <p>Financial experts predict that interest rates may remain stable to slightly increasing in 2024, depending on inflation trends and RBI policy decisions. Borrowers should consider locking in current rates if they find favorable terms.</p>
        
        <h2>Conclusion</h2>
        <p>While interest rates remain competitive in 2024, thorough research and comparison are essential to secure the best deal. Consider your long-term financial goals and choose a loan structure that aligns with your income patterns and risk tolerance.</p>
      `,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
      author: "Amit Ghosh",
      date: "December 10, 2024",
      readTime: "7 min read", 
      category: "Finance",
      featured: false
    }
  ];

  const relatedPosts = blogPosts.filter(post => post.id !== parseInt(id || '1')).slice(0, 3);
  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1')) || blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <Badge variant="outline" className="border-primary text-primary">
              {currentPost.category}
            </Badge>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {currentPost.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {currentPost.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {currentPost.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-gray-600">By {currentPost.author}</span>
            </div>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={currentPost.image} 
            alt={currentPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary" />
              <span className="text-gray-600">Thanks for reading!</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Tag className="w-4 h-4 mr-2" />
                {currentPost.category}
              </Button>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
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
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default BlogPost;