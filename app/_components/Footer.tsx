import { PHONE_HREF, PHONE_DISPLAY } from "@/app/_lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-10 px-6 flex flex-col items-center text-center gap-3">
      <div className="font-serif-tamil text-[1.2rem] font-bold text-white mb-1">
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </div>
      <div className="font-serif-tamil text-[13px] text-white/75 mt-1">
        ஓசூரின் நம்பிக்கைக்குரிய கருத்தரிப்பு மையம் · 15,000+ குடும்பங்களின் நம்பிக்கை
      </div>
      <div className="text-[14px] flex flex-wrap gap-2 justify-center items-center">
        <a href={PHONE_HREF} className="text-saffron no-underline hover:underline">
          {PHONE_DISPLAY}
        </a>
        <span className="opacity-60">·</span>
        <a
          href="https://www.garbhagudi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-saffron no-underline hover:underline"
        >
          garbhagudi.com
        </a>
      </div>
      <div className="text-[13px] opacity-60 mt-1">
        © 2025 GarbhaGudi IVF Centre. All rights reserved.
      </div>
    </footer>
  );
}
