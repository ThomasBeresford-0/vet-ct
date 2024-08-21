import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseList from './components/CaseList';
import CaseDetail from './components/CaseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseList />} />
        <Route path="/cases/:caseId" element={<CaseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
