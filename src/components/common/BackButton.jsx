import { useNavigate } from "react-router-dom";

function BackButton({ label = "Back" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="back-btn"
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <span aria-hidden="true">←</span>
      <span>{label}</span>
    </button>
  );
}

export default BackButton;
