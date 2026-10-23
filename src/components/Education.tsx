import React from 'react';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { EDUCATION_DATA, TRAINING_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-20 py-24 bg-slate-50/60 dark:bg-[#091120]/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>Academic &amp; Training Background</span>
            <span aria-hidden="true">·</span>
            <span>Qualifications</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Current degree and professional training.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Solid theoretical computing foundations reinforced with targeted practical web engineering coursework.
          </p>
        </div>

        {/* Education & Training Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Degree Card: BS Computer Science */}
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {edu.status}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-3">
                    Academic Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="truncate">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Undergraduate Studies</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Active Student</span>
              </div>
            </div>
          ))}

          {/* Professional Training Card: NAVTTC Web Development */}
          {TRAINING_DATA.map((training, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {training.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {training.provider} · {training.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {training.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-3">
                    Core Coursework Topics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {training.keyTopics.map((topic) => (
                      <div
                        key={topic}
                        className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Formal Technical Training</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
