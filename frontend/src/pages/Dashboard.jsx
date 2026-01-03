import { useEffect, useState } from "react";
import { fetchStudySessions } from "../services/api"; 
import StatsGrid from "../components/dashboard/StatsGrid";
import ChartsSection from "../components/dashboard/ChartsSection";
import RecentSessions from "../components/dashboard/RecentSessions";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const data = await fetchStudySessions();
        setSessions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, []);

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  if (error) {
    return (
      <p className="p-6 text-red-600">
        {error}
      </p>
    );
  }

  const chartData = sessions.map((session) => ({
    date: session.created_at.split("T")[0],
    duration: session.duration,
  }));


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Track your study progress and insights</p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <StatsGrid sessions={sessions}/>
          <ChartsSection chartData={chartData}/>
          <RecentSessions sessions={sessions}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;