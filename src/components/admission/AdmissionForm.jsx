import { useNavigate } from "react-router-dom";
import { showQuickMessage } from "../../utils/fileActions";

function AdmissionForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    showQuickMessage("Admission submitted successfully. Your token is ready.");
    navigate("/patient/token");
  };

  return (
    <form className="admission-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input defaultValue="Nafisa Rahman" />
      </label>
      <label>
        Patient ID
        <input defaultValue="PT-2026-0147" readOnly />
      </label>
      <label>
        Phone Number
        <input defaultValue="+880 1712-345678" />
      </label>
      <label>
        Age
        <input type="number" defaultValue="27" />
      </label>
      <label>
        Gender
        <select defaultValue="Female">
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Department
        <select defaultValue="Medicine">
          <option>Medicine</option>
          <option>Cardiology</option>
          <option>Gastroenterology</option>
        </select>
      </label>
      <label className="field-wide">
        Problem / Complaint
        <textarea
          defaultValue="Mild discomfort and frequent acidity"
          rows={3}
        />
      </label>
      <label>
        Preferred Doctor
        <input defaultValue="Dr. Farzana Karim" />
      </label>
      <label>
        Visit Type
        <select defaultValue="Follow-up">
          <option>Follow-up</option>
          <option>Consultation</option>
          <option>Emergency</option>
        </select>
      </label>
      <label>
        Admission Date
        <input type="date" defaultValue="2026-04-13" />
      </label>
      <label className="field-wide">
        Notes
        <textarea placeholder="Add additional patient note" rows={2} />
      </label>
      <button className="primary-btn" type="submit">
        Submit Admission
      </button>
    </form>
  );
}

export default AdmissionForm;
