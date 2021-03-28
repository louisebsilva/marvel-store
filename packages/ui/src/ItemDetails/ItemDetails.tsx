import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import { getMarvelDataByID } from '../client/index';
import Loader from '../Loader/Loader';
import ComicDetails from './ComicDetails';
import CharacterDetails from './CharacterDetails';

const ItemDetails = () => {
  const [ details, setDetails ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const location = useLocation();
  const strippedURL = location.pathname.split('/');

  useEffect(() => {
    setLoading(true);

    try {
      getMarvelDataByID(strippedURL[3], strippedURL[2]).then((result) => {
        setDetails(result.data.data[0]);
      });
    } catch (error) {
      setDetails({});
    } finally {
      setLoading(false);
    }
  }, []);

  const renderItemDetails = () => {
    if(loading) {
      return <Loader />;
    }

    return strippedURL[2] === 'comics' ? <ComicDetails data={details} /> : <CharacterDetails data={details} />;
  };

  return (
    <div>
      <Header />
      {renderItemDetails()}
    </div>
  );
};

export default ItemDetails;
