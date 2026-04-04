import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { SurveyQuestion } from '../../../types/survey.types';

interface RatingStarsProps {
  question: SurveyQuestion;
  value: number | undefined;
  onChange: (value: number) => void;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  question,
  value = 0,
  onChange,
}) => {
  const [hover, setHover] = useState(0);
  const max = question.max || 5;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        {[...Array(max)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <button
              key={i}
              type="button"
              className="focus:outline-none transition-transform active:scale-90"
              onClick={() => onChange(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              <Star
                className={`w-10 h-10 transition-colors ${
                  ratingValue <= (hover || value)
                    ? 'fill-gold-400 text-gold-400'
                    : 'text-slate-300'
                }`}
              />
            </button>
          );
        })}
      </div>
      {value > 0 && (
        <span className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
          {value} out of {max}
        </span>
      )}
    </div>
  );
};
