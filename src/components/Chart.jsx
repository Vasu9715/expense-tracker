import { useState } from "react";
import MonthlyChart from "./MonthlyChart";
import IncomeVsExpenseChart from "./IncomeVsExpenseChart";
export default function Charts({ transactions }) {
  const [showIncomeVsExpense, setShowIncomeVsExpense] = useState(false);

  // Totals
  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <>
    {transactions?.length>0?
        <div className="charts-container">
        {/* Toggle */}
        <label className="switch">
            <input
            type="checkbox"
            checked={showIncomeVsExpense}
            onChange={() => setShowIncomeVsExpense(!showIncomeVsExpense)}
            />
            <span className="slider"></span>
        </label>

        {/* Charts */}
        {showIncomeVsExpense ? (
            <IncomeVsExpenseChart income={totalIncome} expense={totalExpense} />
        ) : (
            <MonthlyChart transactions={transactions} />
        )}
        </div>:<></>
    }
</>
  );
}
