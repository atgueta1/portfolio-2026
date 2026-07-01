"use client";

import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProjectDocumentViewer } from "./ProjectDocumentViewer";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectLinks } from "./ProjectLinks";

type ProjectItemProps = {
  project: Project;
  reversed: boolean;
};

export function ProjectItem({ project, reversed }: ProjectItemProps) {
  const [documentOpen, setDocumentOpen] = useState(false);
  const openDocument = project.documentUrl
    ? () => setDocumentOpen(true)
    : undefined;

  return (
    <>
      <article
        id={project.id}
        className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
      >
        <div className={reversed ? "lg:order-2" : "order-1"}>
          <ProjectGallery project={project} onOpenDocument={openDocument} />
        </div>

        <div className={reversed ? "order-2 lg:order-1" : "order-2"}>
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

          <ProjectLinks
            project={project}
            onDocumentOpenChange={setDocumentOpen}
          />
        </div>
      </article>

      {project.documentUrl && (
        <ProjectDocumentViewer
          title={project.title}
          documentUrl={project.documentUrl}
          open={documentOpen}
          onClose={() => setDocumentOpen(false)}
        />
      )}
    </>
  );
}
