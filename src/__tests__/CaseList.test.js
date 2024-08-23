// src/components/CaseList.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseList from '../components/CaseList';

test('renders CaseList component with search and sort elements', async () => {
  render(<CaseList />);

  // Wait for component to update and fetch data
  await waitFor(() => {
    // Check if the search bar and sort dropdown are rendered
    expect(screen.getByPlaceholderText(/Search by patient or owner name.../i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
