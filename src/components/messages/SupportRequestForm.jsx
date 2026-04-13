import { useState } from "react";
import { supportCategories } from "../../data/patientData";
import { showQuickMessage } from "../../utils/fileActions";

function SupportRequestForm() {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!subject.trim() || !details.trim()) {
      showQuickMessage("Please add subject and details before submitting.");
      return;
    }
    showQuickMessage(
      "Support ticket submitted. Our team will contact you soon.",
    );
    setSubject("");
    setDetails("");
  };

  return (
    <form className="glass-card support-form" onSubmit={handleSubmit}>
      <h3>Open support request</h3>
      <label>
        Category
        <select defaultValue="Billing issue">
          {supportCategories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Subject
        <input
          placeholder="Short title of your issue"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </label>
      <label>
        Details
        <textarea
          rows={4}
          placeholder="Describe the issue in detail"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
      </label>
      <button className="primary-btn" type="submit">
        Submit ticket
      </button>
    </form>
  );
}

export default SupportRequestForm;
