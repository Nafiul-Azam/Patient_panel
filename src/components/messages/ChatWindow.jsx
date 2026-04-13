function ChatWindow({ messages, conversation, onBackMobile }) {
  return (
    <section className="glass-card chat-window">
      <header className="chat-window-head">
        <button type="button" className="chat-back-btn" onClick={onBackMobile}>
          ←
        </button>
        <div>
          <h3>{conversation?.name || "Doctor communication"}</h3>
          <p>
            {conversation?.role || "Doctor"} •{" "}
            {conversation?.status || "replied"}
          </p>
        </div>
      </header>
      <div className="chat-stream">
        {messages.map((item) => (
          <div
            key={item.id}
            className={`chat-bubble ${item.from === "patient" ? "from-patient" : "from-doctor"}`}
          >
            <p>{item.text}</p>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChatWindow;
