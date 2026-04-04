import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, MessageSquare, Activity, ArrowRight, Lock, CheckCircle } from 'lucide-react';
import { Survey } from '../../types/survey.types';

interface SurveyCardProps {
  survey: Survey;
}

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-green-600" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-green-600" />,
  Activity: <Activity className="w-5 h-5 text-green-600" />,
};

export const SurveyCard: React.FC<SurveyCardProps> = ({ survey }) => {
  const responses = JSON.parse(localStorage.getItem('kstvet_survey_responses') || '[]');
  const hasCompleted = responses.some((r: any) => r.surveyId === survey.id);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
          {iconMap[survey.icon] || <Activity className="w-5 h-5 text-green-600" />}
        </div>
        <div className="flex gap-2">
          {survey.isScored && (
            <span className="px-2 py-1 bg-gold-50 text-gold-700 text-[10px] font-bold uppercase tracking-wider rounded">
              Scored
            </span>
          )}
          {survey.isAnonymous && (
            <span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1">
              <Lock className="w-3 h-3" /> Anonymous
            </span>
          )}
          {hasCompleted && (
            <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Reopenable
            </span>
          )}
        </div>
      </div>

      <h3 className="font-serif text-xl text-slate-900 mb-2">{survey.title}</h3>
      <p className="text-slate-600 text-sm mb-6 flex-grow">{survey.shortDescription}</p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Clock className="w-4 h-4" />
          <span>{survey.estimatedMinutes} mins</span>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/surveys/${survey.slug}`}
            className="flex items-center gap-2 text-green-600 font-bold text-sm hover:gap-3 transition-all"
          >
            {hasCompleted ? 'Retake' : 'Start Survey'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
