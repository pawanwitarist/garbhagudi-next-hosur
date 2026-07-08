import { FlaskConical, Microscope, Syringe, Activity, Sparkles, Heart } from "lucide-react";
import SectionHeader from "@/app/_components/SectionHeader";

const treatments = [
  { Icon: FlaskConical, name: "IVF", desc: "உயிரணு கருத்தரிப்பு" },
  { Icon: Microscope, name: "ICSI", desc: "நேரடி கருத்தரிப்பு" },
  { Icon: Syringe, name: "IUI", desc: "கருப்பை கருத்தரிப்பு" },
  { Icon: Activity, name: "TESA/PESA", desc: "ஆண்மை குறைவு சிகிச்சை" },
  { Icon: Sparkles, name: "Blastocyst", desc: "கருவளர்ப்பு சிகிச்சை" },
  { Icon: Heart, name: "Natural Conception", desc: "இயற்கை கருத்தரிப்பு" },
];

export default function TreatmentsSection() {
  return (
    <section className="py-[4.5rem] px-6 bg-saffron-light">
      <div className="max-w-[960px] mx-auto">
        <SectionHeader
          eyebrow="சிகிச்சை விருப்பங்கள்"
          title="எல்லா நிலைக்கும் தீர்வு இருக்கிறது"
          body="கருத்தரிப்பு சவால்களுக்கு அறிவியல் பூர்வமான, நவீன தீர்வுகள்."
        />
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
          {treatments.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className="bg-white border border-[color:var(--color-border)] rounded-[12px] py-[1.1rem] px-4 text-center hover:border-saffron hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-saffron-light mx-auto mb-3 flex items-center justify-center">
                <Icon className="w-5 h-5 text-saffron" strokeWidth={2} />
              </div>
              <div className="text-[13px] font-semibold text-charcoal font-ui">{name}</div>
              <div className="text-[12px] text-muted mt-1 leading-[1.5] font-sans-tamil">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
