export type ServiceCategory = 'All' | 'Hair Care' | 'Bridal & Makeup' | 'Skin & Face' | 'Nails & Spa' | 'Waxing';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  pricePKR: number;
  durationMinutes: number;
  description: string;
  popular?: boolean;
  image?: string;
  specialNote?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  avatar: string;
  rating: number;
}

export interface Appointment {
  id: string;
  bookingRef: string;
  services: ServiceItem[];
  totalAmountPKR: number;
  stylistId?: string;
  stylistName?: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface Review {
  id: string;
  clientName: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface SocialLinks {
  facebook: string;
  tiktok: string;
  instagram: string;
  whatsapp: string;
  phone: string;
  address?: string;
  shortAddress?: string;
  timing?: string;
}
