import React from 'react';
import { Code, Monitor, Globe, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 4:
      default:
        return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Practical Experience':
        return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/80';
      case 'Working Knowledge':
        return 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
      case 'Beginner / Fundamentals':
      default:
        return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/80';
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 py-24 bg-slate-50/60 dark:bg-[#091120]/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>Versatile Technical Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Skills &amp; Competencies</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Comprehensive technical skills across Web, IT &amp; Computer Operations.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Applicable across software development, IT support, computer operations, data entry, and digital office management.
          </p>
        </div>

        {/* Prominent Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const isFullWidth = index === 1; // Core IT operations highlighted across full width or featured prominently
            return (
              <div
                key={category.title}
                className={`p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 ring-1 ring-emerald-500/20 dark:ring-emerald-400/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center shrink-0">
                        {getCategoryIcon(index)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {isFullWidth && (
                      <span className="hidden sm:inline-flex text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                        High Job Market Versatility
                      </span>
                    )}
                  </div>

                  {/* Skills List */}
                  <div className={`mt-6 ${isFullWidth ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-3'}`}>
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          {skill.note && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {skill.note}
                            </p>
                          )}
                        </div>

                        <span
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border shrink-0 self-start sm:self-center ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
