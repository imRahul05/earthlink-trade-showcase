import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global Network",
      description: "Connected to suppliers and buyers across 50+ countries"
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Quality Assured", 
      description: "Rigorous quality control and compliance standards"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Your Trusted Partner in Global Trade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2014, Earthlink Traders has been bridging international markets with 
                integrity, expertise, and innovation. We've facilitated thousands of successful 
                transactions across six continents.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified import/export licenses",
                "ISO 9001:2015 quality management", 
                "Comprehensive trade compliance",
                "24/7 customer support"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-custom-md transition-all duration-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;