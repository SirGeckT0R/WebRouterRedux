import React from 'react';

export default function Loading({ children, isLoading }) {
  if (isLoading) {
    return <div className='text-center text-3xl '>Loading...</div>;
  }
  return children;
}
