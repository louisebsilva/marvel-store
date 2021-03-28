import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile from './Profile';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => '{"id":3,"name":"Alejandro","user_email":"ale@alejandro.com"}'),
      setItem: jest.fn(() => null)
    },
    writable: true
  });
});

test('should render component correctly', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Profile /></Router>);

  expect(screen.getByRole('button', {name: 'Alterar'})).toBeInTheDocument();

  expect(screen.getByDisplayValue('Alejandro')).toBeInTheDocument();
  expect(screen.getByDisplayValue('ale@alejandro.com')).toBeInTheDocument();
});
