function PrescriptionHeader({
  clinic,
  patientName,
  patientId,
  doctor,
  department,
  date,
}) {
  return (
    <header className="prescription-head">
      <div>
        <h3>{clinic}</h3>
        <p>Official Prescription Sheet</p>
      </div>
      <div>
        <p>Patient: {patientName}</p>
        <p>ID: {patientId}</p>
        <p>
          {doctor} • {department}
        </p>
        <p>Date: {date}</p>
      </div>
    </header>
  );
}

export default PrescriptionHeader;
