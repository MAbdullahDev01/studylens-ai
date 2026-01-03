import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const sampleData = [
  { date: "2026-01-01", duration: 60 },
  { date: "2026-01-02", duration: 15 },
  { date: "2026-01-03", duration: 90 },
  { date: "2026-01-04", duration: 30 },
];

const ChartsSection = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Study Duration Over Time
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">Track your daily study patterns</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-64 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
              label={{ value: 'Minutes', angle: -90, position: 'insideLeft', style: { fontSize: '0.75rem', fill: '#6B7280' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#374151', fontWeight: 'bold' }}
            />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Info Box */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <div className="flex gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs sm:text-sm text-blue-700">
            This chart shows your daily study duration in minutes. Keep consistent to see your progress grow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;