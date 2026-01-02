# StudyLens 📊🧠

StudyLens is an AI-powered study analytics platform that helps students understand, predict, and optimize their study habits using time-series machine learning.

## 🚩 Problem Statement
Most students study inefficiently because they lack objective insight into their habits. Existing tools track time, but do not analyze patterns or predict future performance.

StudyLens bridges this gap by combining behavioral data with machine learning to deliver actionable insights.

## 🧠 Why This Is Technically Challenging
- Time-series modeling on sparse, noisy user data
- ML–backend–frontend integration
- Deployment across multiple services on $0 budget
- Designing explainable outputs for non-technical users

## 🏗️ System Architecture (High-Level)
- Frontend (React): User interaction & visualization
- Backend (FastAPI): Auth, orchestration, API layer
- ML Service (LSTM): Study pattern modeling & prediction
- Supabase: Authentication & data storage

## 🤖 Machine Learning Approach
- Model: LSTM (time-series)
- Inputs: Daily study sessions, duration, consistency
- Outputs: Predicted trends, risk flags, optimization suggestions
- Training: Google Colab
- Inference: Lightweight hosted service

## 🛠️ Tech Stack
- Frontend: React, TailwindCSS
- Backend: Python, FastAPI
- ML: PyTorch
- Mobile: React Native
- Auth/DB: Supabase
- Deployment: Vercel, Render, Hugging Face Spaces

## 🗺️ Project Roadmap
Phase 0: Planning & Architecture  
Phase 1: Frontend MVP  
Phase 2: ML Model Development  
Phase 3: Backend Integration  
Phase 4: Deployment & Polish  

## ▶️ How to Run (Placeholder)
```bash
# frontend
npm install && npm run dev

# backend
uvicorn main:app --reload
```

## 📌 Status
Phase 0 — Planning & Repository Setup (Completed)
