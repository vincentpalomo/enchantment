import React, { useEffect, useState } from "react";

interface Card {
  id: number;
  name: string;
  description: string;
  image: string;
}

type Props = {
  cards: Card[];
};

const Cards: React.FC<Props> = ({ cards }) => {
  const [cardList, setCardList] = useState(cards);

  console.log(cardList);

  useEffect(() => {
    setCardList(cards);
    // watching the state of the cards prop will trigger this useEffect
  }, [cards]);

  return (
    <div>
      {cardList.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
