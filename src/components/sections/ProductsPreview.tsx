import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  const productCategories = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Electronics & Technology",
      description: "Consumer electronics, industrial equipment, and cutting-edge technology solutions",
      itemCount: "150+ Products"
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: "Industrial Machinery",
      description: "Heavy machinery, manufacturing equipment, and industrial automation systems", 
      itemCount: "80+ Products"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety & Security",
      description: "Security systems, safety equipment, and protective gear for various industries",
      itemCount: "120+ Products"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Premium Products from Trusted Sources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of quality products sourced from certified 
            manufacturers and suppliers worldwide.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="bg-card hover:shadow-custom-lg transition-all duration-smooth group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-smooth">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  {category.itemCount}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-primary">99%</h4>
              <p className="text-muted-foreground">Quality Assurance Rate</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-accent">48h</h4>
              <p className="text-muted-foreground">Average Response Time</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-primary">500+</h4>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link to="/products">
              Explore All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;