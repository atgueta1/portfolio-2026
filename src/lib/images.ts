/** Build a URL-safe path under /public/images */
export function imageUrl(...segments: string[]): string {
  return `/images/${segments.map((s) => encodeURIComponent(s)).join("/")}`;
}

export const images = {
  resume: imageUrl("Resume", "CV-Gueta_Andrei-Paulo-T_2026.pdf"),
  cccTourGuide: imageUrl("CCCTourGuide", "CCC Tour GuideFINALYARN.pdf"),
  researchArchivingSystem: imageUrl("RAS", "Dashboard-Desktop.svg"),

  cleanlineWebsite: {
    hero: imageUrl(
      "Cleanline Tasman WEBSITE",
      "Screenshot 2026-05-24 162739.png",
    ),
    products: imageUrl(
      "Cleanline Tasman WEBSITE",
      "Screenshot 2026-05-24 162850.png",
    ),
    solutions: imageUrl(
      "Cleanline Tasman WEBSITE",
      "Screenshot 2026-05-24 162946.png",
    ),
    about: imageUrl(
      "Cleanline Tasman WEBSITE",
      "Screenshot 2026-05-24 163011.png",
    ),
    contact: imageUrl(
      "Cleanline Tasman WEBSITE",
      "Screenshot 2026-05-24 163119.png",
    ),
  },

  cleanlineCms: {
    dashboard: imageUrl(
      "Cleanline Tasman WEBSITE",
      "CMS",
      "Screenshot 2026-05-24 163318.png",
    ),
    editor: imageUrl(
      "Cleanline Tasman WEBSITE",
      "CMS",
      "Screenshot 2026-05-24 163444.png",
    ),
    content: imageUrl(
      "Cleanline Tasman WEBSITE",
      "CMS",
      "Screenshot 2026-05-24 163527.png",
    ),
  },

  cleanlinePwa: [
    "Screenshot 2026-05-24 192205.png",
    "Screenshot 2026-05-24 192302.png",
    "Screenshot 2026-05-24 192311.png",
    "Screenshot 2026-05-24 192316.png",
    "Screenshot 2026-05-24 192345.png",
    "Screenshot 2026-05-24 192431.png",
    "Screenshot 2026-05-24 192453.png",
  ].map((file) => imageUrl("Cleanline Tasman PWA", file)),

  g360: [
    "Screenshot 2026-07-01 174327.png",
    "Screenshot 2026-07-01 174332.png",
    "Screenshot 2026-07-01 174358.png",
    "Screenshot 2026-07-01 174404.png",
  ].map((file) => imageUrl("G360", file)),

  washwell: {
    hero: imageUrl("Washwell.ph Website", "Screenshot 2026-05-24 164315.png"),
    pricing: imageUrl("Washwell.ph Website", "Screenshot 2026-05-24 164328.png"),
    services: imageUrl("Washwell.ph Website", "Screenshot 2026-05-24 164339.png"),
    contact: imageUrl("Washwell.ph Website", "Screenshot 2026-05-24 164351.png"),
  },

  cypher: imageUrl(
    "CYPHER Learning Marketplace",
    "Screenshot 2026-05-24 164118.png",
  ),
} as const;
