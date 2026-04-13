import { Link } from "react-router-dom";
import StatusPill from "../common/StatusPill";
import { downloadTextFile } from "../../utils/fileActions";

function ReportCard({ report }) {
  const handleDownload = () => {
    downloadTextFile(`report-${report.id}.txt`, [
      `Report: ${report.title}`,
      `Report ID: ${report.id}`,
      `Department: ${report.department}`,
      `Date: ${report.date}`,
      `Status: ${report.status}`,
      `Ordered By: ${report.orderedBy}`,
    ]);
  };

  return (
    <article className="glass-card report-card">
      <div className="visit-card-head">
        <div>
          <h3>{report.title}</h3>
          <p>
            {report.department} • {report.date}
          </p>
        </div>
        <StatusPill label={report.status} />
      </div>
      <p>Ordered by {report.orderedBy}</p>
      <div className="inline-actions report-actions-row">
        <Link to="/patient/reports">View Report</Link>
        <button type="button" onClick={handleDownload}>
          Download
        </button>
        <button type="button" onClick={() => window.print()}>
          Print
        </button>
      </div>
    </article>
  );
}

export default ReportCard;
