import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseList from './components/CaseList';
import CaseDetail from './components/CaseDetail';
import Header from './components/Header'; 

function App() {
  return (
    <Router>
      <Header /> {}
      <Routes>
        <Route path="/" element={<CaseList />} />
        <Route path="/cases/:caseId" element={<CaseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
