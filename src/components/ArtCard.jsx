import React from 'react';
import { motion } from 'framer-motion';

export const ArtCard = ({ artwork, lang, onClick }) => {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="art-card group bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/50 dark:border-neutral-800 rounded overflow-hidden transition-all duration-300 hover:border-outline dark:hover:border-neutral-600 cursor-pointer shadow-sm hover:shadow-md"
      onClick={onClick}
    >
      {/* Artwork Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container dark:bg-neutral-800">
        <img
          src={artwork.image}
          alt={artwork.titleZh}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Hover Gradient & Text Reveal */}
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="font-sans text-[0.6875rem] text-primary-fixed-dim uppercase tracking-wider mb-1 font-semibold">
            {lang === 'zh' ? artwork.categoryNameZh : artwork.categoryNameEn}
          </span>
          <h3 className="font-serif text-lg text-white font-medium">
            {lang === 'zh' ? artwork.titleZh : artwork.titleEn}
          </h3>
          <p className="font-sans text-xs text-white/80 line-clamp-2 mt-1.5 leading-relaxed">
            {lang === 'zh' ? artwork.shortDescZh : artwork.shortDescEn}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-white/90">
            <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded">點擊細賞 · Full View</span>
          </div>
        </div>
      </div>

      {/* Card Footer Info */}
      <div className="p-5 flex items-center justify-between border-t border-outline-variant/30 dark:border-neutral-800 bg-surface-container-lowest dark:bg-neutral-900">
        <div>
          <div className="font-serif text-base text-on-surface dark:text-neutral-200 font-medium group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">
            {lang === 'zh' ? artwork.titleZh : artwork.titleEn}
          </div>
          <div className="font-sans text-xs text-tertiary dark:text-neutral-400 mt-0.5">
            {artwork.year} · {lang === 'zh' ? artwork.typeZh : artwork.typeEn}
          </div>
        </div>

        {/* Software Badges */}
        <div className="flex items-center gap-1.5">
          {artwork.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-surface-container dark:bg-neutral-800 text-on-surface-variant dark:text-neutral-300 font-mono text-[0.625rem] rounded border border-outline-variant/20 dark:border-neutral-700 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
