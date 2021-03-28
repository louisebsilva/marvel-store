import { useEffect, useState } from 'react';
import Header from '../../header/Header';
import { getFavorites } from '../../client/index';
import { getUser } from '../../client/auth';
import Favorite from './Favorite/Favorite';
import { SectionWrapper } from './styles';
import Loader from '../../Loader/Loader';

export type FavoriteType = {
  id: number;
  id_user: number;
  favorite_id: string;
  type: 'characters' | 'comics';
  favorite_name: string;
  favorite_image: string;
}

const Favorites = () => {
  const [ favorites, setFavorites ] = useState<FavoriteType[]>([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const user = JSON.parse(getUser());

      getFavorites(user.id).then((result) => setFavorites(result.data.result));
    } catch (error) {
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const renderComics = () => {
    return favorites
      .filter((x) => x.type === 'comics')
      .map((x, index: number) => <Favorite data={x} key={index} />);
  };

  const renderCharacters = () => {
    return favorites
      .filter((x) => x.type === 'characters')
      .map((x, index: number) => <Favorite data={x} key={index} />);
  };

  const renderContent = () => {
    if (loading) return <Loader />;
    if (favorites.length === 0) return <p>Nenhum conteúdo para exibir</p>;

    return (
      <SectionWrapper>
        <section>
          <h2>Quadrinhos</h2>
          <div>{renderComics()}</div>
        </section>
        <section>
          <h2>Personagens</h2>
          <div>{renderCharacters()}</div>
        </section>
      </SectionWrapper>
    );
  };

  return (
    <div>
      <Header />
      {renderContent()}
    </div>
  );
};

export default Favorites;
