import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Package, Truck, Shield, Cpu, Zap, Wrench } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", count: "350+" },
    { id: "electronics", name: "Electronics & Technology", count: "150+" },
    { id: "machinery", name: "Industrial Machinery", count: "80+" },
    { id: "safety", name: "Safety & Security", count: "120+" }
  ];

  const products = [
    {
      id: 1,
      name: "Industrial Smart Sensors",
      category: "electronics",
      price: "Contact for Quote",
      image: "📱",
      description: "Advanced IoT sensors for industrial monitoring and automation systems.",
      availability: "In Stock",
      minOrder: "50 units",
      features: ["IoT Connectivity", "Real-time Monitoring", "CE Certified"]
    },
    {
      id: 2, 
      name: "Heavy Duty Conveyor Systems",
      category: "machinery",
      price: "Contact for Quote", 
      image: "🏭",
      description: "Robust conveyor systems for manufacturing and logistics operations.",
      availability: "Pre-Order",
      minOrder: "1 unit",
      features: ["Heavy Duty", "Customizable", "ISO Certified"]
    },
    {
      id: 3,
      name: "Security Camera Systems",
      category: "safety",
      price: "Contact for Quote",
      image: "📹", 
      description: "Professional surveillance systems with AI-powered analytics.",
      availability: "In Stock",
      minOrder: "10 units",
      features: ["AI Analytics", "Night Vision", "Cloud Storage"]
    },
    {
      id: 4,
      name: "LED Industrial Lighting",
      category: "electronics", 
      price: "Contact for Quote",
      image: "💡",
      description: "Energy-efficient LED lighting solutions for industrial facilities.",
      availability: "In Stock", 
      minOrder: "25 units",
      features: ["Energy Efficient", "Long Lasting", "IP65 Rated"]
    },
    {
      id: 5,
      name: "Pneumatic Control Systems",
      category: "machinery",
      price: "Contact for Quote",
      image: "⚙️", 
      description: "Precision pneumatic controls for automated manufacturing processes.",
      availability: "In Stock",
      minOrder: "5 units", 
      features: ["Precision Control", "Durable", "Easy Installation"]
    },
    {
      id: 6,
      name: "Fire Safety Equipment",
      category: "safety",
      price: "Contact for Quote",
      image: "🚨",
      description: "Comprehensive fire detection and suppression systems.",
      availability: "In Stock",
      minOrder: "1 system",
      features: ["Early Detection", "Automatic Response", "Code Compliant"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "electronics": return <Cpu className="w-5 h-5" />;
      case "machinery": return <Wrench className="w-5 h-5" />;
      case "safety": return <Shield className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Product Catalog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover premium products sourced from certified manufacturers worldwide. 
              Quality guaranteed, competitive pricing, reliable delivery.
            </p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {getCategoryIcon(category.id)}
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="bg-card hover:shadow-custom-lg transition-all duration-smooth group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-4xl">{product.image}</div>
                        <Badge variant={product.availability === "In Stock" ? "default" : "secondary"}>
                          {product.availability}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium">{product.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Min Order:</span>
                          <span className="font-medium">{product.minOrder}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full group-hover:bg-primary-hover transition-colors">
                        Request Quote
                        <Zap className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We have access to thousands of additional products through our global network. 
              Let us source exactly what you're looking for.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;