import GlassCard from "../common/GlassCard";
import { showQuickMessage } from "../../utils/fileActions";

function InvoiceViewer() {
  return (
    <GlassCard
      title="Invoice preview"
      subtitle="Future-ready for online payment gateway integration"
    >
      <div className="receipt-box">
        <p>Invoice: INV-1001</p>
        <p>Service: Cardiology package</p>
        <p>Consultation fee: BDT 1200</p>
        <p>Test fee: BDT 600</p>
        <p>Total due: BDT 600</p>
      </div>
      <button
        className="primary-btn"
        type="button"
        onClick={() =>
          showQuickMessage("Online payment gateway integration is coming soon.")
        }
      >
        Pay online (coming soon)
      </button>
    </GlassCard>
  );
}

export default InvoiceViewer;
