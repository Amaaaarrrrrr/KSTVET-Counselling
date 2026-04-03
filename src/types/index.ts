export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  title: string;
  qualifications: string[];
  specialisations: string[];
  bio: string;
  color: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  issues: string[];
  audiences: string[];
  icon: string;
  heroLine?: string;
  imageUrl?: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'mental_health' | 'career' | 'financial' | 'academic';
  description: string;
  type: 'pdf' | 'article';
  readTime?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  content: string;
  imageUrl?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface WhoWeHelpCard {
  id: string;
  group: string;
  description: string;
  icon: string;
  color: string;
  imageUrl?: string;
}
