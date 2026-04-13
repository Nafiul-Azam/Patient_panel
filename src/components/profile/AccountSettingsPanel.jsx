import { useState } from "react";
import GlassCard from "../common/GlassCard";
import { showQuickMessage } from "../../utils/fileActions";

function AccountSettingsPanel() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (!passwordData.currentPassword || !passwordData.newPassword) {
      showQuickMessage("Please complete all password fields.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showQuickMessage("New password and confirm password did not match.");
      return;
    }

    showQuickMessage("Password updated successfully.");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <GlassCard
      title="Account settings"
      subtitle="Manage password, account safety, and privacy"
    >
      <form className="account-settings-form" onSubmit={handlePasswordSubmit}>
        <label>
          Current password
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          New password
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Confirm new password
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="primary-btn" type="submit">
          Update password
        </button>
      </form>

      <div className="inline-actions">
        <button
          type="button"
          onClick={() =>
            showQuickMessage("Privacy settings synced successfully.")
          }
        >
          Save privacy settings
        </button>
        <button
          type="button"
          onClick={() =>
            showQuickMessage("Two-factor authentication setup coming soon.")
          }
        >
          Enable 2FA
        </button>
      </div>
    </GlassCard>
  );
}

export default AccountSettingsPanel;
