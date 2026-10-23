import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Image, FileText, Code2, Calculator, QrCode, FileCode, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toolHubProject = PROJECTS.find((p) => p.id === 'toolhub')!;
  const earlierPortfolioProject = PROJECTS.find((p) => p.id === 'personal-portfolio-v1')!;

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>Featured Work</span>
              <span aria-hidden="true">·</span>
              <span>Real Deployed Projects</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
              Practical web applications built for real use.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
            Every project demonstrates active frontend problem-solving, clean responsive interface design, and deployed code.
          </p>
        </div>

        {/* PROJECT 1: TOOLHUB (PROMINENT FEATURED SHOWCASE) */}
        <div className="mt-12 bg-white dark:bg-[#0B1424] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Unboxed metadata with separator */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Featured Web Application</span>
                  <span aria-hidden="true">·</span>
                  <span>{toolHubProject.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>Vercel Deployed</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {toolHubProject.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {toolHubProject.tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {toolHubProject.description}
                </p>

                {/* Real Tools Highlight Grid */}
                <div className="pt-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Includes 15+ Everyday Client-Side Utilities:</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Image Compressor',
                      'JPG to PDF',
                      'Image Resizer',
                      'QR Code Generator',
                      'JSON Formatter',
                      'PDF Merger',
                    ].map((tool) => (
                      <div
                        key={tool}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 truncate"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Plus Base64 Encoder, URL Encoder, Case Converter, Percentage Calculator, and more.
                  </p>
                </div>

                {/* Tech Stack - Unboxed text with separators */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Tech:</span>
                    <span>HTML5</span>
                    <span aria-hidden="true">·</span>
                    <span>CSS3 &amp; Responsive Layout</span>
                    <span aria-hidden="true">·</span>
                    <span>JavaScript (ES6+)</span>
                    <span aria-hidden="true">·</span>
                    <span>Browser APIs</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={toolHubProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedProject(toolHubProject)}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer"
                >
                  Explore Project
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Frame */}
            <div className="lg:col-span-6 bg-slate-100/70 dark:bg-[#070D18] p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-slate-800">
              <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#0F1A2E] border border-slate-300/80 dark:border-slate-700 shadow-xl overflow-hidden">
                {/* Browser window chrome */}
                <div className="px-4 py-3 bg-slate-50 dark:bg-[#0A1220] border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md px-3 py-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                    https://my-toolhub-site.vercel.app/
                  </div>
                </div>

                {/* Mockup content representing ToolHub UI */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        TH
                      </div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">ToolHub</span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">All-In-One Web Utilities</span>
                  </div>

                  {/* Mock tool cards grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Image className="w-4 h-4" />
                        <span className="text-xs font-bold">Image Suite</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Compressor, Resizer, JPG/PNG Converters
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                        <FileText className="w-4 h-4" />
                        <span className="text-xs font-bold">PDF Suite</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        PDF Merger, Compress, JPG to PDF
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <FileCode className="w-4 h-4" />
                        <span className="text-xs font-bold">Code Formats</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        JSON Formatter, Base64 &amp; URL Encoder
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <QrCode className="w-4 h-4" />
                        <span className="text-xs font-bold">QR &amp; Math</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        QR Generator, Word Counter, Percentage
                      </p>
                    </div>
                  </div>

                  {/* Browser simulated footer status */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    <span>Client-side Processing</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">100% Client-Side Privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 2: PERSONAL PORTFOLIO (PREVIOUS VERSION) */}
        <div className="mt-8 bg-white dark:bg-[#0B1424] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-sm transition-shadow p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Previous Version</span>
                <span aria-hidden="true">·</span>
                <span>GitHub Pages Deployed</span>
                <span aria-hidden="true">·</span>
                <span>Milestone Project</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {earlierPortfolioProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {earlierPortfolioProject.description}
              </p>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Tech:</span>
                <span>HTML5</span>
                <span aria-hidden="true">·</span>
                <span>Custom CSS</span>
                <span aria-hidden="true">·</span>
                <span>Vanilla JavaScript</span>
                <span aria-hidden="true">·</span>
                <span>GitHub Pages</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={earlierPortfolioProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(earlierPortfolioProject)}
                  className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Explore Website
                </button>
              </div>
            </div>

            {/* Right compact mockup preview */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070D18] p-4 shadow-xs">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 truncate">
                    theprinceabdullah0311-boop.github.io/abdullah-portfolio/
                  </span>
                </div>
                <div className="pt-4 pb-2 space-y-2">
                  <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-8 w-3/4 bg-blue-100 dark:bg-blue-950/40 rounded" />
                  <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
