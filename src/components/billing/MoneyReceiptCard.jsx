import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import { downloadTextFile } from "../../utils/fileActions";

function MoneyReceiptCard() {
  const handleReceiptDownload = () => {
    downloadTextFile("money-receipt-MR-42211.txt", [
      "Money Receipt: MR-42211",
      "Patient: Nafisa Rahman",
      "Amount: BDT 1800",
      "Method: Card",
      "Date: 2026-04-11",
    ]);
  };

  return (
    <GlassCard
      title="Latest money receipt"
      subtitle="Printable and downloadable receipt preview"
    >
      <div className="receipt-box">
        <p>Receipt No: MR-42211</p>
        <p>Patient: Nafisa Rahman</p>
        <p>Amount: BDT 1800</p>
        <p>Method: Card</p>
        <p>Date: 2026-04-11</p>
      </div>
      <div className="inline-actions">
        <Link to="/patient/billing">View receipt</Link>
        <button type="button" onClick={handleReceiptDownload}>
          Download receipt
        </button>
      </div>
    </GlassCard>
  );
}

export default MoneyReceiptCard;
