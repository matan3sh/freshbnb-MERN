import React, { useEffect, useState } from 'react';

import BrowseList from './BrowseList';
import { Button } from '@material-ui/core';

const Browse = ({ match }) => {
  const [searchLocation, setSearchLocation] = useState(null);

  useEffect(() => {
    const { location } = match.params;
    setSearchLocation(location);
  }, [match.params, setSearchLocation]);

  return (
    <div className='browse'>
      <div className='browse__info'>
        <h1>
          {searchLocation === 'all'
            ? 'Stays Nearby'
            : `Your Home in ${searchLocation}`}
        </h1>
        <Button variant='outlined'>Cancellation</Button>
        <Button variant='outlined'>Type Of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>Housekeeping</Button>
      </div>
      {searchLocation && <BrowseList location={searchLocation} />}
    </div>
  );
};

export default Browse;
