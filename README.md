# StudyLens 📊🧠

**StudyLens** is an AI-powered study analytics platform that helps
students **understand, predict, and optimize** their study habits using
time-series machine learning.

> Built as a full-stack, admissions-grade project demonstrating
> real-world engineering practices.

------------------------------------------------------------------------

## 🚩 Problem Statement

Most students study inefficiently because they lack objective insight
into their habits. Existing tools track time, but do not analyze
patterns or predict future performance.

StudyLens bridges this gap by combining **behavioral data collection**,
**analytics**, and **machine learning** to deliver actionable insights.

------------------------------------------------------------------------

## 🧠 Why This Is Technically Challenging

-   Time-series modeling on sparse, noisy user data\
-   Clean ML--backend--frontend integration\
-   Secure authentication and protected routes\
-   Zero-budget deployment across multiple services\
-   Designing explainable analytics for non-technical users

------------------------------------------------------------------------

## 🏗️ System Architecture (High-Level)

StudyLens is designed as a modular, scalable system with clear
separation of concerns:

-   **Frontend (React + TailwindCSS):**\
    User-facing interface for authentication, data input, and
    visualization

-   **Backend (FastAPI):**\
    API layer responsible for validation, orchestration, and ML
    interaction *(implemented in Phase 3)*

-   **ML Service (LSTM):**\
    Time-series modeling for study behavior prediction and risk
    detection *(implemented in Phase 2)*

-   **Auth & Database (Supabase):**\
    Secure authentication and structured storage for study sessions

This architecture ensures that each layer can evolve independently while
remaining easy to integrate.

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Frontend:** React, Vite, TailwindCSS\
-   **Backend:** Python, FastAPI *(planned)*\
-   **ML:** PyTorch *(Phase 2)*\
-   **Auth / DB:** Supabase\
-   **Deployment:** Vercel, Render *(planned)*

------------------------------------------------------------------------

## ▶️ How to Run Locally

### Frontend

``` bash
npm install
npm run dev
```

> Runs on `http://localhost:5173`

### Backend (Phase 3 -- Placeholder)

``` bash
uvicorn main:app --reload
```

------------------------------------------------------------------------

## 📌 Project Status

-   ✅ Phase 0 --- Planning & Architecture (Completed)\
-   ✅ Phase 1 --- Frontend MVP (Completed)\
-   🚧 Phase 2 --- Machine Learning (In Progress)\
-   ⏳ Phase 3 --- Backend Integration\
-   ⏳ Phase 4 --- Deployment & Polish

------------------------------------------------------------------------

## 🎓 Why This Project Stands Out

This project demonstrates:

-   Thoughtful system design before implementation\
-   Clean separation of frontend, backend, and ML concerns\
-   Production-style authentication and data handling\
-   ML-oriented data collection and feature design\
-   Professional documentation and commit discipline

Designed to meet the expectations of **top-tier CS & engineering
admissions reviewers**.

------------------------------------------------------------------------

## 📄 License

MIT
