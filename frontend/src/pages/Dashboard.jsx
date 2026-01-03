import StatsGrid from "../components/dashboard/StatsGrid";
import ChartsSection from "../components/dashboard/ChartsSection";
import RecentSessions from "../components/dashboard/RecentSessions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Track your study progress and insights</p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <StatsGrid />
          <ChartsSection />
          <RecentSessions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;