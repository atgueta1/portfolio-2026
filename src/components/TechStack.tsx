import { site } from "@/data/site";

const COPIES = 4;
const MARQUEE_ITEMS = Array.from({ length: COPIES }, () => site.techStack).flat();

export function TechStack() {
  return (
    <section className="border-y border-white/5 bg-surface py-5">
      <div className="overflow-hidden">
        <ul
          className="flex w-max list-none"
          style={{
            animation: "marquee 35s linear infinite",
          }}
        >
          {MARQUEE_ITEMS.map((tech, index) => (
            <li
              key={`${tech}-${index}`}
              className="shrink-0 whitespace-nowrap px-8 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 sm:px-12 sm:text-sm sm:tracking-[0.2em]"
              aria-hidden={index >= site.techStack.length ? true : undefined}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
