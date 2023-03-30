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

// create card
export const fetchCreateCard = async (name: string, description: string, image: string) => {
  const res = await fetch(`${APIURL}/cards/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
      image: `${image}`,
    }),
  });
  const json = res.json();
  return json;
};

// edit card
export const fetchEditCard = async (
  cardID: number,
  name: string,
  description: string,
  image: string
) => {
  const res = await fetch(`${APIURL}/cards/edit/${cardID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      description: `${description}`,
      image: `${image}`,
    }),
  });
  const json = res.json();
  return json;
};

// delete card
export const fetchDeleteCard = async (cardID: number) => {
  const res = await fetch(`${APIURL}/cards/delete/${cardID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = res.json();
  return json;
};
