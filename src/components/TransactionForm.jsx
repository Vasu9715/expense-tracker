import { useState, useEffect } from "react";
function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount
    });

    setText("");
    setAmount("");
  };

  return (
    <form className="chat-input" onSubmit={onSubmit}>
  <input
    type="text"
    placeholder="e.g. Coffee"
    value={text}
    onChange={(e) => setText(e.target.value)}
    required
  />
  <input
    type="number"
    placeholder="-150"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    required
  />
  <button>➤</button>
</form>

  );
}
export default TransactionForm;