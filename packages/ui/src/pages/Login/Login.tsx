import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ButtonsWrapper, LoginForm } from './styles';
import { login as loginUser } from '../../client/index';
import { login as loginToken } from '../../client/auth';

const Login:React.FC = () => {
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  const history = useHistory();

  const enabledButton = (userEmail.length !== 0) && (userPassword.length !== 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (e: any) => {
    e.preventDefault();

    const response = await loginUser({ userEmail, password: userPassword });
    loginToken(response.data.token, JSON.stringify(response.data.user));
    history.push('/');
  };

  return (
    <LoginForm>
      <h2>Faça seu Login</h2>
      <label htmlFor="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" placeholder="Digite seu email" onChange={(e) => setUserEmail(e.target.value)} required />
      <label htmlFor="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" placeholder="Digite sua senha" onChange={(e) => setUserPassword(e.target.value)} required />
      <ButtonsWrapper>
        <button onClick={() => history.push('/register')}>Cadastre-se</button>
        <button onClick={(e) => login(e)} disabled={!enabledButton}>Entrar</button>
      </ButtonsWrapper>
    </LoginForm>
  );
};

export default Login;
