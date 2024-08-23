import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseDetail from './CaseDetail';

test('renders CaseDetail component', () => {
  render(<CaseDetail />);
  // Check if the CaseDetail component renders without crashing
  expect(screen.getByText('Loading...')).toBeInTheDocument(); // Adjust text as needed
});
