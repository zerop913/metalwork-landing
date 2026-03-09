import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <GallerySection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
