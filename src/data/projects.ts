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
    tags: ["Laravel 11", "ERP Integration", "Azure Storage", "E-commerce", "Next.js"],
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
      "Contributed to an Angular progressive web app and Laravel API that gives corporate customers a portal to manage employee uniform allocations, place and approve workwear orders, run on-site store stock (issue, replenish, and receipt), and stay in sync with the company ERP.",
    tags: ["Laravel 11", "Angular 18", "ERP Integration", "TypeScript"],
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
      "Contributed to the CYPHER Learning marketplace experience — a filterable app directory showcasing integrations and learning tools with a structured grid layout and category-based discovery.",
    tags: ["HubSpot", "UI Engineering", "Marketplace"],
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
      "Contributed to Washwell.ph — a modern laundry service website for the Philippine market featuring subscription plans, service highlights, and a booking-focused user journey with a clean, approachable brand feel.",
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
      "Minor enhancements to the Guerilla 360 Integrated Solutions company website — UI refinements and front-end improvements to strengthen the brand presentation.",
    tags: ["React","Web Development", "UI Enhancement"],
    images: [
      { src: images.g360[0], alt: "Guerilla 360 website homepage" },
      { src: images.g360[1], alt: "Guerilla 360 website section" },
      { src: images.g360[2], alt: "Guerilla 360 website content" },
      { src: images.g360[3], alt: "Guerilla 360 website layout" },
    ],
    featured: true,
  },
  {
    id: "research-archiving-system",
    title: "Research Archiving System of City College of Calamba",
    description:
      "A basic research archiving system built to organize and systemize research papers for City College of Calamba, making records easier to browse, manage, and preserve.",
    tags: ["PHP", "Research Archiving", "Web Development"],
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
      "A 3D Virtual Reality Desktop Application with Binary Decision Tree Algorithm. This undergraduate thesis project was developed in Unity for exploring the City College of Calamba environment and interacting with guided virtual elements.",
    tags: ["Unity", "Virtual Reality", "3D", "Binary Decision Tree", "Desktop Application"],
    images: [],
    documentUrl: images.cccTourGuide,
    documentLabel: "View document",
    featured: true,
  },
];
