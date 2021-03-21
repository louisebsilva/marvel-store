import { CardWrapper } from './style';

type Props = {
  item: any;
};

const Card = (props: Props) => {
  const { item } = props;
  const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;

  return (
    <CardWrapper>
      <img src={imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
    </CardWrapper>
  );
};

export default Card;
