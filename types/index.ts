/**
 * Shared TypeScript types and interfaces
 */

export interface Project {
  title: string;
  url: string;
  desc: string;
  tech: string[];
  icon: string;
  progress: number;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  medalType: 'gold' | 'silver' | 'bronze';
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  site: string;
}

export interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

