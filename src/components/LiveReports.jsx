// src/pages/LiveReports.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/get-reports')
      .then(res => setReports(res.data))
      .catch(err => console.error('Error loading reports:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Live Traffic Reports</h2>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        reports.map((report, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#f9f9f9'
          }}>
            <p><strong>📍 Location:</strong> {report.location}</p>
            <p><strong>📝 Description:</strong> {report.description || 'N/A'}</p>
            <p><strong>👤 By:</strong> {report.reportedBy.name}</p>
            <p><strong>📧 Email:</strong> {report.reportedBy.email}</p>
            <p><strong>🕒 Time:</strong> {new Date(report.timestamp).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LiveReports;
