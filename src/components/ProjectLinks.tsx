"use client";

import type { Project } from "@/data/projects";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProjectDemoViewer } from "./ProjectDemoViewer";
type ProjectLinksProps = {
  project: Project;
  onDocumentOpenChange?: (open: boolean) => void;
};

export function ProjectLinks({
  project,
  onDocumentOpenChange,
}: ProjectLinksProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDocument = () => {
    onDocumentOpenChange?.(true);
  };

  if (!project.liveUrl && !project.demo && !project.documentUrl) return null;

  return (
    <>
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold underline-offset-4 transition hover:underline"
          >
            Visit live site
            <ArrowUpRight size={14} />
          </Link>
        )}
        {project.demo && (
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-zinc-300 underline-offset-4 transition hover:text-gold hover:underline"
          >
            <Play size={14} className="shrink-0" />
            Full functionality demo
          </button>
        )}
        {project.documentUrl && (
          <button
            type="button"
            onClick={openDocument}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-zinc-300 underline-offset-4 transition hover:text-gold hover:underline"
          >
            {project.documentLabel ?? "View document"}
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>

      {project.demo && (
        <ProjectDemoViewer
          demo={project.demo}
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
        />
      )}
    </>
  );
}
