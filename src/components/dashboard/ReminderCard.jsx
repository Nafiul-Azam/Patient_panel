import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import StatusPill from "../common/StatusPill";
import { activeVisit } from "../../data/patientData";

function ReminderCard() {
  return (
    <GlassCard
      title="Upcoming follow-up"
      subtitle="Friendly reminder from your care team"
      rightSlot={<StatusPill label="follow-up" />}
      className="compact-reminder-card"
    >
      <p className="reminder-date">{activeVisit.followUpDate}</p>
      <p className="reminder-note">
        {activeVisit.doctor} asked for a review consultation.
      </p>
      <div className="inline-actions">
        <Link to="/patient/messages">Message doctor</Link>
        <Link to="/patient/history">View previous visit</Link>
      </div>
    </GlassCard>
  );
}

export default ReminderCard;
