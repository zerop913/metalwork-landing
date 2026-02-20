// === Services ===
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

// === Process steps ===
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// === Portfolio ===
export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: ServiceCategory;
}

export type ServiceCategory =
  | "stairs"
  | "canopy"
  | "frame"
  | "fence"
  | "decor"
  | "other";

// === Contacts ===
export interface ContactInfo {
  phone: string[];
  email?: string;
  address: string;
  workingHours: string;
  mapUrl?: string;
  social?: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// === Form ===
export interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
}

// === Navigation ===
export interface NavLink {
  label: string;
  href: string;
}
