import { useHistory } from 'react-router';
import { ArticleWrapper, ContentWrapper, ItemsTypeWrapper } from './style';

type Props = {
  data: any;
}

const CharacterDetails = (props: Props) => {
  const { data } = props;
  const history = useHistory();

  const imageUrl = `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`;

  const renderComics = (comics: any[]) => {
    return comics.map(
      (x, index) => {
        const resourceURL = x.resourceURI.split('/');
        const itemID = resourceURL[resourceURL.length -1];

        return <span key={index} onClick={() => {
          history.push(`/item/comics/${itemID}`);
          window.location.reload();
        }}>{x.name}, </span>;
      }
    );
  };

  return (
    <ArticleWrapper>
      <img src={imageUrl} alt={data?.name} />
      <ContentWrapper>
        <h3><span>Nome: </span>{data?.name ?? '-'}</h3>
        <p><span>Descrição: </span>{data?.description ?? '-'}</p>
        <p><span>Último lançamento: </span>{data?.modified ?? '-'}</p>
        <p><span>Quantidade de quadrinhos: </span>{data?.comics?.available ?? '-'}</p>
        {
          (data?.comics?.items && data?.comics?.items.length > 0)
            ? <ItemsTypeWrapper>Quadrinhos: {renderComics(data.comics.items)}</ItemsTypeWrapper>
            : null
        }
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export default CharacterDetails;
