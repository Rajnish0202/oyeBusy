import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const Rating = (props) => {
  const rate = +props[0];

  return (
    <>
      {Array.apply(null, { length: rate }).map((e, index) => (
        <BsStarFill key={index} fill={'#ffd231'} />
      ))}
    </>
  );
};

export default Rating;
