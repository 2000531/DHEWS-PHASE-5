import React from 'react';
import jsPDF from 'jspdf';

function ReportButton({ currentHazard, alerts }) {
  const generateReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${currentHazard} Alert Report`, 14, 20);

    alerts.forEach((alert, index) => {
      const y = 30 + index * 25;
      doc.setFontSize(12);
      doc.text(`Region: ${alert.region}`, 14, y);
      doc.text(`Date: ${alert.date}`, 14, y + 6);
      doc.text(`Severity: ${alert.severity}`, 14, y + 12);
      doc.text(`Description: ${alert.description}`, 14, y + 18);
    });

    doc.save(`${currentHazard}_Alert_Report.pdf`);
  };

  return (
    <button
      onClick={generateReport}
      style={{
        marginTop: '10px',
        padding: '8px 12px',
        borderRadius: '6px',
        border: 'none',
        background: '#1976d2',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      Generate Briefing Report
    </button>
  );
}

export default ReportButton;
