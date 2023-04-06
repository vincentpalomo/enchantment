import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Homepage, Cards, Navbar, About, Login, Register, Decks } from './components';
import './index.css';
import { fetchActiveUser, fetchAllCards } from './api/api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [online, setOnline] = useState(false);

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

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await fetchActiveUser(user);
        if (currentUser) {
          setOnline(true);
        } else {
          setOnline(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (user !== '') {
      getUser();
    }
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar online={online} user={user} setUser={setUser} setOnline={setOnline} />
        </header>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cards' element={<Cards cards={cards} />} />
          <Route path='/about' element={<About />} />
          <Route path='/decks' element={<Decks />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/register' element={<Register setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById('root');
const root = container ? createRoot(container) : null;

if (root) {
  root.render(<App />);
}
