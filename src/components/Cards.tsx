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
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          {/* <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">cards</h2> */}
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
          {cardList.map((card) => (
            <div key={card.id}>
              <a href="#" className="relative block bg-black rounded-lg group">
                <img
                  alt="Developer"
                  src={card.image}
                  className="absolute inset-0 object-cover w-full h-full transition-opacity rounded opacity-75 group-hover:opacity-50"
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
      </div>
    </div>
  );
};

export default Cards;
