import {
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaSearch,
  FaBell,
  FaCloud,
  FaCogs,
  FaUsers,
} from "react-icons/fa";

export const EXPERIENCES = [
  {
    company: "JSW One Platforms",
    position: "Software Development Engineer I",
    location: "Mumbai",
    period: "January 2024 – Present",
    keyAchievements: [
      {
        icon: <FaCode className="text-blue-500" />,
        title: "Full Stack Development",
        description:
          "Built scalable eCommerce solutions using Vue.js, Nuxt, React, and Next.js with modern UI frameworks",
      },
      {
        icon: <FaMobileAlt className="text-blue-500" />,
        title: "Responsive Design",
        description:
          "Created mobile-first designs using SCSS, Tailwind, MUI, Bootstrap, and Vuetify for cross-device compatibility",
      },
      {
        icon: <FaRocket className="text-blue-500" />,
        title: "Performance Optimization",
        description:
          "Improved page load speeds by 30% through SSR/SSG and implemented SEO best practices",
      },
      {
        icon: <FaSearch className="text-blue-500" />,
        title: "SEO & Analytics",
        description:
          "Implemented dynamic sitemap generation and integrated Google Analytics for better search rankings",
      },
      {
        icon: <FaBell className="text-blue-500" />,
        title: "Notification System",
        description:
          "Developed notification service for 150,000+ users across email, SMS, WhatsApp, and Slack",
      },
      {
        icon: <FaCloud className="text-blue-500" />,
        title: "Cloud & DevOps",
        description:
          "Deployed applications on GCP Cloud Run and Cloud Build, ensuring scalable infrastructure",
      },
      {
        icon: <FaCogs className="text-blue-500" />,
        title: "CMS Integration",
        description:
          "Integrated and customized Contentful and Strapi CMS for dynamic content management",
      },
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Node.js",
      "GCP",
      "Contentful",
      "Strapi",
      "SCSS",
      "Tailwind",
      "MUI",
      "Bootstrap",
      "Vuetify",
      "Agile",
    ],
  },
  {
    company: "MountBlue Technologies",
    position: "Software Development Engineer I",
    location: "Mumbai",
    period: "September 2022 – December 2023",
    keyAchievements: [
      {
        icon: <FaCode className="text-blue-500" />,
        title: "Frontend Development",
        description:
          "Developed and enhanced web applications using React, Vue, and Node.js",
      },
      {
        icon: <FaCogs className="text-blue-500" />,
        title: "CMS Integration",
        description:
          "Integrated Contentful CMS for dynamic content management and updates",
      },
      {
        icon: <FaUsers className="text-blue-500" />,
        title: "Agile Development",
        description:
          "Worked in Agile environment with two-week sprints and Jira-based task management",
      },
    ],
    technologies: [
      "React",
      "Vue.js",
      "Node.js",
      "Contentful",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
];
