import { useHistory } from 'react-router';
import { CardWrapper } from './style';

type Props = {
  item: any;
};

const Card = (props: Props) => {
  const history = useHistory();

  const { item } = props;
  const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
  const itemType = item.name ? 'characters' : 'comics';

  return (
    <CardWrapper onClick={() => history.push(`/item/${itemType}/${item.id}`)}>
      <img src={imageUrl} alt={item.name ?? item.title} />
      <h3>{item.name ?? item.title}</h3>
    </CardWrapper>
  );
};

export default Card;
