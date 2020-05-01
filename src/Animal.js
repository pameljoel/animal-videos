import React from 'react';

export function Animal (props) {
  const {name, url, keywords, handleClick, isSelected } = props;
  const isSelectedClass = isSelected ? 'animal--selected' : '';
  return <div className={`animal ${isSelectedClass}`} onClick={() => !isSelected && handleClick(name, keywords) }>
    <div className="image" >
    <img src={url} alt={name} />
    </div>
  </div>

}
