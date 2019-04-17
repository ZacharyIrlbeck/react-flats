import React from 'react';

const flat = ({ flat }) => {
  const { name, lat, lng, priceCurrency, price, imageUrl } = flat;
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="card" style={imageStyle}>
      <div className="card-category">
        {price}
        {priceCurrency}
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default flat;