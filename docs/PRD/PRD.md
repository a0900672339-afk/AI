**📜 個人作品集網站開發規格書**

**1\. 專案概述與技術堆疊 (Tech Stack)**

- **專案名稱**：個人 2D 藝術與設計作品集網站
- **前端框架**：React.js (使用 Vite 作為打包工具，以確保建置速度與極佳的效能)
- **樣式與動畫**：
- <br/>
    - Tailwind CSS (用於快速實現簡約、乾淨的排版)
    - Framer Motion (用於中式美學中常見的柔和漸顯、留白呼吸感與滑順轉場)
    - Lucide React (提供輕量、簡約的圖示)
- **部署平台**：Render (靜態網站 Static Site 託管)
- **專案結構規劃**：
- <br/>
- Plaintext

```
portfolio/
├── public/
│   ├── images/          # 2D 作品圖檔、縮圖
│   └── fonts/           # 自定義中式字體 (如思源宋體等)
├── src/
│   ├── components/      # 共用元件 (Navbar, Footer, Modal 等)
│   ├── sections/        # 核心單頁區塊 (Hero, Works, Skills, Contact)
│   ├── data/            # 內容資料庫 (作品集詳細資訊、技能樹)
│   ├── App.jsx
│   └── main.jsx
└── tailwind.config.js   # 客製化色彩與字體配置
```

**2\. 視覺風格設計：簡約淺色系中式風 (Aesthetic & Style Guide)**

為了凸顯 2D 作品的精緻度與藝術感，整體介面採用「留白、意境、雅致」的當代中式美學：

- **色票規劃 (Color Palette)**：
- <br/>
    - **主背景色 (Background)**：白瓷色 / 月白米色 (#FAF9F6 或 #F7F5F0)，營造宣紙般的溫潤感。
    - **主文字與線條 (Primary / Borders)**：墨色 / 碳灰色 (#2C2C2C 或 #333333)，維持清晰易讀性。
    - **點綴色 (Accent)**：遠山黛藍 (#4A607A) 或 茱萸粉紅 / 朱砂紅 (#C25E5E，低彩度點綴)，用於強調重點與互動回饋。
- **排版與字體 (Typography)**：
- <br/>
    - 標題使用具有文化底蘊的明體/宋體（如 _Noto Serif TC_），內文使用易讀的無襯線字體（如 _Noto Sans TC_）。
    - 大面積留白（Negative Space），避免視覺壓迫，讓觀者聚焦於 2D 作品本身。

**3\. 核心架構與功能規格 (Core Modules)**

**1\. 導覽列 (Navbar)**

- **佈局**：固定於頂部（Sticky/Fixed），採用半透明磨砂白底（Blur effect）。
- **內容**：左側為個人名號/Logo（帶有雅致的印章或簡約署名），右側為錨點導覽連結（關於我、精選作品、專業技能、聯絡方式）。

**2\. 關於我 (Hero Section / 主視覺區)**

- **視覺設計**：左側為強烈的 2D 藝術風格主視覺圖片或動態標語，右側或下方為簡短的自我介紹。
- **文案內容**：
- <br/>
    - 主標題：創作者名稱 / 核心定位（例：「以筆墨與數位，勾勒 2D 視界」）。
    - 副標題：簡述擅長的 2D 領域（如：數位插畫、角色設定、動態分鏡等）。
- **互動按鈕**：
- <br/>
    - 「查看作品」(引導捲動至作品區)
    - 「下載簡歷 / Resume」

**3\. 精選作品 (Featured Works / Case Studies)**

針對 **2D 作品** 的展示特性，本區塊採用「畫廊式 (Gallery)」網格佈局，並具備分類篩選功能：

- **分類篩選 (Filter Tabs)**：全部 (All) / 數位插畫 (Digital Art) / 角色設計 (Character Design) / 概念原畫 (Concept Art)。
- **卡片互動**：
- <br/>
    - 滑鼠懸停 (Hover) 時呈現微縮放或輕柔的浮雕陰影。
    - 點擊卡片後可開啟 **作品詳情互動視窗 (Lightbox / Modal)**，內含：
    -  <br/>
        - 大圖檢視（支援縮放）。
        - 作品背後的創作理念、使用工具（如 Photoshop, Clip Studio Paint, Procreate）。
        - 局部細節特寫（針對 2D 線條或上色細節）。

**4\. 專業技能與經歷 (About Me & Skills)**

- **個人簡介**：更深度的設計理念、藝術風格養成背景。
- **軟體與技能樹 (Skills Matrix)**：
- <br/>
    - 繪圖軟體：Photoshop, CSP, Procreate, Illustrator 等。
    - 專業領域：2D 角色立繪、場景概念設計、色彩構成、線條美學。
- **經歷/展覽經歷 (Timeline)**：以簡約的時間軸呈現過往接案經驗、參展紀錄或美術相關學經歷。

**5\. 聯絡方式 (Contact)**

- **內容**：
- <br/>
    - 電子信箱 (Email) 快速複製按鈕。
    - 社群/專業平台連結：ArtStation、Behance、Instagram、Twitter/X。
- **互動表單 (Contact Form)**：
- <br/>
    - 欄位：姓名 (Name)、信箱 (Email)、主旨、訊息內容 (Message)。
    - _註：前端可先做好欄位驗證與發送成功提示（後續若無後端伺服器，可對接 Formspree 等免費表單服務）。_

**4\. 響應式設計 (Responsive Design)**

- **Desktop (桌機版)**：多欄位作品藝廊、寬鬆的留白與流暢的滑鼠動態互動。
- **Mobile (手機/平板版)**：單欄位滾動、收納式漢堡選單 (Hamburger Menu)，確保 2D 圖片在小螢幕上依然能清晰呈現細節。

**5\. 部署與上線規劃 (Deployment on Render)**

因為本網站使用 React 建置為靜態網頁（Static Site），部署到 Render 非常流暢：

1. **版控準備**：將專案推送到 GitHub 儲存庫。

2. **Render 設定**：
3. <br/>
   - 在 Render Dashboard 點擊 **New +** -> **Static Site**。
   - 連結你的 GitHub 儲存庫。
   - 設定建置指令 (Build Command)：npm run build
   - 設定發布目錄 (Publish Directory)：dist

4. **自動化部署**：未來只要推送 (git push) 程式碼更新到 GitHub 主分支，Render 就會自動完成編譯與上線。