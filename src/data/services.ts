import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'mental_health',
    title: 'Mental Health & Wellbeing',
    description: 'Professional support for anxiety, depression, trauma, and emotional challenges.',
    longDescription: 'Our mental health services provide a safe, confidential space to explore your feelings and develop coping strategies. Whether you are dealing with acute stress or long-term emotional difficulties, our qualified counsellors are here to support your journey toward healing and resilience.',
    heroLine: 'Your mental wellbeing is the foundation of your success.',
    issues: [
      'Anxiety and panic attacks',
      'Depression and low mood',
      'Grief and loss',
      'Trauma and PTSD',
      'Burnout and emotional exhaustion',
      'Sleep difficulties and mental fatigue'
    ],
    audiences: ['Students', 'Staff', 'Alumni', 'Community'],
    icon: 'brain',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'career',
    title: 'Career & Academic Guidance',
    description: 'Helping you navigate your educational path and professional future with confidence.',
    longDescription: 'Academic pressure and career uncertainty can be overwhelming. We offer structured guidance to help you align your TVET training with market demands, prepare for the workplace, and overcome academic hurdles that might be holding you back.',
    heroLine: 'Bridge the gap between your training and your future career.',
    issues: [
      'Career exploration and pathway planning',
      'Industrial attachment preparation',
      'CV writing and interview readiness',
      'Academic underperformance and motivation',
      'Programme transfer decisions',
      'Post-graduation transitions'
    ],
    audiences: ['Students', 'Alumni'],
    icon: 'briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'financial',
    title: 'Financial Stress Counselling',
    description: 'Support for navigating financial hardship and managing the stress of economic pressure.',
    longDescription: 'Financial difficulties are one of the leading causes of student dropout and staff burnout. We provide practical support to help you manage financial anxiety, navigate loan systems, and connect with emergency resources when you need them most.',
    heroLine: 'Don’t let financial pressure derail your dreams.',
    issues: [
      'Bursary and scholarship application support',
      'HELB loan guidance',
      'Managing debt and financial anxiety',
      'Emergency financial hardship referrals',
      'Budgeting and financial literacy',
      'Impact of financial stress on academic performance'
    ],
    audiences: ['Students', 'Staff', 'Community'],
    icon: 'wallet',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'relationships',
    title: 'Relationships & Personal Development',
    description: 'Building healthier connections and a stronger sense of self.',
    longDescription: 'Our personal development sessions focus on improving your interpersonal skills and self-understanding. We help you navigate complex relationship dynamics, set healthy boundaries, and build the self-esteem necessary for a fulfilling life.',
    heroLine: 'Healthy relationships start with a healthy connection to yourself.',
    issues: [
      'Peer and friendship conflict',
      'Romantic relationship difficulties',
      'Family pressure and expectations',
      'Loneliness and social isolation',
      'Identity and self-esteem',
      'Boundaries and communication skills'
    ],
    audiences: ['Students', 'Staff', 'Alumni', 'Community'],
    icon: 'users',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b30f?q=80&w=1000&auto=format&fit=crop'
  }
];
