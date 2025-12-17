
import React from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Smile, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Smartphone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Service, Doctor, Testimonial, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: 'Dental Care',
  tagline: 'Precision Dentistry with a Personal Touch',
  address: '123 Smile Avenue, Dental District, Modern City, SC 54321',
  branch2: '456 Bright Way, Uptown Plaza, North City, NC 12345',
  phone: '+1 (555) 000-1234',
  whatsapp: '+1 (555) 999-8888',
  email: 'hello@dentalcare.com',
  supportEmail: 'support@dentalcare.com',
  hours: [
    { days: 'Mon - Fri', time: '8:00 AM - 7:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { days: 'Sunday', time: 'Closed (Emergency Only)' }
  ],
  socials: [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#' }
  ]
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Routine Checkup',
    description: 'Comprehensive oral examinations and professional cleaning to keep your smile bright.',
    icon: <Stethoscope className="w-6 h-6" />,
    benefits: ['Early detection of issues', 'Plaque & tartar removal', 'Personalized oral hygiene tips']
  },
  {
    id: '2',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth using state-of-the-art technology.',
    icon: <ShieldCheck className="w-6 h-6" />,
    benefits: ['Restore chewing function', 'Prevent bone loss', 'Lifetime durability']
  },
  {
    id: '3',
    title: 'Invisalign & Braces',
    description: 'Straighten your teeth discreetly with clear aligners or traditional orthodontic solutions.',
    icon: <Smile className="w-6 h-6" />,
    benefits: ['Improved bite', 'Enhanced aesthetics', 'Comfortable treatment']
  },
  {
    id: '4',
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening for a noticeably brighter smile in just one visit.',
    icon: <Sparkles className="w-6 h-6" />,
    benefits: ['Instant results', 'Safe for enamel', 'Long-lasting brilliance']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist / Cosmetic Specialist',
    experience: '15+ Years',
    qualifications: ['DDS - Columbia University', 'Specialist in Esthetic Dentistry'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    memberships: ['American Dental Association (ADA)', 'Academy of Cosmetic Dentistry']
  },
  {
    id: 'd2',
    name: 'Dr. James Wilson',
    role: 'Implantologist & Oral Surgeon',
    experience: '12+ Years',
    qualifications: ['DDS - UCLA', 'MSc in Oral Surgery'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    memberships: ['International Congress of Oral Implantologists', 'ADA']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael R.',
    rating: 5,
    content: 'The most painless root canal experience I’ve ever had. Dr. Sarah is amazing!',
    date: '2 months ago'
  },
  {
    id: 't2',
    name: 'Emily L.',
    rating: 5,
    content: 'My Invisalign treatment was smooth from start to finish. Highly recommend this clinic!',
    date: '1 month ago'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Full Smile Makeover',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g2',
    title: 'Orthodontic Alignment',
    beforeImage: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1468494294317-657053ff432c?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQS = [
  {
    q: "Do you accept new patients?",
    a: "Yes! We are currently welcoming new patients of all ages. Contact us today to schedule your first visit."
  },
  {
    q: "How often should I visit the dentist?",
    a: "We generally recommend a checkup and professional cleaning every six months to maintain optimal oral health."
  },
  {
    q: "Do you offer emergency dental services?",
    a: "Absolutely. If you have a dental emergency, call our main office number immediately. We set aside time each day for urgent cases."
  },
  {
    q: "What insurance providers do you work with?",
    a: "We accept most major PPO insurance plans. Our team can help you verify your coverage before your appointment."
  }
];
