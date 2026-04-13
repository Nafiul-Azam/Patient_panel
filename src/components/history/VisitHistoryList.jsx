import VisitHistoryCard from "./VisitHistoryCard";
import EmptyState from "../common/EmptyState";

function VisitHistoryList({ visits }) {
  if (!visits.length) {
    return (
      <EmptyState
        title="No visits found"
        description="Try another filter to see your history records."
      />
    );
  }

  return (
    <div className="stack-list">
      {visits.map((visit) => (
        <VisitHistoryCard key={visit.id} visit={visit} />
      ))}
    </div>
  );
}

export default VisitHistoryList;
