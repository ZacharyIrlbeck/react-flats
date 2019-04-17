import React from 'react';

const flat = ({ flat, handleFlatSelection }) => {
  const { name, lat, lng, priceCurrency, price, imageUrl } = flat;
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="card" style={imageStyle} onClick={ (e) => handleFlatSelection(e, lat, lng, name)}>
      <div className="card-category">
        {price}
        {priceCurrency}
      </div>
      <div className="card-description">
        {name}
      </div>
    </div>
  );
};

export default flat;