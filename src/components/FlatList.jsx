import React from 'react';
import Flat from './Flat';

const flatList = ({ flats }) => {
  return (
    <div>
      { flats.map((flat, key) => { return <Flat key={key} flat={flat} />; }) }
    </div>
  );
};

export default flatList;
