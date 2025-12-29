function MonthlyBreakdown({ data }) {
  return (
    <div className="monthly">
      <h3>Monthly Breakdown</h3>
      <ul>
        {Object.entries(data).map(([month, amount]) => (
          <li key={month}>
            {month}: ${amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
