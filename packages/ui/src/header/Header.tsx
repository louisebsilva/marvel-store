import { FaRegUserCircle, FaHeart } from 'react-icons/fa';
import { HeaderWrapper, Navigation, Title } from './style';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>Marvel Store</Title>
      <Navigation>
        <FaRegUserCircle />
        <FaHeart />
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
