import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductsPreview from "@/components/sections/ProductsPreview";
import ContactPreview from "@/components/sections/ContactPreview";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ProductsPreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
