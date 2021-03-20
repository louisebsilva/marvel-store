type Props = {
  item: any;
};

const Card = (props: Props) => {
  const { item } = props;
  const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;

  return (
    <article>
      <img src={imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
    </article>
  );
};

export default Card;
