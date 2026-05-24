"use client";

import { site } from "@/data/site";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

function openGmailCompose(name: string, email: string, message: string) {
  const to = site.email;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nReply-to: ${email}\n\n${message}`,
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
}

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading label="Contact" title="Contacts" />
              <h3 className="mt-8 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Have a project?
                <br />
                Let&apos;s talk!
              </h3>
              <p className="mt-6 max-w-md text-zinc-400">
                I&apos;m open to freelance work and full-time opportunities. Send a
                message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get("name") as string;
                const email = data.get("email") as string;
                const message = data.get("message") as string;
                openGmailCompose(name, email, message);
              }}
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="mb-3 block text-sm capitalize text-zinc-300"
                  >
                    {field}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    required
                    className="w-full border-b border-zinc-600 bg-transparent py-2 text-white outline-none transition focus:border-gold"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-3 block text-sm text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none border-b border-zinc-600 bg-transparent py-2 text-white outline-none transition focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-light"
              >
                Submit
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
