export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'certification' | 'hackathon' | 'leadership' | 'competitive';
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  contact: ContactInfo;
  education: Education[];
  skills: Skill[];
  coursework: string[];
  projects: Project[];
  achievements: Achievement[];
}
