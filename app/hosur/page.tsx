import type { Metadata } from "next";
import Nav from "./_components/Nav";
import HeroSection from "./_components/HeroSection";
import WhySection from "./_components/WhySection";
import ProblemsSection from "./_components/ProblemsSection";
import StoriesSection from "./_components/StoriesSection";
import DoctorSection from "./_components/DoctorSection";
import ApproachSection from "./_components/ApproachSection";
import CostSection from "./_components/CostSection";
import TreatmentsSection from "./_components/TreatmentsSection";
import FaqAccordion from "./_components/FaqAccordion";
import CoverageSection from "./_components/CoverageSection";
import FinalCtaSection from "./_components/FinalCtaSection";
import Footer from "./_components/Footer";
import WhatsAppFloat from "./_components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "கர்ப்பகுடி IVF மையம் - ஓசூர் | GarbhaGudi Hosur",
  description:
    "ஓசூரில் IVF சிகிச்சை - கர்ப்பகுடி கருத்தரிப்பு மையம். 12+ ஆண்டு அனுபவம், 15,000+ வெற்றிக் கதைகள். இன்றே ஒரு இலவச ஆலோசனை பெறுங்கள்.",
};

export default function Page() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <HeroSection />
        <WhySection />
        <ProblemsSection />
        <StoriesSection />
        <DoctorSection />
        <ApproachSection />
        <CostSection />
        <TreatmentsSection />
        <FaqAccordion />
        <CoverageSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
