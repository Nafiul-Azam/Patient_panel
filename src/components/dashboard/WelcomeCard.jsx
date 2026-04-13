import GlassCard from "../common/GlassCard";
import { activeVisit, patientProfile } from "../../data/patientData";

function WelcomeCard() {
  return (
    <GlassCard
      className="welcome-card"
      title={`Hello, ${patientProfile.name.split(" ")[0]}`}
      subtitle="Your care journey is organized and up-to-date."
    >
      <div className="metric-row">
        <div>
          <p>Next appointment</p>
          <strong>{activeVisit.nextAppointment}</strong>
        </div>
        <div>
          <p>Follow-up date</p>
          <strong>{activeVisit.followUpDate}</strong>
        </div>
      </div>
    </GlassCard>
  );
}

export default WelcomeCard;
