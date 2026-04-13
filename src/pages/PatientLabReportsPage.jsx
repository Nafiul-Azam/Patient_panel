import { useMemo, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import ReportList from "../components/reports/ReportList";
import ReportViewer from "../components/reports/ReportViewer";
import { reports } from "../data/patientData";

function PatientLabReportsPage() {
  const [searchText, setSearchText] = useState("");
  const filteredReports = useMemo(() => {
    if (!searchText.trim()) return reports;

    const q = searchText.toLowerCase();
    return reports.filter(
      (report) =>
        report.title.toLowerCase().includes(q) ||
        report.department.toLowerCase().includes(q) ||
        report.id.toLowerCase().includes(q),
    );
  }, [searchText]);

  return (
    <div className="page-stack">
      <SectionTitle
        title="Lab reports and documents"
        subtitle="Digital report hub for approved, pending, and historical documents"
        searchPlaceholder="রিপোর্ট খুঁজুন"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />
      <div className="two-col-grid">
        <ReportList reports={filteredReports} />
        <ReportViewer />
      </div>
    </div>
  );
}

export default PatientLabReportsPage;
