import React from 'react';
import { motion } from 'motion/react';

interface SurveyProgressProps {
  currentSection: number;
  totalSections: number;
  progress: number;
  surveyTitle: string;
}

export const SurveyProgress: React.FC<SurveyProgressProps> = ({
  currentSection,
  totalSections,
  progress,
  surveyTitle,
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {surveyTitle}
        </span>
        <span className="text-xs font-bold text-green-600">
          Section {currentSection} of {totalSections}
        </span>
      </div>
      
      <div className="h-2 w-full bg-ivory-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      <div className="flex justify-end mt-1">
        <span className="text-[10px] font-bold text-slate-400">{progress}% Complete</span>
      </div>
    </div>
  );
};
