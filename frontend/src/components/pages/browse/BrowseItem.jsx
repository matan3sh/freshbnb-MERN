import React from 'react';
import { Link } from 'react-router-dom';

import { FavoriteBorderIcon, StarIcon } from 'components/icons';

const BrowseItem = ({ rental }) => {
  return (
    <Link to={`/rentals/${rental.id}`}>
      <div className='browseItem'>
        <img src={rental.image} alt='' />
        <FavoriteBorderIcon className='browseItem__heart' />
        <div className='browseItem__info'>
          <div className='browseItem__infoTop'>
            <p className='browseItem__city'>
              {rental.city}{' '}
              <span className={`browseItem__category type-${rental.category}`}>
                {rental.shared ? 'Shared ' : ''}
                {rental.category}
              </span>
            </p>

            <h3>{rental.title}</h3>
            <p>____</p>
            <p>{rental.description}</p>
          </div>
          <div className='browseItem__infoBottom'>
            <div className='browseItem__stars'>
              <StarIcon className='browseItem__star' />
              <p>
                <strong>
                  {rental.star} <span>(185)</span>
                </strong>
              </p>
            </div>
            <div className='browseItems__price'>
              <h2>
                <span>{rental.dailyPrice}$</span> / night
              </h2>
              <p>{rental.numOfRooms} Rooms Available</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrowseItem;
