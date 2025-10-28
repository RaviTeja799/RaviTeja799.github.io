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

export interface ProjectDetail extends Project {
  images: string[];
  problemStatement: string;
  solutionApproach: string;
  outcomes: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Badge {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud' | 'competitive' | 'ai-ml' | 'leadership';
  imageUrl: string;
  verificationUrl?: string;
  issueDate?: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'certification' | 'hackathon' | 'leadership' | 'competitive';
  period?: string;
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
