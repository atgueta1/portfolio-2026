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
        className="relative min-h-[100dvh] overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-zinc-700/15 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <motion.div
            className="relative z-20 order-2 text-center lg:order-1 lg:text-left"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 flex items-center justify-center gap-2 text-base text-zinc-400 sm:mb-4 sm:text-lg lg:justify-start">
              Hello
              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            </p>
            <p className="mb-2 text-lg text-zinc-300 sm:text-xl">
              I&apos;m {site.shortName.split(" ")[0]}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {site.role}
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base lg:mx-0">
              {site.tagline}
            </p>

            <div className="relative z-20 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                href="#contact"
                className="relative z-20 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light sm:w-auto sm:px-7"
              >
                Got a project?
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="#projects"
                className="relative z-20 inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-gold hover:text-gold sm:w-auto sm:px-7"
              >
                View my work
              </Link>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="relative z-20 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-gold hover:text-gold sm:w-auto sm:px-7"
              >
                <FileText size={16} />
                My Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 mx-auto w-full max-w-[260px] sm:max-w-xs lg:order-2 lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="absolute inset-0 m-auto aspect-square w-[88%] rounded-full border border-gold/20" />
              <div className="absolute inset-0 m-auto aspect-square w-[96%] rounded-full bg-gold/10 blur-2xl" />

              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border-2 border-gold/40 bg-zinc-800 shadow-[0_0_60px_-12px_rgba(201,162,39,0.35)]">
                <Image
                  src="/profile.png"
                  alt={site.name}
                  fill
                  className="scale-[1.2] object-cover object-[center_22%]"
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 420px"
                />
              </div>
            </div>

            <span className="pointer-events-none absolute -right-2 top-1/4 hidden font-mono text-4xl text-zinc-700 lg:block">
              &gt;
            </span>
            <span className="pointer-events-none absolute -left-4 bottom-1/4 hidden font-mono text-3xl text-zinc-700 lg:block">
              &gt;
            </span>
          </motion.div>
        </div>
      </section>

      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
