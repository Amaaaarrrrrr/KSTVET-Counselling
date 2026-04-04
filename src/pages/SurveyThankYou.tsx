import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Calendar, MessageSquare, AlertTriangle, HeartHandshake } from 'lucide-react';
import { SurveyResponse, SurveyScoreRange } from '../types/survey.types';
import { surveys } from '../data/surveys';
import { getScoreRange } from '../utils/surveyScoring';

const SurveyThankYou: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const response = location.state?.response as SurveyResponse;

  const survey = surveys.find((s) => s.id === response?.surveyId);

  useEffect(() => {
    if (!response || !survey) {
      navigate('/surveys');
    } else {
      document.title = `Survey Completed | ${survey.title}`;
      window.scrollTo(0, 0);
    }
  }, [response, survey, navigate]);

  if (!response || !survey) return null;

  const scoreRange = response.score !== undefined ? getScoreRange(survey, response.score) : null;
  const showSelfHarmAlert = survey.id === 'phq9' && Number(response.answers['phq9']) >= 1;

  return (
    <div className="min-h-screen bg-ivory-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Thank You</h1>
          <p className="text-slate-500 mb-10">You have successfully completed the {survey.title}.</p>

          {!survey.isScored ? (
            <div className="bg-ivory-50 p-8 rounded-2xl border border-ivory-200 mb-10 text-left">
              <p className="text-slate-700 leading-relaxed m-0">
                {survey.thankYouMessage}
              </p>
            </div>
          ) : (
            <div className="mb-12">
              <div className="mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Your Result</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-serif text-slate-900">{response.score}</span>
                  <span className="text-xl text-slate-400">/ 27</span>
                </div>
                {scoreRange && (
                  <div className={`inline-block mt-4 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${
                    scoreRange.color === 'green' ? 'bg-green-100 text-green-700' :
                    scoreRange.color === 'gold' ? 'bg-gold-100 text-gold-700' :
                    'bg-coral-100 text-coral-700'
                  }`}>
                    {scoreRange.label}
                  </div>
                )}
              </div>

              {scoreRange && (
                <div className={`p-8 rounded-2xl border text-left mb-8 ${
                  scoreRange.color === 'green' ? 'bg-green-50 border-green-100' :
                  scoreRange.color === 'gold' ? 'bg-gold-50 border-gold-100' :
                  'bg-coral-50 border-coral-100'
                }`}>
                  <h3 className="font-bold text-slate-900 mb-3">Interpretation</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    {scoreRange.interpretation}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-3">Recommendation</h3>
                  <p className="text-slate-700 text-sm leading-relaxed m-0">
                    {scoreRange.recommendation}
                  </p>
                </div>
              )}

              {showSelfHarmAlert && (
                <div className="bg-coral-600 text-white p-6 rounded-2xl mb-8 text-left flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Urgent Support Recommended</h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      You indicated you have had thoughts of hurting yourself. Please reach out to our counselling team or use the crisis line — support is available right now.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Link to="/#contact" className="text-white underline font-bold text-sm">Emergency Contacts</Link>
                      <span className="text-white/50">|</span>
                      <span className="font-bold text-sm">Call 0707 444 222</span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-xs text-slate-400 italic mb-10">
                Remember: This is a screening tool, not a diagnosis. Whatever your score, speaking with a counsellor is always available to you.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {scoreRange?.showBookingCTA ? (
              <Link
                to="/#contact"
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-2"
              >
                Book a Counselling Session <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                to="/#contact"
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                Contact Us <MessageSquare className="w-5 h-5" />
              </Link>
            )}
            <Link
              to="/surveys"
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-full hover:bg-ivory-50 transition-all"
            >
              Back to Surveys
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 p-8 bg-green-50 rounded-3xl border border-green-100 flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <HeartHandshake className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-1">We are here for you</h3>
            <p className="text-green-800 text-sm">
              Our professional counsellors are available for private, confidential sessions. You don't need a reason to talk — we're here to listen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyThankYou;
