import {
  ContactInfo,
  NavItem,
  SkillCategory,
  Experience,
  Education,
} from "@/types";

export const CONTACT_INFO: ContactInfo = {
  email: "trilokharmukh@gmail.com",
  phone: "+91 9770874996",
  location: "Mumbai, India",
  socialLinks: {
    github: "#",
    linkedin: "#",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: SkillCategory = {
  frontend: [
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  backend: ["Node.js", "MongoDB", "PostgreSQL"],
  tools: ["Git", "Docker"],
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Mumbai India",
    period: "2022 – Present",
    achievements: [
      "Building responsive and interactive web applications using modern technologies",
      "Creating intuitive and beautiful user interfaces with a focus on user experience",
      "Developing full-stack solutions with modern frameworks and best practices",
    ],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    location: "San Francisco",
    period: "2021 – 2022",
    achievements: [
      "Worked on frontend development using React and Next.js",
      "Collaborated with the design team to implement UI/UX improvements",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Christian collage of Enggineering and technology Bhilai",
    period: "2018 – 2021",
    grade: "GPA: 8.5/10",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "UPU Gove Polytechnic College Durg",
    period: "2015 – 2018",
    grade: "GPA: 8.5/10",
  },
];
