import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ButtonsWrapper, RegisterForm } from './styles';
import { createUser } from '../../client/index';

const SignUp:React.FC = () => {
  const [ userName, setUserName ] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const history = useHistory();

  const enabledButton = (userName.length !== 0) && (userEmail.length !== 0) && (userPassword.length !== 0) && (confirmPassword.length !== 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const signUp = async (e: any) => {
    e.preventDefault();

    try {
      await createUser({userName, userEmail, password: userPassword});
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterForm>
      <h2>Cadastre-se</h2>
      <label htmlFor="userName">Nome</label>
      <input type="text" name="userName" id="userName" placeholder="Digite seu nome" onChange={(e) => setUserName(e.target.value)} required />
      <label htmlFor="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" placeholder="Digite seu email" onChange={(e) => setUserEmail(e.target.value)} required />
      <label htmlFor="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" placeholder="Digite sua senha" onChange={(e) => setUserPassword(e.target.value)} required />
      <label htmlFor="confirmPassword">Confirmar senha</label>
      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Digite novamente sua senha" onChange={(e) => setConfirmPassword(e.target.value)} required />
      <ButtonsWrapper>
        <button onClick={() => history.push('/login')}>Login</button>
        <button onClick={(e) => signUp(e)} disabled={!enabledButton}>Registrar</button>
      </ButtonsWrapper>
    </RegisterForm>
  );
};

export default SignUp;
