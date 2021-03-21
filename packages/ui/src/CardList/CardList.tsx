import Card from './Card/Card';
import { CardListWrapper } from './style';

type Props = {
  cardData: any[];
};

const CardList = (props: Props) => {
  return (
    <CardListWrapper>
      { props.cardData.map((x: any, index: number) => <Card item={x} key={index} /> ) }
    </CardListWrapper>
  );
};

export default CardList;
