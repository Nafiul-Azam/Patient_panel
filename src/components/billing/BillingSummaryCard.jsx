import GlassCard from "../common/GlassCard";
import { billingSummary } from "../../data/patientData";

function BillingSummaryCard() {
  return (
    <GlassCard title="Financial summary" subtitle="Clear billing snapshot">
      <div className="metric-row billing-metrics">
        <div>
          <p>Total paid</p>
          <strong>BDT {billingSummary.totalPaid}</strong>
        </div>
        <div>
          <p>Current due</p>
          <strong>BDT {billingSummary.totalDue}</strong>
        </div>
        <div>
          <p>Recent payment</p>
          <strong>BDT {billingSummary.recentPayment}</strong>
        </div>
      </div>
    </GlassCard>
  );
}

export default BillingSummaryCard;
