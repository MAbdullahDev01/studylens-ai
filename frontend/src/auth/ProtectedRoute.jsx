import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import LoadingSpinner from "../components/ui/LoadingSpinner"; // Import your LoadingSpinner

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Optional: Listen for auth changes (login/logout) to keep state in sync
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      // Using the theme's background and center alignment
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <LoadingSpinner text="Securing your session..." />
      </div>
    );
  }

  if (!session) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}