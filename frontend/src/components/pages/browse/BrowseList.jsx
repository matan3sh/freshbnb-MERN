import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { loadRentals, clearRentals } from 'store/rentals/actions';

import { Spinner } from 'components/shared';
import BrowseItem from './BrowseItem';

const BrowseList = ({ rentals, loadRentals, location, clearRentals }) => {
  useEffect(() => {
    loadRentals(location);
    return () => {
      clearRentals();
    };
  }, [loadRentals, location, clearRentals]);

  return (
    <div className='browseList'>
      {rentals === null && <Spinner />}
      {!rentals?.length ? (
        <h1 className='no-rentals'>
          There Is No Rentals At <span>{location}</span>
        </h1>
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
  clearRentals,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseList);
