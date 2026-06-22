import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <div>
      <p className="font-ui text-[11px] tracking-[0.12em] uppercase font-semibold text-saffron mb-2">
        {eyebrow}
      </p>
      <h2 className="font-serif-tamil text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.35] text-charcoal mb-4">
        {title}
      </h2>
      {body && (
        <p className="font-sans-tamil text-[15px] text-muted leading-[1.75] max-w-[600px]">
          {body}
        </p>
      )}
    </div>
  );
}
