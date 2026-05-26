"use client";

import type { ProjectDemo } from "@/data/projects";
import { parseTimestamp, youtubeEmbedUrl } from "@/lib/youtube";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectDemoViewerProps = {
  demo: ProjectDemo;
  open: boolean;
  onClose: () => void;
};

export function ProjectDemoViewer({
  demo,
  open,
  onClose,
}: ProjectDemoViewerProps) {
  const [startAt, setStartAt] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setStartAt(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [startAt, open]);

  const jumpTo = useCallback((time: string) => {
    setStartAt(parseTimestamp(time));
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={demo.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 p-0 sm:items-center sm:p-3 md:p-4 lg:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-none border border-white/10 bg-zinc-900 shadow-2xl sm:h-[94dvh] sm:rounded-xl md:h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-2 border-b border-white/10 px-3 py-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] sm:gap-3 sm:px-5 sm:py-3 md:px-6">
              <p className="min-w-0 flex-1 text-xs font-medium leading-snug text-white sm:text-sm md:text-base">
                {demo.title}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close demo"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-gold hover:text-gold sm:h-10 sm:w-10"
              >
                <X size={18} className="sm:hidden" />
                <X size={20} className="hidden sm:block" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col md:flex-row">
              <div className="w-full shrink-0 border-b border-white/10 bg-black md:relative md:min-h-0 md:min-w-0 md:flex-1 md:border-b-0 md:border-r">
                <div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
                  <iframe
                    key={startAt}
                    title={demo.title}
                    src={youtubeEmbedUrl(demo.videoId, startAt)}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <aside className="flex min-h-0 w-full flex-1 flex-col md:w-72 md:flex-none lg:w-80 xl:w-96">
                <p className="shrink-0 border-b border-white/5 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-wider text-zinc-500 sm:px-4 sm:text-xs">
                  Timestamps
                </p>
                <ul
                  ref={listRef}
                  className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-1.5 py-1.5 [-webkit-overflow-scrolling:touch] sm:px-2 sm:py-2 md:max-h-none pb-[max(0.5rem,env(safe-area-inset-bottom))]"
                >
                  {demo.chapters.map((chapter) => {
                    const seconds = parseTimestamp(chapter.time);
                    const active = startAt === seconds;
                    return (
                      <li key={`${chapter.time}-${chapter.label}`}>
                        <button
                          ref={active ? activeRef : undefined}
                          type="button"
                          onClick={() => jumpTo(chapter.time)}
                          className={`flex w-full gap-2.5 rounded-lg px-2.5 py-3 text-left transition active:scale-[0.99] sm:gap-3 sm:px-3 sm:py-2.5 ${
                            active
                              ? "bg-gold/15 text-gold"
                              : "text-zinc-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-11 shrink-0 font-mono text-[0.7rem] tabular-nums sm:w-12 sm:text-xs ${
                              active ? "text-gold/80" : "text-zinc-500"
                            }`}
                          >
                            {chapter.time}
                          </span>
                          <span className="min-w-0 flex-1 text-[0.8125rem] leading-snug sm:text-sm">
                            {chapter.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
