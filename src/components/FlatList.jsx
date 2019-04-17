import React from 'react';
import Flat from './Flat';

const flatList = ({ flats, handleFlatSelection }) => {
  return (
    <div>
      { flats.map((flat, key) => { return <Flat key={key} flat={flat} handleFlatSelection={handleFlatSelection} />; }) }
    </div>
  );
};

export default flatList;
