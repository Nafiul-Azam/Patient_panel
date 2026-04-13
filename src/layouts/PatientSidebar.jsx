import { NavLink } from "react-router-dom";
import { activeVisit, navItems, patientProfile } from "../data/patientData";
import PatientNavIcon from "../components/common/PatientNavIcon";

function PatientSidebar() {
  return (
    <aside className="patient-sidebar">
      <div className="sidebar-shape" aria-hidden="true" />

      <div className="brand-block">
        <p className="brand-pill">Patient Panel</p>
        <h1>Update</h1>
        <p>Self-service care portal</p>
      </div>

      <div className="sidebar-user-chip">
        <div className="avatar">{patientProfile.name[0]}</div>
        <div>
          <strong>{patientProfile.name}</strong>
          <p>{patientProfile.patientId}</p>
        </div>
      </div>

      <p className="sidebar-section-label">MAIN MENU</p>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`.trim()
            }
          >
            <span className="sidebar-icon">
              <PatientNavIcon name={item.icon} />
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-status-card">
        <p>Live Token</p>
        <h3>{activeVisit.tokenNumber}</h3>
        <span>
          {activeVisit.department} • {activeVisit.status}
        </span>
      </div>

      <div className="sidebar-footer-box">
        <p>Need help?</p>
        <NavLink to="/patient/support">Contact Support</NavLink>
      </div>
    </aside>
  );
}

export default PatientSidebar;
