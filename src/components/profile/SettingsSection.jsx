import { useEffect, useState } from "react";
import GlassCard from "../common/GlassCard";
import { showQuickMessage } from "../../utils/fileActions";

function SettingsSection({ settings, onSaveSettings }) {
  const [localSettings, setLocalSettings] = useState(
    settings || {
      smsNotifications: true,
      emailNotifications: true,
      followUpReminders: true,
      preferredLanguage: "Bangla",
    },
  );

  useEffect(() => {
    if (settings) {
      setLocalSettings(settings);
    }
  }, [settings]);

  const handleToggle = (key) => {
    setLocalSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLanguage = (event) => {
    setLocalSettings((prev) => ({
      ...prev,
      preferredLanguage: event.target.value,
    }));
  };

  const handleSave = () => {
    if (onSaveSettings) {
      onSaveSettings(localSettings);
    }
    showQuickMessage("Settings updated successfully.");
  };

  return (
    <GlassCard
      title="Preferences & notifications"
      subtitle="Customize account behavior"
    >
      <div className="setting-list">
        <label>
          <span>SMS notifications</span>
          <input
            type="checkbox"
            checked={localSettings.smsNotifications}
            onChange={() => handleToggle("smsNotifications")}
          />
        </label>
        <label>
          <span>Email notifications</span>
          <input
            type="checkbox"
            checked={localSettings.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
          />
        </label>
        <label>
          <span>Follow-up reminders</span>
          <input
            type="checkbox"
            checked={localSettings.followUpReminders}
            onChange={() => handleToggle("followUpReminders")}
          />
        </label>
        <label>
          <span>Language (Bangla/English)</span>
          <select
            value={localSettings.preferredLanguage}
            onChange={handleLanguage}
          >
            <option>Bangla</option>
            <option>English</option>
          </select>
        </label>
      </div>
      <div className="inline-actions">
        <button className="primary-btn" type="button" onClick={handleSave}>
          Save preferences
        </button>
      </div>
    </GlassCard>
  );
}

export default SettingsSection;
