import GlassCard from "../common/GlassCard";
import StatusPill from "../common/StatusPill";
import { activeVisit } from "../../data/patientData";

function ActiveTokenCard() {
  return (
    <GlassCard
      className="token-card"
      title="Current serial token"
      rightSlot={<StatusPill label={activeVisit.status} />}
      subtitle={activeVisit.admissionReference}
    >
      <div className="token-value">{activeVisit.tokenNumber}</div>
      <p>
        {activeVisit.department} • {activeVisit.doctor} • {activeVisit.chamber}
      </p>
    </GlassCard>
  );
}

export default ActiveTokenCard;
