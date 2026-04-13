const toneMap = {
  waiting: "status-waiting",
  pending: "status-waiting",
  completed: "status-completed",
  approved: "status-completed",
  due: "status-alert",
  alert: "status-alert",
  info: "status-info",
  "lab pending": "status-alert",
  "under review": "status-waiting",
  "follow-up": "status-follow-up",
};

function StatusPill({ label }) {
  const normalized = label.toLowerCase();
  const toneClass = toneMap[normalized] || "status-info";
  return <span className={`status-pill ${toneClass}`}>{label}</span>;
}

export default StatusPill;
