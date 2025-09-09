import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPreview = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us", 
      details: "info@earthlinktraders.com",
      subtitle: "24/7 Response Guaranteed"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      details: "123 Trade Center, Business District",
      subtitle: "New York, NY 10001"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM",
      subtitle: "Weekend: By Appointment"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Trading?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Connect with our expert team to discuss your import/export needs. 
                We're here to help you navigate global markets with confidence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose Earthlink Traders?</h3>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• Competitive pricing and transparent fees</li>
                <li>• Comprehensive trade documentation support</li>
                <li>• End-to-end logistics management</li>
                <li>• Multi-language customer support</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-smooth">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-sm font-medium mb-1">{contact.details}</p>
                  <p className="text-xs text-white/70">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;