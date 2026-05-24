import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { site } from "@/data/site";
import { Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const social: {
  href: string;
  label: string;
  icon: ReactNode;
}[] = [
  { href: site.social.email, label: "Email", icon: <Mail size={18} /> },
  { href: site.social.github, label: "GitHub", icon: <GithubIcon /> },
  { href: site.social.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-lg font-semibold text-white sm:text-xl">
          {site.name}
        </p>
        <p className="mt-3 px-2 text-xs text-zinc-500 sm:text-sm">
          Designed with care — all rights reserved for {site.name}.
        </p>

        <p className="mt-8 text-sm text-zinc-400">
          Check out my socials below:
        </p>

        <div className="mt-4 flex justify-center gap-4">
          {social.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-gold hover:text-gold"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
