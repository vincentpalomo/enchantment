// online api
// export const APIURL = 'https://enchantment.fly.dev/api';
// local api
export const APIURL = 'http://localhost:8080/api';

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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
export const fetchEditCard = async (cardID: number, name: string, description: string, image: string) => {
  const res = await fetch(`${APIURL}/cards/edit/${cardID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
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
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = res.json();
  return json;
};

// all users
export const fetchAllUsers = async () => {
  const res = await fetch(`${APIURL}/users/`);
  const json = res.json();
  return json;
};

// user by id
export const fetchUserByUserID = async (userID: number) => {
  const res = await fetch(`${APIURL}/users/id/${userID}`);
  const json = await res.json();
  return json;
};

// user by username
export const fetchUserByUsername = async (username: string) => {
  const res = await fetch(`${APIURL}/users/${username}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json;
};

// register user
export const fetchRegister = async (username: string, password: string, email: string, isAdmin: boolean, avatar: string) => {
  const res = await fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
      email: `${email}`,
      isAdmin: `${isAdmin}`,
      avatar: `${avatar}`,
    }),
  });
  const json = res.json();
  return json;
};

// login user
export const fetchLogin = async (username: string, password: string) => {
  const res = await fetch(`${APIURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });
  const json = res.json();
  return json;
};

// edit user
export const fetchEditUser = async (userID: number, username: string, password: string, email: string, avatar: string) => {
  const res = await fetch(`${APIURL}/users/edit/${userID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
      email: `${email}`,
      avatar: `${avatar}`,
    }),
  });
  const json = res.json();
  return json;
};

// delete user
export const fetchDeleteUser = async (userID: number) => {
  const res = await fetch(`${APIURL}/users/delete/${userID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = res.json();
  return json;
};
