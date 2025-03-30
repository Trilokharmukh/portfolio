export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
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
