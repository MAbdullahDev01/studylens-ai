import { useEffect, useState } from "react";
import { fetchStudySessions } from "../services/api"; 
import StatsGrid from "../components/dashboard/StatsGrid";
import ChartsSection from "../components/dashboard/ChartsSection";
import RecentSessions from "../components/dashboard/RecentSessions";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import {
  getTotalStudyTime,
  getAverageFocus,
  getStudyTimeBySubject,
  getDailyStudyTrend
} from "../analytics/analytics";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Logic for analytics
  const totalMinutes = getTotalStudyTime(sessions);
  const totalHours = (totalMinutes / 60).toFixed(1); // Calculate totalHours for StatsGrid
  const avgFocus = getAverageFocus(sessions);
  
  // Example logic for best/worst subject (ensure these exist in your analytics file)
  const subjectData = getStudyTimeBySubject(sessions);
  const trendData = getDailyStudyTrend(sessions);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const data = await fetchStudySessions();
        setSessions(data || []); // Fallback to empty array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner text="Loading dashboard…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="p-6 text-red-600 bg-red-50 rounded-lg border border-red-200">
          Error: {error}
        </p>
      </div>
    );
  }

  // Format chart data safely
  const chartData = sessions.map((session) => ({
    date: session.created_at ? session.created_at.split("T")[0] : "N/A",
    duration: session.duration || 0,
  }));

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Track your study progress and insights</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <StatsGrid 
            sessions={sessions}
            totalHours={totalHours}
            avgFocus={avgFocus}
          />
          
          <ChartsSection chartData={chartData} />
          
          <RecentSessions sessions={sessions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;