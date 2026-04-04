import React from 'react';
import { SurveyQuestion } from '../../../types/survey.types';

interface LikertScaleProps {
  question: SurveyQuestion;
  value: number | undefined;
  onChange: (value: number) => void;
}

export const LikertScale: React.FC<LikertScaleProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-4">
        {question.options?.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.value as number)}
            className={`flex-1 p-4 rounded-xl border-2 font-bold text-sm transition-all ${
              value === option.value
                ? 'bg-green-400 border-green-400 text-white shadow-lg shadow-green-100'
                : 'bg-white border-slate-100 text-slate-600 hover:border-green-200 hover:bg-green-50/30'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      
      <div className="hidden sm:flex justify-between px-1">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{question.minLabel}</span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{question.maxLabel}</span>
      </div>
    </div>
  );
};
