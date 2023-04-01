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
          <a href="#" className="relative block bg-black group">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">{card.name}</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{card.description}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
