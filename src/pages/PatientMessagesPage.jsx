import { useMemo, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import ChatWindow from "../components/messages/ChatWindow";
import ConversationList from "../components/messages/ConversationList";
import MessageComposer from "../components/messages/MessageComposer";
import { chatMessages, conversations } from "../data/patientData";

function PatientMessagesPage() {
  const [searchText, setSearchText] = useState("");
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const filteredConversations = useMemo(() => {
    if (!searchText.trim()) return conversations;
    const q = searchText.toLowerCase();
    return conversations.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.lastMessage.toLowerCase().includes(q),
    );
  }, [searchText]);

  const activeConversation =
    conversations.find((item) => item.id === activeId) || conversations[0];

  const handleSelect = (id) => {
    setActiveId(id);
    setMobileChatOpen(true);
  };

  return (
    <div className="page-stack">
      <SectionTitle
        title="Messages and doctor communication"
        subtitle="Messenger-style communication with doctor and care support"
        searchPlaceholder="ম্যাসেজ বা নাম খুঁজুন"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />
      <div className="messages-grid">
        <ConversationList
          conversations={filteredConversations}
          activeId={activeId}
          onSelect={handleSelect}
          className={mobileChatOpen ? "mobile-hidden" : ""}
        />
        <div
          className={`page-stack chat-pane ${mobileChatOpen ? "mobile-open" : ""}`}
        >
          <ChatWindow
            messages={chatMessages}
            conversation={activeConversation}
            onBackMobile={() => setMobileChatOpen(false)}
          />
          <MessageComposer />
        </div>
      </div>
    </div>
  );
}

export default PatientMessagesPage;
