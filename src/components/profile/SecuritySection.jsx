import { Link, useNavigate } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import { showQuickMessage } from "../../utils/fileActions";

function SecuritySection() {
  const navigate = useNavigate();

  const handleLogout = () => {
    showQuickMessage("You have been logged out successfully.");
    navigate("/patient/dashboard");
  };

  return (
    <GlassCard title="Security and privacy">
      <div className="inline-actions security-actions">
        <Link to="/patient/profile?edit=true">Edit profile</Link>
        <Link to="/patient/settings">Change password</Link>
        <Link to="/patient/settings">Privacy settings</Link>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </GlassCard>
  );
}

export default SecuritySection;
