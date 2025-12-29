import { useState, useEffect } from "react";
import "./App.css";
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpenseChart from './components/ExpenseChart';
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
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

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));

  }, [transactions]);
  return (
    <>
    <div className="app">
      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      {chartData.length>0?<ExpenseChart data={chartData} />:<></>}
      
      </div>
    </>
  );
}
export default App;
