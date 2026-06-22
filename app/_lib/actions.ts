"use server";

export type ConsultationState = {
  ok: boolean;
  message: string;
} | null;

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!name || !phone) {
    return {
      ok: false,
      message: "தயவுசெய்து உங்கள் பெயர் மற்றும் தொலைபேசி எண்ணை உள்ளிடுங்கள்.",
    };
  }

  const payload = {
    name,
    phone,
    city: String(formData.get("city") ?? "").trim(),
    concern: String(formData.get("concern") ?? "").trim(),
    duration: String(formData.get("duration") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    receivedAt: new Date().toISOString(),
  };

  console.log("[consultation]", payload);

  return {
    ok: true,
    message: "✓ பதிவு முடிந்தது! விரைவில் தொடர்பு கொள்கிறோம்.",
  };
}
