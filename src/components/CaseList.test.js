import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseList from './CaseList';

test('renders CaseList component', () => {
  render(<CaseList />);
  // Check if the input with placeholder text is present
  expect(screen.getByPlaceholderText('Search by patient or owner name...')).toBeInTheDocument();
});

test('renders buttons in CaseList', () => {
  render(<CaseList />);
  // Check if at least one button is present
  expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
});
