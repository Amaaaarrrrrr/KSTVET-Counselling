import type { WhoWeHelpCard } from '../types';

export const whoWeHelp: WhoWeHelpCard[] = [
  {
    id: 'trainees',
    group: 'KSTVET Trainees',
    description: 'Diploma & Certificate students in technical trainer education navigating the unique pressures of DTTE and Instructor Training programmes.',
    icon: 'graduation-cap',
    color: 'maroon',
    imageUrl: 'https://images.unsplash.com/photo-1523050335392-9bc5ad064f9b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'academic-staff',
    group: 'Academic Staff & Lecturers',
    description: 'Support for educators across all 9 academic departments, balancing teaching excellence with personal wellbeing.',
    icon: 'book-open',
    color: 'forest',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'non-academic-staff',
    group: 'Non-Academic Staff',
    description: 'Dedicated support for examination, library, audit, industrial liaison, security, and maintenance teams.',
    icon: 'shield',
    color: 'gold',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'parents',
    group: 'Parents & Guardians',
    description: 'Guidance for families supporting trainees through their technical education journey at KSTVET.',
    icon: 'heart',
    color: 'cta',
    imageUrl: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'alumni',
    group: 'KSTVET Alumni',
    description: 'Continued support for KTTC graduates from 1979 onwards as they transition into their professional teaching careers.',
    icon: 'award',
    color: 'cream',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'community',
    group: 'TVET Practitioners & Community',
    description: 'Support for CPD participants, industrial attachment supervisors, and the wider Gigiri community.',
    icon: 'users',
    color: 'olive',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop'
  }
];
