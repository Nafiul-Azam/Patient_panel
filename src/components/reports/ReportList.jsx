import ReportCard from "./ReportCard";

function ReportList({ reports }) {
  return (
    <div className="stack-list">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}

export default ReportList;
