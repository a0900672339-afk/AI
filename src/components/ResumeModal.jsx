import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `========================================================
墨韻 / InkVision — 2D 數位藝術與概念原畫師 履歷簡介
========================================================

聯絡信箱: contact@inkvision.art
所在地區: 台北 / 遠距全球協同創作 (Remote Global)
專業定位: 2D Concept Artist & Senior Visual Illustrator

【專業核心技術】
- 繪圖軟體: Photoshop (95%), Clip Studio Paint (92%), Procreate (88%), Blender (78%)
- 核心領域: 2D 角色立繪設定、世界觀氛圍場景原畫、線條墨色光影、動態分鏡

【經歷重要節點】
- 2024: 出版個人概念畫集《雲山墨記》(獨立發行，首刷兩週售罄)
- 2022-2023: 東方幻想手遊《天境訣》主力角色原畫師 (SSR 角色立繪與三視圖規範)
- 2021: 亞洲數位插畫大賽 (Asia Digital Art Award) 金賞
- 2019: 國立藝術大學美術學系畢業 ‧ 水墨與膠彩主修 (畢業展首獎)

【作品集線上檢視】
https://inkvision.art
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'InkVision_2D_Concept_Artist_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-2xl w-full bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/50 dark:border-neutral-800 rounded p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉"
            className="absolute top-4 right-4 p-2 text-tertiary hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3.5 mb-6 border-b border-outline-variant/30 dark:border-neutral-800 pb-5">
            <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center rounded seal-stamp shadow-sm">
              <span className="font-serif text-sm font-bold">簡歷</span>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-on-surface dark:text-neutral-100 font-semibold">
                {lang === 'zh' ? '個人專業簡歷 ‧ Resume' : 'Artist Curriculum Vitae'}
              </h3>
              <p className="font-sans text-xs text-tertiary dark:text-neutral-400">
                2D Concept Artist &amp; Illustrator · 8+ Years Industry Experience
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-6 font-sans text-sm text-on-surface-variant dark:text-neutral-300">
            {/* Overview */}
            <div className="p-4 bg-surface-container-low dark:bg-neutral-800/60 rounded border border-outline-variant/30 dark:border-neutral-700">
              <div className="font-serif font-semibold text-on-surface dark:text-neutral-100 text-sm mb-1.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>{lang === 'zh' ? '專業定位與核心理念' : 'Executive Summary'}</span>
              </div>
              <p className="leading-relaxed font-light text-xs md:text-sm">
                {lang === 'zh' 
                  ? '融會傳統東方水墨意境留白與現代數位概念原畫技術。具備 8 年商業專案資歷，熟稔角色立繪、世界觀氛圍場景、模型拆件與宣傳插畫。' 
                  : 'Specializing in marrying classical Eastern ink aesthetics with next-gen digital concept art workflows. Experienced in leading character visual development, production-ready turnarounds, and commercial key art.'}
              </p>
            </div>

            {/* Experience highlights */}
            <div>
              <div className="font-serif font-semibold text-on-surface dark:text-neutral-100 text-sm mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span>{lang === 'zh' ? '重點專案與角色' : 'Key Engagements'}</span>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface dark:text-neutral-100">2022 - 2023</strong>：《天境訣》手遊主力角色原畫師（主導 SSR 角色原案、三視圖規範與貼圖監修）
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface dark:text-neutral-100">2024</strong>：出版個人概念畫集《雲山墨記》（全彩 160 頁，收錄 120+ 幅作品，巡迴展出）
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface dark:text-neutral-100">2020 - 2021</strong>：商業概念插畫委託，涵蓋奇幻小說封面、TCG 卡牌立繪與動漫前期場景
                  </div>
                </li>
              </ul>
            </div>

            {/* Honors & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 bg-surface-container-low dark:bg-neutral-800/60 rounded border border-outline-variant/30 dark:border-neutral-700">
                <div className="font-serif font-semibold text-on-surface dark:text-neutral-100 text-xs mb-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  <span>{lang === 'zh' ? '榮譽獎項' : 'Awards'}</span>
                </div>
                <div className="text-xs leading-relaxed">
                  亞洲數位插畫大賽 (ADAA) 金賞<br />
                  全國大專水墨膠彩新秀評審首獎
                </div>
              </div>

              <div className="p-3.5 bg-surface-container-low dark:bg-neutral-800/60 rounded border border-outline-variant/30 dark:border-neutral-700">
                <div className="font-serif font-semibold text-on-surface dark:text-neutral-100 text-xs mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                  <span>{lang === 'zh' ? '學歷背景' : 'Education'}</span>
                </div>
                <div className="text-xs leading-relaxed">
                  國立藝術大學 美術學系學士 (B.F.A.)<br />
                  主修傳統水墨構圖、膠彩設色與素描解剖
                </div>
              </div>
            </div>
          </div>

          {/* Action footer */}
          <div className="mt-8 pt-5 border-t border-outline-variant/30 dark:border-neutral-800 flex items-center justify-between">
            <span className="font-sans text-xs text-tertiary dark:text-neutral-400">
              格式：文字版簡歷 (UTF-8 Plaintext)
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-surface-container dark:bg-neutral-800 hover:bg-surface-container-high text-on-surface dark:text-neutral-200 font-sans text-xs rounded transition-colors"
              >
                {lang === 'zh' ? '返回' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-2 bg-primary text-on-primary font-sans text-xs rounded hover:bg-primary-container transition-colors flex items-center gap-2 font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '下載簡歷檔案' : 'Download CV File'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
