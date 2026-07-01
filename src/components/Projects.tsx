import { projects } from "@/data/projects";
import { FadeIn } from "./FadeIn";
import { ProjectItem } from "./ProjectItem";
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
                <ProjectItem project={project} reversed={reversed} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
