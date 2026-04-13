import StatusPill from "../common/StatusPill";

function PaymentHistoryList({ payments }) {
  return (
    <div className="stack-list">
      {payments.map((item) => (
        <article key={item.id} className="glass-card mini-item-card">
          <div>
            <h4>{item.type}</h4>
            <p>
              {item.id} • {item.date} • {item.method}
            </p>
          </div>
          <div className="payment-right">
            <strong>BDT {item.amount}</strong>
            <StatusPill label={item.status} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default PaymentHistoryList;
