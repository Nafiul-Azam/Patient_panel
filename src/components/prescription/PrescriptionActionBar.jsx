function PrescriptionActionBar({
  isPrintView,
  onPrintPreview,
  onDownload,
  onCancel,
}) {
  return (
    <div className="prescription-action-bar">
      <button className="primary-btn" type="button" onClick={onDownload}>
        Download
      </button>

      {isPrintView ? (
        <>
          <button type="button" onClick={() => window.print()}>
            Print Now
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </>
      ) : (
        <button type="button" onClick={onPrintPreview}>
          Print Preview
        </button>
      )}
    </div>
  );
}

export default PrescriptionActionBar;
