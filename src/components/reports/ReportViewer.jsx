import GlassCard from "../common/GlassCard";
import DownloadActionBar from "./DownloadActionBar";

function ReportViewer() {
  return (
    <GlassCard
      title="Report preview"
      subtitle="Digital report format ready for PDF integration"
    >
      <div className="report-viewer-box">
        <p>Report ID: REP-701</p>
        <p>Test: CBC Panel</p>
        <p>
          Result summary: Within normal range with mild neutrophil variation.
        </p>
      </div>
      <DownloadActionBar />
    </GlassCard>
  );
}

export default ReportViewer;
