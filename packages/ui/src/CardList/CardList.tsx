import Card from './Card/Card';

type Props = {
  cardData: any[];
};

const CardList = (props: Props) => {
  return (
    <section>
      { props.cardData.map((x: any, index: number) => <Card item={x} key={index} /> ) }
    </section>
  );
};

export default CardList;
