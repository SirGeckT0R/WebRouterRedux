import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='flex flex-col items-center my-5 text-3xl'>
      <div className='font-bold underline'>404</div>
      <div className='text-2xl'>Page Not Found</div>
      <div className='flex gap-4 justify-center'>
        <div>Return to</div>
        <Link
          to='/users'
          className='font-bold underline text-center hover:text-cyan-400'>
          Users
        </Link>
      </div>
    </div>
  );
}
