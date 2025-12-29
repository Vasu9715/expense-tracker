import { BarChart, Bar, XAxis, YAxis } from "recharts";

function ExpenseChart({ data }) {
  return (
    <div className="chart">
    <BarChart width={300} height={200} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="amount" fill="#4CAF50" />
    </BarChart>
    </div>
  );
}
export default ExpenseChart;