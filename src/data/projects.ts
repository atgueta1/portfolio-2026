import { images } from "@/lib/images";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: { src: string; alt: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "cleanline-tasman-website",
    title: "Cleanline Tasman Website",
    description:
      "A full-featured corporate website for New Zealand's leading uniform and PPE partner. Built with Laravel 11 on the backend and Next.js on the frontend — including product catalogues, industry solutions, discovery booking flows, and a polished brand experience.",
    tags: ["Laravel 11", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      { src: images.cleanlineWebsite.hero, alt: "Cleanline Tasman homepage hero" },
      { src: images.cleanlineWebsite.products, alt: "Products section" },
      { src: images.cleanlineWebsite.solutions, alt: "Solutions page" },
      { src: images.cleanlineWebsite.about, alt: "About page" },
      { src: images.cleanlineWebsite.contact, alt: "Contact page" },
    ],
    liveUrl: "https://website2026.cleanlinetasman.co.nz/",
    featured: true,
  },
  {
    id: "cleanline-cms",
    title: "Cleanline Tasman CMS",
    description:
      "The same platform as the Cleanline Tasman Website, with a dedicated Superadmin area for managing pages, media, and site content. Access is restricted to Superadmin users — enabling the team to update the site without touching code.",
    tags: ["Laravel 11", "Next.js", "Superadmin", "CMS", "TypeScript"],
    images: [
      { src: images.cleanlineCms.dashboard, alt: "CMS dashboard overview" },
      { src: images.cleanlineCms.editor, alt: "Content editor interface" },
      { src: images.cleanlineCms.content, alt: "Content management views" },
    ],
    liveUrl: "https://website2026.cleanlinetasman.co.nz/",
    featured: true,
  },
  {
    id: "cleanline-pwa",
    title: "Cleanline Tasman PWA",
    description:
      "An Angular progressive web app and Laravel API that gives corporate customers a mobile-first portal to manage employee uniform allocations, place and approve workwear orders, run on-site store stock (issue, replenish, and receipt), and stay in sync with the company ERP.",
    tags: ["Laravel 11", "Angular 18", "PWA", "ERP Integration", "TypeScript"],
    images: [
      { src: images.cleanlinePwa[0], alt: "Cleanline Tasman PWA" },
      { src: images.cleanlinePwa[1], alt: "PWA dashboard" },
      { src: images.cleanlinePwa[2], alt: "Uniform allocations" },
      { src: images.cleanlinePwa[3], alt: "Workwear orders" },
      { src: images.cleanlinePwa[4], alt: "On-site store stock" },
      { src: images.cleanlinePwa[5], alt: "Store management" },
      { src: images.cleanlinePwa[6], alt: "ERP sync" },
    ],
    liveUrl: "https://cleanline-tasman-pwa-web-prod.azurewebsites.net/login",
    featured: true,
  },
  {
    id: "washwell",
    title: "Washwell.ph",
    description:
      "A modern laundry service website for the Philippine market — featuring subscription plans, service highlights, and a booking-focused user journey with a clean, approachable brand feel.",
    tags: ["Webflow", "UI/UX", "E-commerce", "Subscription"],
    images: [
      { src: images.washwell.hero, alt: "Washwell.ph homepage" },
      { src: images.washwell.pricing, alt: "Pricing plans" },
      { src: images.washwell.services, alt: "Services section" },
      { src: images.washwell.contact, alt: "Contact page" },
    ],
    liveUrl: "https://www.washwell.ph/",
    featured: true,
  },
  {
    id: "cypher-marketplace",
    title: "CYPHER Learning Marketplace",
    description:
      "Contributed to the CYPHER Learning marketplace experience — a filterable app directory showcasing integrations and learning tools with a structured grid layout and category-based discovery.",
    tags: ["React", "UI Engineering", "Marketplace", "EdTech"],
    images: [
      {
        src: images.cypher,
        alt: "CYPHER Learning Marketplace",
      },
    ],
    liveUrl: "https://www.cypherlearning.com/marketplace",
    featured: true,
  },
];
