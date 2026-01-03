import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/ui/NavBar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Session from "./components/study/StudySessionForm"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
