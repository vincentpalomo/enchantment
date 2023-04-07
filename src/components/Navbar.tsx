import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  online: boolean;
  user: string;
  setUser: (username: string) => void;
  setOnline: (arg0: boolean) => void;
};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    props.setUser('');
    props.setOnline(false);
    localStorage.removeItem('user');
    navigate('/');
    setIsMenuOpen(false);
  };

  console.log(props.online);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='relative z-50 flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        {/* <Link to='/cards'>
          <span className='font-serif text-4xl text-black'>enchantment 🧙‍♂️</span>
        </Link> */}

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-16 bg-white py-2 px-4`}>
          <Link
            to='/'
            className='block font-serif text-xl text-black hover:text-pink-500'
            onClick={handleCloseMenu}>
            home
          </Link>
          <Link
            to='/cards'
            className='block font-serif text-xl text-black hover:text-pink-500'
            onClick={handleCloseMenu}>
            cards
          </Link>
          <Link
            to='/decks'
            className='block font-serif text-xl text-black hover:text-pink-500'
            onClick={handleCloseMenu}>
            decks
          </Link>
          <Link
            to='/about'
            className='block font-serif text-xl text-black hover:text-pink-500'
            onClick={handleCloseMenu}>
            about
          </Link>
          {!props.online ? (
            <>
              <Link
                to='/login'
                className='block font-serif text-xl text-black hover:text-pink-500'
                onClick={handleCloseMenu}>
                login
              </Link>
              <Link
                to='/register'
                className='block font-serif text-xl text-black hover:text-pink-500'
                onClick={handleCloseMenu}>
                register
              </Link>
            </>
          ) : (
            <>
              <div className='flex'>
                <img
                  alt='avatar'
                  src='https://i.ibb.co/F0nkS0z/Avatar.png'
                  className='object-cover w-10 h-10 rounded-full'
                />
                <span className='block m-1 font-serif text-xl text-pink-500'>{props.user}</span>
              </div>
              <Link to='/' className='active:text-pink-500'>
                <button
                  onClick={logout}
                  className='block font-serif text-xl text-black hover:text-pink-500'>
                  logout
                </button>
              </Link>
            </>
          )}
        </div>

        <button
          className='block mr-auto text-4xl text-gray-800 lg:hidden hover:text-gray-600 focus:text-gray-600'
          onClick={handleToggleMenu} // Add your function to handle toggling the menu
        >
          🧙‍♂️
        </button>
      </div>

      <div className='flex items-center'>
        <Link to='/cards'>
          <span className='hidden font-serif text-4xl text-black'>enchantment 🧙‍♂️</span>
        </Link>
      </div>
      <div className='justify-end flex-1 hidden mr-auto lg:flex'>
        <Link to='/' className='active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
            home
          </button>
        </Link>
        <Link to='/cards' className='active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
            cards
          </button>
        </Link>

        <Link to='/decks' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
            decks
          </button>
        </Link>
        <Link to='/about' className=' active:text-pink-500'>
          <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
            about
          </button>
        </Link>
      </div>
      <div className='items-center justify-end flex-1 hidden lg:flex'>
        {!props.online ? (
          <>
            <Link to='/login' className=' active:text-pink-500'>
              <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
                login
              </button>
            </Link>
            <Link to='/register' className=' active:text-pink-500'>
              <button className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500'>
                register
              </button>
            </Link>
          </>
        ) : (
          <>
            <img
              alt='avatar'
              src='https://i.ibb.co/F0nkS0z/Avatar.png'
              className='object-cover w-10 h-10 rounded-full'
            />
            <span className='m-2 font-serif text-xl text-pink-500'>{props.user}</span>
            <Link to='/' className='active:text-pink-500'>
              <button
                onClick={logout}
                className='m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500 '>
                logout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
