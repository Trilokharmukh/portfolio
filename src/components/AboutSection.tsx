"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";
import { FeatureCard } from "@/types";

const featureCards: FeatureCard[] = [
  {
    icon: <FaCode className="text-4xl text-blue-600" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using modern technologies.",
  },
  {
    icon: <FaPalette className="text-4xl text-blue-600" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces with a focus on user experience.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    title: "Web Development",
    description:
      "Developing full-stack solutions with modern frameworks and best practices.",
  },
];

const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer focused on creating beautiful and functional
            web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featureCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m a passionate frontend developer with expertise in
              creating beautiful and functional web applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a strong foundation in modern web technologies and a keen eye
              for design, I strive to create seamless user experiences that make
              a difference.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
