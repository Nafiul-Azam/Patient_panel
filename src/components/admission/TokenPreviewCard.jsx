import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";

function TokenPreviewCard() {
  return (
    <GlassCard
      title="Token preview"
      subtitle="Generated serial for this admission"
    >
      <div className="token-preview">A-17</div>
      <p>Your estimated call window is 20 to 30 minutes.</p>
      <div className="inline-actions">
        <Link to="/patient/billing">Download money receipt</Link>
        <Link to="/patient/token">Open token page</Link>
      </div>
    </GlassCard>
  );
}

export default TokenPreviewCard;
