import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { WorksSection } from './sections/WorksSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [lang, setLang] = useState('zh');
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('works');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync dark class to root document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['works', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="paper-texture min-h-screen text-on-surface dark:text-neutral-100 transition-colors duration-300">
      {/* Fixed Frosted Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main className="pt-20">
        <HeroSection
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onPreviewArtwork={(art) => setSelectedArtwork(art)}
        />
        <WorksSection
          lang={lang}
          onOpenArtwork={(art) => setSelectedArtwork(art)}
        />
        <SkillsSection
          lang={lang}
        />
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Global Footer */}
      <Footer
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <LightboxModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          lang={lang}
        />
      )}

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
