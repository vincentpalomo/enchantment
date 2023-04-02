import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Homepage, Cards, Navbar, About, Login, Register, Decks } from './components';
import './index.css';
import { fetchAllCards } from './api/api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState('');
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
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cards' element={<Cards cards={cards} />} />
          <Route path='/about' element={<About />} />
          <Route path='/decks' element={<Decks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
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
