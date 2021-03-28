import { useHistory } from 'react-router';
import { createFavorite } from '../client';
import { getUser } from '../client/auth';
import { ArticleWrapper, ContentWrapper, ItemsTypeWrapper } from './style';

type Props = {
  data: any;
}

const ComicDetails = (props: Props) => {
  const { data } = props;
  const history = useHistory();

  const imageUrl = `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`;

  const renderCharacters = (characters: any[]) => {
    return characters.map(
      (x, index) => {
        const resourceURL = x.resourceURI.split('/');
        const itemID = resourceURL[resourceURL.length -1];

        return <span key={index} onClick={() => {
          history.push(`/item/characters/${itemID}`);
          window.location.reload();
        }}>{x.name}, </span>;
      }
    );
  };

  const addFavorite = async () => {
    try {
      const user = JSON.parse(getUser());

      await createFavorite({ userID: user.id, favoriteID: data.id, favoriteType: 'comics', favoriteName: data.title, favoriteImage: imageUrl });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ArticleWrapper>
      <img src={imageUrl} alt={data?.title} />
      <ContentWrapper>
        <h3><span>Título: </span>{data?.title ?? '-'}</h3>
        <p><span>Descrição: </span>{data?.description ?? '-'}</p>
        <p><span>Número de páginas: </span>{data?.pageCount ?? '-'}</p>
        <p><span>Último lançamento: </span>{data?.modified ?? '-'}</p>
        <p><span>Quantidade de personagens: </span>{data?.characters?.available ?? '-'}</p>
        {
          (data?.characters?.items && data?.characters?.items.length > 0)
            ? <ItemsTypeWrapper>Personagens: {renderCharacters(data.characters.items)}</ItemsTypeWrapper>
            : null
        }
        <button onClick={() => addFavorite()}>Favoritar</button>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export default ComicDetails;
