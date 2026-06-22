export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[color:var(--color-border)] px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-rose flex items-center justify-center text-white font-serif-tamil text-[18px] font-bold">
          க
        </span>
        <span className="flex flex-col leading-tight font-ui">
          <span className="text-[15px] font-semibold text-charcoal">கர்பகுடி IVF</span>
          <span className="text-[11px] text-muted font-normal">Hosur Branch</span>
        </span>
      </a>
      <a
        href="#form"
        className="bg-saffron hover:bg-saffron-dark transition-colors text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg font-sans-tamil"
      >
        இலவச ஆலோசனை
      </a>
    </nav>
  );
}
