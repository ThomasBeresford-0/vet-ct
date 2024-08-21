// src/components/CaseList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseList.css';

function CaseList() {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://jr-tech-test-1.vercel.app/api/cases?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setCases(data.data);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="case-list">
        {cases.map(caseItem => (
          <div key={caseItem.id} className="case-card">
            <div className="case-info">
              <h2>{caseItem.case_key}</h2>
              <p><strong>Patient Name:</strong> {caseItem.patient}</p>
              <p><strong>Owner Name:</strong> {caseItem.owner}</p>
              <p><strong>Specialty:</strong> {caseItem.specialty}</p>
              <p><strong>Creation Date:</strong> {caseItem.creation_date}</p>
              <Link to={`/cases/${caseItem.id}`} className="case-detail-link">View Details</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CaseList;
