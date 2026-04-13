import { NavLink } from "react-router-dom";
import { navItems, patientProfile } from "../data/patientData";
import PatientNavIcon from "../components/common/PatientNavIcon";
import patientAvatar from "../assets/patient-avatar.svg";

function PatientMobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Patient primary navigation">
      <div className="mobile-nav-blur-layer" aria-hidden="true" />
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `mobile-nav-item ${isActive ? "active" : ""}`.trim()
          }
        >
          <span className="mobile-nav-icon-wrap">
            {item.path === "/patient/profile" ? (
              <img
                src={patientAvatar}
                alt={patientProfile.name}
                className="mobile-nav-avatar"
              />
            ) : (
              <PatientNavIcon name={item.icon} className="mobile-nav-icon" />
            )}
          </span>
          <span>{item.label.replace("My ", "")}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default PatientMobileBottomNav;
