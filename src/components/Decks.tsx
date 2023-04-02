import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Decks = (props: Props) => {
  return (
    <section className='relative flex items-center w-full bg-white'>
      <div className='relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl'>
        <div className='py-6 bg-white sm:py-0'>
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='grid gap-8 sm:grid-cols-2 sm:gap-12'>
              <div className='overflow-hidden bg-gray-100 rounded-lg shadow-lg h-80 sm:rounded-none sm:shadow-none md:h-auto'>
                <img
                  src='https://i.ibb.co/9gFVsdz/Lythande.png'
                  alt='mage'
                  className='object-cover object-center w-full h-full rounded-2xl'
                />
              </div>

              <div className='flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32 xl:py-64'>
                <p className='mb-4 text-sm font-semibold text-indigo-500 uppercase md:text-base'>
                  Decks
                </p>
                <h1 className='mb-2 text-2xl font-bold text-center text-gray-800 sm:text-left md:text-3xl'>
                  currently not available
                </h1>

                <p className='mb-8 text-center text-gray-500 sm:text-left md:text-lg'>
                  Decks are currently in development...🧙‍♂️
                </p>

                <Link
                  to='/'
                  className='inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'>
                  Go home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decks;
