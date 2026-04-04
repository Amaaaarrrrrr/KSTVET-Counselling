import React from 'react';
import { SurveyQuestion } from '../../types/survey.types';
import { SingleChoice } from './questions/SingleChoice';
import { MultiChoice } from './questions/MultiChoice';
import { LikertScale } from './questions/LikertScale';
import { TextInput } from './questions/TextInput';
import { TextArea } from './questions/TextArea';
import { RatingStars } from './questions/RatingStars';
import { YesNo } from './questions/YesNo';

interface QuestionRendererProps {
  question: SurveyQuestion;
  value: string | string[] | number | undefined;
  onChange: (value: string | string[] | number) => void;
  error?: string;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  value,
  onChange,
  error,
}) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'single_choice':
        return <SingleChoice question={question} value={value as string} onChange={onChange} />;
      case 'multi_choice':
        return <MultiChoice question={question} value={value as string[]} onChange={onChange} />;
      case 'likert':
        return <LikertScale question={question} value={value as number} onChange={onChange} />;
      case 'text_input':
        return <TextInput question={question} value={value as string} onChange={onChange} />;
      case 'text_area':
        return <TextArea question={question} value={value as string} onChange={onChange} />;
      case 'rating_stars':
        return <RatingStars question={question} value={value as number} onChange={onChange} />;
      case 'yes_no':
        return <YesNo question={question} value={value as string} onChange={onChange} />;
      default:
        return <div className="text-red-500">Unknown question type: {question.type}</div>;
    }
  };

  return (
    <div className={`mb-10 p-6 rounded-2xl transition-all ${error ? 'bg-coral-50/30 border border-coral-200' : 'bg-white'}`}>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-slate-900 leading-tight">
          {question.text}
          {question.required && <span className="text-coral-500 ml-1">*</span>}
        </h4>
        {question.subtext && (
          <p className="text-sm text-slate-500 mt-2 italic">{question.subtext}</p>
        )}
      </div>

      {renderQuestion()}

      {error && (
        <p className="text-coral-600 text-xs font-bold mt-4 flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  );
};
