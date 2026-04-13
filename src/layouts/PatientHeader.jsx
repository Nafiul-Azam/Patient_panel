import { patientProfile } from "../data/patientData";

function PatientHeader({ title, subtitle }) {
  return (
    <header className="patient-header glass-card">
      <div>
        <p className="eyebrow">Patient Workspace</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="patient-mini-profile">
        <div className="avatar">{patientProfile.name[0]}</div>
        <div>
          <p>{patientProfile.name}</p>
          <span>{patientProfile.patientId}</span>
        </div>
      </div>
    </header>
  );
}

export default PatientHeader;
