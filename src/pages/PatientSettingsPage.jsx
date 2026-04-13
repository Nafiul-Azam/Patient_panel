import AccountSettingsPanel from "../components/profile/AccountSettingsPanel";
import SectionTitle from "../components/common/SectionTitle";
import SecuritySection from "../components/profile/SecuritySection";
import SettingsSection from "../components/profile/SettingsSection";

function PatientSettingsPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Settings"
        subtitle="Notification, language, privacy, and security controls"
      />
      <SettingsSection />
      <AccountSettingsPanel />
      <SecuritySection />
    </div>
  );
}

export default PatientSettingsPage;
