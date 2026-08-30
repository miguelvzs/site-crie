type TimelineItem = { ano: string; evento: string };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-brand-blue/30 pl-6 flex flex-col gap-8">
      {items.map((item) => (
        <li key={item.ano} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-blue"
          />
          <p className="font-bold text-brand-blue">{item.ano}</p>
          <p className="text-foreground/80">{item.evento}</p>
        </li>
      ))}
    </ol>
  );
}
