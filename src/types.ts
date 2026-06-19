export interface Service {
  id: string;
  title: string;
  category: 'marketing' | 'tech' | 'design' | 'content' | 'seo';
  description: string;
  bullets: string[];
  iconName: string; // Dynamic icon rendering name for Lucide
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  imageUrl: string;
  tags: string[];
  metrics?: { label: string; value: string };
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  category: 'management' | 'tech' | 'design' | 'content' | 'seo';
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}
