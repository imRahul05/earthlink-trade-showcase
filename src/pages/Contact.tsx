import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      details: ["info@earthlinktraders.com", "sales@earthlinktraders.com"],
      subtitle: "24/7 Response Guaranteed"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Address",
      details: ["123 Trade Center", "Business District", "New York, NY 10001"],
      subtitle: "Visit us by appointment"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM", "Sunday: Closed"],
      subtitle: "Emergency support available 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start trading? Get in touch with our expert team for personalized 
              solutions and competitive quotes.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Please provide details about your inquiry, including product interests, quantities, timeline, etc."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Multiple ways to reach our team. Choose what works best for you.
                  </p>
                </div>

                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-card hover:shadow-custom-md transition-all duration-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {contact.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{contact.title}</h3>
                          {contact.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-foreground">{detail}</p>
                          ))}
                          <p className="text-xs text-muted-foreground">{contact.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of the business district, our office is easily accessible 
                and equipped with modern facilities for client meetings.
              </p>
            </div>

            {/* Placeholder for map - in a real app you'd integrate Google Maps */}
            <div className="bg-gradient-hero rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="opacity-90">123 Trade Center, Business District</p>
                <p className="opacity-90">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What's your minimum order quantity?",
                  answer: "Minimum orders vary by product type. Most items start at 10-50 units, but we can accommodate smaller orders for certain products."
                },
                {
                  question: "How long does shipping take?",
                  answer: "Shipping times depend on origin and destination. Typically 2-4 weeks for ocean freight, 5-7 days for air freight."
                },
                {
                  question: "Do you provide quality guarantees?",
                  answer: "Yes, all products come with quality guarantees. We also offer pre-shipment inspections for added assurance."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept wire transfers, letters of credit, and established payment terms for qualified customers."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;