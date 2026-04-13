import GlassCard from "../common/GlassCard";
import { patientProfile } from "../../data/patientData";

function PatientIdCard() {
  return (
    <GlassCard title="Patient identity" subtitle="Verified record details">
      <ul className="info-list">
        <li>
          <span>Patient ID</span>
          <strong>{patientProfile.patientId}</strong>
        </li>
        <li>
          <span>Phone</span>
          <strong>{patientProfile.phone}</strong>
        </li>
        <li>
          <span>Blood Group</span>
          <strong>{patientProfile.bloodGroup}</strong>
        </li>
      </ul>
    </GlassCard>
  );
}

export default PatientIdCard;
