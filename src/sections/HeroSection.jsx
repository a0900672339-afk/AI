import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroSection = ({ lang, onOpenResume, onPreviewArtwork }) => {
  const { artist, heroArtwork, metrics } = portfolioData;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center border-b border-outline-variant/30 dark:border-neutral-800 overflow-hidden py-16 md:py-24">
      {/* Ambient ink wash backdrop glows */}
      <div className="absolute -right-32 top-10 w-96 h-96 bg-surface-container dark:bg-neutral-800/40 rounded-full blur-3xl pointer-events-none opacity-60"></div>
      <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Area (Columns 1-7) */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Editorial Rubric Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high dark:bg-neutral-800 border border-outline-variant/50 dark:border-neutral-700 text-on-surface-variant dark:text-neutral-300 font-sans text-xs tracking-wider uppercase rounded">
              {artist.rubricTagZh}
            </span>
            <span className="w-8 h-[1px] bg-outline-variant dark:bg-neutral-700"></span>
            <span className="font-serif text-xs md:text-sm text-secondary dark:text-secondary-fixed-dim tracking-widest">
              {artist.galleryBadgeZh}
            </span>
          </div>

          {/* Main Poetic Headline with Vertical Accent */}
          <div className="flex items-start gap-4 md:gap-6">
            {/* Vertical Poetic Accent Line */}
            <div className="hidden sm:block writing-vertical font-serif text-tertiary dark:text-neutral-400 text-xs md:text-sm tracking-[0.35em] border-l border-outline-variant/60 dark:border-neutral-700 pl-3 pt-2 text-right select-none">
              {lang === 'zh' ? artist.verticalPoemZh : artist.verticalPoemEn}
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-on-surface dark:text-neutral-100 tracking-wide mb-6 leading-tight">
                {lang === 'zh' ? (
                  <>
                    以筆墨與數位，<br className="hidden sm:inline" />勾勒 <span className="text-primary dark:text-primary-fixed-dim italic font-medium">2D 視界</span>
                  </>
                ) : (
                  <>
                    Delineating the <span className="text-primary dark:text-primary-fixed-dim italic font-medium">2D Horizon</span> with Digital Ink
                  </>
                )}
              </h1>

              <p className="font-sans text-base sm:text-lg text-on-surface-variant dark:text-neutral-300 max-w-xl leading-relaxed mb-8 md:mb-10 font-light">
                {lang === 'zh' ? artist.subheadingZh : artist.subheadingEn}
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10 md:mb-12">
                <a
                  href="#works"
                  className="px-7 py-3.5 bg-inverse-surface dark:bg-neutral-100 text-on-primary dark:text-neutral-900 font-sans text-xs md:text-sm font-medium rounded border border-inverse-surface dark:border-neutral-100 hover:border-primary dark:hover:border-primary-fixed-dim hover:text-primary dark:hover:text-primary transition-all duration-300 shadow-sm flex items-center gap-2 group tracking-wider"
                >
                  <span>{lang === 'zh' ? '查看精選作品' : 'Explore Featured Works'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="px-7 py-3.5 bg-surface-container-lowest dark:bg-neutral-900 text-on-surface dark:text-neutral-200 font-sans text-xs md:text-sm font-medium rounded border border-outline-variant/70 dark:border-neutral-700 hover:border-secondary hover:text-secondary dark:hover:border-secondary-fixed-dim dark:hover:text-secondary-fixed-dim transition-all duration-300 flex items-center gap-2 tracking-wider"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'zh' ? '下載簡歷 Resume' : 'Download CV'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics Ribbon */}
          <div className="pt-8 border-t border-outline-variant/40 dark:border-neutral-800 grid grid-cols-3 gap-4 md:gap-6 max-w-lg">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className={`font-serif text-2xl md:text-3xl font-bold ${metric.color} dark:text-neutral-100`}>
                  {metric.value}
                  {metric.unitZh && <span className="text-xs md:text-sm font-normal ml-0.5">{lang === 'zh' ? metric.unitZh : metric.unitEn}</span>}
                </div>
                <div className="font-sans text-[0.6875rem] text-tertiary dark:text-neutral-400 uppercase tracking-wider mt-0.5">
                  {lang === 'zh' ? metric.labelZh : metric.labelEn}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual Centerpiece (Columns 8-12) */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          {/* Aesthetic Border Canvas Mount */}
          <div className="relative p-3 bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/60 dark:border-neutral-700 rounded shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-none">
            <div 
              className="relative overflow-hidden aspect-[4/5] bg-surface-container dark:bg-neutral-800 group cursor-pointer"
              onClick={() => onPreviewArtwork({
                titleZh: heroArtwork.titleZh,
                titleEn: heroArtwork.titleEn,
                categoryNameZh: "概念氛圍 / Concept Lore",
                year: "2024",
                toolsFull: "Photoshop, Blender",
                resolution: "7680 × 5400 px (300 DPI)",
                fullDescZh: "《雲境孤客》世界觀首張概念原畫。以東方道家修仙之孤絕為意象，雲海翻騰間隱現遠山孤亭。畫作融合松煙水墨質地與現代三維空間構圖，呈現超凡脫俗的意境留白。",
                image: heroArtwork.image
              })}
            >
              <img 
                src={heroArtwork.image} 
                alt="2D digital concept painting of a graceful warrior standing atop a misty mountain pavilion" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Ink Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Artwork Seal Stamp Inset Badge */}
              <div className="absolute top-4 right-4 bg-primary/95 text-on-primary px-2.5 py-3 rounded seal-stamp flex flex-col items-center shadow-md">
                <span className="font-serif text-xs font-semibold leading-tight writing-vertical tracking-widest">
                  {heroArtwork.sealBadge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2"></span>
              </div>

              {/* Hover Quick Zoom Pill */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded text-xs flex items-center gap-1.5 font-sans">
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '點擊細賞' : 'Preview'}</span>
              </div>

              {/* Artwork Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-sans text-[0.6875rem] text-primary-fixed tracking-widest uppercase mb-1">
                  {heroArtwork.series}
                </div>
                <div className="font-serif text-base font-medium">
                  {lang === 'zh' ? heroArtwork.titleZh : heroArtwork.titleEn}
                </div>
              </div>
            </div>

            {/* Framing hairline annotations */}
            <div className="mt-3 flex items-center justify-between text-tertiary dark:text-neutral-400 px-1 font-mono text-[0.625rem] tracking-wider">
              <span>{heroArtwork.figNumber}</span>
              <span>{heroArtwork.note}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
