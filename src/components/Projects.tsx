import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectLinks } from "./ProjectLinks";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="bg-surface/50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <SectionHeading
              label="Portfolio"
              title="Projects"
              align="center"
            />
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:mt-6 sm:text-base">
              Selected work spanning corporate websites, Laravel backends, CMS
              platforms, and service-marketplace experiences.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-16 sm:mt-20 sm:space-y-28 lg:space-y-36">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <FadeIn key={project.id} delay={0.05}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={
                      reversed ? "lg:order-2" : "order-1"
                    }
                  >
                    <ProjectGallery project={project} />
                  </div>

                  <div
                    className={
                      reversed ? "order-2 lg:order-1" : "order-2"
                    }
                  >
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-2 font-display text-2xl font-semibold leading-tight text-white transition hover:text-gold sm:text-3xl lg:text-4xl"
                      >
                        {project.title}
                        <ArrowUpRight
                          size={20}
                          className="mt-1 shrink-0 opacity-70 transition sm:opacity-0 sm:group-hover:opacity-100"
                        />
                      </Link>
                    ) : (
                      <h3 className="font-display text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-zinc-800/80 px-2.5 py-1 text-[0.7rem] text-zinc-300 sm:px-3 sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
                      {project.description}
                    </p>

                    <ProjectLinks project={project} />
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
