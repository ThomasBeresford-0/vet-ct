// src/components/CaseDetail.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseDetail from '../components/CaseDetail';
import { BrowserRouter as Router } from 'react-router-dom';

// Test for loading state
test('displays loading text initially', () => {
  render(
    <Router>
      <CaseDetail />
    </Router>
  );

  // Check if the loading text is present in the document
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
