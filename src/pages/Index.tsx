import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ActivitiesSection } from "@/components/sections/activities"
import { ClubsMapSection } from "@/components/sections/clubs-map"
import { NuitDesEtoilesSection } from "@/components/sections/nuit-des-etoiles"
import { MediaSection } from "@/components/sections/media"
import { NewsSection } from "@/components/sections/news"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <ClubsMapSection />
        <NuitDesEtoilesSection />
        <MediaSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
