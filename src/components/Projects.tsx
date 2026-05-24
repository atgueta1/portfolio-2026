import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ProjectGallery } from "./ProjectGallery";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="bg-surface/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <SectionHeading
              label="Portfolio"
              title="Projects"
              align="center"
            />
            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Selected work spanning corporate websites, Laravel backends, CMS
              platforms, and service-marketplace experiences.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-28 lg:space-y-36">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <FadeIn key={project.id} delay={0.05}>
                <article
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={reversed ? "lg:order-1" : ""}>
                    <ProjectGallery project={project} />
                  </div>

                  <div>
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-display text-3xl font-semibold text-white transition hover:text-gold sm:text-4xl"
                      >
                        {project.title}
                        <ArrowUpRight
                          size={22}
                          className="opacity-0 transition group-hover:opacity-100"
                        />
                      </Link>
                    ) : (
                      <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                        {project.title}
                      </h3>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-gold underline-offset-4 transition hover:underline"
                      >
                        Visit live site
                        <ArrowUpRight size={14} />
                      </Link>
                    )}
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
