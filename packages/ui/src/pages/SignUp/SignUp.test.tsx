import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SignUp from './SignUp';

test('should render component correctly', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><SignUp /></Router>);

  expect(screen.getByRole('button', {name: 'Login'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Registrar'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Registrar'})).toBeDisabled();

  expect(screen.getByText('Cadastre-se')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite novamente sua senha')).toBeInTheDocument();
});

test('should enable button when input fields are filled', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><SignUp /></Router>);

  fireEvent.change(screen.getByPlaceholderText('Digite seu nome'), {target: {value: 'Alejandro'}});
  fireEvent.change(screen.getByPlaceholderText('Digite seu email'), {target: {value: 'ale@alejandro.com'}});
  fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {target: {value: 'thefamemonster'}});
  fireEvent.change(screen.getByPlaceholderText('Digite novamente sua senha'), {target: {value: 'thefamemonster'}});

  expect(screen.getByRole('button', {name: 'Registrar'})).not.toBeDisabled();
});
