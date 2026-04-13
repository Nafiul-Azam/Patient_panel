import ConversationItem from "./ConversationItem";

function ConversationList({
  conversations,
  activeId,
  onSelect,
  className = "",
}) {
  return (
    <aside className={`glass-card conversation-list ${className}`.trim()}>
      <h3>Conversations</h3>
      {conversations.map((item) => (
        <ConversationItem
          key={item.id}
          item={item}
          isActive={item.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </aside>
  );
}

export default ConversationList;
