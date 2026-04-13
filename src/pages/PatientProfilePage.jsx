import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileInfoSection from "../components/profile/ProfileInfoSection";
import SecuritySection from "../components/profile/SecuritySection";
import SettingsSection from "../components/profile/SettingsSection";
import { patientProfile } from "../data/patientData";

function PatientProfilePage() {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [profileState, setProfileState] = useState(patientProfile);
  const [settingsState, setSettingsState] = useState({
    smsNotifications: true,
    emailNotifications: true,
    followUpReminders: true,
    preferredLanguage: patientProfile.preferredLanguage,
  });

  const startInEdit = useMemo(
    () => searchParams.get("edit") === "true",
    [searchParams],
  );

  return (
    <div className="page-stack">
      <SectionTitle
        title="My profile"
        subtitle="Manage account details, emergency contact, and preferences"
        searchPlaceholder="সেটিংস বা তথ্য খুঁজুন"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />
      <ProfileCard profile={profileState} />
      <ProfileInfoSection
        profile={profileState}
        startInEdit={startInEdit}
        onSave={setProfileState}
      />
      <SettingsSection
        settings={settingsState}
        onSaveSettings={setSettingsState}
      />
      <SecuritySection />
    </div>
  );
}

export default PatientProfilePage;
