import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/app/_lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 pb-16 grid place-items-center text-center">
      {/* Decorative mandalas */}
      <svg
        className="absolute -top-[60px] -right-[60px] w-[320px] h-[320px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#E8820C" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="70" stroke="#E8820C" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" stroke="#C0395E" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" stroke="#C0395E" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="10" fill="#E8820C" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="#E8820C" strokeWidth="0.5" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#E8820C" strokeWidth="0.5" />
        <line x1="36" y1="36" x2="164" y2="164" stroke="#C0395E" strokeWidth="0.5" />
        <line x1="164" y1="36" x2="36" y2="164" stroke="#C0395E" strokeWidth="0.5" />
      </svg>
      <svg
        className="absolute -bottom-[80px] -left-[80px] w-[280px] h-[280px] opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#0F6E56" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="60" stroke="#0F6E56" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" stroke="#0F6E56" strokeWidth="1" />
      </svg>

      {/* Couple + baby illustration */}
      <div className="relative mx-auto mt-8 mb-10 max-w-[320px] w-full">
        <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-label="அன்பான குடும்பம்">
          <circle cx="160" cy="130" r="100" fill="#FDF0DC" opacity="0.9" />
          <ellipse cx="130" cy="160" rx="26" ry="35" fill="#E8820C" opacity="0.15" />
          <circle cx="130" cy="105" r="20" fill="#D4856B" />
          <rect x="108" y="125" width="44" height="55" rx="12" fill="#C0395E" opacity="0.85" />
          <ellipse cx="196" cy="163" rx="26" ry="32" fill="#E8820C" opacity="0.1" />
          <circle cx="196" cy="100" r="22" fill="#B5745A" />
          <rect x="173" y="122" width="46" height="58" rx="12" fill="#0F6E56" opacity="0.85" />
          <circle cx="163" cy="118" r="13" fill="#F9C784" />
          <rect x="150" y="131" width="26" height="22" rx="8" fill="#FAC775" />
          <circle cx="155" cy="195" r="4" fill="#E8820C" opacity="0.4" />
          <circle cx="165" cy="198" r="3" fill="#E8820C" opacity="0.3" />
          <circle cx="175" cy="195" r="4" fill="#E8820C" opacity="0.4" />
          <circle cx="100" cy="75" r="3" fill="#FAC775" opacity="0.8" />
          <circle cx="225" cy="70" r="2.5" fill="#FAC775" opacity="0.8" />
          <circle cx="80" cy="110" r="2" fill="#C0395E" opacity="0.5" />
          <circle cx="242" cy="105" r="2" fill="#C0395E" opacity="0.5" />
          <path
            d="M 60 190 Q 160 230 260 190"
            stroke="#E8820C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <span className="relative inline-flex items-center gap-2 bg-saffron-light text-saffron-dark rounded-full px-4 py-1.5 text-[13px] font-semibold mb-6 font-ui">
        <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </span>

      <h1 className="relative font-serif-tamil text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.35] text-charcoal max-w-[700px] mx-auto mb-4">
        உங்கள் வீட்டிலும்
        <br />
        <em className="not-italic text-rose">குட்டி காலடிச் சத்தம்</em>
        <br />
        கேட்கட்டும்
      </h1>

      <p className="relative font-serif-tamil text-[clamp(1.1rem,2.5vw,1.4rem)] text-muted max-w-[560px] mx-auto leading-[1.6] mb-2">
        உங்கள் பெற்றோராகும் கனவு…
      </p>
      <p className="relative font-serif-tamil text-[clamp(1.2rem,2.5vw,1.5rem)] font-semibold text-teal mb-10">
        நினைவாகலாம் ✦
      </p>

      <div className="relative flex flex-wrap gap-3 justify-center max-sm:flex-col max-sm:items-center">
        <a
          href="#form"
          className="bg-saffron hover:bg-saffron-dark hover:-translate-y-0.5 transition-all duration-150 text-white rounded-[10px] px-7 py-3.5 text-[15px] font-semibold font-sans-tamil"
        >
          இலவச ஆலோசனை பெறுங்கள்
        </a>
        <a
          href={PHONE_HREF}
          className="border-[1.5px] border-[color:var(--color-border)] hover:border-saffron hover:bg-saffron-light transition-colors text-charcoal rounded-[10px] px-7 py-3.5 text-[15px] font-medium font-sans-tamil inline-flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          இப்போதே அழைக்கவும்
        </a>
      </div>
    </section>
  );
}
