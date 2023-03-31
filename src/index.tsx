import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Homepage, Cards } from "./components";
import "./index.css";
import { fetchAllCards } from "./api/api";

const App = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    const getCards = async () => {
      try {
        const cards = await fetchAllCards();
        setCards(cards);
      } catch (error) {
        console.error(error);
      }
    };

    getCards();
  }, []);

  return (
    <>
      {/* <Homepage /> */}
      <Cards cards={cards} />
    </>
  );
};

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;

if (root) {
  root.render(<App />);
}
