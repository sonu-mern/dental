
// Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  qualifications: string[];
  image: string;
  memberships: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
