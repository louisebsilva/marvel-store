import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Login from './Login';

test('should render component correctly', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Login /></Router>);

  expect(screen.getByRole('button', {name: 'Cadastre-se'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Entrar'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Entrar'})).toBeDisabled();

  expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
});

test('should enable button when input fields are filled', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Login /></Router>);

  fireEvent.change(screen.getByPlaceholderText('Digite seu email'), {target: {value: 'ale@alejandro.com'}});
  fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {target: {value: 'thefamemonster'}});

  expect(screen.getByRole('button', {name: 'Entrar'})).not.toBeDisabled();
});
