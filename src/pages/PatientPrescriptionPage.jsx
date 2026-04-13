import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import PrescriptionViewer from "../components/prescription/PrescriptionViewer";
import { visits } from "../data/patientData";

function PatientPrescriptionPage() {
  const [searchParams] = useSearchParams();
  const visitId = searchParams.get("visit");

  const selectedVisit = useMemo(
    () => visits.find((visit) => visit.id === visitId) || visits[0],
    [visitId],
  );

  return (
    <div className="page-stack">
      <SectionTitle
        title="Prescription"
        subtitle="Medical document style view with download and print actions"
      />
      <PrescriptionViewer selectedVisit={selectedVisit} />
    </div>
  );
}

export default PatientPrescriptionPage;
