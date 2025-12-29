import { useState, useEffect } from "react";
import TransactionItem from "./TransactionItem";
function TransactionList({ transactions, deleteTransaction }) {
  return (
    <>
    {transactions.length>0? //chat-window
    <div className="card-list">
        {transactions.map((item) => (
            <TransactionItem  key={item.id} item={item} deleteTransaction={deleteTransaction} />
        ))}
    </div>
    :<></>}
    </>
    

  );
}
export default TransactionList;