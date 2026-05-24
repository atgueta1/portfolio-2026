"use client";

import { site } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect } from "react";

type ResumeViewerProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeViewer({ open, onClose }: ResumeViewerProps) {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <p className="truncate text-sm font-medium text-white sm:text-base">
                {site.name} — Resume
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={site.resumeUrl}
                  download={site.resumeFileName}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-gold-light"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-gold hover:text-gold"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <iframe
              title={`${site.name} resume`}
              src={`${site.resumeUrl}#view=FitH`}
              className="min-h-0 flex-1 w-full bg-zinc-800"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
