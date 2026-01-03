import Button from "../ui/Button";
import Card from "../ui/Card"; // Import the Card component

const RecentSessions = () => {
  const plusIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  );

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Recent Study Sessions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">Your latest study activities</p>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-green-50 to-teal-50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <p className="text-sm sm:text-base font-medium text-gray-500 mb-1 sm:mb-2">
          No sessions to display yet
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 max-w-sm px-4">
          Start logging your study sessions to track your progress and see them here
        </p>

        <Button 
          icon={plusIcon} 
          onClick={() => console.log("Open Log Session Modal")}
        >
          Log Your First Session
        </Button>
      </div>

      {/* Info Box */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border border-green-100 rounded-lg">
        <div className="flex gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs sm:text-sm text-green-700">
            Recent sessions will display here with details like subject, duration, focus level, and notes.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RecentSessions;