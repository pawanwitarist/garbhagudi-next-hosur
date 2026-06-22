import Nav from "./_components/Nav";
import HeroSection from "./_components/HeroSection";
import TrustStrip from "./_components/TrustStrip";
import WhySection from "./_components/WhySection";
import TreatmentsSection from "./_components/TreatmentsSection";
import ProcessSection from "./_components/ProcessSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import FormSection from "./_components/FormSection";
import Footer from "./_components/Footer";
import FloatCall from "./_components/FloatCall";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <TrustStrip />
        <WhySection />
        <TreatmentsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FormSection />
      </main>
      <Footer />
      <FloatCall />
    </>
  );
}
