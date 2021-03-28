import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Header from '../../header/Header';
import { ProfileForm, SectionWrapper } from './style';
import { getUser, logout } from '../../client/auth';
import { updateUserProfile } from '../../client/index';
import { useHistory } from 'react-router';

const Profile:React.FC = () => {
  const [ userID, setUserID ] = useState(0);
  const [ username, setUsername ] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const [ usernameInput, setUsernameInput ] = useState(false);
  const [ userEmailInput, setUserEmailInput ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    try {
      const user = JSON.parse(getUser());
      setUserID(user.id);
      setUsername(user.name);
      setUserEmail(user.user_email);
    } catch (error) { console.log(error); }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateProfile = async (e: any) => {
    e.preventDefault();

    await updateUserProfile({ userName: username, userEmail, id: userID });
    history.push('/');
  };

  const logoutUser = async (e: any) => {
    e.preventDefault();

    await logout();
    history.push('/login');
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
        <div>
          <button onClick={(e) => logoutUser(e)}>Logout</button>
          <button onClick={(e) => updateProfile(e)}>Alterar</button>
        </div>
      </ProfileForm>
    </>
  );
};

export default Profile;
