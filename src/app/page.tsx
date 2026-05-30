import MainTemplate from "@/components/templates/MainTemplate/MainTemplate";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import NewsGrid from "@/components/organisms/NewsGrid/NewsGrid";
import ContactSection from "@/components/organisms/ContactSection/ContactSection";

export default function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <NewsGrid />
      <ContactSection />
    </MainTemplate>
  );
}
