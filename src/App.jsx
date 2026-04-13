import { Navigate, Route, Routes } from "react-router-dom";
import PatientLayout from "./layouts/PatientLayout";
import PatientAdmissionPage from "./pages/PatientAdmissionPage";
import PatientBillingPage from "./pages/PatientBillingPage";
import PatientDashboardPage from "./pages/PatientDashboardPage";
import PatientLabReportsPage from "./pages/PatientLabReportsPage";
import PatientMessagesPage from "./pages/PatientMessagesPage";
import PatientNotificationsPage from "./pages/PatientNotificationsPage";
import PatientPrescriptionPage from "./pages/PatientPrescriptionPage";
import PatientProfilePage from "./pages/PatientProfilePage";
import PatientSettingsPage from "./pages/PatientSettingsPage";
import PatientSupportPage from "./pages/PatientSupportPage";
import PatientTokenPage from "./pages/PatientTokenPage";
import PatientVisitHistoryPage from "./pages/PatientVisitHistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/patient/dashboard" replace />} />
      <Route path="/patient" element={<PatientLayout />}>
        <Route path="dashboard" element={<PatientDashboardPage />} />
        <Route path="admission" element={<PatientAdmissionPage />} />
        <Route path="token" element={<PatientTokenPage />} />
        <Route path="history" element={<PatientVisitHistoryPage />} />
        <Route path="prescriptions" element={<PatientPrescriptionPage />} />
        <Route path="reports" element={<PatientLabReportsPage />} />
        <Route path="billing" element={<PatientBillingPage />} />
        <Route path="notifications" element={<PatientNotificationsPage />} />
        <Route path="messages" element={<PatientMessagesPage />} />
        <Route path="support" element={<PatientSupportPage />} />
        <Route path="profile" element={<PatientProfilePage />} />
        <Route path="settings" element={<PatientSettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/patient/dashboard" replace />} />
    </Routes>
  );
}

export default App;
