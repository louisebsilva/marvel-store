import { FavoriteType } from '../Favorites';
import { FavoriteWrapper } from './style';
import { removeFavorite } from '../../../client/index';

type Props = {
  data: FavoriteType
}

const Favorite = (props: Props) => {
  const { data } = props;

  const remove = async () => {
    try {
      await removeFavorite({ userID: data.id_user, favoriteID: data.favorite_id });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavoriteWrapper>
      <img src={data.favorite_image} alt={data.favorite_name} />
      <h3>{data.favorite_name}</h3>
      <button onClick={() => remove()}>Desfavoritar</button>
    </FavoriteWrapper>
  );
};

export default Favorite;
