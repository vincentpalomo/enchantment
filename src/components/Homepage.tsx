import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Homepage = (props: Props) => {
  return (
    <section className='relative flex items-center w-full bg-white'>
      <div className='relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl'>
        <div className='relative flex-col items-start m-auto align-middle'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
            <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first'>
              <div className='max-w-xl text-center lg:text-left'>
                <div>
                  <p className='text-2xl font-medium tracking-tight text-black sm:text-4xl'>
                    Battle for the Realm
                  </p>
                  <p className='max-w-xl mt-4 text-base tracking-tight text-gray-600'>
                    Enter a realm of wizards, dragons, and elves. Build your deck and battle
                    opponents with creatures, spells, and artifacts. Who will reign supreme?
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start'>
                  <Link
                    to='/cards'
                    className='items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black'>
                    Get started
                  </Link>
                  <Link
                    to='/about'
                    className='inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600'>
                    Learn more
                    <span aria-hidden='true'> → </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='order-first block w-full mt-12 aspect-square lg:mt-0'>
              <img
                className='object-cover object-center w-full mx-auto bg-black rounded-2xl lg:ml-auto'
                alt='hero'
                src='https://i.ibb.co/8PnhbSw/Battle.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
