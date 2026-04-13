import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import { patientProfile } from "../../data/patientData";

function ProfileCard({ profile = patientProfile }) {
  return (
    <GlassCard
      title="Patient profile"
      subtitle="Trusted identity and care details"
      className="profile-hero-card"
    >
      <div className="profile-card-top">
        <div className="avatar large">{profile.name[0]}</div>
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.patientId}</p>
          <p>Profile completeness: {profile.profileCompleteness}%</p>
        </div>
      </div>
      <div className="profile-meta-grid">
        <article>
          <p>Blood Group</p>
          <strong>{profile.bloodGroup}</strong>
        </article>
        <article>
          <p>Registered</p>
          <strong>{profile.registeredDate}</strong>
        </article>
        <article>
          <p>Preferred Language</p>
          <strong>{profile.preferredLanguage}</strong>
        </article>
      </div>
      <div className="inline-actions">
        <Link className="compact-action-btn" to="/patient/profile?edit=true">
          Edit personal details
        </Link>
        <Link className="compact-action-btn" to="/patient/settings">
          Open account settings
        </Link>
      </div>
    </GlassCard>
  );
}

export default ProfileCard;
