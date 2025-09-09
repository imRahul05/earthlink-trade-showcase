import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Mission",
      description: "To bridge global markets by providing exceptional import/export services that connect businesses worldwide with quality products and reliable partnerships."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Vision", 
      description: "To be the leading global trade facilitator, recognized for our integrity, innovation, and commitment to sustainable business practices."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Operating across 50+ countries, we leverage our extensive network to provide seamless cross-border trade solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Excellence",
      description: "Committed to the highest standards of quality, compliance, and customer service in every transaction we facilitate."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About Earthlink Traders
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              With over a decade of experience in international trade, we've built lasting 
              partnerships that span continents and industries.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Founded in 2014, Earthlink Traders emerged from a vision to simplify and enhance 
                  global trade relationships. What started as a small import/export company has evolved 
                  into a comprehensive trading partner serving businesses across six continents.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began when our founders recognized the complexity and challenges faced 
                  by businesses trying to source quality products internationally. We set out to create 
                  a bridge between manufacturers and buyers, ensuring transparency, reliability, and 
                  excellence in every transaction.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we proudly serve over 500 active clients, have facilitated thousands of 
                  successful trades, and maintain partnerships with certified suppliers in key markets 
                  worldwide. Our commitment to ethical business practices and sustainable trade has 
                  earned us recognition as a trusted partner in the global marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Our Values & Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card hover:shadow-custom-md transition-all duration-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals driving our mission to connect global markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Sarah Johnson", role: "Chief Executive Officer", experience: "15+ years in international trade" },
                { name: "Michael Chen", role: "Operations Director", experience: "12+ years in supply chain management" },
                { name: "Elena Rodriguez", role: "Compliance Manager", experience: "10+ years in trade regulations" }
              ].map((member, index) => (
                <Card key={index} className="bg-card hover:shadow-custom-md transition-all duration-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help expand your business globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us Today
              </a>
              <a 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Our Products
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;