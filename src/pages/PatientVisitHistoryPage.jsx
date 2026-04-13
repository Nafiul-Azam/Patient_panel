import { useMemo, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import VisitFilterBar from "../components/history/VisitFilterBar";
import VisitHistoryList from "../components/history/VisitHistoryList";
import VisitTimeline from "../components/history/VisitTimeline";
import { visitFilters, visits } from "../data/patientData";

function PatientVisitHistoryPage() {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVisits = useMemo(() => {
    let result = visits;

    if (activeFilter === "All") result = visits;
    if (activeFilter === "Recent") result = visits.slice(0, 2);
    if (activeFilter === "Follow-up") {
      result = visits.filter((v) => v.type === "Follow-up");
    }
    if (activeFilter === "Prescription") {
      result = visits.filter((v) => v.prescription === "Available");
    }
    if (activeFilter === "Reports Available") {
      result = visits.filter((v) => v.lab === "Available");
    }
    if (activeFilter === "Completed" || activeFilter === "Pending") {
      result = visits.filter(
        (v) => v.status.toLowerCase() === activeFilter.toLowerCase(),
      );
    }

    if (!searchText.trim()) return result;

    const q = searchText.toLowerCase();
    return result.filter(
      (v) =>
        v.id.toLowerCase().includes(q) ||
        v.doctor.toLowerCase().includes(q) ||
        v.department.toLowerCase().includes(q) ||
        v.complaint.toLowerCase().includes(q),
    );
  }, [activeFilter, searchText]);

  return (
    <div className="page-stack">
      <SectionTitle
        title="Visit history"
        subtitle="Timeline-style previous consultations with quick document access"
        searchPlaceholder="ভিজিট, ডাক্তার, বিভাগ খুঁজুন"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />
      <VisitFilterBar
        filters={visitFilters}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />
      <div className="two-col-grid">
        <VisitHistoryList visits={filteredVisits} />
        <VisitTimeline visits={visits} />
      </div>
    </div>
  );
}

export default PatientVisitHistoryPage;
