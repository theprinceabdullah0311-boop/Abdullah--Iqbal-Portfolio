import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0B1424] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#09101C]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 id="cv-modal-title" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Curriculum Vitae Overview
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Candidate Snapshot */}
          <div className="flex items-start justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Abdullah Iqbal
              </h4>
              <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                Computer Science Student | Web Developer &amp; IT Operations Specialist
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Khanewal, Pakistan · {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
              </p>
            </div>
          </div>

          {/* Current Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Academic Degree</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">BS Computer Science</span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Degree In Progress</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Undergraduate degree focused on computing foundations, programming, algorithms, and software design.
              </p>
            </div>
          </div>

          {/* Practical Experience */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional Experience</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Web Development Intern</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Software House · 5 Months</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>• WordPress &amp; Divi website development and custom styling (HTML/CSS/JS)</li>
                <li>• Content updates, UI improvements, responsive adjustments &amp; troubleshooting</li>
                <li>• Local environment management, asset handling, and deadline-driven team workflows</li>
              </ul>
            </div>
          </div>

          {/* Training */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional Training</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Web Development Course</span>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">NAVTTC · 3 Months</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Practical training in web development fundamentals, website structure, and frontend technologies.
              </p>
            </div>
          </div>

          {/* Verified Projects */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Verified Web Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="https://my-toolhub-site.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">ToolHub</span>
                  <p className="text-[11px] text-slate-500">15+ Online Browser Utilities</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </a>

              <a
                href="https://theprinceabdullah0311-boop.github.io/abdullah-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Earlier Portfolio</span>
                  <p className="text-[11px] text-slate-500">GitHub Pages Milestone</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Document Status Note */}
          <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-blue-700 dark:text-blue-300">Note:</span> The attached download is the original PDF CV uploaded. As instructed, this portfolio website reflects Abdullah's verified active degree: <strong className="text-slate-900 dark:text-white">BS Computer Science (In Progress)</strong>.
          </div>
        </div>

        {/* Footer with download link */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#09101C] border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>

          <a
            href={PERSONAL_INFO.cvPdfPath}
            download="Abdullah_Iqbal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs inline-flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Attached CV (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
