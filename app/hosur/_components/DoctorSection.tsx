import { WHATSAPP_HREF } from "@/app/_lib/constants";

const specialties = [
  "IVF & Fertility Specialist – 12+ Years",
  "PCOS & Hormonal Disorders",
  "Male Infertility & ICSI",
  "Recurrent Pregnancy Loss",
  "Fertility Preservation",
  "Holistic & Evidence-based Approach",
];

const languages = [
  { en: "Tamil", ta: "தமிழ்" },
  { en: "English", ta: "ஆங்கிலம்" },
  { en: "Telugu", ta: "தெலுங்கு" },
  { en: "Kannada", ta: "கன்னடம்" },
];

export default function DoctorSection() {
  return (
    <section className="py-12 px-5 bg-gold-light md:py-[4.5rem] md:px-8">
      <div className="max-w-[860px] mx-auto grid grid-cols-1 gap-6 items-center md:grid-cols-[1fr_1.6fr] md:gap-12">
        <div className="relative max-w-[260px] mx-auto sm:max-w-none">
          <div className="bg-deep-maroon rounded-2xl aspect-[3/4] flex items-center justify-center overflow-hidden relative">
            <svg
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[70%] opacity-35"
              aria-hidden="true"
            >
              <circle cx="50" cy="38" r="22" fill="white" fillOpacity="0.2" />
              <rect x="20" y="68" width="60" height="52" rx="8" fill="white" fillOpacity="0.15" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-6 pb-4 text-white text-[13px] text-center">
              உங்கள் கருத்தரிப்பு நிபுணர்
            </div>
          </div>
        </div>

        <div>
          <span className="text-[12px] tracking-[0.1em] uppercase text-gold font-semibold block mb-2">
            Meet Your Doctor
          </span>
          <h2 className="font-serif-tamil text-[1.3rem] text-deep-maroon font-bold mb-3 leading-[1.35] md:text-[1.6rem]">
            உங்கள் கருத்தரிப்பு<br />நிபுணரை சந்தியுங்கள்
          </h2>
          <div className="flex gap-2 flex-wrap mb-4">
            {languages.map((lang) => (
              <span
                key={lang.en}
                className="inline-flex items-center gap-2 bg-blush text-deep-maroon px-3.5 py-1.5 rounded-full border border-deep-maroon/[0.18]"
              >
                <span className="text-[13px]" aria-hidden="true">🗣️</span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-semibold">{lang.en}</span>
                  <span className="block text-[11px] text-deep-maroon/70 font-sans-tamil">{lang.ta}</span>
                </span>
              </span>
            ))}
          </div>
          <ul className="list-none">
            {specialties.map((s) => (
              <li
                key={s}
                className="py-2 border-b border-deep-maroon/[0.12] text-[14px] text-charcoal flex items-center gap-2 last:border-b-0"
              >
                <span className="text-gold text-[10px]">✦</span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href={WHATSAPP_HREF}
              className="inline-flex items-center gap-2 bg-deep-maroon text-white px-7 py-3.5 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity font-sans-tamil"
            >
              <span>📅 டாக்டரை சந்தியுங்கள்</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
