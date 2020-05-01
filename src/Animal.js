import React from 'react';

export function Animal (props) {
  const {name, url, keywords, handleClick } = props;
  return <div className="animal" onClick={() => handleClick(name, keywords) }>
    <div className="image" >
    <img src={url} alt={name} />
    </div>
  </div>

}
