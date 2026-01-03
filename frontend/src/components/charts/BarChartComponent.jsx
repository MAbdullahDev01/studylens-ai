import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../ui/Card"; // Imported the Card component

const BarChartComponent = ({ data, xKey, yKey, title }) => {
  return (
    <Card>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Compare your study metrics</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-64 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey={xKey} 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#374151', fontWeight: 'bold' }}
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
            />
            <Bar 
              dataKey={yKey} 
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Info Box */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border border-green-100 rounded-lg">
        <div className="flex gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs sm:text-sm text-green-700">
            Bar charts help you compare different categories and identify patterns in your study habits.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BarChartComponent;