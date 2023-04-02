import { fetchRegister } from '../api/api';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const Register = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const history = useNavigate();
  const isAdmin = false;
  const avatar = 'https://i.ibb.co/F0nkS0z/Avatar.png';

  const register = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setEmail('');

    try {
      if (!username || !password || !email) {
        setMessage('Missing credentials...😥');
      }
      const register = await fetchRegister(username, password, email, isAdmin, avatar);
      if (register.status) {
        setMessage('Invalid credentials, please try again 🧙‍♂️');
      } else {
        history('/cards');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='py-6 bg-white sm:py-8 lg:py-12'>
      <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
        <h2 className='mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl'>
          Register
        </h2>

        <form className='max-w-lg mx-auto border rounded-lg' onSubmit={register}>
          <div className='flex flex-col gap-4 p-4 md:p-8'>
            <div>
              <label className='inline-block mb-2 text-sm text-gray-800 sm:text-base'>
                Username
              </label>
              <input
                name='username'
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring'
              />
            </div>

            <div>
              <label className='inline-block mb-2 text-sm text-gray-800 sm:text-base'>Email</label>
              <input
                name='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring'
              />
            </div>

            <div>
              <label className='inline-block mb-2 text-sm text-gray-800 sm:text-base'>
                Password
              </label>
              <input
                type='password'
                name='password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring'
              />
            </div>

            <button
              type='submit'
              className='block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base'>
              Register
            </button>
          </div>

          <div className='flex items-center justify-center p-4 bg-gray-100'>
            <p className='text-sm text-center text-gray-500'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
