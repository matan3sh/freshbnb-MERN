import React from 'react';
import BrowseList from './BrowseList';
import { Button } from '@material-ui/core';

const Browse = () => {
  return (
    <div className='browse'>
      <div className='browse__info'>
        <p>62 stays &bull; 26 august to 30 august &bull; 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant='outlined'>Cancellation</Button>
        <Button variant='outlined'>Type Of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>More Filters</Button>
      </div>
      <BrowseList />
    </div>
  );
};

export default Browse;
