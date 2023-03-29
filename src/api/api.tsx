export const APIURL = "http://localhost:8000/api";

// all cards
export const fetchAllCards = async () => {
  const res = await fetch(`${APIURL}/cards/`);
  const json = await res.json();
  return json;
};

// card by id
export const fetchCardById = async (cardID: number) => {
  const res = await fetch(`${APIURL}/cards/id/${cardID}`);
  const json = await res.json();
  return json;
};

// card by cardname
export const fetchCardByCardname = async (cardname: string) => {
  const res = await fetch(`${APIURL}/cards/${cardname}`);
  const json = await res.json();
  return json;
};
