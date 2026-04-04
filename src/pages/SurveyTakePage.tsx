import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertCircle, HeartHandshake, Clock, Users, ShieldCheck } from 'lucide-react';
import { surveys } from '../data/surveys';
import { useSurvey } from '../hooks/useSurvey';
import { SurveyProgress } from '../components/survey/SurveyProgress';
import { QuestionRenderer } from '../components/survey/QuestionRenderer';

const SurveyTakePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const survey = surveys.find((s) => s.slug === slug);

  useEffect(() => {
    if (!survey) {
      navigate('/surveys');
    } else {
      document.title = `${survey.title} | KSTVET Guidance & Counselling`;
    }
  }, [survey, navigate]);

  const {
    currentSection,
    totalSections,
    currentSectionIndex,
    answers,
    progress,
    isFirstSection,
    isLastSection,
    canProceed,
    setAnswer,
    goNext,
    goPrev,
    submitSurvey,
  } = useSurvey(survey!);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!showIntro) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [showIntro]);

  if (!survey) return null;

  const handleNext = () => {
    if (canProceed) {
      setErrors({});
      goNext();
    } else {
      const newErrors: Record<string, string> = {};
      currentSection.questions.forEach((q) => {
        if (q.required && !answers[q.id]) {
          newErrors[q.id] = 'This question is required';
        }
      });
      setErrors(newErrors);
    }
  };

  const handleSubmit = () => {
    if (canProceed) {
      const response = submitSurvey();
      navigate(`/surveys/${survey.slug}/complete`, { state: { response } });
    }
  };

  // PHQ-9 Question 9 Special Alert
  const showCrisisAlert = survey.id === 'phq9' && Number(answers['phq9']) >= 1;

  if (showIntro) {
    return (
      <div className="min-h-screen bg-ivory-50 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/surveys" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-bold text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Surveys
          </Link>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                {survey.category.replace('_', ' ')}
              </span>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>{survey.estimatedMinutes} mins</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">{survey.title}</h1>
            
            <div className="prose prose-slate mb-8">
              <p className="text-slate-600 text-lg leading-relaxed">{survey.fullDescription}</p>
              <div className="bg-ivory-50 p-6 rounded-2xl border border-ivory-200 my-6">
                <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> Purpose of this survey
                </h4>
                <p className="text-slate-600 text-sm m-0">{survey.purpose}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Audience</h4>
              <div className="flex flex-wrap gap-2">
                {survey.audience.map((a, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-coral-50 border border-coral-100 p-6 rounded-2xl mb-10">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-coral-600 flex-shrink-0 mt-0.5" />
                <p className="text-coral-800 text-sm leading-relaxed m-0">
                  {survey.disclaimer}
                </p>
              </div>
            </div>

            {survey.id === 'phq9' && (
              <div className="mb-10 p-6 bg-slate-900 rounded-2xl text-white">
                <p className="text-sm font-medium mb-4">
                  If you are in crisis right now, please use the crisis support button on this page or call 0707 444 222.
                </p>
                <Link to="/#contact" className="text-green-400 font-bold text-sm hover:underline">
                  View emergency contacts →
                </Link>
              </div>
            )}

            <button
              onClick={() => setShowIntro(false)}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-2"
            >
              Begin Survey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <SurveyProgress
          currentSection={currentSectionIndex + 1}
          totalSections={totalSections}
          progress={progress}
          surveyTitle={survey.title}
        />

        <div className="mb-10">
          <h2 className="font-serif text-2xl text-slate-900 mb-2">{currentSection.title}</h2>
          {currentSection.description && (
            <p className="text-slate-500">{currentSection.description}</p>
          )}
        </div>

        <div className="space-y-6">
          {currentSection.questions.map((q) => (
            <div key={q.id}>
              <QuestionRenderer
                question={q}
                value={answers[q.id]}
                onChange={(val) => setAnswer(q.id, val)}
                error={errors[q.id]}
              />
              {q.id === 'phq9' && showCrisisAlert && (
                <div className="mt-[-1.5rem] mb-10 p-4 bg-coral-50 border border-coral-100 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                  <HeartHandshake className="w-5 h-5 text-coral-600 flex-shrink-0" />
                  <p className="text-coral-800 text-xs leading-relaxed m-0">
                    If you are having thoughts of self-harm, please reach out to our team or use the crisis support button on this page. You do not have to face this alone.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
          <button
            onClick={goPrev}
            disabled={isFirstSection}
            className={`flex items-center gap-2 font-bold text-sm transition-all ${
              isFirstSection ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {isLastSection ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100"
            >
              Submit Survey
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100 flex items-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyTakePage;
