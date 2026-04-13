import { Link } from "react-router-dom";
import StatusPill from "../common/StatusPill";

function VisitHistoryCard({ visit }) {
  return (
    <article className="visit-card glass-card">
      <div className="visit-card-head">
        <div>
          <h3>{visit.date}</h3>
          <p>{visit.id}</p>
        </div>
        <StatusPill label={visit.status} />
      </div>
      <p>
        {visit.doctor} • {visit.department} • {visit.type}
      </p>
      <p>{visit.complaint}</p>
      <div className="inline-actions">
        <Link to={`/patient/history?visit=${visit.id}`}>View Details</Link>
        <Link to={`/patient/prescriptions?visit=${visit.id}`}>
          View Prescription
        </Link>
        <Link to="/patient/billing">View Bill</Link>
        <Link to="/patient/reports">View Report</Link>
      </div>
    </article>
  );
}

export default VisitHistoryCard;
