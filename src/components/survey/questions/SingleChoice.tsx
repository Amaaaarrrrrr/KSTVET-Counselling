import React from 'react';
import { SurveyQuestion } from '../../../types/survey.types';

interface SingleChoiceProps {
  question: SurveyQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      {question.options?.map((option) => (
        <label
          key={option.id}
          className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
            value === option.value
              ? 'bg-green-50 border-green-400'
              : 'bg-white border-slate-100 hover:bg-ivory-50'
          }`}
        >
          <input
            type="radio"
            name={question.id}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value as string)}
            className="sr-only"
          />
          <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center transition-all ${
            value === option.value ? 'border-green-600 bg-green-600' : 'border-slate-300'
          }`}>
            {value === option.value && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <div className="flex-grow">
            <span className={`block font-medium ${value === option.value ? 'text-green-900' : 'text-slate-700'}`}>
              {option.label}
            </span>
            {option.description && (
              <span className="block text-xs text-slate-500 mt-0.5">{option.description}</span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};
