import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'mental_health',
    title: 'Mental Health & Wellbeing',
    description: 'Professional support for anxiety, depression, trauma, and emotional challenges, aligned with KSTVET\'s Mental Wellness Promotion.',
    longDescription: 'Our mental health services provide a safe, confidential space to explore your feelings and develop coping strategies. We reference KSTVET\'s own CPD courses like "Mental Wellness Promotion" and "Psycho-Social Support CPD" as evidence of our commitment to trainer-level wellbeing.',
    heroLine: 'Your mental wellbeing is the foundation of your success as a technical trainer.',
    issues: [
      'Anxiety and panic attacks',
      'Depression and low mood',
      'Grief and loss',
      'Trauma and PTSD',
      'Burnout and emotional exhaustion',
      'Psycho-Social support for trainers'
    ],
    audiences: ['TVET Trainees', 'Academic Staff', 'Non-Academic Staff', 'CPD Participants'],
    icon: 'brain',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'career',
    title: 'Career & Academic Guidance',
    description: 'Navigating DTTE, Instructor Training, and Teaching Practice pathways toward Vision 2030 goals.',
    longDescription: 'We offer structured guidance for KSTVET-specific pathways: Diploma in Technical Trainer Education (DTTE), Certificate in Instructor Training, and industrial attachment. We help position our graduates as multipliers within Kenya\'s Vision 2030 skills agenda.',
    heroLine: 'Bridge the gap between your technical training and your future as an educator.',
    issues: [
      'DTTE and Instructor Training pathway planning',
      'Teaching Practice (TP) preparation',
      'Industrial attachment and field work guidance',
      'CV writing for the TVET sector',
      'Academic underperformance and motivation',
      'Post-graduation transitions'
    ],
    audiences: ['Trainees', 'Alumni'],
    icon: 'briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'financial',
    title: 'Financial Stress Counselling',
    description: 'Support for HEF (Higher Education Fund) applications and managing economic pressure.',
    longDescription: 'Financial difficulties are a leading cause of trainee dropout. We provide practical support for HEF (Higher Education Fund) applications via portal.hef.co.ke and connect you with KSTVET\'s own bursary scheme at kstvet.ac.ke/bursary/.',
    heroLine: 'Don’t let financial pressure derail your technical education.',
    issues: [
      'HEF (Higher Education Fund) application support',
      'KSTVET Bursary scheme guidance',
      'Managing debt and financial anxiety',
      'Emergency financial hardship referrals',
      'Budgeting for campus life',
      'portal.hef.co.ke navigation'
    ],
    audiences: ['Trainees', 'Staff', 'Community'],
    icon: 'wallet',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'relationships',
    title: 'Relationships & Personal Development',
    description: 'Building healthier connections, especially during Teaching Practice placements.',
    longDescription: 'Our sessions help you navigate complex relationship dynamics and build self-esteem. We specifically address the challenges of Teaching Practice placements across Kenya, which often create unique relationship and personal adjustment hurdles.',
    heroLine: 'Healthy relationships start with a healthy connection to yourself.',
    issues: [
      'Teaching Practice placement adjustment',
      'Peer and friendship conflict',
      'Romantic relationship difficulties',
      'Family pressure and expectations',
      'Identity and self-esteem',
      'Boundaries and communication skills'
    ],
    audiences: ['Trainees', 'Staff', 'Alumni', 'Community'],
    icon: 'users',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b30f?q=80&w=1000&auto=format&fit=crop'
  }
];
