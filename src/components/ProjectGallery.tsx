"use client";

import type { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = project.images.length;

  const go = (direction: -1 | 1) => {
    setIndex((prev) => (prev + direction + total) % total);
  };

  return (
    <>
      <div className="group relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-zinc-700/50 opacity-60 blur-sm transition group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl sm:rounded-2xl">
          <div className="relative aspect-[4/3] w-full bg-zinc-800 sm:aspect-[16/10]">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setLightboxOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxOpen(true);
                }
              }}
              className="absolute inset-0 cursor-zoom-in touch-manipulation"
              aria-label="Open fullscreen preview"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.images[index].src}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[index].src}
                    alt={project.images[index].alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              <span className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] text-white backdrop-blur sm:bottom-3 sm:right-3 sm:px-3 sm:py-1.5 sm:text-xs md:opacity-0 md:transition md:group-hover:opacity-100">
                <ZoomIn size={12} className="sm:hidden" />
                <ZoomIn size={14} className="hidden sm:block" />
                <span className="hidden sm:inline">Click to enlarge</span>
                <span className="sm:hidden">Tap to enlarge</span>
              </span>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:border-gold hover:text-gold sm:left-3 sm:h-10 sm:w-10 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:border-gold hover:text-gold sm:right-3 sm:h-10 sm:w-10 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="flex items-center justify-center gap-2 border-t border-white/5 bg-black/40 px-3 py-2.5 sm:px-4 sm:py-3">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`View screenshot ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all sm:h-1.5 ${
                    i === index ? "w-6 bg-gold sm:w-8" : "w-2 bg-zinc-600 hover:bg-zinc-400 sm:w-1.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ImageLightbox
        images={project.images}
        index={index}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setIndex}
      />
    </>
  );
}
