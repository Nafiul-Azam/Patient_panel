import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import { quickActions } from "../../data/patientData";

const actionRouteMap = {
  "View Prescription": "/patient/prescriptions",
  "View Lab Report": "/patient/reports",
  "Billing History": "/patient/billing",
  "Contact Doctor": "/patient/messages",
  "Download Money Receipt": "/patient/billing",
};

function QuickActionGrid() {
  return (
    <GlassCard title="Quick actions" subtitle="Most used patient tasks">
      <div className="quick-action-grid">
        {quickActions.map((action) => (
          <Link
            key={action}
            to={actionRouteMap[action]}
            className="quick-action-btn"
          >
            {action}
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}

export default QuickActionGrid;
