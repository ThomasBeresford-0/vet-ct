import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('renders Header component with logo', () => {
  render(<Header />);

  expect(screen.getByAltText(/VetCT Logo/i)).toBeInTheDocument();
});
