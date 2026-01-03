import Card from "../ui/Card";

const StatsGrid = ({ sessions = [], totalHours = 0, avgFocus = 0 }) => {
  const statCardClasses = "hover:shadow-2xl transition-shadow duration-200";
  const hasData = sessions.length > 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      
      {/* Total Study Time */}
      <Card className={statCardClasses}>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Total Study Time</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
          {hasData ? `${totalHours}h` : "—"}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {hasData ? "Lifetime focus hours" : "No data yet"}
        </p>
      </Card>

      {/* Sessions Logged */}
      <Card className={statCardClasses}>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Sessions Logged</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
          {hasData ? sessions.length : "—"}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {hasData ? "Completed sessions" : "No data yet"}
        </p>
      </Card>

      {/* Avg Focus Level */}
      <Card className={`${statCardClasses} sm:col-span-2 lg:col-span-1`}>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Avg Focus Level</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
          {hasData ? `${avgFocus}%` : "—"}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {hasData ? "Average productivity" : "No data yet"}
        </p>
      </Card>

    </div>
  );
};

export default StatsGrid;