// src/components/CaseDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CaseDetail.css';

function CaseDetail() {
  const { caseId } = useParams();
  const [caseDetail, setCaseDetail] = useState(null);

  useEffect(() => {
    fetch(`https://jr-tech-test-1.vercel.app/api/cases/${caseId}`)
      .then(response => response.json())
      .then(data => setCaseDetail(data.data));
  }, [caseId]);

  if (!caseDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="case-detail-container">
      <div className="case-info">
        <h1>{caseDetail.case_key}</h1>
        <p><strong>Patient Name:</strong> {caseDetail.patient}</p>
        <p><strong>Owner Name:</strong> {caseDetail.owner}</p>
        <p><strong>Specialty:</strong> {caseDetail.specialty}</p>
        <p><strong>Creation Date:</strong> {caseDetail.creation_date}</p>
        <p><strong>Status:</strong> {caseDetail.status}</p>
        <p><strong>Reporting Specialist:</strong> {caseDetail.reporting_specialist}</p>
        <p><strong>Species:</strong> {caseDetail.species}</p>
        <p><strong>Body Areas:</strong> {caseDetail.body_areas}</p>
        <p><strong>Turnaround:</strong> {caseDetail.turnaround}</p>
        <p><strong>Reported Date:</strong> {caseDetail.reported_date}</p>
      </div>
      <div className="case-image">
        <img src={caseDetail.image_url} alt="Case" />
      </div>
    </div>
  );
}

export default CaseDetail;
