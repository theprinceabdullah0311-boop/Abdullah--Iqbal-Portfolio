import React from 'react';
import { Zap, HelpCircle, FolderCheck, Users, CheckSquare, TrendingUp } from 'lucide-react';
import { PROFESSIONAL_STRENGTHS } from '../data/portfolioData';

export const Strengths: React.FC = () => {
  const getStrengthIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 1:
        return <HelpCircle className="w-5 h-5 text-blue-500" />;
      case 2:
        return <FolderCheck className="w-5 h-5 text-emerald-500" />;
      case 3:
        return <Users className="w-5 h-5 text-indigo-500" />;
      case 4:
        return <CheckSquare className="w-5 h-5 text-purple-500" />;
      case 5:
      default:
        return <TrendingUp className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/60 dark:bg-[#091120]/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>Work Ethic</span>
            <span aria-hidden="true">·</span>
            <span>Professional Strengths</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Core attributes that guide my work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Consistent execution habits developed through software house workflows and independent project delivery.
          </p>
        </div>

        {/* Strengths 6 Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_STRENGTHS.map((strength, idx) => (
            <div
              key={strength.title}
              className="p-6 rounded-2xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center shrink-0 mt-0.5">
                {getStrengthIcon(idx)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {strength.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
