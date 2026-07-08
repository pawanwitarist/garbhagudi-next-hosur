import { Fragment } from "react";

const items = [
  { num: "15,000+", label: "குடும்பங்களின் நம்பிக்கை" },
  { num: "15+", label: "ஆண்டுகள் அனுபவம்" },
  { num: "10", label: "கிளைகள் – கர்நாடகா & தமிழ்நாடு" },
  { num: "#1", label: "ஓசூரின் நம்பிக்கைக்குரிய மையம்" },
];

export default function TrustStrip() {
  return (
    <div
      className="bg-teal text-white py-5 px-6 flex items-center justify-center gap-x-12 gap-y-4 flex-wrap text-center"
      role="region"
      aria-label="நம்பிக்கை புள்ளிவிவரங்கள்"
    >
      {items.map((it, i) => (
        <Fragment key={it.label}>
          <div className="flex flex-col items-center">
            <span className="text-[1.8rem] font-bold leading-none font-ui">{it.num}</span>
            <span className="text-[12px] opacity-85 mt-1 font-sans-tamil">{it.label}</span>
          </div>
          {i < items.length - 1 && (
            <span className="hidden sm:block w-px h-10 bg-white/25" aria-hidden="true" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
