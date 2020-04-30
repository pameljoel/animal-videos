import React from 'react';

export function Animal (props) {
  const {name, url, keywords, handleClick } = props;
  return <div className="animal" onClick={() => handleClick(name, keywords) }>
    <h2>{name}</h2>
    <div className="image" >
    <img src={url} alt={name} />

    </div>
     <small>{keywords.map(keyword => keyword + " ")}</small>
  </div>

}
