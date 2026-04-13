import { useMemo, useState } from "react";
import PrescriptionActionBar from "./PrescriptionActionBar";
import { showQuickMessage } from "../../utils/fileActions";
import {
  patientProfile,
  prescriptionSheets,
  visits,
} from "../../data/patientData";

function PrescriptionViewer({ selectedVisit }) {
  const [isPrintView, setIsPrintView] = useState(false);

  const activeVisit = selectedVisit || visits[0];
  const sheet =
    prescriptionSheets[activeVisit.id] ||
    prescriptionSheets[Object.keys(prescriptionSheets)[0]];

  const medicines = useMemo(() => {
    const rows = [...sheet.medicines];
    while (rows.length < 3) {
      rows.push({ name: "", dose: "", frequency: "", duration: "" });
    }
    return rows;
  }, [sheet]);

  const handleDownload = () => {
    const lines = [
      `${sheet.doctorName} - ${sheet.doctorDepartment}`,
      `Patient: ${sheet.patientName}`,
      `Patient ID: ${patientProfile.patientId}`,
      `Date: ${sheet.date}`,
      `Diagnosis: ${sheet.diagnosisTitle}`,
      `Assistant Note: ${sheet.assistantNote}`,
      `Symptoms: ${sheet.symptoms}`,
      `Observations: ${sheet.observations}`,
      `Advice: ${sheet.advice}`,
      `Test Recommendation: ${sheet.testRecommendation}`,
      `Follow-up Date: ${sheet.followUpDate}`,
      "Medicines:",
      ...sheet.medicines.map(
        (item, index) =>
          `${index + 1}. ${item.name} | ${item.dose} | ${item.frequency} | ${item.duration}`,
      ),
    ];

    const blob = new Blob([lines.join("\n")], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `prescription-${activeVisit.id}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="prescription-viewer-shell">
      <PrescriptionActionBar
        isPrintView={isPrintView}
        onDownload={handleDownload}
        onPrintPreview={() => setIsPrintView(true)}
        onCancel={() => setIsPrintView(false)}
      />

      <article
        className={`prescription-sheet ${isPrintView ? "print-preview" : ""}`}
      >
        <header className="sheet-top-bar">
          <div>
            <h3>{sheet.doctorName}</h3>
            <p>{sheet.doctorDepartment}</p>
          </div>
          <div className="sheet-badge">Rx</div>
        </header>

        <section className="sheet-info-grid">
          <p>
            <span>Patient Name:</span> {sheet.patientName}
          </p>
          <p>
            <span>Date:</span> {sheet.date}
          </p>
          <p>
            <span>Age:</span> {sheet.age}
          </p>
          <p>
            <span>Gender:</span> {sheet.gender}
          </p>
          <p>
            <span>Weight:</span> {sheet.weight}
          </p>
          <p>
            <span>Patient ID:</span> {patientProfile.patientId}
          </p>
          <p className="span-2">
            <span>Diagnosis:</span> {sheet.diagnosisTitle}
          </p>
        </section>

        <p className="assistant-note">Assistant Note: {sheet.assistantNote}</p>

        <section className="sheet-rx-section">
          <h2>Rx</h2>
          <h4>Clinical Consultation Sheet</h4>

          <div className="sheet-box-grid">
            <div>
              <label>Symptoms</label>
              <div className="sheet-box">{sheet.symptoms}</div>
            </div>
            <div>
              <label>Observations</label>
              <div className="sheet-box">{sheet.observations}</div>
            </div>
            <div>
              <label>Diagnosis</label>
              <div className="sheet-box">{sheet.diagnosis}</div>
            </div>
            <div>
              <label>Advice</label>
              <div className="sheet-box">{sheet.advice}</div>
            </div>
            <div>
              <label>Test Recommendation</label>
              <div className="sheet-box">{sheet.testRecommendation}</div>
            </div>
            <div>
              <label>Additional Notes</label>
              <div className="sheet-box">{sheet.additionalNotes}</div>
            </div>
          </div>

          <div className="sheet-followup-row">
            <div>
              <label>Follow-up Date</label>
              <p>{sheet.followUpDate}</p>
            </div>
            <div className="sheet-signature">
              <span>Signature</span>
            </div>
          </div>
        </section>

        <section className="sheet-medicine-section">
          <div className="medicine-head-row">
            <h3>Medicines</h3>
            <button
              type="button"
              onClick={() =>
                showQuickMessage(
                  "Medicine editing will be available with doctor permissions.",
                )
              }
            >
              + Add Medicine
            </button>
          </div>

          <div className="medicine-table">
            <div className="medicine-row medicine-header">
              <p>MEDICINE</p>
              <p>DOSE</p>
              <p>FREQUENCY</p>
              <p>DURATION</p>
            </div>
            {medicines.map((item, index) => (
              <div className="medicine-row" key={`${item.name}-${index}`}>
                <p>{item.name || "-"}</p>
                <p>{item.dose || "-"}</p>
                <p>{item.frequency || "-"}</p>
                <p>{item.duration || "-"}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="sheet-footer">
          <strong>{sheet.doctorDepartment}</strong>
          <p>24 Dummy Street Area • +12-345 678 9012</p>
        </footer>
      </article>
    </section>
  );
}

export default PrescriptionViewer;
