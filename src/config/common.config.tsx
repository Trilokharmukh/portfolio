import { NavItem, SkillCategory, Education, SocialLink } from "@/types";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  // FaMapMarkerAlt,
} from "react-icons/fa";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <FaGithub />,
    href: "https://github.com/trilokharmukh",
    label: "GitHub",
    displayValue: "trilokharmukh",
    isDisplayOn: ["Hero", "Contact"],
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/trilokharmukh/",
    label: "LinkedIn",
    displayValue: "trilokharmukh",
    isDisplayOn: ["Hero", "Contact"],
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:trilokharmukh@gmail.com",
    label: "Email",
    displayValue: "trilokharmukh@gmail.com",
    isDisplayOn: ["Contact", "Hero"],
  },
  {
    icon: <FaPhone />,
    href: "tel:+919770874996",
    label: "Phone",
    displayValue: "+91 9770874996",
    isDisplayOn: ["Contact", "Hero"],
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/919770874996",
    label: "WhatsApp",
    displayValue: "9770874996",
    isDisplayOn: ["Contact", "Hero"],
  },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   href: "#",
  //   label: "Mumbai, India",
  //   isDisplayOn: ["Contact"],
  // },
];

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: SkillCategory = {
  Technologies: [
    "Vue.js",
    "Nuxt.js",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  tools: [
    "Git",
    "Docker",
    "Strapi",
    "Contentful",
    "Confluence",
    "GCP",
    "SendGrid",
  ],
  "SEO & Analytics": [
    "Google Analytics",
    "MoEngage",
    "Schema Markup",
    "Sitemaps",
    "Open Graph",
    "Meta Tags",
  ],
};

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
