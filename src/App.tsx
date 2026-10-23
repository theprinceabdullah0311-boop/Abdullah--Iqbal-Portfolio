/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { HowIBuild } from './components/HowIBuild';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  // Always default to Navy Blue Dark Mode on every fresh visit
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070D18] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-150 overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <HowIBuild />
        <Strengths />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
