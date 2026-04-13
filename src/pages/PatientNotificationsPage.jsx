import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";
import StatusPill from "../components/common/StatusPill";
import { notifications } from "../data/patientData";

function PatientNotificationsPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Notification center"
        subtitle="Follow-up reminders, billing alerts, and doctor updates"
      />
      <div className="stack-list">
        {notifications.map((item) => (
          <GlassCard
            key={item.id}
            title={item.title}
            subtitle={item.date}
            rightSlot={<StatusPill label={item.type} />}
          >
            <p>{item.message}</p>
            {item.unread && <span className="unread-badge">Unread</span>}
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export default PatientNotificationsPage;
