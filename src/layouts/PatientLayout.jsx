import { Outlet, useLocation } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";
import PatientMobileBottomNav from "./PatientMobileBottomNav";
import PatientHeader from "./PatientHeader";

const pageMap = {
  "/patient/dashboard": {
    title: "Welcome back",
    subtitle: "Track token, follow-up, and health updates in one calm space.",
  },
  "/patient/admission": {
    title: "Patient admission",
    subtitle: "Complete admission in minutes and receive your serial token.",
  },
  "/patient/token": {
    title: "Live token status",
    subtitle: "Stay ready with real-time queue status and call estimate.",
  },
  "/patient/history": {
    title: "Visit history",
    subtitle: "Review previous consultations, outcomes, and next actions.",
  },
  "/patient/prescriptions": {
    title: "Prescription viewer",
    subtitle: "View, print, or download your latest doctor prescription.",
  },
  "/patient/reports": {
    title: "Lab reports",
    subtitle: "Access approved reports and keep your records organized.",
  },
  "/patient/billing": {
    title: "Billing & receipts",
    subtitle: "Monitor dues, payments, and downloadable receipts.",
  },
  "/patient/notifications": {
    title: "Notifications",
    subtitle: "Never miss a reminder, report update, or doctor message.",
  },
  "/patient/messages": {
    title: "Doctor messages",
    subtitle: "Securely communicate with doctors and care support.",
  },
  "/patient/support": {
    title: "Support request",
    subtitle: "Open a ticket and get help for billing, reports, or access.",
  },
  "/patient/profile": {
    title: "Patient profile",
    subtitle: "Manage your personal details, safety, and preferences.",
  },
  "/patient/settings": {
    title: "Account settings",
    subtitle: "Control alerts, privacy settings, and account behavior.",
  },
};

function PatientLayout() {
  const { pathname } = useLocation();
  const content = pageMap[pathname] || pageMap["/patient/dashboard"];

  return (
    <div className="patient-app-shell">
      <PatientSidebar />
      <div className="patient-main-shell">
        <PatientHeader title={content.title} subtitle={content.subtitle} />
        <main className="patient-content">
          <Outlet />
        </main>
      </div>
      <PatientMobileBottomNav />
    </div>
  );
}

export default PatientLayout;
