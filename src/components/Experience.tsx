import React from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>Career History</span>
            <span aria-hidden="true">·</span>
            <span>Professional Experience</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Hands-on work in a professional software house.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Real team collaboration, website customization, client asset management, and deadline discipline.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="mt-12 space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1424] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{exp.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-lg border border-blue-200/60 dark:border-blue-900/40 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-4 h-4" />
                  <span>Duration: {exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="pt-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-4">
                  Core Responsibilities &amp; Technical Exposure
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
