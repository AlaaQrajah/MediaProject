import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import HeroSection from "./components/HeroSection";
import UniversitiesSection from "./components/UniversitiesSection";
import SpecialtiesPreviewSection from "./components/SpecialtiesPreviewSection";
import DevelopersSection from "./components/DevelopersSection";
import FAQSection from "./components/FAQSection";
import AcademyBannerSection from "./components/AcademyBannerSection";
import EngineeringFacultiesSection from "./components/EngineeringFacultiesSection";
import StudentPlatformsSectio from "./components/StudentPlatformsSection";
import HowToJoinSection from "./components/HowToJoinSection";
import CommunityTestimonialsSection from "./components/CommunityTestimonialsSection";
export default function HomePage() {
  return (
    <PageWrapper>
      <SEO
        title="الصفحة الرئيسية"
        description="منصة الجامعات السورية هي دليلك الشامل لاستكشاف الجامعات، التخصصات، والمنح الدراسية في سوريا."
      />
      <HeroSection />
      <UniversitiesSection />
      <SpecialtiesPreviewSection />
      <AcademyBannerSection />
      <EngineeringFacultiesSection />
      <StudentPlatformsSectio />
      <DevelopersSection />
      <HowToJoinSection />
      <CommunityTestimonialsSection />
      <FAQSection />
    </PageWrapper>
  );
} 