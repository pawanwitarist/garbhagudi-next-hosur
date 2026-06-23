interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export default function SectionHeader({ eyebrow, title, subtitle, variant = "light" }: Props) {
  const light = variant === "light";
  return (
    <div className="text-center mb-10">
      <span
        className={`text-[12px] tracking-[0.1em] uppercase font-semibold block mb-2 ${
          light ? "text-gold" : "text-gold-accent/70"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif-tamil text-[clamp(1.4rem,3vw,1.9rem)] font-bold mb-2 ${
          light ? "text-deep-maroon" : "text-gold-accent"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-[520px] mx-auto ${light ? "text-muted" : "text-white/65"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
