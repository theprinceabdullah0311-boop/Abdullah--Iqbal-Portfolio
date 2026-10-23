import React from 'react';
import { BookOpen, Laptop, MonitorCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 bg-slate-50/60 dark:bg-[#091120]/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>About Me</span>
            <span aria-hidden="true">·</span>
            <span>Background &amp; Versatility</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Bridging computer science, IT operations, and modern web building.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am a technology enthusiast and student currently pursuing my undergraduate degree in <strong className="font-semibold text-slate-900 dark:text-white">BS Computer Science (In Progress)</strong>. My approach is grounded in being practical and versatile — understanding computing fundamentals, solving real problems, and delivering tangible results.
            </p>
            <p>
              Along with web engineering, I bring extensive hands-on expertise in <strong className="font-semibold text-slate-900 dark:text-white">Core Computer &amp; IT Operations</strong>. This includes deep proficiency with Microsoft Office (Word, Excel spreadsheets, PowerPoint), structured data entry, digital documentation, Google Workspace, software installation, file management, and everyday computer and network troubleshooting.
            </p>
            <p>
              During my 5-month internship at a professional software house, I worked with WordPress, Divi, HTML, CSS, and basic JavaScript. I handled site customizations, responsive UI improvements, content updates, and troubleshooting in a deadline-driven team environment.
            </p>
            <p>
              Complementing my software house experience is 3 months of formal web development training through NAVTTC, alongside modern AI-assisted prototyping workflows that help me build functional tools like <strong className="font-semibold text-slate-900 dark:text-white">ToolHub</strong>. This broad skill foundation makes me adaptable for web development, technical support, computer operations, and general IT roles.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    BS Computer Science
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Degree In Progress · Computing Theory
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                Studying algorithms, data structures, software engineering methodologies, databases, and core computer science.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MonitorCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    IT &amp; Computer Operations
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Office Technology &amp; Technical Support
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                Proficient in MS Word, Excel, PowerPoint, Google Workspace, digital documentation, data entry, and system support.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0C1527] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Web &amp; Software House Exposure
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    5-Month Practical Internship &amp; Projects
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                Hands-on with WordPress, Divi, custom CSS, client updates, local development stacks, and team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
