import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseList.css';

function CaseList() {
  const [cases, setCases] = useState([]);
  const [allCases, setAllCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('caseKeyAsc');  // Default sorting

  useEffect(() => {
    const fetchData = async () => {
      let page = 1;
      let total = 0;
      let casesList = [];

      try {
        do {
          const response = await fetch(`https://jr-tech-test-1.vercel.app/api/cases?page=${page}`);
          const data = await response.json();
          
          casesList = casesList.concat(data.data);
          total = data.totalPages;
          page++;
        } while (page <= total);

        // Initially sort the cases by case_key in ascending order
        casesList = sortCases(casesList, sortOption);
        
        setAllCases(casesList);
        setCases(casesList.slice(0, 10));  // Initial page data to show 10 cases per page
        setTotalPages(total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter and sort the cases based on search term and sort option
    let filteredCases = allCases.filter(caseItem =>
      caseItem.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
      caseItem.owner.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply sorting based on the selected sort option
    filteredCases = sortCases(filteredCases, sortOption);

    setCases(filteredCases.slice((currentPage - 1) * 10, currentPage * 10));  // Show 10 cases per page
  }, [searchTerm, currentPage, allCases, sortOption]);

  // Function to handle sorting logic
  const sortCases = (cases, sortOption) => {
    const sortedCases = [...cases];
    switch (sortOption) {
      case 'caseKeyAsc':
        return sortedCases.sort((a, b) => {
          // Extract numeric part from case_key
          const aNum = parseInt(a.case_key.replace(/^\D+/g, ''), 10);
          const bNum = parseInt(b.case_key.replace(/^\D+/g, ''), 10);
          return aNum - bNum;
        });
      case 'patientNameAsc':
        return sortedCases.sort((a, b) => a.patient.localeCompare(b.patient));
      case 'ownerNameAsc':
        return sortedCases.sort((a, b) => a.owner.localeCompare(b.owner));
      default:
        return sortedCases;
    }
  };

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);  // Reset to first page on new search
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);  // Reset to first page on new sort
  };

  return (
    <div>
      <div className="search-and-sort-container">
        <input 
          type="text" 
          placeholder="Search by patient or owner name..." 
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
          aria-label="Search cases"
        />
        <select 
          className="sort-dropdown" 
          value={sortOption} 
          onChange={handleSortChange}
          aria-label="Sort cases"
        >
          <option value="caseKeyAsc">Sort</option>
          <option value="patientNameAsc">Patient Name (A-Z)</option>
          <option value="ownerNameAsc">Owner Name (A-Z)</option>
        </select>
      </div>

      {cases.length === 0 ? (
        <div className="empty-state">
          <p>No cases found. Please try a different search term.</p>
        </div>
      ) : (
        <div className="case-list">
          {cases.map(caseItem => (
            <div key={caseItem.id} className="case-card">
              <div className="case-info">
                <h2>{caseItem.case_key}</h2>
                <p><strong>Patient Name:</strong> {caseItem.patient}</p>
                <p><strong>Owner Name:</strong> {caseItem.owner}</p>
                <p><strong>Specialty:</strong> {caseItem.specialty}</p>
                <p><strong>Creation Date:</strong> {caseItem.creation_date}</p>
                <Link 
                  to={`/cases/${caseItem.id}`} 
                  className="case-detail-link"
                  aria-label={`View details for case ${caseItem.case_key}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {cases.length > 0 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange('prev')} 
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => handlePageChange('next')} 
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default CaseList;
