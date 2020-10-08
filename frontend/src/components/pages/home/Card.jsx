import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <Link to='/all/browse'>
      <div className='card'>
        <img src={card.url} alt='' />
        <div className='card__info'>
          <h2>{card.title}</h2>
          <h4>{card.description}</h4>
          {card.price && <h3>{card.price}</h3>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
