import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Download, CheckCircle, FileText, Globe, Award } from "lucide-react";

const Compliance = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Import/Export License",
      issuer: "U.S. Customs and Border Protection",
      validUntil: "December 2025",
      status: "Active",
      description: "Authorized for international trade operations across all product categories.",
      downloadUrl: "#"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "ISO 9001:2015 Certification", 
      issuer: "International Organization for Standardization",
      validUntil: "March 2026",
      status: "Active",
      description: "Quality management system certification ensuring consistent service delivery.",
      downloadUrl: "#"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "WTO Member Registration",
      issuer: "World Trade Organization",
      validUntil: "Permanent",
      status: "Active", 
      description: "Registered member with full compliance to international trade agreements.",
      downloadUrl: "#"
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Business Registration Certificate",
      issuer: "State of New York",
      validUntil: "Annual Renewal",
      status: "Active",
      description: "Official business registration and tax identification documentation.",
      downloadUrl: "#"
    }
  ];

  const complianceAreas = [
    {
      title: "Trade Regulations",
      description: "Full compliance with international trade laws, tariff regulations, and customs procedures.",
      features: ["Customs Documentation", "Tariff Classification", "Trade Agreements", "Export Controls"]
    },
    {
      title: "Quality Standards",
      description: "Adherence to global quality standards and product certification requirements.",
      features: ["Product Testing", "Quality Audits", "Certification Management", "Standards Compliance"]
    },
    {
      title: "Documentation",
      description: "Comprehensive documentation and record-keeping for all trade transactions.",
      features: ["Invoice Management", "Shipping Documents", "Insurance Records", "Audit Trails"]
    },
    {
      title: "Risk Management", 
      description: "Proactive risk assessment and mitigation strategies for international trade.",
      features: ["Supplier Verification", "Country Risk Analysis", "Insurance Coverage", "Contingency Planning"]
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
              Legal & Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transparent operations with full regulatory compliance. View our certifications, 
              licenses, and commitment to ethical international trade.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Certifications & Licenses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We maintain all necessary certifications and licenses to ensure compliant 
                and secure international trade operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card hover:shadow-custom-lg transition-all duration-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {cert.icon}
                        <div>
                          <CardTitle className="text-xl">{cert.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-accent">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{cert.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Valid Until</p>
                        <p className="font-medium">{cert.validUntil}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Compliance Framework
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive approach to regulatory compliance across all aspects 
                of international trade operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-card rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Trust & Transparency
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building trust through transparency and maintaining the highest standards 
                  of business ethics in all our operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure Transactions</h3>
                  <p className="text-muted-foreground">
                    All transactions protected by comprehensive insurance and secure payment systems.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Full Documentation</h3>
                  <p className="text-muted-foreground">
                    Complete paper trail and documentation for every shipment and transaction.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Certified Quality</h3>
                  <p className="text-muted-foreground">
                    All products meet international quality standards with proper certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Questions About Our Compliance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our compliance team is ready to answer any questions about our certifications and procedures.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact">Contact Compliance Team</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Compliance;