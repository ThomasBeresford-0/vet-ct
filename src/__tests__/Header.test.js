// src/components/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('renders Header component with logo', () => {
  render(<Header />);

  // Check if the logo image is present
  expect(screen.getByAltText(/VetCT Logo/i)).toBeInTheDocument();
});
