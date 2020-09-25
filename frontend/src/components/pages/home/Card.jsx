import React from 'react';

const Card = ({ card }) => {
  return (
    <div className='card'>
      <img src={card.url} alt='' />
      <div className='card__info'>
        <h2>{card.title}</h2>
        <h4>{card.description}</h4>
        {card.price && <h3>{card.price}</h3>}
      </div>
    </div>
  );
};

export default Card;
