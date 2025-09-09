import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Global Trade Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Connect Your Business to the{" "}
            <span className="bg-gradient-to-r from-accent-light to-gold bg-clip-text text-transparent">
              Global Market
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto">
            Earthlink Traders bridges continents with reliable import/export services, 
            quality products, and seamless logistics solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products" className="inline-flex items-center">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-white/80">Countries Served</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold">99%</span>
              </div>
              <p className="text-white/80">Quality Guarantee</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-light mr-2" />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;