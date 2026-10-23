export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  liveUrl: string;
  description: string;
  technologies: string[];
  keyTools?: string[];
  features?: string[];
  highlights?: string[];
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  level: 'Practical Experience' | 'Working Knowledge' | 'Beginner / Fundamentals';
  note?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  type: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  status: string;
  timeline?: string;
  description: string;
  focusAreas: string[];
}

export interface TrainingItem {
  title: string;
  provider: string;
  duration: string;
  description: string;
  keyTopics: string[];
}
