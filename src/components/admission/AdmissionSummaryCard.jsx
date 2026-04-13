import GlassCard from "../common/GlassCard";

function AdmissionSummaryCard() {
  return (
    <GlassCard
      title="Admission summary"
      subtitle="Post-admission quick overview"
    >
      <ul className="info-list">
        <li>
          <span>Admission Reference</span>
          <strong>ADM-100842</strong>
        </li>
        <li>
          <span>Department</span>
          <strong>Medicine</strong>
        </li>
        <li>
          <span>Doctor</span>
          <strong>Dr. Farzana Karim</strong>
        </li>
        <li>
          <span>Visit Type</span>
          <strong>Follow-up</strong>
        </li>
      </ul>
    </GlassCard>
  );
}

export default AdmissionSummaryCard;
