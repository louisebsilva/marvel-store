import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './SignUp';

test('should render component correctly', () => {
  render(<SignUp />);

  expect(screen.getByRole('button', {name: 'Registrar'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'Registrar'})).toBeDisabled();

  expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Digite novamente sua senha')).toBeInTheDocument();
});

test('should enable button when input fields are filled', () => {
  render(<SignUp />);

  fireEvent.change(screen.getByPlaceholderText('Digite seu nome'), {target: {value: 'Alejandro'}});
  fireEvent.change(screen.getByPlaceholderText('Digite seu email'), {target: {value: 'ale@alejandro.com'}});
  fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {target: {value: 'thefamemonster'}});
  fireEvent.change(screen.getByPlaceholderText('Digite novamente sua senha'), {target: {value: 'thefamemonster'}});

  expect(screen.getByRole('button', {name: 'Registrar'})).not.toBeDisabled();
});
