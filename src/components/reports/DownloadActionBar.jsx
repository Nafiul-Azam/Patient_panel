import { downloadTextFile } from "../../utils/fileActions";

function DownloadActionBar() {
  const handleDownload = () => {
    downloadTextFile("report-preview.txt", [
      "Report ID: REP-701",
      "Test: CBC Panel",
      "Status: Approved",
      "Summary: Within normal range with mild neutrophil variation.",
    ]);
  };

  return (
    <div className="inline-actions report-actions-row">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        View Report
      </button>
      <button type="button" onClick={handleDownload}>
        Download Report
      </button>
      <button type="button" onClick={() => window.print()}>
        Print Report
      </button>
    </div>
  );
}

export default DownloadActionBar;
