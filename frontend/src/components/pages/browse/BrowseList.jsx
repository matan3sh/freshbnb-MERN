import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { loadRentals } from 'store/rentals/actions';

import BrowseItem from './BrowseItem';

const BrowseList = ({ rentals, loadRentals, location }) => {
  useEffect(() => {
    loadRentals(location);
  }, [loadRentals, location]);
  return (
    <div className='browseList'>
      {!rentals.length ? (
        <h1 className='no-rentals'>There Is No Rentals At {location}</h1>
      ) : (
        rentals?.map((rental, index) => (
          <BrowseItem rental={rental} key={index} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rentals: state.mainApp.rentals,
});
const mapDispatchToProps = {
  loadRentals,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseList);
