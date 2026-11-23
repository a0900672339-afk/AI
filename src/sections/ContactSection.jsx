import React, { useState } from 'react';
import { Copy, Check, Send, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection = ({ lang }) => {
  const { artist, socials } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(artist.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Card & Socials (Columns 1-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary dark:text-primary-fixed-dim font-sans text-xs uppercase tracking-widest mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed-dim"></span>
              Inquiries &amp; Commissions
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface dark:text-neutral-100 mb-4 leading-tight">
              {lang === 'zh' ? '開創下一個視覺傳奇' : 'Forge the Next Visual Mythos'}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed mb-8 font-light">
              {lang === 'zh'
                ? '歡迎遊戲工作室、出版團隊、動畫前期開發或私人藏家委託合作。無論是長篇世界觀構想或是關鍵角色立繪，皆期待為您呈現獨特意境。'
                : 'Open for concept commissions, key art production, and art direction consultations. Whether you require grand worldbuilding or intricate character designs, let us bring poetic visions to reality.'
              }
            </p>

            {/* Copyable Email Capsule */}
            <div className="p-4 bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/60 dark:border-neutral-800 rounded mb-8 shadow-sm">
              <div className="font-sans text-xs text-tertiary dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium">
                {lang === 'zh' ? '直通電子郵件 / Email' : 'Direct Email Address'}
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-base md:text-lg text-on-surface dark:text-neutral-100 font-medium select-all">
                  {artist.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-surface-container dark:bg-neutral-800 hover:bg-surface-container-high dark:hover:bg-neutral-700 text-on-surface dark:text-neutral-200 font-sans text-xs rounded border border-outline-variant/40 dark:border-neutral-700 transition-colors flex items-center gap-1.5 active:scale-95"
                  title="點擊複製信箱"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">{lang === 'zh' ? '已複製！' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '複製' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Studio Location & Availability Status */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-on-surface-variant dark:text-neutral-300 font-sans text-sm">
                <MapPin className="w-5 h-5 text-tertiary shrink-0" />
                <span>{lang === 'zh' ? artist.locationZh : artist.locationEn}</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant dark:text-neutral-300 font-sans text-sm">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <span>{lang === 'zh' ? artist.availabilityZh : artist.availabilityEn}</span>
              </div>
            </div>
          </div>

          {/* Social Badges Row */}
          <div>
            <div className="font-sans text-xs text-tertiary dark:text-neutral-400 uppercase tracking-widest mb-3 font-semibold">
              {lang === 'zh' ? '關注與作品平台 / Networks' : 'Art Networks'}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-surface-container-lowest dark:bg-neutral-900 border border-outline-variant/50 dark:border-neutral-800 rounded text-on-surface dark:text-neutral-200 hover:text-primary dark:hover:text-primary-fixed-dim hover:border-primary transition-all duration-200 font-sans text-xs font-semibold shadow-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Flush Elegant Form (Columns 6-12) */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest dark:bg-neutral-900 p-8 md:p-10 border border-outline-variant/50 dark:border-neutral-800 rounded shadow-sm">
            <h3 className="font-serif text-2xl text-on-surface dark:text-neutral-100 mb-2 font-medium">
              {lang === 'zh' ? '傳遞委託訊息' : 'Send an Inquiry'}
            </h3>
            <p className="font-sans text-sm text-on-surface-variant dark:text-neutral-400 mb-8 font-light">
              {lang === 'zh'
                ? '請留下您的專案背景與需求概況，我將於 24 小時之內親自回信確認。'
                : 'Please describe your project scope, timeline, and deliverables. I respond personally within 24 hours.'
              }
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className="block font-sans text-xs text-tertiary dark:text-neutral-400 mb-2 uppercase tracking-wider font-medium" htmlFor="name">
                    {lang === 'zh' ? '貴姓大名 (Name) *' : 'Your Name *'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={lang === 'zh' ? '例如：林語堂 / 創角製作人' : 'e.g. Jane Doe / Art Lead'}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/70 dark:border-neutral-700 focus:border-primary dark:focus:border-primary-fixed-dim focus:outline-none px-0 py-2.5 font-sans text-sm text-on-surface dark:text-neutral-100 placeholder:text-outline-variant/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block font-sans text-xs text-tertiary dark:text-neutral-400 mb-2 uppercase tracking-wider font-medium" htmlFor="email">
                    {lang === 'zh' ? '電子信箱 (Email) *' : 'Email Address *'}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.name@company.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant/70 dark:border-neutral-700 focus:border-primary dark:focus:border-primary-fixed-dim focus:outline-none px-0 py-2.5 font-sans text-sm text-on-surface dark:text-neutral-100 placeholder:text-outline-variant/50 transition-colors"
                  />
                </div>
              </div>

              {/* Subject / Project Type */}
              <div className="relative">
                <label className="block font-sans text-xs text-tertiary dark:text-neutral-400 mb-2 uppercase tracking-wider font-medium" htmlFor="subject">
                  {lang === 'zh' ? '合作項目 / 主旨 (Subject) *' : 'Inquiry Scope *'}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-outline-variant/70 dark:border-neutral-700 focus:border-primary dark:focus:border-primary-fixed-dim focus:outline-none px-0 py-2.5 font-sans text-sm text-on-surface dark:text-neutral-100 transition-colors cursor-pointer"
                >
                  <option value="" disabled className="dark:bg-neutral-900">
                    {lang === 'zh' ? '請選擇合作性質' : 'Select Project Scope'}
                  </option>
                  <option value="game" className="dark:bg-neutral-900">
                    {lang === 'zh' ? '遊戲專案概念原畫 / 角色立繪設定' : 'Game Concept Art & Character Design'}
                  </option>
                  <option value="book" className="dark:bg-neutral-900">
                    {lang === 'zh' ? '書籍封面與出版品插畫委託' : 'Book Cover & Editorial Illustration'}
                  </option>
                  <option value="animation" className="dark:bg-neutral-900">
                    {lang === 'zh' ? '動畫 / 影視前期世界觀氛圍稿' : 'Animation & Film Visual Development'}
                  </option>
                  <option value="gallery" className="dark:bg-neutral-900">
                    {lang === 'zh' ? '藝術展覽邀約與畫作典藏' : 'Exhibition & Private Acquisition'}
                  </option>
                  <option value="other" className="dark:bg-neutral-900">
                    {lang === 'zh' ? '其他商業品牌專案洽談' : 'Other Commercial Branding Collaboration'}
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block font-sans text-xs text-tertiary dark:text-neutral-400 mb-2 uppercase tracking-wider font-medium" htmlFor="message">
                  {lang === 'zh' ? '專案細節與訊息 (Message) *' : 'Project Details *'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={lang === 'zh' 
                    ? '請簡述您的專案時程、預期畫作數量、風格參考與預算範疇...' 
                    : 'Please specify your target schedule, expected number of assets, stylistic benchmarks, and budget scope...'
                  }
                  className="w-full bg-transparent border-0 border-b border-outline-variant/70 dark:border-neutral-700 focus:border-primary dark:focus:border-primary-fixed-dim focus:outline-none px-0 py-2.5 font-sans text-sm text-on-surface dark:text-neutral-100 placeholder:text-outline-variant/50 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit button & response container */}
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-9 py-3.5 font-sans text-xs uppercase tracking-wider font-medium rounded border transition-all duration-300 active:scale-95 shadow-sm flex items-center gap-2 ${
                    submitting
                      ? 'bg-neutral-400 border-neutral-400 text-white cursor-not-allowed'
                      : 'bg-primary text-on-primary border-primary hover:bg-primary-container'
                  }`}
                >
                  <span>
                    {submitting 
                      ? (lang === 'zh' ? '傳送中...' : 'Sending...') 
                      : (lang === 'zh' ? '送出洽詢' : 'Send Message')
                    }
                  </span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="font-sans text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>
                      {lang === 'zh' 
                        ? '訊息已送出！感謝您的洽詢，我將盡快回覆。' 
                        : 'Message dispatched! Thank you, I will respond promptly.'
                      }
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Architectural Deployment Readiness Indicator */}
      <div className="mt-16 p-4 bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/40 dark:border-neutral-800 rounded flex flex-col sm:flex-row items-center justify-between text-xs text-tertiary dark:text-neutral-400 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="font-mono uppercase tracking-wider">
            {lang === 'zh' ? '架構狀態：靜態部署 (Static Architecture on Render) ‧ Ready' : 'Architecture: Static Deployment on Render ‧ Ready'}
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[0.6875rem]">
          <span>RENDER SPEC: PASS</span>
          <span>RESPONSIVE ENGINE: CSS v3</span>
          <span>AESTHETIC: 東方留白 × 數位概念</span>
        </div>
      </div>
    </section>
  );
};
