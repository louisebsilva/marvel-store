import { FaRegUserCircle, FaHeart } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { HeaderWrapper, Navigation, Title } from './style';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <Title onClick={() => history.push('/')}>Marvel Store</Title>
      <Navigation>
        <FaRegUserCircle onClick={() => history.push('/profile')} />
        <FaHeart onClick={() => history.push('/favorites')} />
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
