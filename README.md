# 🩺 ReportAI — Medical Report Explainer

> Upload any medical report and get a plain-language breakdown instantly. Not a diagnosis — just clarity.

![ReportAI](https://img.shields.io/badge/ReportAI-Live-brightgreen)
![Node](https://img.shields.io/badge/Node.js-20+-green)
![React](https://img.shields.io/badge/React-18-blue)
![Groq](https://img.shields.io/badge/Powered%20by-Groq%20AI-orange)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## ✨ Features

- 🔬 **Plain-language breakdown** of every parameter in your report
- ⚠️ **Abnormal values flagged** with context — what it means, not a diagnosis
- 💬 **Smart doctor questions** — 5-7 specific questions to ask your doctor
- 📄 **All file types** — PDF, JPG, PNG (with OCR for images)
- 🔒 **Private by design** — files are never stored
- ⚡ **Results in ~15 seconds** — powered by Groq's ultra-fast LLM
- 📱 **Fully responsive** — works on mobile and desktop

---

## 🖥️ Live Demo

🌐 **Frontend:** [reportai-rose.vercel.app](https://reportai-rose.vercel.app)  
🔗 **API:** [reportai-nh02.onrender.com](https://reportai-nh02.onrender.com/health)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | Node.js, Express.js, TypeScript |
| AI | Groq API (LLaMA 3.3 70B), LangChain |
| PDF Parsing | pdf-parse |
| OCR | Tesseract.js |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Project Structure

```
reportai/
├── apps/
│   ├── api/                    # Express + TypeScript backend
│   │   ├── src/
│   │   │   ├── routes/         # API routes
│   │   │   ├── services/       # PDF, LLM, Report services
│   │   │   ├── middleware/     # Upload, Error middleware
│   │   │   ├── prompts/        # Medical AI prompts
│   │   │   └── types/          # TypeScript types
│   │   └── package.json
│   │
│   └── web/                    # React + Vite frontend
│       ├── src/
│       │   ├── components/     # UI components
│       │   ├── hooks/          # Custom React hooks
│       │   ├── lib/            # API client, utilities
│       │   └── pages/          # Page components
│       └── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Groq API key (free at [console.groq.com](https://console.groq.com))

### 1. Clone the repository

```bash
git clone https://github.com/BhartiSinghal16/ReportAi.git
cd ReportAi/reportai
```

### 2. Set up the API

```bash
cd apps/api
npm install
```

Create `.env` file:

```env
PORT=3001
GROQ_API_KEY=your_groq_api_key_here
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5173
```

### 3. Set up the Frontend

```bash
cd apps/web
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:3001/api
```

### 4. Run both servers

**Terminal 1 — API:**
```bash
cd apps/api
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd apps/web
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚕️ Medical Safety Guardrails

ReportAI is built with strict medical safety rules:

- ❌ **Never diagnoses** — never says "you have X condition"
- ❌ **Never recommends** treatment or medication changes
- ✅ **Always uses** "may" and "can" language — never definitive
- ✅ **Always shows** disclaimer on every result
- ✅ **Files never stored** — analyzed and immediately discarded
- ✅ **Hardcoded disclaimer** — never trusted from AI output

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/api/upload` | Upload and analyze a medical report |

### Upload Request

```
POST /api/upload
Content-Type: multipart/form-data

Body:
  report: File (PDF, JPG, PNG, WEBP — max 10MB)
```

### Upload Response

```json
{
  "success": true,
  "pageCount": 1,
  "truncated": false,
  "analysis": {
    "reportType": "Complete Blood Count",
    "summary": "...",
    "parameters": [...],
    "abnormalCount": 3,
    "doctorQuestions": [...],
    "disclaimer": "..."
  }
}
```

---

## 🌐 Deployment

### Backend (Render)

1. Connect GitHub repo to Render
2. Root directory: `apps/api`
3. Build: `npm install && npm run build`
4. Start: `npm start`
5. Add environment variables

### Frontend (Vercel)

1. Connect GitHub repo to Vercel
2. Root directory: `apps/web`
3. Framework: Vite
4. Add `VITE_API_URL` environment variable

---

## 📸 Screenshots

| Home Page | Results |
|-----------|---------|
| Upload your medical report | Get plain-language breakdown |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT License — feel free to use and modify.

---

## 👩‍💻 Built By

**Bharti Singhal** — Built with ❤️ using React, Node.js, and Groq AI

> ⚠️ **Disclaimer:** ReportAI is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider.
