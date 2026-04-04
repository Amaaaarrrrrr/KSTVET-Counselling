import { useState, useCallback, useMemo, useEffect } from 'react';
import { Survey, SurveySection, SurveyResponse } from '../types/survey.types';
import { calculateScore, getScoreRange } from '../utils/surveyScoring';

interface UseSurveyReturn {
  survey: Survey;
  currentSectionIndex: number;
  currentSection: SurveySection;
  totalSections: number;
  answers: Record<string, string | string[] | number>;
  progress: number;
  isFirstSection: boolean;
  isLastSection: boolean;
  canProceed: boolean;
  setAnswer: (questionId: string, value: string | string[] | number) => void;
  goNext: () => void;
  goPrev: () => void;
  submitSurvey: () => SurveyResponse;
}

export function useSurvey(survey: Survey): UseSurveyReturn {
  const storageKey = `kstvet_survey_progress_${survey.id}`;
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>(() => {
    const saved = sessionStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  });
  const [startedAt] = useState(new Date().toISOString());

  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(answers));
  }, [answers, storageKey]);

  const currentSection = survey.sections[currentSectionIndex];
  const totalSections = survey.sections.length;

  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === totalSections - 1;

  const canProceed = useMemo(() => {
    return currentSection.questions.every((q) => {
      if (!q.required) return true;
      const answer = answers[q.id];
      if (answer === undefined || answer === null) return false;
      if (typeof answer === 'string' && answer.trim() === '') return false;
      if (Array.isArray(answer) && answer.length === 0) return false;
      return true;
    });
  }, [currentSection, answers]);

  const progress = useMemo(() => {
    return Math.round(((currentSectionIndex + 1) / totalSections) * 100);
  }, [currentSectionIndex, totalSections]);

  const setAnswer = useCallback((questionId: string, value: string | string[] | number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = useCallback(() => {
    if (canProceed && !isLastSection) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  }, [canProceed, isLastSection]);

  const goPrev = useCallback(() => {
    if (!isFirstSection) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  }, [isFirstSection]);

  const submitSurvey = useCallback(() => {
    const score = survey.isScored ? calculateScore(survey, answers) : undefined;
    const scoreRange = score !== undefined ? getScoreRange(survey, score) : null;

    const response: SurveyResponse = {
      surveyId: survey.id,
      surveyTitle: survey.title,
      startedAt,
      completedAt: new Date().toISOString(),
      answers,
      score,
      scoreLabel: scoreRange?.label,
      isAnonymous: survey.isAnonymous,
    };

    // Save to localStorage
    const existingResponses = JSON.parse(localStorage.getItem('kstvet_survey_responses') || '[]');
    existingResponses.push(response);
    localStorage.setItem('kstvet_survey_responses', JSON.stringify(existingResponses));

    // Clear session progress
    sessionStorage.removeItem(storageKey);

    return response;
  }, [survey, answers, startedAt, storageKey]);

  return {
    survey,
    currentSectionIndex,
    currentSection,
    totalSections,
    answers,
    progress,
    isFirstSection,
    isLastSection,
    canProceed,
    setAnswer,
    goNext,
    goPrev,
    submitSurvey,
  };
}
