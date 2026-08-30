import { A11yToolbar } from "@/components/a11y/A11yToolbar";
import content from "@content/landing.json";

export function TopBar() {
  const { topBar } = content;
  if (!topBar.mostrar) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 bg-magenta px-8 py-3 text-white">
      <span className="font-mono text-xs font-medium uppercase tracking-[.14em]">
        {topBar.eyebrow}
      </span>
      <span className="text-[15px]">{topBar.frase}</span>
      <a
        href="#ajudar"
        className="border-b-2 border-white/50 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white"
      >
        {topBar.cta}
      </a>
      <A11yToolbar />
    </div>
  );
}
