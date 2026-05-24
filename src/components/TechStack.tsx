import { site } from "@/data/site";

function TechTrack({ id, hidden }: { id: string; hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 list-none items-center gap-16 pr-16"
      aria-hidden={hidden || undefined}
    >
      {site.techStack.map((tech) => (
        <li
          key={`${id}-${tech}`}
          className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export function TechStack() {
  return (
    <section className="border-y border-white/5 bg-surface py-5">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <TechTrack id="a" />
          <TechTrack id="b" hidden />
        </div>
      </div>
    </section>
  );
}
