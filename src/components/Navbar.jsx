import React, { useState, useEffect } from 'react';
import { Languages, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ lang, setLang, isDark, setIsDark, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#works", labelZh: "精選作品 Works", labelEn: "Featured Works", id: "works" },
    { href: "#skills", labelZh: "專業歷程 Skills", labelEn: "Skills & Career", id: "skills" },
    { href: "#about", labelZh: "關於我 About", labelEn: "About Artist", id: "about" },
    { href: "#contact", labelZh: "聯絡方式 Contact", labelEn: "Contact", id: "contact" },
  ];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm border-b border-outline-variant/40 dark:border-neutral-800' 
        : 'bg-surface/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-outline-variant/20 dark:border-neutral-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Brand Logo & Seal Stamp */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 bg-primary text-on-primary flex items-center justify-center rounded seal-stamp transition-transform duration-300 group-hover:scale-95 shadow-sm">
            <span className="font-serif text-sm font-bold tracking-tighter">墨印</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider text-on-surface dark:text-neutral-100 font-medium leading-tight">
              墨韻 / InkVision
            </span>
            <span className="font-sans text-[0.625rem] tracking-[0.2em] text-tertiary dark:text-neutral-400 uppercase font-semibold">
              2D Visual Concept Art
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 font-sans text-xs uppercase tracking-widest">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-primary dark:text-primary-fixed-dim font-medium'
                    : 'text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-neutral-100'
                }`}
              >
                {lang === 'zh' ? item.labelZh : item.labelEn}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary dark:bg-primary-fixed-dim rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Trailing Primary Action & Icon Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="切換語系 Language switch"
            title={lang === 'zh' ? "Switch to English" : "切換至繁體中文"}
            className="p-2 text-on-surface-variant dark:text-neutral-300 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors rounded hover:bg-surface-container-low dark:hover:bg-neutral-800 flex items-center gap-1 text-xs"
          >
            <Languages className="w-4 h-4" />
            <span className="font-mono text-[11px] font-semibold">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>

          {/* Theme Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="切換外觀模式 Theme switch"
            title={isDark ? "切換至明亮宣紙模式" : "切換至夜墨深色模式"}
            className="p-2 text-on-surface-variant dark:text-neutral-300 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors rounded hover:bg-surface-container-low dark:hover:bg-neutral-800 flex items-center"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-primary text-on-primary font-sans text-xs rounded border border-primary hover:bg-primary-container transition-all duration-300 ease-out active:scale-95 shadow-sm font-medium tracking-wider"
          >
            <span>{lang === 'zh' ? '合作邀約' : 'Inquiries'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="選單開關"
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-outline-variant/40 dark:border-neutral-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 font-sans text-sm tracking-wider">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-on-surface dark:text-neutral-200 hover:text-primary dark:hover:text-primary-fixed-dim border-b border-outline-variant/20 dark:border-neutral-800 flex items-center justify-between"
              >
                <span>{lang === 'zh' ? item.labelZh : item.labelEn}</span>
                <span className="text-xs text-tertiary">#</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 bg-primary text-on-primary rounded font-medium text-xs tracking-wider"
            >
              {lang === 'zh' ? '合作邀約 Inquiries' : 'Contact Me'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
