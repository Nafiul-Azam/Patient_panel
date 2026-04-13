import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";
import StatusPill from "../common/StatusPill";
import { notifications } from "../../data/patientData";

function NotificationPreviewCard() {
  return (
    <GlassCard
      title="Recent notifications"
      subtitle="Latest alerts and updates"
    >
      <div className="compact-list">
        {notifications.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className={`mini-item-card compact-notice ${item.unread ? "unread" : ""}`.trim()}
          >
            <span className="notice-dot" aria-hidden="true" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.message}</p>
            </div>
            <StatusPill label={item.type} />
          </article>
        ))}
      </div>
      <Link className="text-link" to="/patient/notifications">
        Open notification center
      </Link>
    </GlassCard>
  );
}

export default NotificationPreviewCard;
