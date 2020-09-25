import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRentals } from 'store/rentals/actions';

import BrowseItem from './BrowseItem';

const BrowseList = ({ rentals, loadRentals }) => {
  useEffect(() => {
    loadRentals();
  }, [loadRentals]);
  return (
    <div className='browseList'>
      {rentals?.map((rental, index) => (
        <BrowseItem rental={rental} key={index} />
      ))}
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
