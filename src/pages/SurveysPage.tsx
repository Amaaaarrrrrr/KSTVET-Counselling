import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Info } from 'lucide-react';
import { surveys } from '../data/surveys';
import { SurveyCard } from '../components/survey/SurveyCard';

const SurveysPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Surveys & Self-Assessments | KSTVET Guidance & Counselling';
  }, []);

  return (
    <div className="min-h-screen bg-ivory-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
            Surveys & Self-Assessments
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            Take one of our evidence-based surveys to better understand your wellbeing, give us feedback, or help us plan support for the KSTVET community. All surveys are anonymous unless stated otherwise.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-2xl mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-1">Your Privacy Matters</h3>
            <p className="text-green-800 text-sm">
              All surveys on this page are anonymous. Your responses are stored only on your device and are never linked to your identity. We use aggregate data to improve our services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {surveys.map((survey) => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-12 h-12 rounded-full bg-ivory-100 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-slate-900 mb-2">Not sure where to start?</h3>
              <p className="text-slate-600">
                If you are going through a difficult time and want to talk, you can book a session directly without completing a survey first. Our counsellors are here to support you.
              </p>
            </div>
          </div>
          <Link
            to="/#contact"
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100 whitespace-nowrap"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurveysPage;
