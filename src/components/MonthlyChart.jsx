import { BarChart, Bar, XAxis, YAxis } from "recharts";

function MonthlyChart({ transactions }) {
      const getMonthlyBreakdown = (transactions) => {
      return transactions.reduce((acc, item) => {
        const month = new Date(item.id).toLocaleString("default", {
          month: "short",
        });
    
        acc[month] = (acc[month] || 0) + item.amount;
        return acc;
      }, {});
    };
      const monthlyBreakdown = getMonthlyBreakdown(transactions);
        const chartData = Object.entries(monthlyBreakdown).map(
          ([month, amount]) => ({ month, amount })
        );
  return (
    <div className="chart-card">
        <h2 className="chart-title">Monthly Chart</h2>
    <BarChart width={300} height={200} data={chartData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="amount" fill="#4CAF50" />
    </BarChart>
    </div>
  );
}
export default MonthlyChart;