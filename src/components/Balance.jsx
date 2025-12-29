function Balance({ transactions }) {
  const total = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="balance">
    <h2>
      Balance: ${total.toFixed(2)}
    </h2>
    </div>
  );
}
export default Balance;