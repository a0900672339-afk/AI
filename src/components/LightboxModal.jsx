import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export const LightboxModal = ({ artwork, onClose, lang }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artwork) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-w-5xl w-full bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/40 dark:border-neutral-800 rounded overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉"
            className="absolute top-4 right-4 z-20 p-2 bg-surface/80 dark:bg-neutral-800/80 hover:bg-surface dark:hover:bg-neutral-800 rounded-full text-on-surface dark:text-neutral-200 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors shadow"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image Viewer with Pan & Zoom */}
          <div className="lg:w-2/3 bg-neutral-950 flex flex-col items-center justify-center p-4 overflow-hidden relative min-h-[350px] lg:min-h-[550px]">
            {/* Zoom Controls floating bar */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/60 rounded px-2.5 py-1 text-white text-xs">
              <button 
                type="button" 
                onClick={handleZoomIn} 
                className="p-1 hover:text-primary transition-colors"
                title="放大 Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button 
                type="button" 
                onClick={handleZoomOut} 
                className="p-1 hover:text-primary transition-colors"
                title="縮小 Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button 
                type="button" 
                onClick={handleResetZoom} 
                className="p-1 hover:text-primary transition-colors"
                title="重置大小 Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] ml-1 text-neutral-400">
                {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            <div className="overflow-auto max-h-[75vh] w-full flex items-center justify-center p-2">
              <img
                src={artwork.detailImage || artwork.image}
                alt={artwork.titleZh}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[70vh] w-auto object-contain transition-transform duration-200 ease-out select-none"
              />
            </div>
          </div>

          {/* Right: Lightbox Details Drawer */}
          <div className="lg:w-1/3 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-surface-container-lowest dark:bg-neutral-900 border-t lg:border-t-0 lg:border-l border-outline-variant/30 dark:border-neutral-800">
            <div>
              <span className="font-sans text-xs text-primary dark:text-primary-fixed-dim uppercase tracking-widest font-semibold">
                {lang === 'zh' ? (artwork.categoryNameZh || "概念作品") : (artwork.categoryNameEn || "Concept Art")}
              </span>
              <h3 className="font-serif text-2xl text-on-surface dark:text-neutral-100 mt-1 mb-4 font-semibold">
                {lang === 'zh' ? artwork.titleZh : artwork.titleEn}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed mb-6 font-light">
                {lang === 'zh' ? (artwork.fullDescZh || artwork.shortDescZh) : (artwork.fullDescEn || artwork.shortDescEn)}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-3 border-t border-outline-variant/30 dark:border-neutral-800 pt-4">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-tertiary dark:text-neutral-400">{lang === 'zh' ? '完成年份' : 'Completion Year'}</span>
                  <span className="font-medium text-on-surface dark:text-neutral-200">{artwork.year || "2024"}</span>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-tertiary dark:text-neutral-400">{lang === 'zh' ? '使用軟體' : 'Software Tools'}</span>
                  <span className="font-medium text-on-surface dark:text-neutral-200">{artwork.toolsFull || "Photoshop, CSP"}</span>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-tertiary dark:text-neutral-400">{lang === 'zh' ? '畫作分辨率' : 'Resolution'}</span>
                  <span className="font-mono text-on-surface dark:text-neutral-200">{artwork.resolution || "5400 × 7200 px (300 DPI)"}</span>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-tertiary dark:text-neutral-400">{lang === 'zh' ? '色彩配置' : 'Color Space'}</span>
                  <span className="font-mono text-on-surface dark:text-neutral-200">sRGB / 16-bit Depth</span>
                </div>
              </div>
            </div>

            {/* Footer of modal */}
            <div className="mt-8 pt-4 border-t border-outline-variant/30 dark:border-neutral-800 flex items-center justify-between">
              <span className="font-sans text-[0.625rem] text-tertiary dark:text-neutral-400">
                © 墨韻 InkVision 作品著作權所有
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 bg-surface-container dark:bg-neutral-800 hover:bg-surface-container-high dark:hover:bg-neutral-700 text-on-surface dark:text-neutral-200 font-sans text-xs rounded transition-colors"
              >
                {lang === 'zh' ? '關閉檢視' : 'Close Preview'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
