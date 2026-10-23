import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Code2, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle radial backdrop for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-transparent blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Professional intro label - clean unboxed text with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
              <span>Computer Science Student</span>
              <span aria-hidden="true">·</span>
              <span>Web Development</span>
              <span aria-hidden="true">·</span>
              <span>IT Operations &amp; Support</span>
            </div>

            {/* Heading & Display Headline */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">Abdullah Iqbal</span>.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance]">
                Solving Problems with <span className="text-blue-600 dark:text-blue-400">Code, IT &amp; AI</span>.
              </h1>
            </div>

            {/* Concise, high-quality narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I am an ambitious Computer Science student and technology enthusiast with versatile capabilities spanning web development, computer operations, office technology, and practical problem-solving. Equipped with both frontend project experience and strong IT competencies, I am adaptable across diverse technical roles.
            </p>

            {/* CTAs and Verified Social Proof Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-4 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Quick CV Summary</span>
              </button>
            </div>

            {/* Verified social profile links */}
            <div className="pt-4 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub profile of Abdullah Iqbal"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium text-xs">GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn profile of Abdullah Iqbal"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-medium text-xs">LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                📍 {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: High-Craft Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle electric rim-light effect container */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-slate-800/40 to-blue-400/20 blur-xl opacity-60 dark:opacity-80 -z-10"
              />

              <div className="relative rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800/80 shadow-2xl">
                {/* Subtle top subtle rim line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10" />

                {/* Portrait Image */}
                <div className="relative aspect-[720/1107] w-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Abdullah Iqbal — Web Developer &amp; CS Student"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] select-none"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft bottom vignette for seamless depth */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent"
                  />
                </div>

                {/* Subdued footer strip inside card */}
                <div className="p-4 sm:p-5 bg-[#0A0F1D] border-t border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        Abdullah Iqbal
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        BS Computer Science (In Progress)
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-blue-300">
                      Khanewal, PK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Facts Strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Academic Status
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              BS Computer Science
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Degree In Progress
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Practical Experience
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              5-Month Internship
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Software House Exposure
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Core IT &amp; Office Tools
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              MS Office &amp; Operations
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Data Entry, Spreadsheets &amp; Support
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Featured Web Project
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              ToolHub &amp; Web Apps
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              15+ Online Client Utilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
