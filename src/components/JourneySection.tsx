"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "JSW One Platforms",
    location: "Mumbai",
    position: "Software Development Engineer I",
    period: "January 2024 – Present",
    achievements: [
      "Developed and maintained eCommerce websites using Vue.js, Nuxt, React, and Next.js, Node.js",
      "Created responsive, mobile-first designs using SCSS, Tailwind, MUI, Bootstrap, and Vuetify",
      "Improved page load speeds by 30% through SSR and SSG with Next.js and Nuxt.js",
      "Implemented SEO best practices with dynamic sitemap generation and automated meta tags",
      "Integrated Google Analytics and MoEngage for performance monitoring and user engagement",
      "Deployed applications on GCP Cloud Run and Cloud Build",
      "Developed notification service for 150,000+ users across email, SMS, WhatsApp, and Slack",
      "Integrated Contentful and Strapi CMS for dynamic content management",
      "Worked in Agile environment with two-week sprints and Jira-based task management",
    ],
  },
  {
    company: "MountBlue Technologies",
    location: "Mumbai",
    position: "Software Development Engineer I",
    period: "September 2022 – December 2023",
    achievements: [
      "Worked as a Frontend Developer at JSW One Platform, responsible for managing eCommerce websites",
      "Utilized React, Vue, Node.js, and Contentful to build and enhance web applications",
    ],
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-xl text-gray-600">Professional Experience</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-xl text-gray-700">{exp.position}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600">{exp.location}</p>
                  <p className="text-gray-600">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
