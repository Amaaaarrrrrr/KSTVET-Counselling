import React from 'react';
import { Check } from 'lucide-react';
import { SurveyQuestion } from '../../../types/survey.types';

interface MultiChoiceProps {
  question: SurveyQuestion;
  value: string[] | undefined;
  onChange: (value: string[]) => void;
}

export const MultiChoice: React.FC<MultiChoiceProps> = ({
  question,
  value = [],
  onChange,
}) => {
  const toggleOption = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className="space-y-3">
      {question.options?.map((option) => {
        const isSelected = value.includes(option.value as string);
        return (
          <label
            key={option.id}
            className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              isSelected
                ? 'bg-green-50 border-green-400'
                : 'bg-white border-slate-100 hover:bg-ivory-50'
            }`}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleOption(option.value as string)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center transition-all ${
              isSelected ? 'border-green-600 bg-green-600' : 'border-slate-300'
            }`}>
              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
            <div className="flex-grow">
              <span className={`block font-medium ${isSelected ? 'text-green-900' : 'text-slate-700'}`}>
                {option.label}
              </span>
              {option.description && (
                <span className="block text-xs text-slate-500 mt-0.5">{option.description}</span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};
