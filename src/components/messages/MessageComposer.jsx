import { useState } from "react";
import { showQuickMessage } from "../../utils/fileActions";

function MessageComposer() {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) {
      showQuickMessage("Please type a message before sending.");
      return;
    }
    showQuickMessage("Message sent successfully.");
    setText("");
  };

  return (
    <form
      className="message-composer"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        placeholder="Type your message to doctor or support..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          showQuickMessage("Attachment support will be enabled in next update.")
        }
      >
        Attach
      </button>
      <button className="primary-btn" type="button" onClick={handleSend}>
        Send
      </button>
    </form>
  );
}

export default MessageComposer;
