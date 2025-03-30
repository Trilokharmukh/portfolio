"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaSearch,
  FaBell,
  FaCloud,
  FaCogs,
  // FaUsers,
} from "react-icons/fa";

const experiences = [
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
      // {
      //   icon: <FaUsers className="text-blue-500" />,
      //   title: "Agile Development",
      //   description:
      //     "Worked in Agile environment with two-week sprints and Jira-based task management",
      // },
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

const ExperienceSection: React.FC = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(0);
  const [isRightSideHovered, setIsRightSideHovered] = useState(false);
  const rightSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        rightSideRef.current &&
        !rightSideRef.current.contains(e.target as Node)
      ) {
        setIsRightSideHovered(false);
        if (!isRightSideHovered) {
          setHoveredExperience(0); // Reset to first experience instead of null
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isRightSideHovered]);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4 inline-block">
            Experience
          </span>
          <h2 className="text-3xl font-bold mb-4">Work History</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Company List */}
          <div className="md:w-1/3 space-y-4">
            {experiences.map((exp, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    hoveredExperience === index
                      ? "bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500"
                      : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onMouseEnter={() => setHoveredExperience(index)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase className="text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </h4>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                          +{exp.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Achievements */}
                <div className="md:hidden mt-4">
                  <AnimatePresence mode="wait">
                    {hoveredExperience === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Key Achievements
                          </h3>
                          <div className="grid gap-4">
                            {exp.keyAchievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="text-xl">
                                  {achievement.icon}
                                </div>
                                <div>
                                  <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                                    {achievement.title}
                                  </h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {achievement.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.2,
                                  delay: idx * 0.05,
                                }}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Right side - Achievements */}
          <div
            className="hidden md:block md:w-2/3"
            ref={rightSideRef}
            onMouseEnter={() => setIsRightSideHovered(true)}
            onMouseLeave={() => setIsRightSideHovered(false)}
          >
            <AnimatePresence mode="wait">
              {hoveredExperience !== null && (
                <motion.div
                  key={hoveredExperience}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Key Achievements
                    </h3>
                    <div className="grid gap-6">
                      {experiences[hoveredExperience].keyAchievements.map(
                        (achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start gap-4"
                          >
                            <div className="text-2xl">{achievement.icon}</div>
                            <div>
                              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {achievement.title}
                              </h5>
                              <p className="text-gray-600 dark:text-gray-300">
                                {achievement.description}
                              </p>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences[hoveredExperience].technologies.map(
                        (tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
