import GlassCard from "../components/common/GlassCard";
import StatusPill from "../components/common/StatusPill";
import SectionTitle from "../components/common/SectionTitle";
import { activeVisit, patientProfile } from "../data/patientData";

function PatientTokenPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Token and serial"
        subtitle="Clinic queue status in a high-visibility patient-first card"
      />
      <GlassCard
        className="token-live-card"
        rightSlot={<StatusPill label={activeVisit.status} />}
      >
        <p className="eyebrow">Live token</p>
        <h2 className="live-token">{activeVisit.tokenNumber}</h2>
        <div className="token-meta-grid">
          <p>Patient: {patientProfile.name}</p>
          <p>ID: {patientProfile.patientId}</p>
          <p>Doctor: {activeVisit.doctor}</p>
          <p>Department: {activeVisit.department}</p>
          <p>Chamber: {activeVisit.chamber}</p>
          <p>Estimated call: 20 minutes</p>
        </div>
      </GlassCard>
    </div>
  );
}

export default PatientTokenPage;
