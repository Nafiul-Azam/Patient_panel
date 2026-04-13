import SectionTitle from "../components/common/SectionTitle";
import BillingSummaryCard from "../components/billing/BillingSummaryCard";
import PaymentHistoryList from "../components/billing/PaymentHistoryList";
import MoneyReceiptCard from "../components/billing/MoneyReceiptCard";
import InvoiceViewer from "../components/billing/InvoiceViewer";
import { payments } from "../data/patientData";

function PatientBillingPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Billing and payment history"
        subtitle="Money receipts, invoices, dues, and payment timeline"
      />
      <BillingSummaryCard />
      <div className="two-col-grid">
        <PaymentHistoryList payments={payments} />
        <div className="page-stack">
          <MoneyReceiptCard />
          <InvoiceViewer />
        </div>
      </div>
    </div>
  );
}

export default PatientBillingPage;
