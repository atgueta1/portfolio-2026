import { site } from "@/data/site";
import { Code2, Layout, Server } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const icons = [Layout, Server, Code2];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-zinc-600 to-transparent" />
              <ul className="space-y-12">
                {site.services.map((service, index) => {
                  const Icon = icons[index] ?? Code2;
                  return (
                    <li key={service.title} className="relative">
                      <span className="absolute -left-[1.35rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-gold bg-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                      <div className="mb-3 text-gold">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {service.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeading label="About" title="About me" />
            <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-zinc-400">
              {site.about}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-12">
              {site.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
