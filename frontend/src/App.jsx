import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import ProtectedRoute from "./auth/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* NavBar stays outside Routes so it appears on every page */}
      <NavBar />
      
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;