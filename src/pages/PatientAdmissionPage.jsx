import AdmissionForm from "../components/admission/AdmissionForm";
import AdmissionSummaryCard from "../components/admission/AdmissionSummaryCard";
import TokenPreviewCard from "../components/admission/TokenPreviewCard";
import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";

function PatientAdmissionPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Admission & registration"
        subtitle="New or existing patient flow with token generation preview"
      />
      <div className="two-col-grid">
        <GlassCard
          title="Admission form"
          subtitle="Complete details to start visit"
        >
          <AdmissionForm />
        </GlassCard>
        <div className="page-stack">
          <AdmissionSummaryCard />
          <TokenPreviewCard />
        </div>
      </div>
    </div>
  );
}

export default PatientAdmissionPage;
