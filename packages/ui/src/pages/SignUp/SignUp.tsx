import { useState } from 'react';

const SignUp:React.FC = () => {
  const [ username, setUsername ] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const enabledButton = (username.length !== 0) && (userEmail.length !== 0) && (userPassword.length !== 0) && (confirmPassword.length !== 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const signUp = (e: any) => {
    e.preventDefault();
    console.log('SignUp!!!!!');
  };

  return (
    <form>
      <label htmlFor="username">Nome</label>
      <input type="text" name="username" id="username" placeholder="Digite seu nome" onChange={(e) => setUsername(e.target.value)} required />
      <label htmlFor="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" placeholder="Digite seu email" onChange={(e) => setUserEmail(e.target.value)} required />
      <label htmlFor="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" placeholder="Digite sua senha" onChange={(e) => setUserPassword(e.target.value)} required />
      <label htmlFor="confirmPassword">Confirmar senha</label>
      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Digite novamente sua senha" onChange={(e) => setConfirmPassword(e.target.value)} required />
      <button onClick={(e) => signUp(e)} disabled={!enabledButton}>Registrar</button>
    </form>
  );
};

export default SignUp;
