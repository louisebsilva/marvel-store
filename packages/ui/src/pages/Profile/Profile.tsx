import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Header from '../../header/Header';
import { ProfileForm, SectionWrapper } from './style';

const Profile:React.FC = () => {
  const [ username, setUsername ] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const [ usernameInput, setUsernameInput ] = useState(false);
  const [ userEmailInput, setUserEmailInput ] = useState(false);

  useEffect(() => {
    try {
      setUsername('Alejandro');
      setUserEmail('ale@alejandro.com');
    } catch (error) { console.log(error); }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateProfile = (e: any) => {
    e.preventDefault();
    console.log('Update!!!!!');
  };

  return (
    <>
      <Header />
      <ProfileForm>
        <h2>Perfil</h2>
        <SectionWrapper>
          <label htmlFor="username">Nome</label>
          <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username} disabled={!usernameInput} />
          <FaEdit onClick={() => setUsernameInput(!usernameInput)} />
        </SectionWrapper>
        <SectionWrapper>
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="userEmail" id="userEmail" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} disabled={!userEmailInput} />
          <FaEdit onClick={() => setUserEmailInput(!userEmailInput)} />
        </SectionWrapper>
        <button onClick={(e) => updateProfile(e)}>Alterar</button>
      </ProfileForm>
    </>
  );
};

export default Profile;
