import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function IncomeVsExpenseChart({ income, expense }) {
  const data = [
    { name: "Income", amount: income },
    { name: "Expense", amount: expense },
  ];

  return (
    <div className="chart-card">
      {/* Heading */}
      <h2 className="chart-title">Income - Expense Chart</h2>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === "Income" ? "#22c55e" : "#ef4444"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
