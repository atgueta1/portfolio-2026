export type ProjectLine = {
  name: string;
  tech: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  majorProjects?: ProjectLine[];
  minorProjects?: ProjectLine[];
  projects?: ProjectLine[];
};

export type Education = {
  school: string;
  period: string;
  degree: string;
  gpa: string;
  highlights: string[];
};

export type Certification = {
  id: string;
  issuer: string;
  name: string;
  year?: string;
  url?: string;
};

export const experience: Experience[] = [
  {
    id: "guerilla-360",
    title: "Junior Software Developer",
    company: "Guerilla 360 Integrated Solutions",
    period: "April 2023 – Present",
    majorProjects: [
      {
        name: "Cleanline Tasman E-Commerce Website",
        tech: "Laravel, Next.js, ERP Integration",
      },
      {
        name: "Cleanline Tasman PWA",
        tech: "Laravel, Angular 18, ERP Integration",
      },
      {
        name: "CYPHER Learning Marketplace Website",
        tech: "HubSpot",
      },
      {
        name: "SEA Integration",
        tech: "Anypoint Studio Integration",
      },
    ],
    minorProjects: [
      {
        name: "Washwell.ph",
        tech: "React",
      },
    ],
  },
  {
    id: "fujitsu",
    title: "IT Staff",
    company: "Fujitsu Die-Tech Corporation of the Philippines",
    period: "November 2022 – April 2023",
    projects: [
      {
        name: "HINSEI LSA Agreement List System",
        tech: "Web-based tool for agreement management",
      },
    ],
  },
];

export const education: Education = {
  school: "City College of Calamba",
  period: "2018 – 2022",
  degree: "Bachelor of Science in Computer Science",
  gpa: "1.81",
  highlights: [
    'Undergrad Thesis: "A 3D CCC Virtual Tour using Binary Decision Tree Algorithm" (Unity)',
    'Undergrad OJT: "Research Archiving System of City College of Calamba" (PHP, JavaScript)',
  ],
};

export const certifications: Certification[] = [
  {
    id: "laravel",
    issuer: "Laravel",
    name: "Laravel Fullstack Developer Diploma Certificate (Advanced)",
    url: "https://www.linkedin.com/in/andrei-paulo-gueta-36bb56236/details/certifications/",
  },
  {
    id: "monday",
    issuer: "Monday.com",
    name: "Monday Developer Badge Certification",
    year: "2024",
    url: "https://www.linkedin.com/in/andrei-paulo-gueta-36bb56236/details/certifications/",
  },
];
