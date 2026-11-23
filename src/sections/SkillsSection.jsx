import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Image as ImageIcon, Sun, Film } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection = ({ lang }) => {
  const { artist, domains, softwareProficiencies, milestones } = portfolioData;

  const getDomainIcon = (index) => {
    switch (index) {
      case 0:
        return <Paintbrush className="w-5 h-5 text-primary" />;
      case 1:
        return <ImageIcon className="w-5 h-5 text-secondary" />;
      case 2:
        return <Sun className="w-5 h-5 text-primary" />;
      case 3:
      default:
        return <Film className="w-5 h-5 text-secondary" />;
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-outline-variant/30 dark:border-neutral-800" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Personal Philosophy & Domains (Columns 1-5) */}
        <div className="lg:col-span-5" id="about">
          <div className="flex items-center gap-2 text-primary dark:text-primary-fixed-dim font-sans text-xs uppercase tracking-widest mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed-dim"></span>
            Artist Profile &amp; Philosophy
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface dark:text-neutral-100 mb-6 leading-tight">
            {lang === 'zh' ? (
              <>
                筆墨氣韻，<br />構於數位方寸之間
              </>
            ) : (
              <>
                Spiritual Resonance,<br />Crafted in Digital Bounds
              </>
            )}
          </h2>

          {/* Artist Statement */}
          <div className="text-on-surface-variant dark:text-neutral-300 font-sans text-sm md:text-base leading-relaxed space-y-4 mb-8 font-light">
            {(lang === 'zh' ? artist.bioZh : artist.bioEn).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 4 Core Domains Bento Cards */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {domains.map((domain, idx) => (
              <div 
                key={idx}
                className="p-4 bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/40 dark:border-neutral-800 rounded hover:border-outline-variant transition-colors"
              >
                <div className="mb-2">
                  {getDomainIcon(idx)}
                </div>
                <div className="font-serif text-sm font-semibold text-on-surface dark:text-neutral-100">
                  {lang === 'zh' ? domain.titleZh : domain.titleEn}
                </div>
                <div className="font-sans text-[0.6875rem] text-tertiary dark:text-neutral-400 mt-1 leading-snug">
                  {lang === 'zh' ? domain.subtitleZh : domain.subtitleEn}
                </div>
              </div>
            ))}
          </div>

          {/* Software Proficiency Progress Stack */}
          <div className="bg-surface-container-lowest dark:bg-neutral-900 p-6 border border-outline-variant/40 dark:border-neutral-800 rounded shadow-sm">
            <h3 className="font-serif text-sm font-semibold text-on-surface dark:text-neutral-100 tracking-wider uppercase mb-5 flex items-center justify-between">
              <span>{lang === 'zh' ? '數位工具熟練度 / Tools' : 'Software Mastery'}</span>
              <span className="font-sans text-[0.6875rem] text-tertiary dark:text-neutral-400 font-normal">Industry Standard</span>
            </h3>
            <div className="space-y-4">
              {softwareProficiencies.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-sans text-xs text-on-surface dark:text-neutral-200 mb-1.5 font-medium">
                    <span>{item.name}</span>
                    <span className="text-primary dark:text-primary-fixed-dim font-semibold">{item.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Milestone Timeline (Columns 6-12) */}
        <div className="lg:col-span-7 lg:pl-6">
          <div className="flex items-center gap-2 text-primary dark:text-primary-fixed-dim font-sans text-xs uppercase tracking-widest mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed-dim"></span>
            Career Milestones &amp; Chronology
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface dark:text-neutral-100 mb-10">
            {lang === 'zh' ? '創作履歷與重要節點' : 'Creative Journey & Milestones'}
          </h2>

          {/* Vertical Timeline with Cinnabar Diamond Nodes */}
          <div className="relative pl-8 space-y-8 md:space-y-10 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/60 dark:before:bg-neutral-800">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Diamond Node */}
                <span className={`absolute -left-[27px] top-1.5 w-3 h-3 ${item.color} text-on-primary rotate-45 flex items-center justify-center ring-4 ring-surface dark:ring-neutral-950 transition-transform group-hover:scale-125 duration-200`}></span>
                
                <div className="bg-surface-container-lowest dark:bg-neutral-900 p-6 border border-outline-variant/40 dark:border-neutral-800 rounded transition-all duration-300 hover:border-outline dark:hover:border-neutral-600 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif italic text-primary dark:text-primary-fixed-dim text-sm font-semibold tracking-wider">
                      {item.year}
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container dark:bg-neutral-800 text-tertiary dark:text-neutral-300 font-sans text-xs rounded border border-outline-variant/20 dark:border-neutral-700">
                      {lang === 'zh' ? item.tagZh : item.tagEn}
                    </span>
                  </div>
                  <h4 className="font-serif text-base md:text-lg text-on-surface dark:text-neutral-100 font-semibold">
                    {lang === 'zh' ? item.titleZh : item.titleEn}
                  </h4>
                  <p className="font-sans text-sm text-on-surface-variant dark:text-neutral-300 mt-2 leading-relaxed font-light">
                    {lang === 'zh' ? item.descZh : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
