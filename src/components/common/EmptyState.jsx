function EmptyState({ title, description }) {
  return (
    <div className="empty-state">
      <p className="empty-state-title">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;
