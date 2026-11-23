# 墨韻 / InkVision — 2D 數位藝術與概念原畫個人作品集

> **「以筆墨與數位，勾勒 2D 視界」**  
> 一個融合當代新中式極簡美學（水墨留白、宣紙溫潤感、朱砂印章）與現代前端工程架構的個人 2D 概念藝術與數位插畫作品集網站。

---

## 📖 專案概述 (Project Overview)

本專案根據 `docs/PRD/PRD.md` 與 `references/stitch/` 原始設計規範完整實作，採用 **React 18** 與 **Tailwind CSS**，搭配 **Framer Motion** 的柔和漸顯轉場與 **Lucide React** 輕量圖示。整體設計貫徹「留白、意境、雅致」之美學理念，兼顧極佳的閱讀體驗與流暢互動。

---

## 🎨 視覺風格與設計系統 (Design System)

- **宣紙底色 (Xuan Paper Texture)**：採用溫潤白瓷色與月白米色（`#FAF9F6` / `#FCF9F8`），搭配極細緻的宣紙纖維底紋，模擬吸墨棉紙的自然觸感。
- **松煙墨色 (Pine-Smoke Inks)**：標題與內文選用碳黑與深灰（`#1B1C1C` / `#2C2C2C`），屏除刺眼的高反差純黑，使畫面呈現沉穩透氣的水墨層次。
- **朱砂印章點綴 (Cinnabar Vermilion)**：以經典硃砂紅（`#972226` / `#B83B3B`）作為重點聚焦色，應用於品牌烙印印章、分類計數標記、鑽石時間軸節點與互動按鈕。
- **遠山黛藍 (Distant Mountain Indigo)**：以清雅黛藍（`#4A607A`）作為技術技能、次要按鈕與輔助資訊的視覺調和。
- **典雅字體排版 (Typography)**：
  - 標題選用古典金石風韻的 **思源宋體 (Noto Serif TC)**。
  - 內文與資訊標籤選用現代無襯線 **Inter** 與 **Noto Sans TC**。
  - 巧妙融合古典直排書法標語（`writing-mode: vertical-rl`）。

---

## 🛠 技術堆疊與實際安裝版本 (Tech Stack & Installed Versions)

| 類別 | 套件 / 工具 | 實際安裝版本 | 用途說明 |
| :--- | :--- | :--- | :--- |
| **Runtime** | Node.js | `v22.23.5` | JavaScript 執行環境 (LTS) |
| **Package Manager**| npm | `10.9.9` | 依賴管理工具 |
| **Core Framework** | React | `18.3.1` | 前端元件化框架 |
| **DOM Renderer** | React DOM | `18.3.1` | React 網頁渲染核心 |
| **Bundler / Dev** | Vite | `5.4.14` | 極速前端打包與熱重載伺服器 |
| **Styling** | Tailwind CSS | `3.4.17` | Utility-first CSS 樣式系統 |
| **CSS Processing** | PostCSS / Autoprefixer| `8.4.49` / `10.4.20` | CSS 前後處理器與跨瀏覽器兼容 |
| **Animations** | Framer Motion | `12.4.7` | 中式留白呼吸感與轉場動畫 |
| **Iconography** | Lucide React | `1.16.0` | 簡約向量圖示庫 |

---

## 📂 模組化專案結構 (Project Structure)

```
portfolio/
├── docs/                        # PRD 規格文件
│   └── PRD/PRD.md
├── references/                  # 原設計匯出參考檔
│   └── stitch/
├── public/                      # 靜態資源
├── src/
│   ├── components/              # 共用元件 (模組化設計)
│   │   ├── Navbar.jsx           # 頂部磨砂玻璃導覽列 (含語系、深淺色切換、錨點)
│   │   ├── ArtCard.jsx          # 精選作品卡片 (懸停縮放、水墨漸層浮現)
│   │   ├── LightboxModal.jsx    # 沉浸式作品詳情彈窗 (高解析檢視、縮放控制、規格面板)
│   │   ├── ResumeModal.jsx      # 個人簡歷檢視與下載彈窗
│   │   └── Footer.jsx           # 頁尾資訊與回頁首平滑滾動按鈕
│   ├── sections/                # 核心單頁區塊
│   │   ├── HeroSection.jsx      # 主視覺區 (非對稱排版、核心數據、直排詩詞、主視覺畫布)
│   │   ├── WorksSection.jsx     # 精選作品畫廊 (分類篩選 Tab、作品格狀排列)
│   │   ├── SkillsSection.jsx    # 專業歷程 (4大核心領域 Bento、軟體進度條、朱砂時間軸)
│   │   └── ContactSection.jsx   # 聯絡方式 (信箱一鍵複製、檔期地點、優雅表單)
│   ├── data/
│   │   └── portfolioData.js     # 作品資料庫、分類、技能百分比、歷程資料與中英雙語字典
│   ├── App.jsx                  # 根應用元件 (全域狀態管理：語系、深淺主題、彈窗)
│   ├── main.jsx                 # React 掛載進入點
│   └── index.css                # Tailwind 核心設定、宣紙底紋與自定義直排工具類別
├── index.html                   # HTML 模板與 Google Web Fonts 預加載
├── package.json                 # 專案設定與 NPM 依賴清單
├── postcss.config.js            # PostCSS 配置
├── tailwind.config.js           # 客製化色彩、邊框弧度與字型設定
├── vite.config.js               # Vite 開發伺服器配置 (Port: 3000)
└── ReadMe.md                    # 專案詳細說明文件
```

