"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect } from "react";

type ProjectDocumentViewerProps = {
  title: string;
  documentUrl: string;
  open: boolean;
  onClose: () => void;
};

export function ProjectDocumentViewer({
  title,
  documentUrl,
  open,
  onClose,
}: ProjectDocumentViewerProps) {
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
          aria-label={`${title} document`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 p-0 sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="flex h-[96dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-zinc-900 shadow-2xl sm:h-[90vh] sm:max-w-5xl sm:rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="truncate text-sm font-medium text-white">{title} Thesis</p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light sm:flex-none sm:py-2"
                >
                  <Download size={16} />
                  Open PDF
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close document"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-gold hover:text-gold"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <iframe
              title={`${title} thesis document`}
              src={`${documentUrl}#view=FitH`}
              className="min-h-0 w-full flex-1 bg-zinc-950"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
