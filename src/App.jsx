import { useState, useEffect } from "react";
import "./App.css";
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Chart from './components/Chart';
//import ExpenseChart from './components/ExpenseChart';
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };


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
      <Chart transactions={transactions}/>
      {//chartData.length>0?<ExpenseChart data={chartData} />:<></>
      }
      
      </div>
    </>
  );
}
export default App;
