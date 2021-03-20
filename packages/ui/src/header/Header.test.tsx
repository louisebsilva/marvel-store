import { render, screen } from '@testing-library/react';

import Header from './Header';

test('should render component correctly', () => {
  render(<Header />);
  expect(screen.getByText('Marvel Store')).toBeInTheDocument();
});

