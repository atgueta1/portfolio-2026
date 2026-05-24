import { site } from "@/data/site";

function TechTrack({ id, hidden }: { id: string; hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 list-none items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
      aria-hidden={hidden || undefined}
    >
      {site.techStack.map((tech) => (
        <li
          key={`${id}-${tech}`}
          className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]"
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
