import React from 'react';
import { Target, Layout, Cpu, CheckSquare, Smartphone, Rocket } from 'lucide-react';
import { DEVELOPMENT_APPROACH_STEPS } from '../data/portfolioData';

export const HowIBuild: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 3:
        return <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 4:
        return <Smartphone className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 5:
      default:
        return <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="approach" className="scroll-mt-20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <span>Development Methodology</span>
            <span aria-hidden="true">·</span>
            <span>How I Build</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            A disciplined workflow pairing fundamentals with AI acceleration.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            I use modern AI tools to accelerate development velocity, while applying personal technical judgment, rigorous testing, and responsive refinement to guarantee output quality.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVELOPMENT_APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-7 rounded-2xl bg-white dark:bg-[#0B1424] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
