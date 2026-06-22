import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/app/_lib/constants";

export default function FloatCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label="Call GarbhaGudi Hosur"
      className="fixed bottom-6 right-6 z-[200] bg-rose text-white rounded-full px-[22px] py-3.5 text-[14px] font-semibold font-sans-tamil flex items-center gap-2 shadow-[0_4px_20px_rgba(192,57,94,0.40)] no-underline"
      style={{ animation: "float-call-pulse 2.5s infinite" }}
    >
      <Phone className="w-[18px] h-[18px]" />
      <span>இப்போதே அழைக்கவும்</span>
    </a>
  );
}
