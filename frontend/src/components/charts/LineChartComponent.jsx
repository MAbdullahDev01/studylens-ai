import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Card from "../ui/Card"; // Import your Card component

const LineChartComponent = ({ data, xKey, yKey, title }) => {
  return (
    <Card>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Track your progress over time</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-64 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis 
              dataKey={xKey} 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#9CA3AF"
              style={{ fontSize: '0.75rem' }}
              tickLine={false}
              axisLine={false}
              dx={-10}
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
              dataKey={yKey} 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Info Box */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border border-green-100 rounded-lg">
        <div className="flex gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs sm:text-sm text-green-700">
            Line charts are ideal for visualizing trends and seeing how your performance evolves day by day.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LineChartComponent;