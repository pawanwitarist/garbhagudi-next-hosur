import SectionHeader from "./SectionHeader";
import { WHATSAPP_HREF } from "@/app/_lib/constants";

const problems = [
  "திருமணமாகி 1 வருடம் ஆகியும் கர்ப்பம் இல்லை",
  "PCOS / PCOD பிரச்சனை",
  "AMH அளவு மிகவும் குறைவாக உள்ளது",
  "ஆண்களின் கருத்தரிப்பு குறைபாடு (Male Infertility)",
  "முன்பு IVF தோல்வியடைந்தது",
  "இரண்டாவது குழந்தை திட்டமிடல்",
  "மீண்டும் மீண்டும் கருச்சிதைவு",
  "கருக்குழாய் அடைப்பு (Blocked Tubes)",
];

export default function ProblemsSection() {
  return (
    <section className="py-12 px-5 bg-soft-gray md:py-[4.5rem] md:px-8">
      <SectionHeader
        eyebrow="உங்கள் பிரச்சனை என்ன?"
        title="உங்களுக்கும் இந்த பிரச்சனைகள் உள்ளதா?"
        subtitle="கீழே உள்ள பிரச்சனைகளில் ஏதாவது உங்களுக்கு பொருந்துகிறதா? நாங்கள் உதவலாம்."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5 max-w-[960px] mx-auto">
        {problems.map((p) => (
          <div
            key={p}
            className="bg-white border border-deep-maroon/[0.12] border-l-4 border-l-deep-maroon rounded-r-[10px] py-[1.1rem] px-5 flex items-center gap-3 hover:shadow-md hover:translate-x-1 transition-all"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-warm-rose flex-shrink-0" />
            <span className="text-[15px] text-charcoal">{p}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href={WHATSAPP_HREF}
          className="inline-block bg-deep-maroon text-white px-7 py-3.5 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity font-sans-tamil"
        >
          🟢 இலவசமாக ஆலோசனை பெறுங்கள்
        </a>
      </div>
    </section>
  );
}
