import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ lang, onOpenResume }) => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low dark:bg-neutral-950 border-t border-outline-variant/30 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Philosophy in Footer */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-lg tracking-wider text-on-surface dark:text-neutral-100 font-medium">
            墨韻 / InkVision
          </span>
          <p className="font-sans text-xs text-tertiary dark:text-neutral-400 mt-1 text-center md:text-left font-light">
            © 2025 墨韻 InkVision. All Rights Reserved. 雅致留白・以筆墨與數位勾勒視界.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs">
          <a
            href="#works"
            className="text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors duration-200"
          >
            {lang === 'zh' ? '全部作品 All Works' : 'All Works'}
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors duration-200"
          >
            {lang === 'zh' ? '簡歷備份 Resume' : 'View Resume'}
          </button>
          <a
            href="#contact"
            className="text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors duration-200"
          >
            {lang === 'zh' ? '合作條款 Terms' : 'Terms & Conditions'}
          </a>
          <a
            href="#contact"
            className="text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors duration-200"
          >
            {lang === 'zh' ? '隱私宣告 Privacy' : 'Privacy Policy'}
          </a>
        </div>

        {/* Return to top subtle trigger */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 bg-surface-container dark:bg-neutral-800 border border-outline-variant/40 dark:border-neutral-700 rounded text-on-surface dark:text-neutral-200 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors flex items-center gap-1 font-sans text-xs shadow-sm"
            title="返回頂部"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{lang === 'zh' ? '頁首' : 'Top'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
