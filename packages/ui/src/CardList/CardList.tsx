import Card from './Card/Card';
import { CardListWrapper } from './style';

type Props = {
  cardData: any[];
};

const CardList = (props: Props) => {
  const { cardData } = props;

  const renderContent = () => {
    if (cardData.length === 0) return <p>Nenhum conteúdo para exibir</p>;

    return cardData.map((x: any, index: number) => <Card item={x} key={index} />);
  };

  return (
    <CardListWrapper>
      {renderContent()}
    </CardListWrapper>
  );
};

export default CardList;
