import { StaticImageData } from "next/image";

export interface SocialLink {
  icon: React.ReactElement;
  href?: string;
  label: string;
  displayValue?: string;
  isDisplayOn?: string[];
}
export interface NavItem {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  [key: string]: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  live: string;
}
