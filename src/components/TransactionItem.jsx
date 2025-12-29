import { useState, useEffect } from "react";
function TransactionItem({ item,deleteTransaction }) {
  return (
    <div
          key={item.id}
          className={`card-item ${
            item.amount >= 0 ? "income" : "expense"
          }`}
        >
          <div className="card-left">
            <p className="card-title">{item.text}</p>
            <span className="card-date">
              {new Date(item.id).toLocaleDateString()}
            </span>
          </div>

          <div className="card-right">
            <span className="card-amount">
              ${Math.abs(item.amount)}
            </span>
            <button
              className="card-delete"
              onClick={() => deleteTransaction(item.id)}
            >
              ✕
            </button>
          </div>
        </div>
  );
}
export default TransactionItem;
/*


    <div
      key={item.id}
      className={`chat-bubble ${
        item.amount >= 0 ? "income" : "expense"
      }`}
    >
      <span className="chat-text">{item.text}</span>
      <span className="chat-amount">
        ₹{Math.abs(item.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(item.id)}
      >
        ✕
      </button>
    </div>
*/
