<img src="https://img.icons8.com/fluency/48/task.png" width="40"/> DevTrack
Modern AI-powered productivity & project management platform for developers.
<p align="center"> <img src="https://img.shields.io/badge/Status-In_Development-purple?style=for-the-badge"/> <img src="https://img.shields.io/badge/Frontend-Next.js_15-black?style=for-the-badge&logo=nextdotjs"/> <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=nodedotjs"/> <img src="https://img.shields.io/badge/Database-Supabase-3ECF8E?style=for-the-badge&logo=supabase"/> <img src="https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss"/> </p>
📘 Table of Contents

Overview

Features

Tech Stack

Project Structure

Installation

Environment Variables

Authentication Flow

Database Schema

UI/UX

Roadmap

Contributing

License

📌 Overview

DevTrack is a full-stack developer productivity platform designed to centralize your:
✔ Projects
✔ Tasks
✔ Coding sessions
✔ Notes
✔ AI-powered tools
✔ Analytics

Built for developers who want a clean workflow, strong organization, and AI assistance without sacrificing performance or control.

🚀 Features
🔐 Authentication & Security

Email/password authentication

Supabase Auth

JWT session handling

Role-based access control

Secure cookie storage

Password reset, email confirmation

📁 Project Management

Create, update, delete, archive projects

Tag system & categories

AI-generated project summaries

Deadline reminders

📌 Task Management (Kanban)

Drag-and-drop task board

Priorities (Low → Critical)

Due dates

Auto-generated subtasks (AI)

⏳ Coding Session Tracker

Track hours coded per day

Session history

Productivity graphs

Weekly coding analytics

📚 Developer Knowledge Base

Markdown editor

Syntax highlighting

AI rewrite, explain, expand tools

Folders + tags

🤖 AI Capabilities (optional)

Task breakdown

Project scaffolding

Code review suggestions

Bug explanations

Learning path generation

📊 Admin Dashboard

User management

Logs

API usage

Error tracking

🛠 Tech Stack
Frontend
Tech	Purpose
Next.js 15	Routing, SSR, App directory
React.js	UI components
Tailwind CSS v4	Styling
Shadcn/UI	Components
Zustand or Redux	State management
Framer Motion	Animations
Backend
Tech	Purpose
Node.js + Express	API
Supabase / PostgreSQL	Database
Prisma ORM	Queries
JWT	Auth
Rate Limit + CORS + Helmet	Security
Optional Microservices

C# .NET → Analytics / Auth

Python → AI models / automation

📂 Project Structure
DevTrack/
│
├── client/                     # Frontend
│   ├── src/
│   │   ├── app/                # Routes
│   │   ├── components/
│   │   ├── lib/
│   │   ├── store/
│   │   └── styles/
│   └── package.json
│
├── server/                     # Backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── db/
│   └── package.json
│
├── microservices/              # Optional services
│   ├── ai-service/
│   └── auth-service/
│
├── DATABASE_SCHEMA.md
├── AUTH_SETUP.md
├── FINAL_UI_IMPLEMENTATION.md
├── UI_REBUILD_SUMMARY.md
└── README.md

⚙️ Installation
1. Clone repo
git clone https://github.com/yourusername/DevTrack.git
cd DevTrack

Client Setup
cd client
npm install
npm run dev

Server Setup
cd server
npm install
npm run dev

🔑 Environment Variables
Frontend (client/.env.local)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

Backend (server/.env)
DATABASE_URL=
JWT_SECRET=
SUPABASE_SERVICE_KEY=

🔐 Authentication Flow
<p align="center"> <img src="https://img.icons8.com/color/96/secured-by-supabase.png" width="140"/> </p>
User Sign-in Process

User enters email + password

Supabase Auth verifies credentials

Server receives access_token

Token stored in httpOnly cookie

API requests include JWT

Token validated on backend

User gains access

Security Measures

Password hashing (bcrypt)

Rate limiting

Helmet security policies

Refresh tokens

CSRF protection

🗄️ Database Schema

Main tables:

users

projects

tasks

sessions

notes

logs

ai_requests

Indexes & relations optimized for performance.

Full schema: DATABASE_SCHEMA.md

🎨 UI / UX
Design Rules

Minimalist

Developer-friendly

Black/white UI

Shadcn components

3-tier spacing system

Full responsiveness

Animations under 300ms

Screens

Login / Register

Dashboard

Projects

Kanban Tasks

Coding Sessions

Notes (Markdown)

Settings

Admin Panel

Full design guide: FINAL_UI_IMPLEMENTATION.md

🧭 Roadmap
Phase 1 (Current)

Auth system

Projects + Tasks

Responsive UI

Supabase integration

Phase 2

AI task generator

Coding session graphs

Note summarizer

Phase 3

Real-time collaboration

Notifications

Mobile app

Phase 4

Team workspaces

Public project boards

Cloud sync

🤝 Contributing

Pull requests are welcome.
Please create a feature branch and submit a clean PR.

📜 License

MIT License — Free to use, modify, and distribute.
