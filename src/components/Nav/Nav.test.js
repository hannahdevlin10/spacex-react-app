import React from 'react';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';

test('render nav', () => {
  render(<Nav />);
  expect(screen.getByText('SpaceX Launch App 🚀')).toBeInTheDocument();
});