---

## 🚀 啟動方式與本機預覽 (Quickstart)

### 1. 安裝依賴 (如尚未安裝)
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
> 開發伺服器將在 `http://localhost:3000` 啟動，支援 Hot Module Replacement (HMR)。

### 3. 建置生產版本 (Production Build)
```bash
npm run build
```
編譯產物將輸出至 `dist/` 目錄。

### 4. 本機預覽生產版本
```bash
npm run preview
```

---

## ✨ 核心功能亮點 (Key Features)

1. **頂部磨砂紙質導覽列 (Frosted Paper Navbar)**：
   - 固定於頂部，具備半透明毛玻璃模糊效果 (`backdrop-blur-md`)。
   - 品牌硃砂印章標誌「墨印」，滑鼠移入具輕微縮放回饋。
   - 捲動偵測（Scroll Spy）：依據可見區塊動態在對應連結下方顯示朱砂點指示。
   - **中英雙語一鍵切換 (Bilingual Toggle)**：支援繁體中文與英文即時切換。
   - **深淺色模式切換 (Dark / Light Mode)**：提供日間宣紙感與夜間沉浸松墨模式切換。
   - 響應式漢堡選單 (Mobile Drawer Menu)。

2. **主視覺區 (Hero Section)**：
   - 7:5 非對稱比例排版，左側呈現古典直排標語「松煙墨韻 ‧ 意境留白」與核心標題。
   - 核心資歷量化指標（8+ 年資歷、50+ 商業項目、3次 國際入圍）。
   - 右側裝裱畫框（Canvas Mount），點擊即可開啟大圖預覽。

3. **作品畫廊與分類篩選 (Featured Works & Lightbox)**：
   - 支援「全部 (06)」、「角色設計 (03)」、「概念原畫 (02)」、「數位插畫 (01)」即時過濾。
   - 卡片滑鼠懸停時微縮放 (Scale 1.05)，水墨暗層緩緩浮現作品理念與所用工具。
   - **沉浸式燈箱 (Lightbox Modal)**：
     - 提供大圖檢視，內建 **放大 (+)、縮小 (-)、重置比例** 縮放控制。
     - 右側抽屜呈現創作理念、完成年份、使用工具（CSP, Photoshop, Blender...）與畫作解析度規格（300 DPI）。
     - 支援鍵盤 `Escape` 鍵與遮罩點擊關閉。

4. **專業技能與重要節點 (Skills & Milestones)**：
   - 4 大核心專業領域 Bento 卡片（2D 角色立繪、場景概念氛圍、線條光影美學、動態分鏡腳本）。
   - 繪圖軟體精熟度進度條（Photoshop 95%、CSP 92%、Procreate 88%、Blender 78%）動畫載入。
   - 貫穿式細線時間軸，搭配朱砂紅菱形節點（`◆`），清楚呈現 2019 至 2024 之展覽、商業專案與國際得獎經歷。

5. **聯絡邀約與互動表單 (Contact & Inquiries)**：
   - 一鍵式電子信箱複製膠囊（`contact@inkvision.art`），點擊後具備「已複製！」觸覺微回饋。
   - 檔期預約狀態與工作室所在地。
   - 典雅下底線輸入表單（姓名、Email、合作主旨下拉選單、專案細節），具備前端防呆驗證與成功送出動畫狀態。
   - 社群平台外部連結徽章（ArtStation, Behance, Twitter/X, Instagram）。

---

## 🌐 部署指南 (Deployment on Render)

本網站專為靜態網站託管優化，部署至 **Render** 的步驟如下：

1. 將專案程式碼推送到 GitHub 儲存庫。
2. 登入 [Render Dashboard](https://dashboard.render.com/)，點選 **New +** -> **Static Site**。
3. 連結此 GitHub 專案。
4. 設定建置參數：
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. 點擊 **Create Static Site**，即可享有全球 CDN 高速存取與每次 Git Push 自動化持續整合部署 (CI/CD)。

---

## 📋 驗證結果與待續事項 (Verification & Next Steps)

### ✅ 已完成驗證項目
- [x] 正確載入與編譯：Vite 成功建置，無任何報錯與警告。
- [x] Tailwind CSS 樣式完整對齊 stitch 設計系統與規範色彩（白瓷宣紙、朱砂紅、遠山黛藍、松煙深墨）。
- [x] 元件高度模組化：Navbar, ArtCard, LightboxModal, ResumeModal, Footer, 各 Section 獨立封裝。
- [x] 作品分類篩選器功能運作正常。
- [x] Lightbox Modal 支援高解析大圖、縮放功能與詳細元數據展示。
- [x] 下載簡歷（Resume Modal）彈窗支援文字檔自訂下載與歷程預覽。
- [x] 聯絡表單輸入驗證與模擬送出回饋。
- [x] 電子郵件一鍵複製功能（含剪貼簿 API 與視覺回饋）。
- [x] 繁體中文 / 英文雙語切換。
- [x] 宣紙明亮 / 夜墨深色外觀模式切換。

### ⏳ 後續可延伸項目
- [ ] 後端表單轉發：目前聯絡表單為前端互動模擬，後續可串接 Formspree、EmailJS 或自建 Webhook API。
- [ ] 圖片離線本地化備份：目前使用 CDN 高解析圖源，可依需求下載儲存至 `public/images/` 以達成純本機無網路預覽。
- [ ] 自定義中文字體子集嵌入：若需要完全離線支援思源宋體，可將 WOFF2 字型檔放入 `public/fonts/` 載入。
