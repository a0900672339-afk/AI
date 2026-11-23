import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArtCard } from '../components/ArtCard';
import { portfolioData } from '../data/portfolioData';

export const WorksSection = ({ lang, onOpenArtwork }) => {
  const { categories, artworks } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArtworks = activeFilter === 'all'
    ? artworks
    : artworks.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-outline-variant/30 dark:border-neutral-800" id="works">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary dark:text-primary-fixed-dim font-sans text-xs uppercase tracking-widest mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed-dim"></span>
            Portfolio Showcase
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-on-surface dark:text-neutral-100">
            {lang === 'zh' ? '精選作品' : 'Selected Works'} <span className="text-tertiary dark:text-neutral-400 font-normal text-2xl">/ Featured Gallery</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant dark:text-neutral-300 mt-2 max-w-xl font-light">
            {lang === 'zh' 
              ? '收錄近年原創系列與商業委託之角色立繪、場景原畫與世界觀構圖，展現細緻線條與氛圍光影。' 
              : 'A curated anthology of original creations and commercial works spanning character turnarounds, environment matte paintings, and worldbuilding concepts.'
            }
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/40 dark:border-neutral-800 rounded">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 font-sans text-xs rounded transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? 'bg-surface-container-lowest dark:bg-neutral-800 text-primary dark:text-primary-fixed-dim shadow-sm border border-outline-variant/30 dark:border-neutral-700 font-semibold'
                    : 'text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-neutral-200'
                }`}
              >
                <span>{lang === 'zh' ? cat.labelZh : cat.labelEn}</span>
                <sup className="text-[10px] text-tertiary dark:text-neutral-400 ml-0.5">{cat.count}</sup>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredArtworks.map((artwork) => (
            <ArtCard
              key={artwork.id}
              artwork={artwork}
              lang={lang}
              onClick={() => onOpenArtwork(artwork)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
