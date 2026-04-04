import React from 'react';
import { SurveyQuestion } from '../../../types/survey.types';

interface YesNoProps {
  question: SurveyQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
}

export const YesNo: React.FC<YesNoProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        type="button"
        onClick={() => onChange('yes')}
        className={`flex-1 p-4 rounded-xl border-2 font-bold transition-all ${
          value === 'yes'
            ? 'bg-green-400 border-green-400 text-white shadow-lg shadow-green-100'
            : 'bg-white border-slate-100 text-slate-600 hover:border-green-200 hover:bg-green-50/30'
        }`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange('no')}
        className={`flex-1 p-4 rounded-xl border-2 font-bold transition-all ${
          value === 'no'
            ? 'bg-green-400 border-green-400 text-white shadow-lg shadow-green-100'
            : 'bg-white border-slate-100 text-slate-600 hover:border-green-200 hover:bg-green-50/30'
        }`}
      >
        No
      </button>
    </div>
  );
};
