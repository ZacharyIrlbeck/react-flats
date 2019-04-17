import React from 'react';

const marker = ({ name }) => {
  console.log('rendering marker with', name);
  return (
    <div className="marker" />
  );
}

export default marker;