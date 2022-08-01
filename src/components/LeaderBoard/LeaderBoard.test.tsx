import React from 'react';
import { render, screen } from '@testing-library/react';
import LeaderBoard from './LeaderBoard';

test('renders learn react link', () => {
  render(<LeaderBoard />);
  const linkElement = screen.getByText(/Leader Board/i);
  expect(linkElement).toBeInTheDocument();
});
