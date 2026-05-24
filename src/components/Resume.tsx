import {
  certifications,
  education,
  experience,
  type Experience,
  type ProjectLine,
} from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

function ProjectList({
  label,
  items,
}: {
  label: string;
  items: ProjectLine[];
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-medium uppercase tracking-wider text-gold">
        {label}
      </p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item.name} className="text-sm text-zinc-400">
            <span className="text-zinc-200">{item.name}</span>
            <span className="text-zinc-500"> — {item.tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <article className="border-b border-white/5 pb-10 last:border-0 last:pb-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
          <p className="text-gold">{job.company}</p>
        </div>
        <p className="shrink-0 text-sm text-zinc-500">{job.period}</p>
      </div>

      {job.majorProjects && (
        <ProjectList label="Major projects" items={job.majorProjects} />
      )}
      {job.minorProjects && (
        <ProjectList label="Minor projects" items={job.minorProjects} />
      )}
      {job.projects && <ProjectList label="Projects" items={job.projects} />}
    </article>
  );
}

function ResumeRow({
  label,
  children,
  id,
}: {
  label: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="grid gap-8 border-b border-white/5 py-14 last:border-0 lg:grid-cols-[200px_1fr] lg:gap-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

export function Resume() {
  return (
    <section id="experience" className="bg-surface/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading label="Background" title="Experience & education" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 rounded-2xl border border-white/5 bg-background/60 p-8 lg:p-12">
            <ResumeRow label="Professional experience">
              <div className="space-y-10">
                {experience.map((job) => (
                  <ExperienceCard key={job.id} job={job} />
                ))}
              </div>
            </ResumeRow>

            <ResumeRow label="Education" id="education">
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {education.school}
                    </h3>
                    <p className="text-gold">{education.degree}</p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-500">
                    {education.period}
                  </p>
                </div>
                <p className="mt-3 text-sm text-zinc-400">
                  GPA: <span className="text-zinc-200">{education.gpa}</span>
                </p>
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    Research & projects
                  </p>
                  <ul className="mt-2 space-y-2">
                    {education.highlights.map((item) => (
                      <li key={item} className="text-sm text-zinc-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ResumeRow>

            <ResumeRow label="Certificates" id="certifications">
              <ul className="space-y-8">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <p className="font-semibold text-white">{cert.issuer}</p>
                    {cert.url ? (
                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-1 inline-flex items-start gap-1.5 text-sm text-zinc-400 transition hover:text-gold"
                      >
                        <span>
                          {cert.name}
                          {cert.year ? ` (${cert.year})` : ""}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="mt-0.5 shrink-0 opacity-60 transition group-hover:opacity-100"
                        />
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm text-zinc-400">
                        {cert.name}
                        {cert.year ? ` (${cert.year})` : ""}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </ResumeRow>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
