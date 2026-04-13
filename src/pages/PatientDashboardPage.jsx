import { useState } from "react";
import ActiveTokenCard from "../components/dashboard/ActiveTokenCard";
import CareSnapshotCard from "../components/dashboard/CareSnapshotCard";
import NotificationPreviewCard from "../components/dashboard/NotificationPreviewCard";
import PatientIdCard from "../components/dashboard/PatientIdCard";
import QuickActionGrid from "../components/dashboard/QuickActionGrid";
import ReminderCard from "../components/dashboard/ReminderCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SectionTitle from "../components/common/SectionTitle";

function PatientDashboardPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="page-stack">
      <SectionTitle
        title="Patient dashboard"
        subtitle="Admission, token, notifications, and quick care actions"
        showBack={false}
        searchPlaceholder="সেবা, রিপোর্ট, নোটিফিকেশন খুঁজুন"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />
      <div className="dashboard-grid">
        <div className="db-item db-welcome">
          <WelcomeCard />
        </div>
        <div className="db-item db-token">
          <ActiveTokenCard />
        </div>
        <div className="db-item db-id">
          <PatientIdCard />
        </div>
        <div className="db-item db-reminder">
          <ReminderCard />
        </div>
        <div className="db-item db-snapshot">
          <CareSnapshotCard />
        </div>
        <div className="db-item db-actions">
          <QuickActionGrid />
        </div>
        <div className="db-item db-notifications">
          <NotificationPreviewCard />
        </div>
      </div>
    </div>
  );
}

export default PatientDashboardPage;
