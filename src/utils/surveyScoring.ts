import { Survey, SurveyScoreRange } from '../types/survey.types';

export function calculateScore(
  survey: Survey,
  answers: Record<string, string | string[] | number>
): number {
  if (!survey.isScored || !survey.scoredQuestionIds) return 0;

  let total = 0;
  survey.scoredQuestionIds.forEach((qId) => {
    const answer = answers[qId];
    if (typeof answer === 'number') {
      total += answer;
    } else if (typeof answer === 'string') {
      const num = parseInt(answer, 10);
      if (!isNaN(num)) total += num;
    }
  });

  return total;
}

export function getScoreRange(
  survey: Survey,
  score: number
): SurveyScoreRange | null {
  if (!survey.isScored || !survey.scoreRanges) return null;

  return (
    survey.scoreRanges.find((range) => score >= range.min && score <= range.max) ||
    null
  );
}

export function formatScore(score: number, survey: Survey): string {
  if (!survey.isScored || !survey.scoredQuestionIds) return '';
  
  // For PHQ-9, max score is 27 (9 questions * max 3 points)
  // In a generic engine, we'd calculate max possible score
  const maxScore = survey.id === 'phq9' ? 27 : 100; 
  
  return `Score: ${score} / ${maxScore}`;
}
