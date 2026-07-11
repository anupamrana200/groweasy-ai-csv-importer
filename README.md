# 🚀 GrowEasy AI Importer

> An AI-powered CSV Importer that intelligently converts CSV files with arbitrary column names into a standardized CRM format using Google Gemini or OpenAI.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwind-css)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-412991?logo=openai)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?logo=google)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Project Overview

GrowEasy AI Importer is a full-stack AI-powered application that automates CRM data import from CSV files.

Instead of requiring users to manually map CSV columns, the application uses Large Language Models (Google Gemini or OpenAI GPT) to intelligently understand different CSV structures and convert them into a standardized GrowEasy CRM schema.

The system supports arbitrary column names, different CSV layouts, multiple email addresses, multiple phone numbers, AI-powered field mapping, progress tracking, skipped record detection, and CRM-ready CSV export.

---

# ✨ Features

## 📂 CSV Upload

- Drag & Drop CSV Upload
- File Browser Upload
- CSV Validation
- CSV Preview before processing

---

## 🤖 AI Processing

- Intelligent CSV Column Mapping
- Context-aware Field Extraction
- Google Gemini Support
- OpenAI GPT Support
- Batch Processing
- Parallel AI Workers
- Live Progress Tracking

---

## 📋 CRM Extraction

Automatically extracts:

- Name
- Email
- Mobile Number
- Country Code
- Company
- City
- State
- Country
- Lead Owner
- CRM Status
- CRM Notes
- Data Source
- Possession Time
- Description
- Created Date

---

## 🧠 Smart AI Features

- Understands arbitrary CSV headers
- Infers fields from context
- Handles multiple emails
- Handles multiple phone numbers
- Detects CRM status
- Detects data source
- Creates CRM Notes automatically
- Infers Country from phone/address
- Skips invalid records
- Never invents missing data

---

## 📊 Dashboard

- Upload Status
- Record Counter
- AI Provider
- Import Progress
- Processing Time
- Import Summary

---

## 📑 AI CRM Preview

- Search Records
- Expandable Record Details
- Responsive Table
- Status Badges
- Dark Mode Support

---

## 📤 Export

- Export processed CRM records as CSV
- CRM-ready format
- Compatible with standard CRM import workflows

---

# 🏗 System Architecture

```text
                    CSV Upload
                         │
                         ▼
                 PapaParse (Frontend)
                         │
                         ▼
                Express Backend API
                         │
                         ▼
               CSV Normalization
                         │
                         ▼
               Batch Generation
                         │
                         ▼
          Parallel AI Batch Processing
          (Gemini / OpenAI GPT)
                         │
                         ▼
          AI Response Validation
                         │
                         ▼
           CRM Record Generation
                         │
                         ▼
          AI CRM Preview Dashboard
                         │
                         ▼
              Export Processed CSV
```

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- PapaParse
- Axios
- Sonner

---

## Backend

- Node.js
- Express.js
- Multer
- CORS

---

## AI

- Google Gemini
- OpenAI GPT

---

# 📁 Project Structure

```
groweasy-ai-importer
│
├── client
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   └── context
│
├── server
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── prompts
│   │   ├── routes
│   │   ├── services
│   │   ├── validators
│   │   └── config
│
└── README.md
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/groweasy-ai-importer.git
```

Go into the project

```bash
cd groweasy-ai-importer
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd server
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

GEMINI_API_KEY=your_gemini_api_key

OPENAI_API_KEY=your_openai_api_key
```

---

# ▶ Running the Project

### Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# 📡 API Endpoints

### Import CSV

```
POST /api/import
```

---

### Test AI

```
POST /api/ai/test
```

---

### Import Progress

```
GET /api/progress
```

---

# 🌙 User Experience

✔ Responsive Design

✔ Light Mode

✔ Dark Mode

✔ Animated Components

✔ Expandable CRM Records

✔ Interactive Dashboard

✔ Modern UI

---

# 📸 Screenshots

## Dashboard

> _(Add screenshot after deployment)_

---

## CSV Preview

> _(Add screenshot after deployment)_

---

## AI Processing

> _(Add screenshot after deployment)_

---

## AI CRM Preview

> _(Add screenshot after deployment)_

---

## Dark Mode

> _(Add screenshot after deployment)_

---

# 📈 Future Improvements

- User Authentication
- Import History
- Duplicate Detection
- AI Confidence Score
- Excel Export (.xlsx)
- Editable CRM Records
- Bulk Retry for Failed Records
- Audit Logs

---

# 👨‍💻 Author

**Anupam Rana**

Computer Science & Engineering

University of Calcutta

GitHub: https://github.com/anupamrana200

LinkedIn: https://www.linkedin.com/in/anupam-rana-126143262/

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star.
