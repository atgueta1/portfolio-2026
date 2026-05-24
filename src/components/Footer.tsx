import { site } from "@/data/site";
import { Code2, Link2, Mail } from "lucide-react";
import Link from "next/link";

const social = [
  { href: site.social.email, icon: Mail, label: "Email" },
  { href: site.social.github, icon: Code2, label: "GitHub" },
  { href: site.social.linkedin, icon: Link2, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="font-display text-xl font-semibold text-white">{site.name}</p>
        <p className="mt-3 text-sm text-zinc-500">
          Designed with care — all rights reserved for {site.name}.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {social.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-gold hover:text-gold"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
