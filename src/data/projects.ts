import { cleanlineWebsiteDemo } from "@/data/cleanlineDemo";
import { images } from "@/lib/images";

export type DemoChapter = {
  time: string;
  label: string;
};

export type ProjectDemo = {
  videoId: string;
  title: string;
  chapters: DemoChapter[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: {
    src: string;
    alt: string;
    type?: "image" | "pdf";
  }[];
  githubUrl?: string;
  liveUrl?: string;
  documentUrl?: string;
  documentLabel?: string;
  demo?: ProjectDemo;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "cleanline-tasman-website",
    title: "Cleanline Tasman Website",
    description:
      "A full-featured corporate website for New Zealand's leading uniform and PPE partner. Built with Laravel 11 on the backend and Next.js on the frontend — including product catalogues, industry solutions, discovery booking flows, and a polished brand experience.",
    tags: ["Laravel 11", "Next.js","ERP Integration", "E-commerce", ],
    images: [
      { src: images.cleanlineWebsite.hero, alt: "Cleanline Tasman homepage hero" },
      { src: images.cleanlineWebsite.products, alt: "Products section" },
      { src: images.cleanlineWebsite.solutions, alt: "Solutions page" },
      { src: images.cleanlineWebsite.about, alt: "About page" },
      { src: images.cleanlineWebsite.contact, alt: "Contact page" },
    ],
    liveUrl: "https://website2026.cleanlinetasman.co.nz/",
    demo: cleanlineWebsiteDemo,
    featured: true,
  },
  {
    id: "cleanline-cms",
    title: "Cleanline Tasman CMS",
    description:
      "The same platform as the Cleanline Tasman Website, with a dedicated Superadmin area for managing pages, media, and site content. Access is restricted to Superadmin users — enabling the team to update the site without touching code.",
    tags: ["Laravel 11", "Next.js","CMS","Azure Storage"],
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
      "An Angular progressive web app and Laravel API that gives corporate customers a portal to manage employee uniform allocations, place and approve workwear orders, run on-site store stock (issue, replenish, and receipt), and stay in sync with the company ERP.",
    tags: ["Laravel 11", "Angular 18", "ERP Integration", "Azure Storage"],
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
    id: "cypher-marketplace",
    title: "CYPHER Learning Marketplace",
    description:
      "A filterable app directory showcasing integrations and learning tools with a structured grid layout and category-based discovery.",
    tags: ["HubSpot", "Marketplace"],
    images: [
      {
        src: images.cypher,
        alt: "CYPHER Learning Marketplace",
      },
    ],
    liveUrl: "https://www.cypherlearning.com/marketplace",
    featured: true,
  },
  {
    id: "washwell",
    title: "Washwell.ph",
    description:
      "A modern laundry service website for the Philippine market featuring subscription plans, service highlights, and a booking-focused user journey with a clean, approachable brand feel.",
    tags: ["React", "E-commerce"],
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
    id: "guerilla360-website",
    title: "Guerilla 360 Website",
    description:
      "Corporate website for Guerilla 360 Integrated Solutions, showcasing the company's IT services, solutions, and business offerings with a modern, responsive interface.",
    tags: ["React"],
    images: [
      { src: images.g360[0], alt: "Guerilla 360 website homepage" },
      { src: images.g360[1], alt: "Guerilla 360 website section" },
      { src: images.g360[2], alt: "Guerilla 360 website content" },
      { src: images.g360[3], alt: "Guerilla 360 website layout" },
    ],
    liveUrl: "https://www.guerilla360.com/",
    featured: true,
  },
  {
    id: "research-archiving-system",
    title: "Research Archiving System of City College of Calamba",
    description:
      "A basic research archiving system built to organize and systemize research papers for City College of Calamba, making records easier to browse, manage, and preserve.",
    tags: ["PHP"],
    images: [
      {
        src: images.researchArchivingSystem,
        alt: "Research Archiving System dashboard",
      },
    ],
    featured: true,
  },
  {
    id: "ccc-tour-guide",
    title: "CCC Tour Guide",
    description:
      "A 3D Virtual Reality desktop application developed in Unity as an undergraduate thesis project for the City College of Calamba. The application offers an immersive virtual campus tour where users can explore school facilities, interact with virtual objects and buildings, and access detailed information about departments, offices, academic programs, and campus services.",
    tags: ["Unity", "C#"],
    images: [],
    documentUrl: images.cccTourGuide,
    documentLabel: "View document",
    featured: true,
  },
];
