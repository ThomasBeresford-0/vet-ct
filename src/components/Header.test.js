import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  // Check if the Header component renders without crashing
  expect(screen.getByRole('banner')).toBeInTheDocument(); 
});

test('renders image in Header', () => {
  render(<Header />);
  // Check if the image is rendered
  expect(screen.getByAltText('VetCT Logo')).toBeInTheDocument();
});
