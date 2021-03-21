import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonsWrapper, LoginForm } from './styles';

const Login:React.FC = () => {
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');

  const enabledButton = (userEmail.length !== 0) && (userPassword.length !== 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = (e: any) => {
    e.preventDefault();
    console.log('Login!');
  };

  return (
    <LoginForm>
      <h2>Faça seu Login</h2>
      <label htmlFor="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" placeholder="Digite seu email" onChange={(e) => setUserEmail(e.target.value)} required />
      <label htmlFor="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" placeholder="Digite sua senha" onChange={(e) => setUserPassword(e.target.value)} required />
      <ButtonsWrapper>
        <button><Link to="/register">Cadastre-se</Link></button>
        <button onClick={(e) => login(e)} disabled={!enabledButton}>Entrar</button>
      </ButtonsWrapper>
    </LoginForm>
  );
};

export default Login;
