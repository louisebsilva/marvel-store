import { FaRegUserCircle, FaHeart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Marvel Store</h1>
      <nav>
        <FaRegUserCircle />
        <FaHeart />
      </nav>
    </header>
  );
};

export default Header;
