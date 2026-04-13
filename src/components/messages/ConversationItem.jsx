function ConversationItem({ item, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`conversation-item ${isActive ? "active" : ""}`.trim()}
      onClick={() => onSelect(item.id)}
    >
      <div>
        <strong>{item.name}</strong>
        <p>{item.lastMessage}</p>
      </div>
      {!!item.unread && <span className="unread-badge">{item.unread}</span>}
    </button>
  );
}

export default ConversationItem;
