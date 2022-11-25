import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BackLink() {
  const navigate = useNavigate();
  return (
    <Link
      onClick={() => {
        navigate(-1);
      }}
      className='text-xl mx-5 text-cyan-400 underline'>
      Back
    </Link>
  );
}
