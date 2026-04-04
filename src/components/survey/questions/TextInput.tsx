import React from 'react';
import { SurveyQuestion } from '../../../types/survey.types';

interface TextInputProps {
  question: SurveyQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  question,
  value = '',
  onChange,
}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        maxLength={question.maxLength}
        className="w-full p-4 rounded-xl border-2 border-slate-100 bg-white focus:border-green-400 focus:ring-0 transition-all text-slate-700 outline-none"
      />
      {question.maxLength && (
        <div className="flex justify-end mt-2">
          <span className="text-[10px] font-bold text-slate-400">
            {value.length} / {question.maxLength}
          </span>
        </div>
      )}
    </div>
  );
};
