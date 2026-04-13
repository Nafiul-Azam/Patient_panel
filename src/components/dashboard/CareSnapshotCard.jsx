import GlassCard from "../common/GlassCard";
import StatusPill from "../common/StatusPill";
import { billingSummary, prescription, reports } from "../../data/patientData";

function CareSnapshotCard() {
  return (
    <GlassCard
      title="Care snapshots"
      subtitle="Prescription, report, and billing highlights"
      className="compact-snapshot-card"
    >
      <div className="compact-list">
        <article>
          <div>
            <h4>Latest prescription</h4>
            <p>
              {prescription.date} • {prescription.doctor}
            </p>
          </div>
          <StatusPill label="info" />
        </article>
        <article>
          <div>
            <h4>Latest report</h4>
            <p>
              {reports[0].title} • {reports[0].status}
            </p>
          </div>
          <StatusPill label={reports[0].status} />
        </article>
        <article>
          <div>
            <h4>Payment due</h4>
            <p>Current due BDT {billingSummary.totalDue}</p>
          </div>
          <StatusPill label={billingSummary.totalDue ? "alert" : "completed"} />
        </article>
      </div>
    </GlassCard>
  );
}

export default CareSnapshotCard;
