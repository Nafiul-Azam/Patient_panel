function VisitTimeline({ visits }) {
  return (
    <aside className="glass-card timeline-box">
      <h3>Recent activity timeline</h3>
      <ul>
        {visits.slice(0, 3).map((visit) => (
          <li key={visit.id}>
            <p>{visit.date}</p>
            <strong>{visit.department}</strong>
            <span>{visit.status}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default VisitTimeline;
