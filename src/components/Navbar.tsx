import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  online: boolean;
  user: string;
  setUser: (username: string) => void;
  setOnline: (arg0: boolean) => void;
};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    props.setUser('');
    props.setOnline(false);
    localStorage.removeItem('user');
    navigate('/');
  };
  console.log(props.online);
  return (
    <div className='flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <Link to='/cards'>
          <span className='font-serif text-4xl text-black'>enchantment 🧙‍♂️</span>
        </Link>
      </div>
      <div className='flex justify-end flex-1 mr-auto'>
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
        {/* <span>------</span> */}
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
      <div className='flex items-center justify-end flex-1'>
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
            {/* <button
              type='button'
              className='flex items-center transition rounded-lg group shrink-0'>
              <span className='sr-only'>Menu</span>
              <img
                alt='Man'
                src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                className='object-cover w-10 h-10 rounded-full'
              />

              <p className='hidden ml-2 text-xs text-left sm:block'>
                <strong className='block font-medium'>Eric Frusciante</strong>

                <span className='text-gray-500'> eric@frusciante.com </span>
              </p>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='hidden w-5 h-5 ml-4 text-gray-500 transition group-hover:text-gray-700 sm:block'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </button> */}
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
        {/* <Link to="/addreport">
          <button className="inline-block p-1 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block px-8 py-3 text-sm font-medium bg-black rounded-sm hover:bg-transparent">
              Add Report
            </span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
