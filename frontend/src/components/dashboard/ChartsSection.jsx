import LineChartComponent from "../charts/LineChartComponent";
import BarChartComponent from "../charts/BarChartComponent";

const sampleData = [
  { date: "2026-01-01", duration: 60 },
  { date: "2026-01-02", duration: 45 },
  { date: "2026-01-03", duration: 90 },
  { date: "2026-01-04", duration: 30 },
];

const ChartsSection = () => {
  return (
    <div className="space-y-6">
      <LineChartComponent
        title="Study Duration Over Time"
        data={sampleData}
        xKey="date"
        yKey="duration"
      />

      <BarChartComponent
        title="Daily Study Duration"
        data={sampleData}
        xKey="date"
        yKey="duration"
      />
    </div>
  );
};

export default ChartsSection;
