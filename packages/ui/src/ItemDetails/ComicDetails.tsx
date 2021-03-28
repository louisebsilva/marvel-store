import { useHistory } from 'react-router';
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
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export default ComicDetails;
