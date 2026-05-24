"use client";

import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ResumeViewer } from "./ResumeViewer";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-zinc-700/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 flex items-center gap-2 text-lg text-zinc-400">
              Hello
              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            </p>
            <p className="mb-2 text-xl text-zinc-300">
              I&apos;m {site.shortName.split(" ")[0]}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {site.role}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
              >
                Got a project?
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-7 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-gold hover:text-gold"
              >
                View my work
              </Link>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-7 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-gold hover:text-gold"
              >
                <FileText size={16} />
                My Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 m-auto aspect-square w-[88%] rounded-full border border-gold/20" />
            <div className="absolute inset-0 m-auto aspect-square w-[96%] rounded-full bg-gold/10 blur-2xl" />

            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full border-2 border-gold/40 bg-zinc-800 shadow-[0_0_60px_-12px_rgba(201,162,39,0.35)]">
              <Image
                src="/profile.png"
                alt={site.name}
                fill
                className="scale-[1.2] object-cover object-[center_22%]"
                priority
                sizes="(max-width: 768px) 90vw, 420px"
              />
            </div>

            <span className="absolute -right-2 top-1/4 hidden font-mono text-4xl text-zinc-700 lg:block">
              &gt;
            </span>
            <span className="absolute -left-4 bottom-1/4 hidden font-mono text-3xl text-zinc-700 lg:block">
              &gt;
            </span>
          </motion.div>
        </div>
      </section>

      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
