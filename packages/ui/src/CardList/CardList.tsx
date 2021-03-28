import Card from './Card/Card';
import { NoInfoWrapper, CardListWrapper } from './style';

type Props = {
  cardData: any[];
};

const CardList = (props: Props) => {
  const { cardData } = props;

  const renderContent = () => {
    if (cardData.length === 0) return <NoInfoWrapper>Nenhum conteúdo para exibir</NoInfoWrapper>;

    return cardData.map((x: any, index: number) => <Card item={x} key={index} />);
  };

  return (
    <CardListWrapper>
      {renderContent()}
    </CardListWrapper>
  );
};

export default CardList;
