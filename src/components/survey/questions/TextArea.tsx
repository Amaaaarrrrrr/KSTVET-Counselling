import React from 'react';
import { SurveyQuestion } from '../../../types/survey.types';

interface TextAreaProps {
  question: SurveyQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  question,
  value = '',
  onChange,
}) => {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        maxLength={question.maxLength}
        rows={4}
        className="w-full p-4 rounded-xl border-2 border-slate-100 bg-white focus:border-green-400 focus:ring-0 transition-all text-slate-700 outline-none resize-none"
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
