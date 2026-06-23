import SectionHeader from "./SectionHeader";

const areas = [
  { ta: "ஓசூர்", en: "Hosur" },
  { ta: "கிருஷ்ணகிரி", en: "Krishnagiri" },
  { ta: "தேன்கனிக்கோட்டை", en: "Denkanikottai" },
  { ta: "சூளகிரி", en: "Shoolagiri" },
  { ta: "கேலம்பாக்கம்", en: "Kelamangalam" },
  { ta: "பாகலூர்", en: "Bagalur" },
  { ta: "ராயக்கோட்டை", en: "Rayakottai" },
];

export default function CoverageSection() {
  return (
    <section className="py-12 px-5 bg-white md:py-[4.5rem] md:px-8">
      <SectionHeader
        eyebrow="Service Area"
        title="ஓசூருக்கு அருகிலேயே உலகத் தரமான சிகிச்சை"
        subtitle="நாங்கள் சேவை வழங்கும் பகுதிகள்"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 max-w-[800px] mx-auto mb-8">
        {areas.map((a) => (
          <div
            key={a.en}
            className="border border-deep-maroon/[0.12] rounded-[10px] p-4 text-center hover:bg-blush hover:border-warm-rose transition-all"
          >
            <strong className="font-sans-tamil block text-[14px] text-deep-maroon font-semibold">{a.ta}</strong>
            <span className="text-[12px] text-muted">{a.en}</span>
          </div>
        ))}
      </div>
      <div className="max-w-[800px] mx-auto bg-soft-gray border border-deep-maroon/[0.12] rounded-[14px] h-[160px] flex items-center justify-center flex-col gap-2 sm:h-[220px]">
        <span className="text-[32px] leading-none">🗺️</span>
        <p className="text-[14px] text-muted">Google Maps — Hosur Clinic Location</p>
        <a
          href="https://maps.google.com/?q=GarbhaGudi+Hosur"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block bg-deep-maroon text-white px-7 py-3 rounded-lg font-bold text-[14px] hover:opacity-90 transition-opacity font-sans-tamil"
        >
          Directions பெறுக
        </a>
      </div>
    </section>
  );
}
