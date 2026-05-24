import { site } from "@/data/site";
import { Code2, Layout, Server } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const icons = [Layout, Server, Code2];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="order-2 lg:order-1">
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-zinc-600 to-transparent sm:left-3" />
              <ul className="space-y-10 sm:space-y-12">
                {site.services.map((service, index) => {
                  const Icon = icons[index] ?? Code2;
                  return (
                    <li key={service.title} className="relative">
                      <span className="absolute -left-[1.15rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-gold bg-background sm:-left-[1.35rem]">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                      <div className="mb-3 text-gold">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
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

          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <SectionHeading label="About" title="About me" />
            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:text-base">
              {site.about}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-10 sm:mt-12 sm:gap-6 sm:pt-12">
              {site.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-semibold text-gold sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[0.65rem] leading-snug text-zinc-500 sm:mt-2 sm:text-xs lg:text-sm">
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
