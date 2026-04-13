import SectionTitle from "../components/common/SectionTitle";
import SupportRequestForm from "../components/messages/SupportRequestForm";

function PatientSupportPage() {
  return (
    <div className="page-stack">
      <SectionTitle
        title="Support request"
        subtitle="Create a ticket for admission, billing, report, or technical issues"
      />
      <SupportRequestForm />
    </div>
  );
}

export default PatientSupportPage;
