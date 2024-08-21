import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CaseDetail = () => {
  const { caseId } = useParams(); // Get the caseId from the URL
  const [caseDetail, setCaseDetail] = useState(null);

  useEffect(() => {
    const fetchCaseDetail = async () => {
      try {
        const response = await fetch(`https://jr-tech-test-1.vercel.app/api/cases/${caseId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Fetched case detail:', result); // Debugging log
        setCaseDetail(result.data); // Access the 'data' property
      } catch (error) {
        console.error('Error fetching case detail:', error);
      }
    };

    fetchCaseDetail();
  }, [caseId]);

  if (!caseDetail) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div className="case-detail">
      <h1>Case Key: {caseDetail.case_key}</h1>
      <p>Patient Name: {caseDetail.patient}</p>
      <p>Owner Name: {caseDetail.owner}</p>
      <p>Specialty: {caseDetail.specialty}</p>
      <p>Creation Date: {caseDetail.creation_date}</p>
      <p>Status: {caseDetail.status}</p>
      <p>Reporting Specialist: {caseDetail.reporting_specialist}</p>
      <p>Species: {caseDetail.species}</p>
      <p>Body Areas: {caseDetail.body_areas}</p>
      <p>Turnaround: {caseDetail.turnaround}</p>
      <p>Reported Date: {caseDetail.reported_date}</p>
      {caseDetail.image_url && <img src={caseDetail.image_url} alt="Patient" />}
    </div>
  );
};

export default CaseDetail;
