import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseList = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('https://jr-tech-test-1.vercel.app/api/cases');
        const data = await response.json();
        setCases(data.data); // Adjust according to the structure of the API response
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="case-list">
      <h1>Case List</h1>
      {cases.map((caseItem) => (
        <Link to={`/cases/${caseItem.id}`} key={caseItem.id} className="case-item">
          <h2>{caseItem.case_key}</h2>
          <p>Patient: {caseItem.patient}</p>
          <p>Owner: {caseItem.owner}</p>
          <p>Specialty: {caseItem.specialty}</p>
          <p>Creation Date: {caseItem.creation_date}</p>
        </Link>
      ))}
    </div>
  );
};

export default CaseList;
