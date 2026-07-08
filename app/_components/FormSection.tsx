"use client";

import { useActionState } from "react";
import { Check, MapPin, Phone, Clock } from "lucide-react";
import { submitConsultation, type ConsultationState } from "@/app/_lib/actions";
import { PHONE_HREF, PHONE_DISPLAY } from "@/app/_lib/constants";

const benefits = [
  "இலவச முதல் ஆலோசனை – எந்த கட்டணமும் இல்லை",
  "அனுபவமிக்க மருத்துவர்களிடம் நேரடி சந்திப்பு",
  "தமிழிலோ அல்லது తెలుగులో விவாதிக்கலாம் – இடைத்தடை இல்லை",
  "உங்கள் தகவல்கள் முற்றிலும் ரகசியமாக பாதுகாக்கப்படும்",
  "EMI வசதியில் சிகிச்சை – வசதியான கட்டணத் திட்டம்",
];

const initialState: ConsultationState = null;

export default function FormSection() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);

  return (
    <section id="form" className="py-[4.5rem] px-6 bg-teal text-white">
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <div>
            <p className="font-serif-tamil text-[1.3rem] font-bold leading-[1.5] text-white opacity-95 mb-6">
              இன்றே ஒரு படி முன்னேறுங்கள்.
              <br />
              உங்கள் கனவு அருகிலிருக்கிறது.
            </p>
            <ul className="list-none mt-8">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="font-sans-tamil text-[14px] text-white/90 py-2.5 flex gap-2.5 items-start border-b border-white/10 last:border-b-0"
                >
                  <span className="w-[22px] h-[22px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-[12px] bg-white/[0.12]">
              <div className="font-serif-tamil text-[1.1rem] font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> கர்பகுடி IVF மையம் – ஓசூர்
              </div>
              <div className="text-[13px] text-white/80 leading-[1.7] font-sans-tamil space-y-1">
                <div>ஓசூர் பஸ் நிலையம் அருகில்</div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <a href={PHONE_HREF} className="text-[#FAC775] no-underline hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>திங்கள் – சனி: காலை 9 – மாலை 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form card */}
          <form
            action={formAction}
            className="bg-white rounded-[16px] p-8 text-charcoal font-sans-tamil"
          >
            <h3 className="font-serif-tamil text-[1.1rem] font-bold mb-5 text-charcoal">
              இலவச ஆலோசனை பதிவு செய்யுங்கள்
            </h3>

            <Field id="name" label="உங்கள் பெயர் *" required>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="உங்கள் பெயரை உள்ளிடுங்கள்"
                required
                autoComplete="name"
                className={inputCls}
              />
            </Field>

            <Field id="phone" label="தொலைபேசி எண் *" required>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 9876543210"
                required
                autoComplete="tel"
                className={inputCls}
              />
            </Field>

            <Field id="city" label="நகரம் / ஊர்">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="உங்கள் ஊர்"
                autoComplete="address-level2"
                className={inputCls}
              />
            </Field>

            <Field id="concern" label="முக்கிய கவலை">
              <select id="concern" name="concern" defaultValue="" className={inputCls}>
                <option value="" disabled>
                  தேர்வு செய்யவும்
                </option>
                <option value="ivf">IVF சிகிச்சை</option>
                <option value="iui">IUI சிகிச்சை</option>
                <option value="icsi">ICSI சிகிச்சை</option>
                <option value="male">ஆண் மலட்டுத்தன்மை</option>
                <option value="pcos">PCOS சம்பந்தப்பட்ட பிரச்சனை</option>
                <option value="other">மற்றவை</option>
              </select>
            </Field>

            <Field id="duration" label="எத்தனை குழந்தைக்காக முயற்சிக்கிறீர்கள்?">
              <select id="duration" name="duration" defaultValue="" className={inputCls}>
                <option value="" disabled>
                  தேர்வு செய்யவும்
                </option>
                <option value="lt1">1 ஆண்டுக்கு குறைவாக</option>
                <option value="1-2">1–2 ஆண்டுகள்</option>
                <option value="3-5">3–5 ஆண்டுகள்</option>
                <option value="5plus">5 ஆண்டுகளுக்கும் மேல்</option>
              </select>
            </Field>

            <Field id="message" label="கூடுதல் தகவல் (விருப்பமானால்)">
              <textarea
                id="message"
                name="message"
                placeholder="உங்கள் கேள்விகளை இங்கே பதிவிடலாம்…"
                className={`${inputCls} min-h-[80px] resize-y`}
              />
            </Field>

            <button
              type="submit"
              disabled={pending}
              className="w-full mt-5 bg-saffron hover:bg-saffron-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white rounded-[10px] py-3.5 text-[15px] font-semibold"
            >
              {pending ? "பதிவு செய்கிறது…" : "இலவச ஆலோசனை பெறுங்கள் →"}
            </button>

            {state && (
              <p
                aria-live="polite"
                className={`text-[13px] mt-3 text-center font-sans-tamil ${
                  state.ok ? "text-teal" : "text-rose"
                }`}
              >
                {state.message}
              </p>
            )}

            <p className="text-[11px] text-muted text-center mt-3">
              🔒 உங்கள் தகவல்கள் பாதுகாப்பாக வைக்கப்படும். எந்த ஸ்பாமும் இல்லை.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full px-3.5 py-3 text-[14px] font-sans-tamil border-[1.5px] border-[color:var(--color-border)] rounded-[10px] bg-cream text-charcoal outline-none transition-colors focus:border-saffron";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 first:mt-0">
      <label htmlFor={id} className="block text-[13px] font-medium text-charcoal mb-1.5">
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
    </div>
  );
}
