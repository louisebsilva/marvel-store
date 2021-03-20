import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile from './Profile';

test('should render component correctly', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Profile /></Router>);

  expect(screen.getByRole('button', {name: 'Alterar'})).toBeInTheDocument();

  expect(screen.getByDisplayValue('Alejandro')).toBeInTheDocument();
  expect(screen.getByDisplayValue('ale@alejandro.com')).toBeInTheDocument();
});
