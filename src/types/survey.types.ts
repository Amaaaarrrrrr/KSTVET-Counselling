export type QuestionType =
  | 'single_choice'
  | 'multi_choice'
  | 'likert'
  | 'text_input'
  | 'text_area'
  | 'rating_stars'
  | 'yes_no';

export interface QuestionOption {
  id: string;
  label: string;
  value: number | string;
  description?: string;       // optional subtitle under the label
}

export interface SurveyQuestion {
  id: string;
  type: QuestionType;
  text: string;               // the question itself
  subtext?: string;           // optional clarifying note below the question
  required: boolean;
  options?: QuestionOption[]; // for single_choice, multi_choice, likert
  min?: number;               // for likert / rating
  max?: number;               // for likert / rating
  minLabel?: string;          // left anchor label (e.g. "Not at all")
  maxLabel?: string;          // right anchor label (e.g. "Extremely")
  placeholder?: string;       // for text inputs
  maxLength?: number;         // for text inputs
}

export interface SurveySection {
  id: string;
  title: string;
  description?: string;
  questions: SurveyQuestion[];
}

export interface SurveyScoreRange {
  min: number;
  max: number;
  label: string;              // e.g. "Minimal", "Moderate", "Severe"
  color: 'green' | 'gold' | 'coral' | 'slate';
  interpretation: string;     // 2–3 sentence explanation
  recommendation: string;     // what to do next
  showBookingCTA: boolean;    // whether to show "Book a session" button
}

export interface Survey {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;   // 1 sentence for the card
  fullDescription: string;    // 2–3 sentences for the survey intro screen
  purpose: string;            // "This survey will help you..." 1 sentence
  disclaimer: string;         // displayed before starting
  audience: string[];         // who this is for
  estimatedMinutes: number;
  category: 'mental_health' | 'career' | 'wellbeing' | 'feedback' | 'academic';
  icon: string;               // lucide icon name
  sections: SurveySection[];
  isScored: boolean;          // whether responses produce a score
  scoreRanges?: SurveyScoreRange[];
  scoredQuestionIds?: string[]; // which questions contribute to the score
  thankYouMessage: string;    // shown on completion (unscored surveys)
  isAnonymous: boolean;       // if true, no name/email collected
  requiresLogin: boolean;     // always false for this public site
}

export interface SurveyResponse {
  surveyId: string;
  surveyTitle: string;
  startedAt: string;
  completedAt: string;
  answers: Record<string, string | string[] | number>;
  score?: number;
  scoreLabel?: string;
  isAnonymous: boolean;
}
